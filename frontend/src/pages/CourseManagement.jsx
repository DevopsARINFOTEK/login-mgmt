import AdminLayout from "../components/AdminLayout";

const courses = [
  { title: "React Mastery", duration: "4 Weeks", learners: 48, status: "Live" },
  { title: "HR Fundamentals", duration: "3 Weeks", learners: 33, status: "Live" },
  { title: "Data Analytics", duration: "6 Weeks", learners: 21, status: "Draft" },
];

export default function CourseManagement() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Course Management</h1>
          <p className="text-slate-600">Create and track training programs for your people.</p>
        </div>
        <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white shadow">+ New Course</button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-emerald-600 p-5 text-white shadow">Active Courses <div className="mt-2 text-3xl font-bold">12</div></div>
        <div className="rounded-2xl bg-sky-600 p-5 text-white shadow">Learners <div className="mt-2 text-3xl font-bold">182</div></div>
        <div className="rounded-2xl bg-amber-500 p-5 text-white shadow">Drafts <div className="mt-2 text-3xl font-bold">3</div></div>
      </div>

      <div className="mt-8 grid gap-4">
        {courses.map((course) => (
          <div key={course.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{course.title}</h3>
                <p className="text-sm text-slate-500">{course.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Learners</p>
                <p className="text-xl font-bold text-slate-800">{course.learners}</p>
              </div>
            </div>
            <div className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{course.status}</div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}