import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { fakeAuthProvider } from "../../auth";

interface IAuthContext {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<IAuthContext>(null!);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  const signIn = useCallback((newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  }, []);

  const signOut = useCallback((callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),
    [user, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
