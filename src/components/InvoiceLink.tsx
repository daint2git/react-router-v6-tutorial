import { FunctionComponent } from "react";
import {
  NavLink,
  useLocation,
  useParams,
  NavLinkProps,
  useSearchParams,
  Link,
  LinkProps,
} from "react-router-dom";

const InvoiceLink: FunctionComponent<
  {
    number: number;
  } & Omit<LinkProps, "to">
> = ({ number, ...rest }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter") || "";
  const hasFilter = !!filter;
  let to = `/invoices/${number}`;
  const isActive = location.pathname === to;

  if (hasFilter) {
    to += `?filter${filter}`;
  }

  return (
    <Link
      to={to}
      style={{
        display: "block",
        margin: "1rem 0",
        color: isActive ? "green" : hasFilter ? "red" : "white",
      }}
      {...rest}
    />
  );
};

export default InvoiceLink;
