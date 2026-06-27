import AdminLayout from "../components/AdminLayout";

const students = [
  { id: "STU001", name: "Asha Kumar", course: "React Bootcamp", status: "Enrolled" },
  { id: "STU002", name: "Rohan Mehta", course: "HR Basics", status: "Pending" },
  { id: "STU003", name: "Nisha Rao", course: "Data Analytics", status: "Completed" },
];

export default function StudentManagement() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Student Management</h1>
          <p className="text-slate-600">Manage student registrations, progress, and course enrollment.</p>
        </div>
        <button className="rounded-xl bg-blue-600 px-5 py-3 text-white shadow">+ Add Student</button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-blue-600 p-5 text-white shadow">Total Students <div className="mt-2 text-3xl font-bold">120</div></div>
        <div className="rounded-2xl bg-green-600 p-5 text-white shadow">Completed <div className="mt-2 text-3xl font-bold">78</div></div>
        <div className="rounded-2xl bg-orange-500 p-5 text-white shadow">Pending <div className="mt-2 text-3xl font-bold">42</div></div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-lg">
        <table className="min-w-[700px] w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="px-4 py-3">{student.id}</td>
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.course}</td>
                <td className="px-4 py-3"><span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">{student.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}