let scriptLoaded = false;
let scriptLoading: Promise<void> | null = null;

const ZANJ_FORM_SCRIPT = "https://agent.zanj.ai/agent-forms.js";
const ZANJ_SB_URL = "https://lwkrxypgorvtayqxainr.supabase.co";

function ensureZanjGlobals(): void {
  const w = window as unknown as {
    SB_URL?: string;
    AG?: Record<string, unknown>;
    _lang?: string;
  };

  w.SB_URL ||= ZANJ_SB_URL;
  w._lang ||= document.documentElement.lang?.slice(0, 2) || "fr";
  w.AG ||= {
    id: "beta-international",
    org: "Beta International",
    show_contact_form: true,
    org_info: {
      website: "https://www.beta.international",
      email: "info@beta.international",
    },
  };
}

function ensureFormMarkup(): void {
  if (!document.getElementById("zanj-form-styles")) {
    const style = document.createElement("style");
    style.id = "zanj-form-styles";
    style.textContent = `
      .form-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:9998}
      .form-overlay.show{display:block}
      .form-sheet{display:none;position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:440px;background:#0f1f38;border-top:1px solid #1e3a5f;border-radius:18px 18px 0 0;z-index:9999;box-shadow:0 -8px 40px rgba(0,0,0,.6);max-height:82vh;overflow-y:auto;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      .form-sheet.open{display:block}
      .form-handle{width:36px;height:3px;background:#334155;border-radius:2px;margin:12px auto 0}
      .form-hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 18px 10px}
      .form-hdr-title{font-size:15px;font-weight:700;color:#e2e8f0}
      .form-close{background:none;border:none;color:#64748b;font-size:24px;cursor:pointer;line-height:1;padding:2px 6px}
      .form-body{padding:0 18px 28px}
      .form-field{margin-bottom:12px}
      .form-field label{display:block;font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.6px;margin-bottom:5px}
      .form-field input,.form-field textarea{width:100%;background:#0a1628;border:1px solid #1e3a5f;border-radius:10px;padding:10px 14px;color:#e2e8f0;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box}
      .form-field input:focus,.form-field textarea:focus{border-color:#3b82f6}
      .form-field textarea{resize:vertical;min-height:72px}
      .btn-main{width:100%;padding:14px;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;box-shadow:0 4px 20px #3b82f640}
      .btn-main:disabled{opacity:.65;cursor:not-allowed}
    `;
    document.head.appendChild(style);
  }

  if (document.getElementById("fContact") && document.getElementById("fOverlay")) return;

  const wrapper = document.createElement("div");
  wrapper.id = "zanj-form-root";
  wrapper.innerHTML = `
    <div class="form-overlay" id="fOverlay" onclick="window._closeForms && window._closeForms()"></div>
    <div class="form-sheet" id="fContact">
      <div class="form-handle"></div>
      <div class="form-hdr">
        <div class="form-hdr-title">✉ Nous contacter</div>
        <button class="form-close" type="button" onclick="window._closeForms && window._closeForms()">×</button>
      </div>
      <div class="form-body">
        <div id="fOrgInfo" style="margin-bottom:14px"></div>
        <div class="form-field"><label>Nom *</label><input id="fc_name" placeholder="Votre nom complet"></div>
        <div class="form-field"><label>Téléphone</label><input id="fc_phone" type="tel" placeholder="+1 514 545 1030" value="+1 514 545 1030"></div>
        <div class="form-field"><label>Courriel *</label><input id="fc_email" type="email" placeholder="vous@email.com"></div>
        <div class="form-field"><label>Message</label><textarea id="fc_msg" placeholder="Comment pouvons-nous vous aider?"></textarea></div>
        <div class="form-field" id="fc_captcha_wrap">
          <label id="fc_captcha_lbl">Vérification *</label>
          <div style="display:flex;align-items:center;gap:10px">
            <span id="fc_captcha_q" style="font-size:14px;font-weight:600;color:#93c5fd;min-width:80px"></span>
            <input id="fc_captcha_a" type="number" placeholder="?" style="width:80px" min="0" max="99">
          </div>
        </div>
        <div id="fc_result" style="display:none;padding:10px 12px;border-radius:8px;margin-bottom:10px;font-size:13px"></div>
        <button class="btn-main" id="fc_btn" type="button" onclick="window._submitContact && window._submitContact()">Envoyer →</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);
}

function loadScript(): Promise<void> {
  if (typeof (window as unknown as { _openForm?: unknown })._openForm === "function") {
    scriptLoaded = true;
    return Promise.resolve();
  }
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading) return scriptLoading;
  scriptLoading = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = ZANJ_FORM_SCRIPT;
    s.async = true;
    s.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    s.onerror = () => reject(new Error("Failed to load zanj agent-forms script"));
    document.head.appendChild(s);
  });
  return scriptLoading;
}

export async function openZanjForm(formId: string = "contact"): Promise<void> {
  try {
    ensureZanjGlobals();
    ensureFormMarkup();
    await loadScript();
    ensureFormMarkup();
    const opener = (window as unknown as { _openForm?: (id: string) => void })._openForm;
    if (typeof opener === "function") {
      opener(formId);
    } else {
      console.warn("_openForm is not available on window after script load.");
    }
  } catch (err) {
    console.error(err);
  }
}