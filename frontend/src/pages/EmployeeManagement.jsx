import { useState } from "react";
import AdminLayout from "../components/AdminLayout";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "John Doe",
      department: "Development",
      email: "john@gmail.com",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      department: "HR",
      email: "jane@gmail.com",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    email: "",
  });

  const handleAddEmployee = () => {
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (
      !newEmployee.name ||
      !newEmployee.department ||
      !newEmployee.email
    ) {
      alert("Please fill all fields");
      return;
    }

    const employee = {
      id: `EMP00${employees.length + 1}`,
      name: newEmployee.name,
      department: newEmployee.department,
      email: newEmployee.email,
      status: "Active",
    };

    setShowForm([...employees, employee]);

    setNewEmployee({
      name: "",
      department: "",
      email: "",
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    setEmployees(
      employees.filter((emp) => emp.id !== id)
    );
  };

  const handleEdit = (name) => {
    alert(`Edit ${name}`);
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-slate-800">
          Employee Management
        </h1>

        <button
          onClick={handleAddEmployee}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow"
        >
          + Add Employee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-600 text-white p-5 rounded-2xl shadow">
          <h3>Total Employees</h3>
          <h1 className="text-4xl font-bold mt-2">
            {employees.length}
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-2xl shadow">
          <h3>Active Employees</h3>
          <h1 className="text-4xl font-bold mt-2">
            {employees.length}
          </h1>
        </div>

        <div className="bg-orange-500 text-white p-5 rounded-2xl shadow">
          <h3>Departments</h3>
          <h1 className="text-4xl font-bold mt-2">5</h1>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <input
          type="text"
          placeholder="Search Employee..."
          className="w-full border p-3 rounded-lg outline-none"
        />
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{emp.id}</td>
                <td className="p-4">{emp.name}</td>
                <td className="p-4">{emp.department}</td>
                <td className="p-4">{emp.email}</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {emp.status}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(emp.name)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Employee Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-8 rounded-2xl w-[450px] shadow-xl">

            <h2 className="text-2xl font-bold mb-5">
              Add Employee
            </h2>

            <input
              type="text"
              placeholder="Employee Name"
              value={newEmployee.name}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  name: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              placeholder="Department"
              value={newEmployee.department}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  department: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  email: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-6"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add Employee
              </button>

            </div>

          </div>

        </div>
      )}
    </AdminLayout>
  );
}