import React, { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Parent />}>
        <Route path="child-1" element={<Child1 />} />
        <Route path="child-2" element={<Child2 />} caseSensitive />
      </Route>
    </Routes>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="child-1">Child 1</Link>
          </li>
          <li>
            <Link to="child-2">Child 2</Link>
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
