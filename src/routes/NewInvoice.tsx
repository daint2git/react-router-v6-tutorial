import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TInvoice, createInvoice } from "../data";

export default function NewInvoice() {
  const [formData, setFormData] = useState<Omit<TInvoice, "number">>(() => ({
    name: "",
    amount: "$123",
    due: "2021-04-02",
  }));
  const navigate = useNavigate();

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log("value", e.currentTarget.value);

    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const invoice = await createInvoice({
      ...formData,
      number: Date.now(),
    });

    navigate(`/invoices/${invoice.number}`);
  };

  return (
    <main style={{ padding: "1rem" }}>
      <h2>New invoice form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          name:
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="amount">
          amount:
          <input
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="due">
          due:
          <input
            id="due"
            name="due"
            type={"date"}
            value={formData.due}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
