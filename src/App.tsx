
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FreeTrialSignup from "./pages/FreeTrialSignup";
import ChatInterface from "./components/chat/ChatInterface";
import StudyMaterials from "./pages/dashboard/StudyMaterials";
import AITests from "./pages/dashboard/AITests";
import DoubtResolution from "./pages/dashboard/DoubtResolution";
import Analytics from "./pages/dashboard/Analytics";
import Schedule from "./pages/dashboard/Schedule";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/study-materials" element={<StudyMaterials />} />
          <Route path="/dashboard/ai-tests" element={<AITests />} />
          <Route path="/dashboard/doubt-resolution" element={<DoubtResolution />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/free-trial" element={<FreeTrialSignup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatInterface />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
