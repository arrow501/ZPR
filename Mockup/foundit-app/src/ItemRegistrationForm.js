import React, { useState } from "react";
import { Camera, MapPin, Moon, Sun, Home, User, Flag, Map } from "lucide-react";

const ItemRegistrationForm = () => {
  const [isDark, setIsDark] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    description: "",
    location: "",
  });

  const categories = [
    "Electronics",
    "Documents",
    "Jewelry",
    "Accessories",
    "Other",
  ];
  const primaryColor = "#F46119";

  const NavBar = () => (
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
          { icon: Map, label: "Map", active: false },
          { icon: Flag, label: "Report", active: true },
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
              color: primaryColor,
              "&::after": {
                backgroundColor: primaryColor,
              },
            }}
          >
            <Icon strokeWidth={active ? 2 : 1.5} color={primaryColor} />
            <span
              className="text-xs mt-1"
              style={{
                color: primaryColor,
                fontWeight: active ? 600 : 400,
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen w-full pb-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <header
          className="p-4 flex justify-between items-center sticky top-0 z-10"
          style={{ backgroundColor: isDark ? "#1a1a1a" : "#fff" }}
        >
          <div className="flex items-center gap-1">
            <span className="font-bold text-2xl">
              <span style={{ color: primaryColor }}>Found</span>
              <span className={isDark ? "text-white" : "text-black"}>It</span>
            </span>
            <MapPin style={{ color: primaryColor }} className="w-6 h-6" />
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {isDark ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">What happened?</h2>
              <div className="grid grid-cols-2 gap-4">
                {["lost", "found"].map((type) => (
                  <button
                    key={type}
                    style={{
                      borderColor:
                        formData.type === type
                          ? primaryColor
                          : isDark
                          ? "#333"
                          : "#eee",
                      backgroundColor:
                        formData.type === type
                          ? `${primaryColor}10`
                          : isDark
                          ? "#333"
                          : "#fff",
                    }}
                    className="p-6 rounded-xl border-2 transition-all"
                    onClick={() => setFormData({ ...formData, type })}
                  >
                    <span className="text-lg font-medium capitalize">
                      I {type} Something
                    </span>
                  </button>
                ))}
              </div>

              {formData.type && (
                <div className="space-y-6 mt-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select
                      className={`w-full p-3 rounded-lg border ${
                        isDark
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      }`}
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      style={{ borderColor: isDark ? "#333" : "#eee" }}
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      className={`w-full p-3 rounded-lg border h-32 ${
                        isDark
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      }`}
                      placeholder="Describe the item..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      style={{ borderColor: isDark ? "#333" : "#eee" }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-white border"
                      }`}
                      style={{ borderColor: isDark ? "#333" : "#eee" }}
                    >
                      <Camera className="w-5 h-5" />
                      <span>Add Photo</span>
                    </button>
                    <button
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-white border"
                      }`}
                      style={{ borderColor: isDark ? "#333" : "#eee" }}
                    >
                      <MapPin className="w-5 h-5" />
                      <span>Location</span>
                    </button>
                  </div>

                  {formData.category && formData.description && (
                    <button
                      style={{ backgroundColor: primaryColor }}
                      className="w-full py-3 text-white rounded-lg mt-6"
                      onClick={() => setStep(2)}
                    >
                      Continue
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
                style={{ borderColor: isDark ? "#333" : "#eee" }}
              >
                <h4 className="font-medium mb-6 text-xl">Confirm Details</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Type</label>
                    <p className="text-lg capitalize">{formData.type}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Category</label>
                    <p className="text-lg">{formData.category}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Description</label>
                    <p className="text-lg">{formData.description}</p>
                  </div>
                </div>
              </div>

              <button
                style={{ backgroundColor: primaryColor }}
                className="w-full py-3 text-white rounded-lg"
              >
                Submit Report
              </button>
            </div>
          )}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default ItemRegistrationForm;
