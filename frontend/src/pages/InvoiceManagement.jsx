import AdminLayout from "../components/AdminLayout";

const invoices = [
  { id: "INV001", client: "Tech Labs", amount: "₹45,000", due: "15 Jun", status: "Paid" },
  { id: "INV002", client: "BrightWorks", amount: "₹18,500", due: "22 Jun", status: "Pending" },
  { id: "INV003", client: "NovaSoft", amount: "₹27,000", due: "30 Jun", status: "Overdue" },
];

export default function InvoiceManagement() {
  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Invoice Management</h1>
        <p className="text-slate-600">Review invoices, due dates, and payment status.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-800 p-5 text-white shadow">Total Invoiced <div className="mt-2 text-3xl font-bold">₹90K</div></div>
        <div className="rounded-2xl bg-green-600 p-5 text-white shadow">Paid <div className="mt-2 text-3xl font-bold">₹68K</div></div>
        <div className="rounded-2xl bg-red-500 p-5 text-white shadow">Overdue <div className="mt-2 text-3xl font-bold">₹22K</div></div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-6 shadow-lg">
        <table className="min-w-[700px] w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">Invoice ID</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Due Date</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b">
                <td className="px-4 py-3">{invoice.id}</td>
                <td className="px-4 py-3">{invoice.client}</td>
                <td className="px-4 py-3">{invoice.amount}</td>
                <td className="px-4 py-3">{invoice.due}</td>
                <td className="px-4 py-3"><span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{invoice.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}