let scriptLoaded = false;
let scriptLoading: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading) return scriptLoading;
  scriptLoading = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://agent.zanj.ai/agent-forms.js";
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
    await loadScript();
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