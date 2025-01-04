import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import MapView from "./MapView";
import ItemRegistrationForm from "./ItemRegistrationForm";
import ChatInterface from "./ChatInterface"; // Add this import

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">
          <span className="text-[#F46119]">Found</span>
          <span>It</span>
        </h1>
        <div className="flex gap-4">
          <Link
            to="/map"
            className="px-6 py-3 bg-[#F46119] rounded-lg hover:bg-[#F46119]/80 transition-colors"
          >
            View Map
          </Link>
          <Link
            to="/report"
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Report Item
          </Link>
          <Link
            to="/chat"
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Chat
          </Link>
        </div>
      </div>
    ),
  },
  {
    path: "/map",
    element: <MapView />,
  },
  {
    path: "/report",
    element: <ItemRegistrationForm />,
  },
  {
    path: "/chat",
    element: <ChatInterface />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
