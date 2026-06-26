import InternLayout from "../components/InternLayout";

export default function InternDashboard() {
  return (
    <InternLayout>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Intern Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Current Internships</h2>
          <p className="text-slate-600">View active internship assignments and status updates.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Training Progress</h2>
          <p className="text-slate-600">Track your training modules and completion milestones.</p>
        </div>
      </div>
    </InternLayout>
  );
}
