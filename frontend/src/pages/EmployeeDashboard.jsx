import EmployeeLayout from "../components/EmployeeLayout";


export default function EmployeeDashboard() {
  const attendanceData = [
    { month: "Jan", value: 90 },
    { month: "Feb", value: 92 },
    { month: "Mar", value: 95 },
    { month: "Apr", value: 94 },
    { month: "May", value: 98 },
  ];

  const taskData = [
    { name: "Completed", value: 80 },
    { name: "Pending", value: 20 },
  ];

  const COLORS = ["#10b981", "#ef4444"];

  return (
    <EmployeeLayout>

      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Employee Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white p-6 rounded-2xl shadow-lg">
          <h3>Attendance</h3>
          <h1 className="text-4xl font-bold mt-3">95%</h1>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg">
          <h3>Leaves Remaining</h3>
          <h1 className="text-4xl font-bold mt-3">12</h1>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-700 text-white p-6 rounded-2xl shadow-lg">
          <h3>Salary</h3>
          <h1 className="text-4xl font-bold mt-3">₹25,000</h1>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-lg">
          <h3>Tasks Completed</h3>
          <h1 className="text-4xl font-bold mt-3">28</h1>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Attendance Trend
          </h2>

          <div className="h-72">
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Task Progress
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {taskData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

        <h2 className="text-xl font-semibold mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-l-4 border-green-500 pl-4 py-2">
            Attendance marked successfully
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            Leave request submitted
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2">
            Salary credited this month
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            Task completed successfully
          </div>

        </div>

      </div>

    </EmployeeLayout>
  );
}