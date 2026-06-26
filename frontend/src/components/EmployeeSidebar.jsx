import {
  FaHome,
  FaUser,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

export default function EmployeeSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/employee",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      path: "/employee/profile",
    },
    {
      title: "Attendance",
      icon: <FaCalendarCheck />,
      path: "/employee/attendance",
    },
    {
      title: "Salary",
      icon: <FaMoneyBillWave />,
      path: "/employee/salary",
    },
    {
      title: "Leave Requests",
      icon: <FaClipboardList />,
      path: "/employee/leave",
    },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-slate-950 to-emerald-900 text-white fixed left-0 top-0">

      <div className="p-5 border-b border-slate-700">
        <h1 className="font-bold text-lg">
          EMPLOYEE PORTAL
        </h1>
      </div>

      <div className="mt-4 px-3">

        {menuItems.map((item, index) => (
          <NavLink
  key={index}
  to={item.path}
  end={item.path === "/employee"}
  className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all ${
      isActive
        ? "bg-emerald-600 shadow-lg"
        : "hover:bg-slate-800"
    }`
  }
>
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-4 px-5 py-4 mt-8 w-full rounded-xl hover:bg-red-600 transition-all"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </div>

    </div>
  );
}