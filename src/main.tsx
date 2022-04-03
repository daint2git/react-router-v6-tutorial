import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./routes/Invoices";
import Expenses from "./routes/Expenses";
import NotFound from "./routes/NotFound";
import Invoice from "./routes/Invoice";
import IndexInvoice from "./routes/IndexInvoice";
import NewInvoice from "./routes/NewInvoice";
import Expense from "./routes/Expense";
import NewExpense from "./routes/NewExpense";
import ExpenseLayout from "./components/ExpenseLayout";
import Expenses2 from "./routes/Expenses2";
import AuthRoot from "./routes/Auth/Root";
import LazyLoadingRoot from "./routes/LazyLoading/Root";
import RouteObjects from "./routes/RouteObjects";
import UseOutletContext from "./routes/UseOutletContext";
import Helper_createRoutesFromChildren from "./routes/Helper_createRoutesFromChildren";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/invoices" element={<Invoices />}>
            <Route index element={<IndexInvoice />} />
            <Route path=":invoiceNumber" element={<Invoice />} />
            <Route path="new" element={<NewInvoice />} />
          </Route>

          <Route element={<ExpenseLayout />}>
            <Route path="/expenses" element={<Expenses />}>
              <Route path=":id" element={<Expense />} />
              <Route path="new" element={<NewExpense />} />
            </Route>

            <Route path="/expenses2/*" element={<Expenses2 />} />
          </Route>

          <Route path="/auth/*" element={<AuthRoot />} />

          <Route path="/lazy-loading/*" element={<LazyLoadingRoot />} />

          <Route path="/route-objects/*" element={<RouteObjects />} />

          <Route path="/use-outlet-context/*" element={<UseOutletContext />} />
          <Route
            path="/createRoutesFromChildren/*"
            element={<Helper_createRoutesFromChildren />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
