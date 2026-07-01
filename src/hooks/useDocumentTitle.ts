import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to set document title that properly updates on SPA navigation.
 * Re-applies the title whenever the pathname changes, ensuring the
 * browser tab title always matches the current page.
 */
export function useDocumentTitle(title: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title, pathname]);
}
