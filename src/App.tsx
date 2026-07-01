import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import usePrefetch from "./hooks/usePrefetch";
// Eager-load critical routes that should be instantly interactive.
// Index = LCP/home. Quote = highest-converting funnel; never lazy.
import Index from "./pages/Index";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

// All other routes are code-split and prefetched in the background on idle
// via the routePrefetchers map below + usePrefetch().
const ColorbondFencing = lazy(() => import("./pages/ColorbondFencing"));
const TimberFencing = lazy(() => import("./pages/TimberFencing"));
const FeatureFencing = lazy(() => import("./pages/FeatureFencing"));
const ChainLinkFencing = lazy(() => import("./pages/ChainLinkFencing"));
const SecurityFencing = lazy(() => import("./pages/SecurityFencing"));
const PoolFencing = lazy(() => import("./pages/PoolFencing"));
const FenceRepairs = lazy(() => import("./pages/FenceRepairs"));
const GateInstallation = lazy(() => import("./pages/GateInstallation"));
const Sydney = lazy(() => import("./pages/Sydney"));
const Melbourne = lazy(() => import("./pages/Melbourne"));
const Brisbane = lazy(() => import("./pages/Brisbane"));
const Perth = lazy(() => import("./pages/Perth"));
const Adelaide = lazy(() => import("./pages/Adelaide"));
const Canberra = lazy(() => import("./pages/Canberra"));
const Hobart = lazy(() => import("./pages/Hobart"));
const Darwin = lazy(() => import("./pages/Darwin"));
const FencingGuides = lazy(() => import("./pages/FencingGuides"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const SubscriptionConfirmation = lazy(() => import("./pages/SubscriptionConfirmation"));
const MelbournePakenham = lazy(() => import("./pages/MelbournePakenham"));
const MelbournePortsea = lazy(() => import("./pages/MelbournePortsea"));
const MelbourneSorrento = lazy(() => import("./pages/MelbourneSorrento"));
const MelbourneMountMartha = lazy(() => import("./pages/MelbourneMountMartha"));
const MelbourneLangwarrin = lazy(() => import("./pages/MelbourneLangwarrin"));
const MelbourneFrankston = lazy(() => import("./pages/MelbourneFrankston"));
const MelbourneCarrumDowns = lazy(() => import("./pages/MelbourneCarrumDowns"));
const MelbourneMornington = lazy(() => import("./pages/MelbourneMornington"));
const MelbourneRosebud = lazy(() => import("./pages/MelbourneRosebud"));
const MelbourneMountEliza = lazy(() => import("./pages/MelbourneMountEliza"));
const MelbourneCranbourne = lazy(() => import("./pages/MelbourneCranbourne"));
const MelbourneBerwick = lazy(() => import("./pages/MelbourneBerwick"));
const MelbourneNarreWarren = lazy(() => import("./pages/MelbourneNarreWarren"));
const MelbourneOfficer = lazy(() => import("./pages/MelbourneOfficer"));
const MelbourneBotanicRidge = lazy(() => import("./pages/MelbourneBotanicRidge"));
const MelbourneLynbrook = lazy(() => import("./pages/MelbourneLynbrook"));
const MelbourneRingwood = lazy(() => import("./pages/MelbourneRingwood"));
const MelbourneLilydale = lazy(() => import("./pages/MelbourneLilydale"));
const MelbourneRowville = lazy(() => import("./pages/MelbourneRowville"));
const MelbourneCroydon = lazy(() => import("./pages/MelbourneCroydon"));
const MelbourneBoxHill = lazy(() => import("./pages/MelbourneBoxHill"));
const MelbourneToorak = lazy(() => import("./pages/MelbourneToorak"));
const MelbourneGlenWaverley = lazy(() => import("./pages/MelbourneGlenWaverley"));
const MelbourneRichmond = lazy(() => import("./pages/MelbourneRichmond"));
const MelbourneSouthYarra = lazy(() => import("./pages/MelbourneSouthYarra"));
const MelbourneDoncaster = lazy(() => import("./pages/MelbourneDoncaster"));
const MelbourneStKilda = lazy(() => import("./pages/MelbourneStKilda"));
const MelbourneMountWaverley = lazy(() => import("./pages/MelbourneMountWaverley"));
const MelbourneCarlton = lazy(() => import("./pages/MelbourneCarlton"));
const MelbourneDandenong = lazy(() => import("./pages/MelbourneDandenong"));
const MelbourneBayswater = lazy(() => import("./pages/MelbourneBayswater"));
const MelbourneClayton = lazy(() => import("./pages/MelbourneClayton"));
const MelbourneWantirna = lazy(() => import("./pages/MelbourneWantirna"));
const MelbourneFerntreeGully = lazy(() => import("./pages/MelbourneFerntreeGully"));
const MelbourneSeaford = lazy(() => import("./pages/MelbourneSeaford"));
const MelbourneClyde = lazy(() => import("./pages/MelbourneClyde"));
const MelbourneBoronia = lazy(() => import("./pages/MelbourneBoronia"));
const MelbourneWheelersHill = lazy(() => import("./pages/MelbourneWheelersHill"));
const MelbourneSpringvale = lazy(() => import("./pages/MelbourneSpringvale"));
const MelbourneTemplestowe = lazy(() => import("./pages/MelbourneTemplestowe"));
const MelbourneAshwood = lazy(() => import("./pages/MelbourneAshwood"));
const MelbourneHamptonPark = lazy(() => import("./pages/MelbourneHamptonPark"));
const MelbourneMooroolbark = lazy(() => import("./pages/MelbourneMooroolbark"));
const MelbourneKilsyth = lazy(() => import("./pages/MelbourneKilsyth"));
const MelbourneBurwood = lazy(() => import("./pages/MelbourneBurwood"));
const MelbourneEndeavourHills = lazy(() => import("./pages/MelbourneEndeavourHills"));
const MelbourneKeysborough = lazy(() => import("./pages/MelbourneKeysborough"));
const MelbourneSomerville = lazy(() => import("./pages/MelbourneSomerville"));
const MelbourneBlackburn = lazy(() => import("./pages/MelbourneBlackburn"));
const MelbourneNoblePark = lazy(() => import("./pages/MelbourneNoblePark"));
const MelbourneBalwyn = lazy(() => import("./pages/MelbourneBalwyn"));
const MelbourneChirnsidePark = lazy(() => import("./pages/MelbourneChirnsidePark"));
const MelbourneScoresby = lazy(() => import("./pages/MelbourneScoresby"));
const MelbourneHallam = lazy(() => import("./pages/MelbourneHallam"));
const MelbourneMulgrave = lazy(() => import("./pages/MelbourneMulgrave"));
const MelbourneBeaconsfield = lazy(() => import("./pages/MelbourneBeaconsfield"));
const MelbourneChelsea = lazy(() => import("./pages/MelbourneChelsea"));
const MelbourneNunawading = lazy(() => import("./pages/MelbourneNunawading"));
const MelbourneRye = lazy(() => import("./pages/MelbourneRye"));
const MelbourneMitcham = lazy(() => import("./pages/MelbourneMitcham"));
const MelbourneDromana = lazy(() => import("./pages/MelbourneDromana"));
const MelbourneHastings = lazy(() => import("./pages/MelbourneHastings"));
const MelbourneHeathmont = lazy(() => import("./pages/MelbourneHeathmont"));
const MelbourneKnoxfield = lazy(() => import("./pages/MelbourneKnoxfield"));
const MelbourneSkye = lazy(() => import("./pages/MelbourneSkye"));
const MelbourneMontrose = lazy(() => import("./pages/MelbourneMontrose"));
const MelbourneWarranwood = lazy(() => import("./pages/MelbourneWarranwood"));
const MelbourneTheBasin = lazy(() => import("./pages/MelbourneTheBasin"));
const MelbourneSafetyBeach = lazy(() => import("./pages/MelbourneSafetyBeach"));
const MelbourneWongaPark = lazy(() => import("./pages/MelbourneWongaPark"));
const MelbourneLyndhurst = lazy(() => import("./pages/MelbourneLyndhurst"));
const MelbourneMentone = lazy(() => import("./pages/MelbourneMentone"));
const MelbourneSyndal = lazy(() => import("./pages/MelbourneSyndal"));
const MelbourneNottingHill = lazy(() => import("./pages/MelbourneNottingHill"));
const MelbourneEumemmerring = lazy(() => import("./pages/MelbourneEumemmerring"));
const MelbourneDoveton = lazy(() => import("./pages/MelbourneDoveton"));
const MelbourneColdstream = lazy(() => import("./pages/MelbourneColdstream"));
const MelbourneJunctionVillage = lazy(() => import("./pages/MelbourneJunctionVillage"));
const MelbourneSandhurst = lazy(() => import("./pages/MelbourneSandhurst"));
const MelbourneDingleyVillage = lazy(() => import("./pages/MelbourneDingleyVillage"));
const ColorbondFencingGuide = lazy(() => import("./pages/guides/ColorbondFencingGuide"));
const FenceHeightRegulationsGuide = lazy(() => import("./pages/guides/FenceHeightRegulationsGuide"));
const ChoosingFenceMaterialGuide = lazy(() => import("./pages/guides/ChoosingFenceMaterialGuide"));
const PoolFencingSafetyGuide = lazy(() => import("./pages/guides/PoolFencingSafetyGuide"));
const FenceOnlineQuoteGuide = lazy(() => import("./pages/guides/FenceOnlineQuoteGuide"));

const queryClient = new QueryClient();

// Prefetch wrapper component
const PrefetchProvider = ({ children }: { children: React.ReactNode }) => {
  usePrefetch();
  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    // Prevent image dragging
    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "IMG") e.preventDefault();
    };

    document.addEventListener("dragstart", onDragStart);
    
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed silently
      });
    }
    
    return () => document.removeEventListener("dragstart", onDragStart);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PrefetchProvider>
            <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden />}> 
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/composite-decking" element={<ColorbondFencing />} />
              <Route path="/timber-decking" element={<TimberFencing />} />
              <Route path="/feature-decking" element={<FeatureFencing />} />
              <Route path="/deck-replacement" element={<ChainLinkFencing />} />
              <Route path="/commercial-decking" element={<SecurityFencing />} />
              <Route path="/pool-decking" element={<PoolFencing />} />
              <Route path="/deck-repairs" element={<FenceRepairs />} />
              <Route path="/deck-pergola-combo" element={<GateInstallation />} />
              <Route path="/sydney" element={<Sydney />} />
              <Route path="/melbourne" element={<Melbourne />} />
              <Route path="/vic/pakenham-decking" element={<MelbournePakenham />} />
              <Route path="/vic/portsea-decking" element={<MelbournePortsea />} />
              <Route path="/vic/sorrento-decking" element={<MelbourneSorrento />} />
              <Route path="/vic/mount-martha-decking" element={<MelbourneMountMartha />} />
              <Route path="/vic/langwarrin-decking" element={<MelbourneLangwarrin />} />
              <Route path="/vic/frankston-decking" element={<MelbourneFrankston />} />
              <Route path="/vic/carrum-downs-decking" element={<MelbourneCarrumDowns />} />
              <Route path="/vic/mornington-decking" element={<MelbourneMornington />} />
              <Route path="/vic/rosebud-decking" element={<MelbourneRosebud />} />
              <Route path="/vic/mount-eliza-decking" element={<MelbourneMountEliza />} />
              <Route path="/vic/cranbourne-decking" element={<MelbourneCranbourne />} />
              <Route path="/vic/berwick-decking" element={<MelbourneBerwick />} />
              <Route path="/vic/narre-warren-decking" element={<MelbourneNarreWarren />} />
              <Route path="/vic/officer-decking" element={<MelbourneOfficer />} />
              <Route path="/vic/botanic-ridge-decking" element={<MelbourneBotanicRidge />} />
              <Route path="/vic/lynbrook-decking" element={<MelbourneLynbrook />} />
              <Route path="/vic/ringwood-decking" element={<MelbourneRingwood />} />
              <Route path="/vic/lilydale-decking" element={<MelbourneLilydale />} />
              <Route path="/vic/rowville-decking" element={<MelbourneRowville />} />
              <Route path="/vic/croydon-decking" element={<MelbourneCroydon />} />
              <Route path="/vic/box-hill-decking" element={<MelbourneBoxHill />} />
              <Route path="/vic/toorak-decking" element={<MelbourneToorak />} />
              <Route path="/vic/glen-waverley-decking" element={<MelbourneGlenWaverley />} />
              <Route path="/vic/richmond-decking" element={<MelbourneRichmond />} />
              <Route path="/vic/south-yarra-decking" element={<MelbourneSouthYarra />} />
              <Route path="/vic/doncaster-decking" element={<MelbourneDoncaster />} />
              <Route path="/vic/st-kilda-decking" element={<MelbourneStKilda />} />
              <Route path="/vic/mount-waverley-decking" element={<MelbourneMountWaverley />} />
              <Route path="/vic/carlton-decking" element={<MelbourneCarlton />} />
              <Route path="/vic/dandenong-decking" element={<MelbourneDandenong />} />
              {/* New suburb routes */}
              <Route path="/vic/bayswater-decking" element={<MelbourneBayswater />} />
              <Route path="/vic/clayton-decking" element={<MelbourneClayton />} />
              <Route path="/vic/wantirna-decking" element={<MelbourneWantirna />} />
              <Route path="/vic/ferntree-gully-decking" element={<MelbourneFerntreeGully />} />
              <Route path="/vic/seaford-decking" element={<MelbourneSeaford />} />
              <Route path="/vic/clyde-decking" element={<MelbourneClyde />} />
              <Route path="/vic/boronia-decking" element={<MelbourneBoronia />} />
              <Route path="/vic/wheelers-hill-decking" element={<MelbourneWheelersHill />} />
              <Route path="/vic/springvale-decking" element={<MelbourneSpringvale />} />
              <Route path="/vic/templestowe-decking" element={<MelbourneTemplestowe />} />
              <Route path="/vic/ashwood-decking" element={<MelbourneAshwood />} />
              <Route path="/vic/hampton-park-decking" element={<MelbourneHamptonPark />} />
              <Route path="/vic/mooroolbark-decking" element={<MelbourneMooroolbark />} />
              <Route path="/vic/kilsyth-decking" element={<MelbourneKilsyth />} />
              <Route path="/vic/burwood-decking" element={<MelbourneBurwood />} />
              <Route path="/vic/endeavour-hills-decking" element={<MelbourneEndeavourHills />} />
              <Route path="/vic/keysborough-decking" element={<MelbourneKeysborough />} />
              <Route path="/vic/somerville-decking" element={<MelbourneSomerville />} />
              <Route path="/vic/blackburn-decking" element={<MelbourneBlackburn />} />
              <Route path="/vic/noble-park-decking" element={<MelbourneNoblePark />} />
              <Route path="/vic/balwyn-decking" element={<MelbourneBalwyn />} />
              <Route path="/vic/chirnside-park-decking" element={<MelbourneChirnsidePark />} />
              <Route path="/vic/scoresby-decking" element={<MelbourneScoresby />} />
              <Route path="/vic/hallam-decking" element={<MelbourneHallam />} />
              <Route path="/vic/mulgrave-decking" element={<MelbourneMulgrave />} />
              <Route path="/vic/beaconsfield-decking" element={<MelbourneBeaconsfield />} />
              <Route path="/vic/chelsea-decking" element={<MelbourneChelsea />} />
              <Route path="/vic/nunawading-decking" element={<MelbourneNunawading />} />
              <Route path="/vic/rye-decking" element={<MelbourneRye />} />
              <Route path="/vic/mitcham-decking" element={<MelbourneMitcham />} />
              <Route path="/vic/dromana-decking" element={<MelbourneDromana />} />
              <Route path="/vic/hastings-decking" element={<MelbourneHastings />} />
              <Route path="/vic/heathmont-decking" element={<MelbourneHeathmont />} />
              <Route path="/vic/knoxfield-decking" element={<MelbourneKnoxfield />} />
              <Route path="/vic/skye-decking" element={<MelbourneSkye />} />
              <Route path="/vic/montrose-decking" element={<MelbourneMontrose />} />
              <Route path="/vic/warranwood-decking" element={<MelbourneWarranwood />} />
              <Route path="/vic/the-basin-decking" element={<MelbourneTheBasin />} />
              <Route path="/vic/safety-beach-decking" element={<MelbourneSafetyBeach />} />
              <Route path="/vic/wonga-park-decking" element={<MelbourneWongaPark />} />
              <Route path="/vic/lyndhurst-decking" element={<MelbourneLyndhurst />} />
              <Route path="/vic/mentone-decking" element={<MelbourneMentone />} />
              <Route path="/vic/syndal-decking" element={<MelbourneSyndal />} />
              <Route path="/vic/notting-hill-decking" element={<MelbourneNottingHill />} />
              <Route path="/vic/eumemmerring-decking" element={<MelbourneEumemmerring />} />
              <Route path="/vic/doveton-decking" element={<MelbourneDoveton />} />
              <Route path="/vic/coldstream-decking" element={<MelbourneColdstream />} />
              <Route path="/vic/junction-village-decking" element={<MelbourneJunctionVillage />} />
              <Route path="/vic/sandhurst-decking" element={<MelbourneSandhurst />} />
              <Route path="/vic/dingley-village-decking" element={<MelbourneDingleyVillage />} />
              <Route path="/brisbane" element={<Brisbane />} />
              <Route path="/perth" element={<Perth />} />
              <Route path="/adelaide" element={<Adelaide />} />
              <Route path="/canberra" element={<Canberra />} />
              <Route path="/hobart" element={<Hobart />} />
              <Route path="/darwin" element={<Darwin />} />
              <Route path="/decking-guides" element={<FencingGuides />} />
              <Route path="/guide/complete-guide-to-composite-decking" element={<ColorbondFencingGuide />} />
              <Route path="/guide/deck-regulations-by-state" element={<FenceHeightRegulationsGuide />} />
              <Route path="/guide/choosing-the-right-decking-material" element={<ChoosingFenceMaterialGuide />} />
              <Route path="/guide/pool-decking-safety-guide" element={<PoolFencingSafetyGuide />} />
              <Route path="/guide/deck-online-quote-guide" element={<FenceOnlineQuoteGuide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/subscription-confirmed" element={<SubscriptionConfirmation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </PrefetchProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;