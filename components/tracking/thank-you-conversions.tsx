"use client";

import { useEffect, useRef } from "react";

import { loadTrackingSurface } from "@/data/tracking-config";
import { emitVerifiedLeadConversion } from "@/lib/tracking/dispatch";

/** One truthful pulse per server-issued acknowledgement id (`rid`) — supports multiple enquiries per browser session */
export function ThankYouVerifiedLeadPulse({
  conversion,
  requestId,
}: {
  conversion?: string;
  requestId?: string;
}) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (conversion !== "lead" || !requestId?.trim()) return;
    if (firedRef.current) return;
    if (typeof sessionStorage === "undefined") return;

    const key = `lux_lead_rid_${requestId}`;
    if (sessionStorage.getItem(key) === "1") return;

    firedRef.current = true;
    sessionStorage.setItem(key, "1");

    const surface = loadTrackingSurface();
    emitVerifiedLeadConversion(surface);
  }, [conversion, requestId]);

  return null;
}
