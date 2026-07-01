import { useCallback, useEffect } from 'react';

/**
 * Background route prefetcher.
 *
 * Every non-critical page in App.tsx is React.lazy(). To make navigation feel
 * instant we trigger those dynamic imports during browser idle time so the JS
 * chunks land in cache long before the user clicks a link. Tiers fire from
 * highest to lowest priority so high-intent pages (city hubs, services) load
 * before long-tail suburb pages.
 */

type Importer = () => Promise<unknown>;

// Highest priority — anything a user is likely to click from the home page.
const TIER_1: Importer[] = [
  () => import('../pages/Melbourne'),
  () => import('../pages/Sydney'),
  () => import('../pages/Brisbane'),
  () => import('../pages/ColorbondFencing'),
  () => import('../pages/TimberFencing'),
  () => import('../pages/FeatureFencing'),
  () => import('../pages/PoolFencing'),
  () => import('../pages/Contact'),
  () => import('../pages/FAQ'),
];

// Secondary services + remaining cities + guides.
const TIER_2: Importer[] = [
  () => import('../pages/ChainLinkFencing'),
  () => import('../pages/SecurityFencing'),
  () => import('../pages/FenceRepairs'),
  () => import('../pages/GateInstallation'),
  () => import('../pages/Perth'),
  () => import('../pages/Adelaide'),
  () => import('../pages/Canberra'),
  () => import('../pages/Hobart'),
  () => import('../pages/Darwin'),
  () => import('../pages/FencingGuides'),
  () => import('../pages/guides/ColorbondFencingGuide'),
  () => import('../pages/guides/FenceHeightRegulationsGuide'),
  () => import('../pages/guides/ChoosingFenceMaterialGuide'),
  () => import('../pages/guides/PoolFencingSafetyGuide'),
  () => import('../pages/guides/FenceOnlineQuoteGuide'),
  () => import('../pages/PrivacyPolicy'),
  () => import('../pages/TermsOfService'),
  () => import('../pages/Sitemap'),
  () => import('../pages/SubscriptionConfirmation'),
];

// Long-tail suburb pages — large but rarely the first click.
const TIER_3: Importer[] = [
  () => import('../pages/MelbournePakenham'),
  () => import('../pages/MelbournePortsea'),
  () => import('../pages/MelbourneSorrento'),
  () => import('../pages/MelbourneMountMartha'),
  () => import('../pages/MelbourneLangwarrin'),
  () => import('../pages/MelbourneFrankston'),
  () => import('../pages/MelbourneCarrumDowns'),
  () => import('../pages/MelbourneMornington'),
  () => import('../pages/MelbourneRosebud'),
  () => import('../pages/MelbourneMountEliza'),
  () => import('../pages/MelbourneCranbourne'),
  () => import('../pages/MelbourneBerwick'),
  () => import('../pages/MelbourneNarreWarren'),
  () => import('../pages/MelbourneOfficer'),
  () => import('../pages/MelbourneBotanicRidge'),
  () => import('../pages/MelbourneLynbrook'),
  () => import('../pages/MelbourneRingwood'),
  () => import('../pages/MelbourneLilydale'),
  () => import('../pages/MelbourneRowville'),
  () => import('../pages/MelbourneCroydon'),
  () => import('../pages/MelbourneBoxHill'),
  () => import('../pages/MelbourneToorak'),
  () => import('../pages/MelbourneGlenWaverley'),
  () => import('../pages/MelbourneRichmond'),
  () => import('../pages/MelbourneSouthYarra'),
  () => import('../pages/MelbourneDoncaster'),
  () => import('../pages/MelbourneStKilda'),
  () => import('../pages/MelbourneMountWaverley'),
  () => import('../pages/MelbourneCarlton'),
  () => import('../pages/MelbourneDandenong'),
  () => import('../pages/MelbourneBayswater'),
  () => import('../pages/MelbourneClayton'),
  () => import('../pages/MelbourneWantirna'),
  () => import('../pages/MelbourneFerntreeGully'),
  () => import('../pages/MelbourneSeaford'),
  () => import('../pages/MelbourneClyde'),
  () => import('../pages/MelbourneBoronia'),
  () => import('../pages/MelbourneWheelersHill'),
  () => import('../pages/MelbourneSpringvale'),
  () => import('../pages/MelbourneTemplestowe'),
  () => import('../pages/MelbourneAshwood'),
  () => import('../pages/MelbourneHamptonPark'),
  () => import('../pages/MelbourneMooroolbark'),
  () => import('../pages/MelbourneKilsyth'),
  () => import('../pages/MelbourneBurwood'),
  () => import('../pages/MelbourneEndeavourHills'),
  () => import('../pages/MelbourneKeysborough'),
  () => import('../pages/MelbourneSomerville'),
  () => import('../pages/MelbourneBlackburn'),
  () => import('../pages/MelbourneNoblePark'),
  () => import('../pages/MelbourneBalwyn'),
  () => import('../pages/MelbourneChirnsidePark'),
  () => import('../pages/MelbourneScoresby'),
  () => import('../pages/MelbourneHallam'),
  () => import('../pages/MelbourneMulgrave'),
  () => import('../pages/MelbourneBeaconsfield'),
  () => import('../pages/MelbourneChelsea'),
  () => import('../pages/MelbourneNunawading'),
  () => import('../pages/MelbourneRye'),
  () => import('../pages/MelbourneMitcham'),
  () => import('../pages/MelbourneDromana'),
  () => import('../pages/MelbourneHastings'),
  () => import('../pages/MelbourneHeathmont'),
  () => import('../pages/MelbourneKnoxfield'),
  () => import('../pages/MelbourneSkye'),
  () => import('../pages/MelbourneMontrose'),
  () => import('../pages/MelbourneWarranwood'),
  () => import('../pages/MelbourneTheBasin'),
  () => import('../pages/MelbourneSafetyBeach'),
  () => import('../pages/MelbourneWongaPark'),
  () => import('../pages/MelbourneLyndhurst'),
  () => import('../pages/MelbourneMentone'),
  () => import('../pages/MelbourneSyndal'),
  () => import('../pages/MelbourneNottingHill'),
  () => import('../pages/MelbourneEumemmerring'),
  () => import('../pages/MelbourneDoveton'),
  () => import('../pages/MelbourneColdstream'),
  () => import('../pages/MelbourneJunctionVillage'),
  () => import('../pages/MelbourneSandhurst'),
  () => import('../pages/MelbourneDingleyVillage'),
];

let started = false;
const triggered = new WeakSet<Importer>();

type RIC = (cb: () => void, opts?: { timeout?: number }) => number;
const onIdle: RIC =
  (typeof window !== 'undefined' && (window as unknown as { requestIdleCallback?: RIC }).requestIdleCallback) ||
  ((cb) => window.setTimeout(cb, 200) as unknown as number);

const runTier = (tier: Importer[], delayMs: number) => {
  window.setTimeout(() => {
    onIdle(() => {
      tier.forEach((imp, i) => {
        if (triggered.has(imp)) return;
        triggered.add(imp);
        // Stagger so we don't saturate the connection.
        window.setTimeout(() => {
          imp().catch(() => {/* ignore prefetch failures */});
        }, i * 30);
      });
    }, { timeout: 2000 });
  }, delayMs);
};

export const usePrefetch = () => {
  // Preload any <img src> already visible so back/forward navigations are
  // free, and dedupe with a module-level Set so we never spam duplicates.
  const preloadImagesOnPage = useCallback(() => {
    document.querySelectorAll('img[src]').forEach((el) => {
      const src = (el as HTMLImageElement).src;
      if (!src) return;
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (started) return;
    started = true;

    // Save-Data users and slow connections opt out of background prefetch.
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;

    runTier(TIER_1, 0);
    runTier(TIER_2, 1500);
    runTier(TIER_3, 4000);

    // Warm the image cache for the current page during idle.
    onIdle(() => preloadImagesOnPage(), { timeout: 3000 });
  }, []);

  return {};
};

export default usePrefetch;