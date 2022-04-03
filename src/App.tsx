import { useLayoutEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import TrackingLocationChanged from "./components/TrackingLocationChanged";

function App() {
  console.log("render App");

  useLayoutEffect(() => {
    console.log("document.defaultView", document.defaultView);

    window.addEventListener("popstate", () => {
      console.log('window.addEventListener("popstate")::URL changed');
    });
  }, []);

  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/expenses2">Expenses2</Link> |{" "}
        <Link to="/auth">Auth example</Link> |{" "}
        <Link to="/lazy-loading">Lazy Loading example</Link> |{" "}
        <Link to="/route-objects">Route Objects example</Link> |{" "}
        <Link to="/use-outlet-context">useOutletContext</Link> |{" "}
        <Link to="/createRoutesFromChildren">
          createRoutesFromChildren helper
        </Link>{" "}
        |{" "}
      </nav>
      <Outlet />
      <TrackingLocationChanged />
    </div>
  );
}

export default App;
