import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice, TInvoice } from "../data";

export default function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ invoiceNumber?: string }>();
  const invoiceNumber = parseInt(params.invoiceNumber!, 10);
  const [invoice, setInvoice] = useState<TInvoice>();

  console.log("render Invoice");
  console.log("location.state", location.state);

  useLayoutEffect(() => {
    async function fetchInvoice() {
      const data = await getInvoice(invoiceNumber);
      setInvoice(data);
    }

    fetchInvoice();
  }, [invoiceNumber]);

  if (!invoice) return <div>Loading...</div>;

  const handleDeleteInvoice = async () => {
    await deleteInvoice(invoice.number);
    navigate("/invoices" + location.search, {
      state: {
        isForceRefresh: true,
      },
    });
  };

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <div>
        <button onClick={handleDeleteInvoice}>Delete</button>
      </div>
    </main>
  );
}
