import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, getUserRole } from "../../utils";

type AuthContextProps = {
  currentUser: User | null;
  userLoggedIn: boolean;
  isLoading: boolean;
  userRole: string | null;
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  userLoggedIn: false,
  isLoading: false,
  userRole: null,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  const initializeUser = async (user: User | null) => {
    if (user) {
      const uid = user.uid;
      
      const userRole = await getUserRole(uid);

      setUserRole(userRole)

      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, isLoading, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
