    import AdminLayout from "../components/AdminLayout";
  

    export default function AdminDashboard() {
      const performanceData = [
        { month: "Jan", employees: 18 },
        { month: "Feb", employees: 22 },
        { month: "Mar", employees: 25 },
        { month: "Apr", employees: 20 },
        { month: "May", employees: 28 },
      ];

      return (
        <AdminLayout>

          <h1 className="text-3xl font-bold text-slate-800 mb-8">
            Dashboard Overview
          </h1>

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-2xl shadow-lg text-white">
              <h3>Total Employees</h3>
              <h1 className="text-4xl font-bold mt-3">25</h1>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-700 p-6 rounded-2xl shadow-lg text-white">
              <h3>Students</h3>
              <h1 className="text-4xl font-bold mt-3">120</h1>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl shadow-lg text-white">
              <h3>Interns</h3>
              <h1 className="text-4xl font-bold mt-3">45</h1>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-indigo-700 p-6 rounded-2xl shadow-lg text-white">
              <h3>Revenue</h3>
              <h1 className="text-4xl font-bold mt-3">₹45K</h1>
            </div>

          </div>

          {/* Chart */}
          <div className="bg-white mt-8 rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-semibold mb-4">
              Employee Performance
            </h2>

            <div className="h-72">
            </div>

          </div>

          {/* Activity & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-xl font-semibold mb-5">
                Recent Activities
              </h2>

              <div className="space-y-4">

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  Employee Added
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  New Course Created
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  Invoice Generated
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  Salary Updated
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-xl font-semibold mb-5">
                Quick Statistics
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Courses</span>
                  <span className="font-bold">12</span>
                </div>

                <div className="flex justify-between">
                  <span>Invoices</span>
                  <span className="font-bold">89</span>
                </div>

                <div className="flex justify-between">
                  <span>Receipts</span>
                  <span className="font-bold">145</span>
                </div>

                <div className="flex justify-between">
                  <span>Pending Tasks</span>
                  <span className="font-bold">8</span>
                </div>

              </div>

            </div>

          </div>

          {/* Employee Table */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 overflow-x-auto">

            <h2 className="text-xl font-semibold mb-5">
              Latest Employees
            </h2>

            <table className="w-full min-w-[700px]">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Name</th>
                  <th className="text-left py-3">Department</th>
                  <th className="text-left py-3">Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-3">John Doe</td>
                  <td>Development</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-3">Jane Smith</td>
                  <td>HR</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3">Mike Johnson</td>
                  <td>Accounts</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </AdminLayout>
      );
    }