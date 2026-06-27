import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";

const API_URL = "http://localhost:5000/api/employee";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    employee_code: "",
    first_name: "",
    last_name: "",
    department: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const mappedEmployees = data.map((employee) => ({
        id: employee.employee_id,
        employee_code: employee.employee_code,
        name: `${employee.first_name || ""} ${employee.last_name || ""}`.trim(),
        department: employee.department || "",
        email: employee.email || "",
        status: employee.status || "Active",
      }));
      setEmployees(mappedEmployees);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setNewEmployee({ employee_code: "", first_name: "", last_name: "", department: "", email: "", status: "Active" });
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!newEmployee.first_name || !newEmployee.last_name || !newEmployee.department || !newEmployee.email) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      employee_code: newEmployee.employee_code || `EMP${String(Date.now()).slice(-4)}`,
      first_name: newEmployee.first_name,
      last_name: newEmployee.last_name,
      department: newEmployee.department,
      email: newEmployee.email,
      status: newEmployee.status,
    };

    try {
      if (editingEmployee) {
        await fetch(`${API_URL}/${editingEmployee.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      await fetchEmployees();
      setNewEmployee({ employee_code: "", first_name: "", last_name: "", department: "", email: "", status: "Active" });
      setEditingEmployee(null);
      setShowForm(false);
    } catch (error) {
      console.error("Failed to save employee", error);
      alert("Unable to save employee");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      await fetchEmployees();
    } catch (error) {
      console.error("Failed to delete employee", error);
      alert("Unable to delete employee");
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setNewEmployee({
      employee_code: employee.employee_code || "",
      first_name: employee.name ? employee.name.split(" ")[0] : "",
      last_name: employee.name ? employee.name.split(" ").slice(1).join(" ") : "",
      department: employee.department,
      email: employee.email,
      status: employee.status,
    });
    setShowForm(true);
  };

  const activeEmployees = employees.filter((emp) => emp.status === "Active").length;
  const departmentCount = new Set(
    employees.map((emp) => emp.department).filter(Boolean)
  ).size;

  const filteredEmployees = employees.filter((emp) => {
    const query = searchTerm.toLowerCase();
    return [emp.name, emp.department, emp.email, emp.status, emp.employee_code].some((value) =>
      value?.toLowerCase().includes(query)
    );
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-slate-800">Employee Management</h1>

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
          <h1 className="text-4xl font-bold mt-2">{employees.length}</h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-2xl shadow">
          <h3>Active Employees</h3>
          <h1 className="text-4xl font-bold mt-2">{activeEmployees}</h1>
        </div>

        <div className="bg-orange-500 text-white p-5 rounded-2xl shadow">
          <h3>Departments</h3>
          <h1 className="text-4xl font-bold mt-2">{departmentCount}</h1>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <input
          type="text"
          placeholder="Search Employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
            {filteredEmployees.map((emp) => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
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
                    onClick={() => handleEdit(emp)}
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

      {/* Add/Edit Employee Popup */}
      {showForm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
          <div className="w-[450px] max-w-[90vw] rounded-2xl bg-white p-8 shadow-xl z-[1000]">
            <h2 className="text-2xl font-bold mb-5">
              {editingEmployee ? "Edit Employee" : "Add Employee"}
            </h2>

            <input
              type="text"
              placeholder="Employee Code"
              value={newEmployee.employee_code}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  employee_code: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              placeholder="First Name"
              value={newEmployee.first_name}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  first_name: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={newEmployee.last_name}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  last_name: e.target.value,
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
                onClick={() => {
                  setShowForm(false);
                  setEditingEmployee(null);
                  setNewEmployee({ employee_code: "", first_name: "", last_name: "", department: "", email: "", status: "Active" });
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                {editingEmployee ? "Save Changes" : "Add Employee"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}