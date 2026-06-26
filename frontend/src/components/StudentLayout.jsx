export default function StudentLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        {children}
      </div>
    </div>
  );
}
