import React, { useState } from "react";
import {
  createRoutesFromChildren,
  Outlet,
  Route,
  Routes,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useMatch,
  useOutletContext,
  useResolvedPath,
} from "react-router-dom";
import type { To } from "react-router-dom";

export default function Index() {
  const inRouter = useInRouterContext();
  const routes = createRoutesFromChildren(
    <Route path="/" element={<Parent />}>
      <Route path="child-1" element={<Child1 />} />
      <Route path="child-2" element={<Child2 />} caseSensitive />
    </Route>
  );
  const match = useMatch("createRoutesFromChildren");
  console.log("routes", routes);
  console.log("inRouter", inRouter);
  console.log("match", match);

  return (
    <Routes>
      <Route path="/" element={<Parent />}>
        <Route path="child-1" element={<Child1 />} />
        <Route path="child-2" element={<Child2 />} caseSensitive />
      </Route>
    </Routes>
  );
}

const CustomLink = React.forwardRef<
  any,
  {
    onClick?: (val: any) => void;
    replace?: boolean;
    state?: any;
    target?: string;
    to: To;
    children: string;
  }
>(({ onClick, replace = false, state, target, to, ...rest }, ref) => {
  let href = useHref(to);
  let handleClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
  });
  const pathResolved = useResolvedPath(to);

  console.log("href", href);
  console.log("handleClick", handleClick);
  console.log("to", to);
  console.log("pathResolved", pathResolved);

  return (
    <a
      {...rest}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          handleClick(event);
        }
      }}
      ref={ref}
      target={target}
    />
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <CustomLink to="child-1">Child 1</CustomLink>
          </li>
          <li>
            <CustomLink to="child-2">Child 2</CustomLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet context={[count, setCount]} />
    </div>
  );
}

function Child1() {
  const [count, setCount] =
    useOutletContext<
      [count: number, setCount: React.Dispatch<React.SetStateAction<number>>]
    >();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}

function Child2() {
  const [count] =
    useOutletContext<
      [count: number, setCount: React.Dispatch<React.SetStateAction<number>>]
    >();
  return <p>Current count: {count}</p>;
}
