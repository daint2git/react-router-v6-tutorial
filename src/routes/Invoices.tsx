import { useLayoutEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
// import QueryNavLink from "../components/QueryNavLink";
import InvoiceLink from "../components/InvoiceLink";
import { getInvoices, TInvoice } from "../data";

export default function Invoices() {
  const [invoices, setInvoices] = useState<TInvoice[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("render Invoices");

  useLayoutEffect(() => {
    console.log("render Invoices::useLayoutEffect");

    const fetchInvoices = async () => {
      const filter = searchParams.get("filter") || undefined;
      const data = await getInvoices({ name: filter });
      setInvoices(data);
    };

    fetchInvoices();
  }, [searchParams, location.state]);

  useLayoutEffect(() => {
    return () => {
      console.log("unmounted Invoices");
    };
  }, []);

  const handleNavigateNewInvoice = () => {
    navigate("new");
  };

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") ?? ""}
          onChange={(event) => {
            const filter = event.target.value;

            setSearchParams(filter ? { filter } : {});
          }}
        />
        <br />
        <button type="button" onClick={handleNavigateNewInvoice}>
          New invoice
        </button>
        {invoices.map((invoice) => (
          // <QueryNavLink
          //   style={({ isActive }) => ({
          //     display: "block",
          //     margin: "1rem 0",
          //     color: isActive ? "green" : "",
          //   })}
          //   to={`/invoices/${invoice.number}`}
          //   key={invoice.number}
          // >
          //   {invoice.name}
          // </QueryNavLink>

          <InvoiceLink
            key={invoice.number}
            number={invoice.number}
            state={{ fromInvoices: true }}
          >
            {invoice.name}
          </InvoiceLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
