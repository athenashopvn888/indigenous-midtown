"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FlowerBogoStrip from "./FlowerBogoStrip";

function isThanksgivingNoticeActive(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dateKey = Number(`${value.year}${value.month}${value.day}`);

  return dateKey >= 20260930 && dateKey <= 20261012;
}

export default function FleetAnnouncementBanner() {
  const announcementRef = useRef<HTMLElement>(null);
  const [navClearance, setNavClearance] = useState<number | null>(null);
  const [showThanksgivingNotice, setShowThanksgivingNotice] = useState(false);

  useEffect(() => {
    const updateVisibility = () =>
      setShowThanksgivingNotice(isThanksgivingNoticeActive(new Date()));

    updateVisibility();
    const timer = window.setInterval(updateVisibility, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const announcement = announcementRef.current;
    const nav = document.getElementById("main-nav");
    if (!announcement || !nav) return;

    let frame = 0;
    const updateClearance = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const currentMargin = Number.parseFloat(
          window.getComputedStyle(announcement).marginTop,
        );
        const flowTop =
          announcement.getBoundingClientRect().top - (currentMargin || 0);
        const nextClearance = Math.max(
          0,
          Math.ceil(nav.getBoundingClientRect().bottom - flowTop),
        );
        setNavClearance((current) =>
          current === nextClearance ? current : nextClearance,
        );
      });
    };

    updateClearance();
    const resizeObserver = new ResizeObserver(updateClearance);
    resizeObserver.observe(nav);
    window.addEventListener("resize", updateClearance);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateClearance);
    };
  }, []);

  return (
    <aside
      ref={announcementRef}
      data-fleet-homepage-announcement=""
      aria-label="Store announcements"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        minHeight: 0,
        marginTop: navClearance === null ? undefined : navClearance,
        position: "relative",
        zIndex: 50,
      }}
    >
      {showThanksgivingNotice ? (
        <p data-thanksgiving-hours-notice="">
          Thanksgiving Monday (Oct 12): We are open regular hours.
        </p>
      ) : null}
      <FlowerBogoStrip hero />
      <Link href="/exotic-weed" data-exotic-tier-banner="" aria-label="Shop Exotic, Premium and AAA+ flower tiers">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/top-weed-tier-imc01.webp" alt="TOP WEED TIER — Exotic, Premium and AAA+ flower at Indigenous Midtown Cannabis — Buy 2g Get 1g FREE and Buy 3g Get 3g FREE." />
      </Link>
      <p data-cigarette-deal="">
        CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH
      </p>
      <p data-bb-light-deal="">
        EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL, BB LIGHT &amp; BELMONT KING SIZE!
      </p>
      <Link href="/items/cigarettes" data-cig-mix-banner="" aria-label="Shop cigarette mix and match offers">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/2pack5cig.webp" alt="Cigarette deal at Indigenous Midtown Cannabis — 2 packs for $5 mix and match, cartons $25." />
      </Link>
      <Link href="/items/cigarettes" data-belmont-premium-banner="" aria-label="Shop BB and Belmont Premium Grade cigarettes">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banners/BB_Belmont_Premium_Grade.webp"
          alt="Exclusive Premium Grade BB Full Flavor, BB Lights, and Belmont King Size cigarettes at Indigenous Midtown Cannabis."
        />
      </Link>
    </aside>
  );
}
