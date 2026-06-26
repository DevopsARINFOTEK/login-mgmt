import StudentLayout from "../components/StudentLayout";

export default function StudentDashboard() {
  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Student Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Course Progress</h2>
          <p className="text-slate-600">Review your enrolled courses and upcoming lessons.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Placement Support</h2>
          <p className="text-slate-600">Access placement resources and interview preparation help.</p>
        </div>
      </div>
    </StudentLayout>
  );
}
