import EmployeeSidebar from "./EmployeeSidebar";

export default function EmployeeLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <EmployeeSidebar />

      <div className="ml-64 flex-1 p-8">
        {children}
      </div>

    </div>
  );
}