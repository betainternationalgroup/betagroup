import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Compliance from "./pages/Compliance.tsx";
import NotFound from "./pages/NotFound.tsx";
import ToolIframe from "./pages/ToolIframe.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conformite" element={<Compliance />} />
          <Route
            path="/outils/calculateur"
            element={
              <ToolIframe
                src="https://www.beta.international/calculator/"
                titleFr="Calculateur ROI"
                titleEn="ROI Calculator"
              />
            }
          />
          <Route
            path="/outils/audit"
            element={
              <ToolIframe
                src="https://beta-audit.lovable.app"
                titleFr="Audit de données"
                titleEn="Data Audit"
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
