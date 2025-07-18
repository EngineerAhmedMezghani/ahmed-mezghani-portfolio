// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactForm from "./components/ContactForm"; // Import the ContactForm component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add a route for your contact form. Users can access it at /contact */}
          <Route path="/contact" element={<ContactForm />} />
          {/* If you want the ContactForm to appear on your main page (e.g., below Index content),
              you can modify the root route like this:
              <Route path="/" element={
                <>
                  <Index />
                  <div className="mt-8"> // Add some margin for separation
                    <ContactForm />
                  </div>
                </>
              } />
          */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;