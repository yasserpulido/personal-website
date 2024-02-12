import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../utils";

type AuthContextProps = {
  currentUser: User | null;
  userLoggedIn: boolean;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  userLoggedIn: false,
  isLoading: false,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  const initializeUser = async (user: User | null) => {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setIsLoading(false);
  };


  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
