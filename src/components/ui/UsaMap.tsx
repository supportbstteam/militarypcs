"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import "jqvmap/dist/jqvmap.min.css";

const UsaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!mapRef.current) return;

    // Attach jQuery globally before importing jqvmap
    (window as any).jQuery = $;
    (window as any).$ = $;

    const loadMap = async () => {
      const { default: jqvmap } = await import("jqvmap");
      await import("jqvmap/dist/maps/jquery.vmap.usa.js");

      const pins = {
        ca: '<div class="map-pin red"><span>CA</span></div>',
        tx: '<div class="map-pin red"><span>TX</span></div>',
        ny: '<div class="map-pin red"><span>NY</span></div>',
      };

      // @ts-ignore
      $(mapRef.current).vectorMap({
        map: "usa_en",
        backgroundColor: "transparent",
        pins,
        pinMode: "content",
        color: "#fff",
        hoverColor: "#f5f5f5",
        showTooltip: true,
        enableZoom: false,
        onRegionClick: (_e: any, code: string) => {
          router.push(`/states/${code.toLowerCase()}`);
        },
        colors: {
          ca: "#ffcccc",
          tx: "#ccffcc",
          ny: "#ccccff",
        },
      });
    };

    loadMap();

    return () => {
      try {
        // @ts-ignore
        $(mapRef.current).vectorMap("destroy");
      } catch (err) {
        console.warn("Destroy error:", err);
      }
    };
  }, [router]);

  return (
    <div>
      <div
        ref={mapRef}
        id="vmap"
        style={{
          width: "100%",
          height: "600px",
          backgroundImage: "linear-gradient(135deg, #bf0a30, #002868)",
        }}
      />
    </div>
  );
};

export default UsaMap;
