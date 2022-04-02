import { CSSProperties } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Expense from "./Expense";
import NewExpense from "./NewExpense";

const linkStyle: CSSProperties = {
  display: "block",
};

export default function Expenses2() {
  return (
    <div style={{ padding: "1rem 0", backgroundColor: "coral" }}>
      <h2>Expenses</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="123" style={linkStyle}>
          Expense 123
        </Link>
        <Link to="456" style={linkStyle}>
          Expense 456
        </Link>
        <Link to="new" style={linkStyle}>
          New Expense
        </Link>
      </nav>

      <Routes>
        <Route path=":id" element={<Expense />} />
        <Route path="new" element={<NewExpense />} />
      </Routes>

      <Outlet />
    </div>
  );
}
