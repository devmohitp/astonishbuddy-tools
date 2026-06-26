"use client";

import { useEffect, useState } from "react";

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

    // Fallback: load after 4 seconds if no interaction
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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3280584684265213"
        crossOrigin="anonymous"
      />
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E2KTZ2878L"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E2KTZ2878L');
          `,
        }}
      />
    </>
  );
}
