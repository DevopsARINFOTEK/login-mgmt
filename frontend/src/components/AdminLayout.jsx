import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 flex-1 min-h-screen bg-gray-100 p-8">
        {children}
      </div>
    </div>
  );
}