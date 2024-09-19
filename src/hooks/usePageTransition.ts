// hooks/usePageTransition.ts
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export function usePageTransition() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);
    const handleRouteChangeError = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  useEffect(() => {
    if (isLoading) {
      gsap.to("body", { opacity: 0, duration: 0.5 });
    } else {
      gsap.to("body", { opacity: 1, duration: 0.5 });
    }
  }, [isLoading]);

  return { isLoading };
}
