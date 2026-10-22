"use client";

import Link from "next/link";
import { useState } from "react";
import CigaretteSeasonalNotice from "../CigaretteSeasonalNotice";
import CodedAnnouncementBanner from "../FleetAnnouncementBanner";
import { FLEET_COLORS } from "../../lib/fleet/config";
import type { ResolvedBanner } from "../../lib/fleet/types";
import { SHOW_CIGARETTES } from "../../lib/showCigarettes";

const figureStyle = { margin: 0, width: "100%" } as const;
const imageStyle = { display: "block", width: "100%", maxWidth: "100%", height: "auto" } as const;
const linkStyle = { display: "block", width: "100%", background: FLEET_COLORS.banner } as const;
const captionStyle = { margin: 0, padding: "10px 14px", background: "#111827", color: FLEET_COLORS.bannerText, textAlign: "center" as const, fontWeight: 800, lineHeight: 1.35 };

function bannerSize(banner: ResolvedBanner) {
  const cigarette = banner.id === "cigarettes";
  return {
    width: banner.imageWidth || (cigarette ? 2048 : 1672),
    height: banner.imageHeight || (cigarette ? 768 : 941),
  };
}

function BannerFigure({ banner }: { banner: ResolvedBanner }) {
  const [src, setSrc] = useState(banner.image);
  const [imageFailed, setImageFailed] = useState(false);
  const showText = banner.render === "text" || imageFailed || !src;
  const size = bannerSize(banner);
  const useCodedFallback = () => {
    if (banner.codedImage && src !== banner.codedImage) {
      setSrc(banner.codedImage);
      return;
    }
    setImageFailed(true);
  };
  return (
    <figure data-core-banner={banner.id} style={{ ...figureStyle, boxShadow: "inset 0 0 0 2px #8b5cf6" }}>
      {showText ? (
        <Link href={banner.href} aria-label={banner.alt} style={linkStyle}>
          <div data-fleet-text-banner="" style={{ ...imageStyle, width: size.width, maxWidth: "100%", height: size.height, minHeight: size.height, display: "flex", alignItems: "center", justifyContent: "center", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)" }}>{banner.categoryName}</div>
        </Link>
      ) : (
        <Link href={banner.href} aria-label={banner.alt} style={linkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={src}
            src={src}
            alt={banner.alt}
            title={banner.title}
            width={size.width}
            height={size.height}
            style={imageStyle}
            ref={(node) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks -- named for the sheet image fallback; it is not a Hook
              if (node?.complete && node.naturalWidth === 0) useCodedFallback();
            }}
            onError={useCodedFallback}
          />
        </Link>
      )}
      <figcaption style={{ ...captionStyle, borderBottom: "3px solid #8b5cf6" }}>{banner.textBar}</figcaption>
    </figure>
  );
}

function visibleBanners(banners: ResolvedBanner[]) {
  return banners.filter((banner) => !banner.hidden && (SHOW_CIGARETTES || (banner.id !== "cigarettes" && banner.id !== "premium-cigarettes")));
}

export default function FleetAnnouncementBanner({ banners }: { banners?: ResolvedBanner[] } = {}) {
  if (!banners) return <CodedAnnouncementBanner />;
  const visible = visibleBanners(banners);
  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store promotions" style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "100%", height: "auto", minHeight: 0, overflow: "visible", position: "relative", zIndex: 50 }}>
      {visible.map((banner) => (
        <span key={banner.id} style={{ display: "contents" }}>
          {banner.id === "cigarettes" ? <CigaretteSeasonalNotice /> : null}
          <BannerFigure banner={banner} />
        </span>
      ))}
    </aside>
  );
}
