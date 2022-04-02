import { Outlet } from "react-router-dom";

export default function ExpenseLayout() {
  return (
    <main style={{ padding: "1rem 0", backgroundColor: "yellowgreen" }}>
      <Outlet />
    </main>
  );
}
