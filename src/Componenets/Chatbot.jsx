import { useState } from "react";

const Chatbot = () => {
  // Dummy conversation data
  const [logs, setLogs] = useState([
    {
      id: 1,
      user: "What is your name?",
      bot: "I am your AI assistant!",
      date: "2025-01-29",
    },
    {
      id: 2,
      user: "How can I reset my password?",
      bot: "Go to settings > reset password.",
      date: "2025-01-29",
    },
    {
      id: 3,
      user: "Tell me a joke.",
      bot: "Why did the web developer break up? Because they had too many 'commits'!",
      date: "2025-01-28",
    },
  ]);

  const [search, setSearch] = useState("");

  // Filter logs based on search input
  const filteredLogs = logs.filter(
    (log) =>
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.bot.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] p-8">
      <div className="bg-white p-8 lg:rounded-lg shadow-md w-full max-w-xl mx-auto">
        <h2 className="text-2xl font-bold">📝 Chatbot Conversation Logs</h2>
        <p className="text-gray-600">
          Monitor past interactions between users and the chatbot.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search conversations..."
          className="border p-2 rounded-md w-full mt-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Chat Log Table */}
        <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">User Query</th>
                <th className="p-3 text-left">Chatbot Response</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{log.date}</td>
                  <td className="p-3">{log.user}</td>
                  <td className="p-3">{log.bot}</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">
                      ✔ Mark as Solved
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                      ⚠ Report Issue
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
