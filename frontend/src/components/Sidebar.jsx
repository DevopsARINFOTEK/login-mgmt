import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaClipboardList,
  FaMoneyBillWave,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "../admin",
  },
  {
    title: "Invoice Management",
    icon: <FaUsers />,
    path: "../admin/invoice",
  },
  {
    title: "Pay/Receipt Management",
    icon: <FaCalendarCheck />,
    path: "../admin/payment",
  },
  {
    title: "Course Management",
    icon: <FaClipboardList />,
    path: "../admin/course",
  },
  {
    title: "Student Management",
    icon: <FaMoneyBillWave />,
    path: "../admin/student",
  },
  {
    title: "Intern Management",
    icon: <FaChartBar />,
    path: "../admin/intern",
  },
  {
    title: "Employee Management",
    icon: <FaUser />,
    path: "../admin/employees",
  },
]; 

 return (
  <div className="w-64 h-screen bg-gradient-to-b from-slate-950 to-blue-950 text-white fixed left-0 top-0">

    <div className="p-5 border-b border-slate-700">
      <h1 className="font-bold text-lg">
        EMPLOYEE MANAGEMENT
      </h1>
    </div>

    <div className="mt-4 px-3">

      {menuItems.map((item, index) => (
       <NavLink
  key={index}
  to={item.path}
  end
  className={({ isActive }) =>
    `flex items-center gap-4 px-5 py-4 mb-3 rounded-xl transition-all ${
      isActive
        ? "bg-blue-600 shadow-lg"
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
)
};
path: "../admin/invoice"
path: "../admin/payment"
path: "../admin/course"
path: "../admin/student"
path: "../admin/intern"
path: "../admin/employees"