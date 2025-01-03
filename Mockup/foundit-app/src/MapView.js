import React, { useState } from "react";
import { MapPin, Moon, Sun, Home, User, Flag, Map, Search } from "lucide-react";

const MapView = () => {
  const [isDark, setIsDark] = useState(false);
  const primaryColor = "#F46119";
  const complementaryColor = "#19B6F4";

  const pins = [
    { type: "lost", x: 30, y: 40, item: "Phone", image: "/icons/1.png" },
    { type: "lost", x: 60, y: 30, item: "Wallet", image: "/icons/2.png" },
    { type: "found", x: 45, y: 50, item: "Keys", image: "/icons/3.png" },
    { type: "found", x: 70, y: 60, item: "Bag", image: "/icons/4.png" },
    { type: "lost", x: 20, y: 70, item: "Watch", image: "/icons/5.png" },
  ];

  // Regular MapPin for logo and legend
  const SimplePin = ({ color }) => (
    <MapPin style={{ color }} className="w-6 h-6" />
  );

  // Custom Pin with image for map
  const MapCustomPin = ({ type, item, image }) => (
    <div className="relative group">
      {/* Pin is 64x84px for good visibility on map */}
      <svg
        width="64"
        height="84"
        viewBox="0 0 64 84"
        className="cursor-pointer transform hover:scale-105 transition-transform"
      >
        <path
          d="M32 0C14.3 0 0 14.3 0 32c0 15.1 10.4 27.7 24.4 31.2L32 84l7.6-20.8C55.6 59.7 64 47.1 64 32 64 14.3 49.7 0 32 0z"
          fill={type === "lost" ? primaryColor : complementaryColor}
        />
        {/* 48x48px image container */}
        <foreignObject x="8" y="8" width="48" height="48">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
            <img
              src={image}
              alt={item}
              className="w-full h-full object-cover"
            />
          </div>
        </foreignObject>
      </svg>
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
          isDark ? "bg-gray-700" : "bg-white shadow-lg"
        }`}
      >
        {type === "lost" ? "Lost" : "Found"}: {item}
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen w-full pb-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      {/* Header with simple pin */}
      <header
        className="p-4 flex justify-between items-center sticky top-0 z-10"
        style={{ backgroundColor: isDark ? "#1a1a1a" : "#fff" }}
      >
        <div className="flex items-center gap-1">
          <span className="font-bold text-2xl">
            <span style={{ color: primaryColor }}>Found</span>
            <span className={isDark ? "text-white" : "text-black"}>It</span>
          </span>
          <SimplePin color={primaryColor} />
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </header>

      {/* Map area */}
      <div className="relative">
        <div className={`relative h-[calc(100vh-180px)]`}>
          {/* Background map image */}
          <img
            src="/map.png"
            alt="Map"
            className="w-full h-full object-cover"
          />

          {/* Pins overlay */}
          <div className="absolute inset-0">
            {pins.map((pin, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <MapCustomPin {...pin} />
              </div>
            ))}
          </div>

          {/* Search and legend overlays */}
          <div className="absolute top-4 left-4 right-4 z-10">
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                isDark ? "bg-gray-900" : "bg-white"
              } shadow-lg`}
            >
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search area..."
                className={`flex-1 bg-transparent outline-none ${
                  isDark ? "text-white" : "text-black"
                }`}
              />
            </div>
          </div>

          {/* Legend with simple pins */}
          <div
            className={`absolute bottom-4 left-4 p-3 rounded-lg ${
              isDark ? "bg-gray-900" : "bg-white"
            } shadow-lg`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <SimplePin color={primaryColor} />
                <span className="text-sm">Lost Items</span>
              </div>
              <div className="flex items-center gap-2">
                <SimplePin color={complementaryColor} />
                <span className="text-sm">Found Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`fixed bottom-0 left-0 right-0 ${
          isDark
            ? "bg-gray-900 border-t border-gray-800"
            : "bg-white border-t border-gray-200"
        }`}
      >
        <div className="flex justify-around items-center py-2">
          {[
            { icon: Home, label: "Home", active: false },
            { icon: Map, label: "Map", active: true },
            { icon: Flag, label: "Report", active: false },
            { icon: User, label: "Profile", active: false },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`p-3 flex flex-col items-center relative ${
                active
                  ? "after:absolute after:bottom-0 after:w-full after:h-0.5"
                  : ""
              }`}
              style={{
                color: active ? primaryColor : isDark ? "#666" : "#999",
              }}
            >
              <Icon strokeWidth={active ? 2 : 1.5} />
              <span
                className="text-xs mt-1"
                style={{
                  fontWeight: active ? 600 : 400,
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;
