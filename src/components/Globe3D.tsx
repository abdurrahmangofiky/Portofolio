"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
    ssr: false,
});

export function GlobeDemo() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.1,
            color: colors[0],
        },
        {
            order: 1,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[1],
        },
        {
            order: 2,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.4,
            color: colors[2],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[0],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[1],
        },
        {
            order: 3,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.5,
            color: colors[2],
        },
        {
            order: 4,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.3,
            color: colors[0],
        },
        {
            order: 4,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[1],
        },
        {
            order: 5,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 48.8566,
            endLng: 2.3522,
            arcAlt: 0.4,
            color: colors[2],
        },
        {
            order: 5,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[0],
        },
    ];

    return (
        <div className="flex flex-row items-center justify-center h-screen w-full bg-zinc-950 relative">
            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full px-2 sm:px-4">
                <div className="absolute w-full bottom-0 inset-x-0 h-40 sm:h-48 bg-gradient-to-b pointer-events-none select-none from-transparent to-zinc-950 z-40" />
                <div className="absolute w-full -bottom-32 sm:-bottom-24 md:-bottom-20 h-56 sm:h-64 md:h-full z-10">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>
        </div>
    );
}
