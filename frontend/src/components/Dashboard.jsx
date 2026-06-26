import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  const userRole = sessionStorage.getItem("userRole") || "User";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center">
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-6">
          <span className="text-5xl">✅</span>
        </div>

        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Login Successful!</h1>

        <p className="text-lg text-slate-600 mb-6">
          Welcome to <span className="font-bold text-orange-500">AR INFOTEK</span>.
          You have successfully signed in as <span className="font-bold">{userRole}</span>.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2">🎉 Welcome Back</h2>
          <p className="text-slate-700">You can now access your courses, internships, projects, and learning resources from your dashboard.</p>
        </div>

        <button
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:shadow-lg transition"
          onClick={() => navigate("/admin-dashboard")}
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
}
