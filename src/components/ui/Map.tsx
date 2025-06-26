"use client";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Map = () => {
  const router = useRouter();

  useEffect(() => {
    const chartDiv = document.getElementById("chartdiv");

    // Clear previous chart instance
    if (chartDiv) {
      while (chartDiv.firstChild) {
        chartDiv.removeChild(chartDiv.firstChild);
      }
    }

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    const colors = am5.ColorSet.new(root, {});

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoAlbersUsa(),
      })
    );

    const usaSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow as any,
      })
    );

    usaSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0xaaaaaa),
      templateField: "polygonSettings",
    });

    usaSeries.mapPolygons.template.states.create("hover", {
      fill: colors.getIndex(9),
    });

    // 🧭 Handle state click → navigate to page
    usaSeries.mapPolygons.template.events.on("click", (ev) => {
      const name = (ev.target.dataItem?.dataContext as { name? : string}) ?.name;
      if (name) {
        const slug = name.toLowerCase().replace(/\s/g, "-"); // e.g., New York → new-york
        router.push(`/states/${slug}?state=${encodeURIComponent(slug)}`);
      }
    });

    return () => root.dispose();
  }, [router]);

  return <div id="chartdiv" style={{ width: "100%", height: "600px" }} />;
};

export default Map;
