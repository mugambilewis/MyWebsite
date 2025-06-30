import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ProjectsSection } from "./components/ProjectsSection";
import GraphicsShowcase from '/src/projects/GraphicsShowcase.jsx';

const queryClient = new QueryClient();

const App = () => (
  <>
    <SpeedInsights
      projectId="1f0b2c3d-4e5f-6789-abcd-ef0123456789"
      token="your-vercel-speed-insights-token"
      className="fixed bottom-4 right-4 z-50"
    />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/projects/GraphicsShowcase" element={<GraphicsShowcase />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
