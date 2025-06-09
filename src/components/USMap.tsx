"use client";

import React from "react";
// import "./USMap.css";

const states = [
  { id: "AL", name: "Alabama", value: 40, path: "M573.1,368.6L573.1,368.6L573.1,368.6z" },
  { id: "AK", name: "Alaska", value: 25, path: "M75.6,541.6L75.6,541.6L75.6,541.6z" },
  { id: "AZ", name: "Arizona", value: 35, path: "M143.2,410.2L143.2,410.2L143.2,410.2z" },
  { id: "AR", name: "Arkansas", value: 28, path: "M495.2,368.6L495.2,368.6L495.2,368.6z" },
  { id: "CA", name: "California", value: 70, path: "M60.2,320.2L60.2,320.2L60.2,320.2z" },
  { id: "CO", name: "Colorado", value: 45, path: "M246.2,320.2L246.2,320.2L246.2,320.2z" },
  { id: "CT", name: "Connecticut", value: 32, path: "M900.2,220.2L900.2,220.2L900.2,220.2z" },
  { id: "DE", name: "Delaware", value: 22, path: "M870.2,260.2L870.2,260.2L870.2,260.2z" },
  { id: "FL", name: "Florida", value: 30, path: "M800.2,500.2L800.2,500.2L800.2,500.2z" },
  { id: "GA", name: "Georgia", value: 38, path: "M700.2,420.2L700.2,420.2L700.2,420.2z" },
  { id: "HI", name: "Hawaii", value: 20, path: "M200.2,570.2L200.2,570.2L200.2,570.2z" },
  { id: "ID", name: "Idaho", value: 18, path: "M140.2,180.2L140.2,180.2L140.2,180.2z" },
  { id: "IL", name: "Illinois", value: 55, path: "M600.2,220.2L600.2,220.2L600.2,220.2z" },
  { id: "IN", name: "Indiana", value: 33, path: "M650.2,220.2L650.2,220.2L650.2,220.2z" },
  { id: "IA", name: "Iowa", value: 27, path: "M500.2,220.2L500.2,220.2L500.2,220.2z" },
  { id: "KS", name: "Kansas", value: 24, path: "M400.2,320.2L400.2,320.2L400.2,320.2z" },
  { id: "KY", name: "Kentucky", value: 29, path: "M700.2,300.2L700.2,300.2L700.2,300.2z" },
  { id: "LA", name: "Louisiana", value: 31, path: "M500.2,500.2L500.2,500.2L500.2,500.2z" },
  { id: "ME", name: "Maine", value: 16, path: "M950.2,80.2L950.2,80.2L950.2,80.2z" },
  { id: "MD", name: "Maryland", value: 36, path: "M850.2,260.2L850.2,260.2L850.2,260.2z" },
  { id: "MA", name: "Massachusetts", value: 44, path: "M930.2,160.2L930.2,160.2L930.2,160.2z" },
  { id: "MI", name: "Michigan", value: 48, path: "M750.2,120.2L750.2,120.2L750.2,120.2z" },
  { id: "MN", name: "Minnesota", value: 34, path: "M400.2,100.2L400.2,100.2L400.2,100.2z" },
  { id: "MS", name: "Mississippi", value: 21, path: "M600.2,420.2L600.2,420.2L600.2,420.2z" },
  { id: "MO", name: "Missouri", value: 39, path: "M500.2,320.2L500.2,320.2L500.2,320.2z" },
  { id: "MT", name: "Montana", value: 17, path: "M200.2,100.2L200.2,100.2L200.2,100.2z" },
  { id: "NE", name: "Nebraska", value: 23, path: "M350.2,220.2L350.2,220.2L350.2,220.2z" },
  { id: "NV", name: "Nevada", value: 26, path: "M100.2,320.2L100.2,320.2L100.2,320.2z" },
  { id: "NH", name: "New Hampshire", value: 19, path: "M950.2,140.2L950.2,140.2L950.2,140.2z" },
  { id: "NJ", name: "New Jersey", value: 46, path: "M900.2,200.2L900.2,200.2L900.2,200.2z" },
  { id: "NM", name: "New Mexico", value: 15, path: "M200.2,420.2L200.2,420.2L200.2,420.2z" },
  { id: "NY", name: "New York", value: 80, path: "M900.2,120.2L900.2,120.2L900.2,120.2z" },
  { id: "NC", name: "North Carolina", value: 41, path: "M850.2,340.2L850.2,340.2L850.2,340.2z" },
  { id: "ND", name: "North Dakota", value: 14, path: "M300.2,80.2L300.2,80.2L300.2,80.2z" },
  { id: "OH", name: "Ohio", value: 49, path: "M800.2,220.2L800.2,220.2L800.2,220.2z" },
  { id: "OK", name: "Oklahoma", value: 37, path: "M400.2,420.2L400.2,420.2L400.2,420.2z" },
  { id: "OR", name: "Oregon", value: 42, path: "M60.2,180.2L60.2,180.2L60.2,180.2z" },
  { id: "PA", name: "Pennsylvania", value: 53, path: "M900.2,180.2L900.2,180.2L900.2,180.2z" },
  { id: "RI", name: "Rhode Island", value: 13, path: "M950.2,180.2L950.2,180.2L950.2,180.2z" },
  { id: "SC", name: "South Carolina", value: 30, path: "M850.2,400.2L850.2,400.2L850.2,400.2z" },
  { id: "SD", name: "South Dakota", value: 12, path: "M300.2,180.2L300.2,180.2L300.2,180.2z" },
  { id: "TN", name: "Tennessee", value: 43, path: "M700.2,380.2L700.2,380.2L700.2,380.2z" },
  { id: "TX", name: "Texas", value: 50, path: "M400.2,500.2L400.2,500.2L400.2,500.2z" },
  { id: "UT", name: "Utah", value: 47, path: "M180.2,320.2L180.2,320.2L180.2,320.2z" },
  { id: "VT", name: "Vermont", value: 11, path: "M950.2,120.2L950.2,120.2L950.2,120.2z" },
  { id: "VA", name: "Virginia", value: 51, path: "M850.2,300.2L850.2,300.2L850.2,300.2z" },
  { id: "WA", name: "Washington", value: 52, path: "M60.2,100.2L60.2,100.2L60.2,100.2z" },
  { id: "WV", name: "West Virginia", value: 10, path: "M800.2,300.2L800.2,300.2L800.2,300.2z" },
  { id: "WI", name: "Wisconsin", value: 54, path: "M500.2,120.2L500.2,120.2L500.2,120.2z" },
  { id: "WY", name: "Wyoming", value: 9, path: "M200.2,220.2L200.2,220.2L200.2,220.2z" },
];

const getColor = (value: number) => {
  if (value > 70) return "#1a237e";
  if (value > 50) return "#3949ab";
  if (value > 30) return "#7986cb";
  return "#c5cae9";
};

const USMap = () => {
  return (
    <svg viewBox="0 0 959 593" className="us-map">
      {states.map((state) => (
        <path
          key={state.id}
          id={state.id}
          d={state.path}
          // d="M10 10 h 80 v 80 h -80 Z" // Replace with real paths
          fill={getColor(state.value)}
          stroke="#fff"
          onClick={() => alert(`${state.name}: ${state.value}`)}
        >
          <title>{state.name}</title>
        </path>
      ))}
    </svg>
  );
};

export default USMap;
