import { useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="lg:w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li
            className={`p-2 rounded-md cursor-pointer ${
              activeTab === "dashboard" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            📊 Dashboard
          </li>
          <li
            className={`p-2 rounded-md cursor-pointer ${
              activeTab === "training" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("training")}
          >
            📖 Training Data
          </li>
          <li
            className={`p-2 rounded-md cursor-pointer ${
              activeTab === "settings" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            ⚙️ Chatbot Settings
          </li>
          <li
            className={`p-2 rounded-md cursor-pointer ${
              activeTab === "feedback" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("feedback")}
          >
            💬 User Feedback
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold">📊 Chatbot Dashboard</h2>
            <p className="text-gray-600">Overview of chatbot interactions</p>
            <div className="grid lg:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-500 text-white p-4 rounded-md">
                🔍 Total Queries: 256
              </div>
              <div className="bg-green-500 text-white p-4 rounded-md">
                ✅ Successful Responses: 230
              </div>
              <div className="bg-red-500 text-white p-4 rounded-md">
                ⚠️ Failed Responses: 26
              </div>
            </div>
          </div>
        )}

        {activeTab === "training" && (
          <div>
            <h2 className="text-2xl font-bold">📖 Training Data</h2>
            <p className="text-gray-600">Manage chatbot responses</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
              + Add Training Data
            </button>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h2 className="text-2xl font-bold">⚙️ Chatbot Settings</h2>
            <p className="text-gray-600">Configure chatbot preferences</p>
            <label className="block mt-4">
              <span className="text-gray-700">Chatbot Name:</span>
              <input
                type="text"
                className="border p-2 rounded-md w-full mt-2"
                placeholder="Your Chatbot Name"
              />
            </label>
          </div>
        )}

        {activeTab === "feedback" && (
          <div>
            <h2 className="text-2xl font-bold">💬 User Feedback</h2>
            <p className="text-gray-600">
              View and respond to chatbot feedback
            </p>
            <div className="mt-4 p-4 border rounded-md">
              <p className="text-gray-700">
                ❓ "The chatbot is not answering my queries correctly."
              </p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md">
                Resolve Issue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
