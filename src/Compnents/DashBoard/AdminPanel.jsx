import React, { useState } from "react";
// import AdminRoomManager from "./AdminRoomManager";
import AdminRoomManager from "../Accommodation/AdminRoomManager";

const AdminPanel = () => {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-md flex justify-between">
        <h1 className="text-2xl font-bold">Hotel Admin Panel</h1>
        <div>
          <button
            onClick={() => setTab("dashboard")}
            className={`px-4 py-2 mr-2 rounded ${
              tab === "dashboard" ? "bg-yellow-500 text-white" : "bg-white"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setTab("rooms")}
            className={`px-4 py-2 rounded ${
              tab === "rooms" ? "bg-yellow-500 text-white" : "bg-white"
            }`}
          >
            Room Management
          </button>
        </div>
      </header>

      <main className="p-6">
        {tab === "dashboard" && (
          <div>
            {/* Your Dashboard Cards Here */}
            <h2 className="text-xl font-semibold mb-4">Dashboard Summary</h2>
          </div>
        )}
        {tab === "rooms" && <AdminRoomManager />}
      </main>
    </div>
  );
};

export default AdminPanel;
