"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const loadScripts = () => {
      setShouldLoad(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchmove", loadScripts);
      window.removeEventListener("keydown", loadScripts);
    };

    window.addEventListener("pointerdown", loadScripts, { passive: true });
    window.addEventListener("mousemove", loadScripts, { passive: true });
    window.addEventListener("scroll", loadScripts, { passive: true });
    window.addEventListener("touchmove", loadScripts, { passive: true });
    window.addEventListener("keydown", loadScripts, { passive: true });

    // Fallback: Load after 4 seconds
    const timeout = setTimeout(loadScripts, 4000);

    return () => {
      cleanup();
      clearTimeout(timeout);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Google Adsense */}
      <Script
        id="adsense"
        strategy="afterInteractive"
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3280584684265213"
      />

      {/* Google Analytics */}
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-E2KTZ2878L"
      />

      <Script
        id="gtag-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());

          gtag('config', 'G-E2KTZ2878L', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}