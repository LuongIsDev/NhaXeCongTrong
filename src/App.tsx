import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// ✅ Đổi BrowserRouter thành HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* ✅ Dùng HashRouter để tránh lỗi trắng màn hình trên GitHub Pages */}
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Catch-all route cho 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
