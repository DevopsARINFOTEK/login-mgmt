import AdminLayout from "../components/AdminLayout";

const interns = [
  { id: "INT001", name: "Priya Verma", department: "Development", status: "Active" },
  { id: "INT002", name: "Arun Das", department: "Design", status: "Review" },
  { id: "INT003", name: "Kavya Nair", department: "HR", status: "Completed" },
];

export default function InternManagement() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Intern Management</h1>
          <p className="text-slate-600">Track interns, departments, and completion progress.</p>
        </div>
        <button className="rounded-xl bg-purple-600 px-5 py-3 text-white shadow">+ Assign Intern</button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-purple-600 p-5 text-white shadow">Total Interns <div className="mt-2 text-3xl font-bold">45</div></div>
        <div className="rounded-2xl bg-green-600 p-5 text-white shadow">Active <div className="mt-2 text-3xl font-bold">24</div></div>
        <div className="rounded-2xl bg-indigo-600 p-5 text-white shadow">Completed <div className="mt-2 text-3xl font-bold">21</div></div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-lg">
        <table className="min-w-[700px] w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {interns.map((intern) => (
              <tr key={intern.id} className="border-b">
                <td className="px-4 py-3">{intern.id}</td>
                <td className="px-4 py-3">{intern.name}</td>
                <td className="px-4 py-3">{intern.department}</td>
                <td className="px-4 py-3"><span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700">{intern.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}