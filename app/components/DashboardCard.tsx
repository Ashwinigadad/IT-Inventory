"use client";

export default function DashboardCard() {
  const stats = [
    { title: "Engaged Sessions", value: "1,158" },
    { title: "Engagement Rate", value: "24.31%" },
    { title: "Sessions", value: "755" },
    { title: "Sessions per User", value: "35.55" },
    { title: "Active Users", value: "982" },
    { title: "Avg Engagement Time", value: "00:00:21" },
    { title: "New Users", value: "841" },
    { title: "Total Users", value: "469" },
    { title: "User Engagement", value: "21m 32s" },
    { title: "Event Views", value: "681" },
    { title: "Sessions", value: "249" },
    { title: "Conversions", value: "98" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-1">
          <span className="text-gray-500 font-semibold text-2xl">your</span>
          <span className="text-[#007BFF] font-bold text-2xl">LOGO</span>
          <sup className="text-gray-400 text-xs">™</sup>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-bold text-gray-800">
            Web Analytics Dashboard
          </h2>
          <span className="text-gray-500 text-sm">January 2024</span>
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-gray-800 text-center my-6">
        Web Analytics Dashboard
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <img
          src="graph.png"
          alt="Sessions Graph"
          className="h-full w-full object-cover rounded-lg shadow-md"
        />
        <img
          src="piechart.png"
          alt="Pie Chart"
          className="h-full w-full object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center text-sm font-medium text-black">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <p className="text-gray-600">{item.title}</p>
            <p className="text-2xl font-extrabold mt-2 text-gray-800">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
