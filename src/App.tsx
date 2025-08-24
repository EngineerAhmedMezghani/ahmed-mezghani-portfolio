// src/App.tsx
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactForm from "./components/ContactForm"; // Import the ContactForm component

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // 🔹 Chatbase configuration
    (window as any).chatbaseConfig = {
      chatbotId: "E_FyKEP9q2nmq-f5MZ6xE", // Your Chatbase bot ID
    };

    // 🔹 Only inject script once
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []); // empty dependency → runs once on mount

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main page */}
            <Route path="/" element={<Index />} />
            {/* Contact page */}
            <Route path="/contact" element={<ContactForm />} />
            {/* Catch-all 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
