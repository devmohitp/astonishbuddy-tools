"use client";

import CookieBanner from "./CookieBanner";

/**
 * ThirdPartyScripts manages third-party services, analytics, and consent.
 * NOTE: As per Google AdSense policies and privacy regulations (GDPR/ePrivacy/CCPA),
 * no advertising scripts or trackers load before user consent is obtained.
 */
export default function ThirdPartyScripts() {
  return <CookieBanner />;
}