import { FunctionComponent } from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";

const QueryNavLink: FunctionComponent<
  {
    to: string;
  } & NavLinkProps
> = ({ to, ...rest }) => {
  const location = useLocation();

  // A location looks something like this:
  // {
  //   pathname: "/invoices",
  //   search: "?filter=sa",
  //   hash: "",
  //   state: null,
  //   key: "ae4cz2j"
  // }

  return <NavLink to={to + location.search} {...rest} />;
};

export default QueryNavLink;
