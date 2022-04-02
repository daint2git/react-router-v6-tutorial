import { CSSProperties } from "react";
import { Link, Outlet } from "react-router-dom";

const linkStyle: CSSProperties = {
  display: "block",
};

export default function Expenses() {
  return (
    <div style={{ padding: "1rem 0", backgroundColor: "yellow" }}>
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
      <Outlet />
    </div>
  );
}
