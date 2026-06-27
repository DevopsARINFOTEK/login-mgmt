import AdminLayout from "../components/AdminLayout";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AdminDashboard() {
  const performanceData = [
    { month: "Jan", employees: 18, interns: 12 },
    { month: "Feb", employees: 22, interns: 14 },
    { month: "Mar", employees: 25, interns: 16 },
    { month: "Apr", employees: 20, interns: 15 },
    { month: "May", employees: 28, interns: 18 },
  ];

  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-800">HRMS Dashboard Overview</h1>
        <p className="text-slate-600">Track workforce health, learning progress, and operations at a glance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white shadow-lg">
          <h3>Total Employees</h3>
          <h1 className="mt-3 text-4xl font-bold">25</h1>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-700 p-6 text-white shadow-lg">
          <h3>Students</h3>
          <h1 className="mt-3 text-4xl font-bold">120</h1>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white shadow-lg">
          <h3>Interns</h3>
          <h1 className="mt-3 text-4xl font-bold">45</h1>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-700 p-6 text-white shadow-lg">
          <h3>Revenue</h3>
          <h1 className="mt-3 text-4xl font-bold">₹45K</h1>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-800">Workforce Growth</h2>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">Monthly</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="employees" fill="#2563eb" radius={[6, 6, 0, 0]} />
              <Bar dataKey="interns" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-semibold text-slate-800">Recent Activities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">Employee added to onboarding pipeline</div>
            <div className="border-l-4 border-green-500 pl-4 py-2">New course published for learners</div>
            <div className="border-l-4 border-orange-500 pl-4 py-2">Invoice generated for client account</div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">Payroll update submitted for approval</div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-semibold text-slate-800">Quick Statistics</h2>
          <div className="space-y-5">
            <div className="flex justify-between"><span>Courses</span><span className="font-bold">12</span></div>
            <div className="flex justify-between"><span>Invoices</span><span className="font-bold">89</span></div>
            <div className="flex justify-between"><span>Receipts</span><span className="font-bold">145</span></div>
            <div className="flex justify-between"><span>Pending Tasks</span><span className="font-bold">8</span></div>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-5 text-xl font-semibold text-slate-800">Latest Employees</h2>
        <table className="min-w-[700px] w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Department</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">John Doe</td>
              <td>Development</td>
              <td><span className="rounded-full bg-green-100 px-3 py-1 text-green-700">Active</span></td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Jane Smith</td>
              <td>HR</td>
              <td><span className="rounded-full bg-green-100 px-3 py-1 text-green-700">Active</span></td>
            </tr>
            <tr>
              <td className="py-3">Mike Johnson</td>
              <td>Accounts</td>
              <td><span className="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}