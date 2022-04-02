import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <p>Welcome {auth.user}!</p>
      <button
        onClick={() =>
          auth.signOut(() => {
            navigate("/auth");
          })
        }
      >
        Sign out
      </button>
    </div>
  );
}

export default function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/auth">Public Page</Link>
        </li>
        <li>
          <Link to="/auth/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
