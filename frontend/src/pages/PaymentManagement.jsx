import AdminLayout from "../components/AdminLayout";

const payments = [
  { id: "PAY001", name: "John Doe", amount: "₹25,000", type: "Salary", status: "Completed" },
  { id: "PAY002", name: "Jane Smith", amount: "₹18,000", type: "Bonus", status: "Pending" },
  { id: "PAY003", name: "Mike Johnson", amount: "₹12,500", type: "Claim", status: "Completed" },
];

export default function PaymentManagement() {
  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Payment & Receipt Management</h1>
        <p className="text-slate-600">Track salary payments, bonuses, and receipts in one place.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-green-600 p-5 text-white shadow">Total Paid <div className="mt-2 text-3xl font-bold">₹1.2L</div></div>
        <div className="rounded-2xl bg-blue-600 p-5 text-white shadow">Pending <div className="mt-2 text-3xl font-bold">₹42K</div></div>
        <div className="rounded-2xl bg-slate-700 p-5 text-white shadow">Receipts <div className="mt-2 text-3xl font-bold">156</div></div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-lg">
        <table className="min-w-[700px] w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b">
                <td className="px-4 py-3">{payment.id}</td>
                <td className="px-4 py-3">{payment.name}</td>
                <td className="px-4 py-3">{payment.type}</td>
                <td className="px-4 py-3">{payment.amount}</td>
                <td className="px-4 py-3"><span className="rounded-full bg-green-100 px-3 py-1 text-green-700">{payment.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}