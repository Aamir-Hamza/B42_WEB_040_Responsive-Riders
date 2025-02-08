import { useState } from "react";
import { Bell, Clock, CheckCircle } from "lucide-react";

export default function Notifications() {
  const [tab, setTab] = useState("past");

  const notifications = [
    {
      user: "Rahul Sunil Waghmare",
      message: "Construct Week Projects - B42 🚀",
      time: "4 Feb, 2025 5:01 PM",
    },
    {
      user: "Rahul Sunil Waghmare",
      message: "End of the unit NPS feedback form",
      time: "4 Feb, 2025 12:15 PM",
    },
    {
      user: "Rahul Sunil Waghmare",
      message: "B42_CSBT02 : Evaluation",
      time: "2 Feb, 2025 12:00 PM",
    },
    {
      user: "Rahul Sunil Waghmare",
      message: "Evaluation Plan - B42 - Sprint 4",
      time: "31 Jan, 2025 1:30 PM",
    },
    {
      user: "Rahul Sunil Waghmare",
      message: "Interview(AI/HUKUMU) Plan for Unit P...",
      time: "31 Jan, 2025 1:00 PM",
    },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            tab === "new" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("new")}
        >
          New
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            tab === "past" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("past")}
        >
          Past
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-blue-600 font-semibold">{notif.user}</p>
              <p className="text-gray-800">{notif.message}</p>
              <p className="text-gray-500 text-sm">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
