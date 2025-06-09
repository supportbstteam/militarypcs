// "use client";

// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import usData from "@/data/states.geo.json";
// import L from "leaflet";

// import { Feature, FeatureCollection, GeoJsonObject, Geometry } from "geojson";

// const dummyDensity: Record<string, number> = {
//   California: 251.0,
//   Texas: 105.2,
//   Florida: 378.0,
//   New: 420.1,
//   // Add more state names with dummy values
// };

// const getColor = (d: number) => {
//   return d > 400
//     ? "#800026"
//     : d > 300
//     ? "#BD0026"
//     : d > 200
//     ? "#E31A1C"
//     : d > 100
//     ? "#FC4E2A"
//     : d > 50
//     ? "#FD8D3C"
//     : d > 20
//     ? "#FEB24C"
//     : d > 10
//     ? "#FED976"
//     : "#FFEDA0";
// };

// type USFeature = Feature<Geometry, { NAME: string }>;

// const USChoroplethMap: React.FC = () => {
//   const style = (feature: USFeature) => {
//     const stateName = feature.properties.NAME;
//     const density = dummyDensity[stateName] || 0;
//     return {
//       fillColor: getColor(density),
//       weight: 1,
//       color: "white",
//       fillOpacity: 0.7,
//     };
//   };

//   const onEachFeature = (feature: USFeature, layer: L.Layer) => {
//     const name = feature.properties.NAME;
//     const density = dummyDensity[name] || "Unknown";
//     layer.bindPopup(`<strong>${name}</strong><br/>Density: ${density}`);
//   };

//   return (
//     <div className="h-[600px] w-full">
//       <MapContainer center={[37.8, -96]} zoom={4} className="h-full w-full">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />
//         <GeoJSON
//           data={usData as FeatureCollection}
//           style={style as any}
//           onEachFeature={onEachFeature as any}
//         />
//       </MapContainer>
//     </div>
//   );
// };

// export default USChoroplethMap;
