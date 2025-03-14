
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HeritageOnWheels from "./pages/HeritageOnWheels";
import CinematicBridges from "./pages/CinematicBridges";
import NorthEastConnect from "./pages/NorthEastConnect";
import YouthPower from "./pages/YouthPower";
import OrangeEconomy from "./pages/OrangeEconomy";
import VoicesOfLand from "./pages/VoicesOfLand";
import FutureFestivals from "./pages/FutureFestivals";
import BHJewellery from "./pages/BHJewellery";
import GlobalFilmFestival from "./pages/GlobalFilmFestival";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/heritage-on-wheels" element={<HeritageOnWheels />} />
          <Route path="/cinematic-bridges" element={<CinematicBridges />} />
          <Route path="/ne-connect" element={<NorthEastConnect />} />
          <Route path="/youth-power" element={<YouthPower />} />
          <Route path="/orange-economy" element={<OrangeEconomy />} />
          <Route path="/voices-of-land" element={<VoicesOfLand />} />
          <Route path="/future-festivals" element={<FutureFestivals />} />
          <Route path="/bh-jewellery" element={<BHJewellery />} />
          <Route path="/global-film-festival" element={<GlobalFilmFestival />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
