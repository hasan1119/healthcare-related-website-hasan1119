import { createContext } from "react";
import useFirebase from "../hooks/useFirebase.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
    const allAuthInfo = useFirebase();
    const data = {
      allAuthInfo,
    };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
