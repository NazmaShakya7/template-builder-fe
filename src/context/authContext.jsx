import { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";
export const initialAuthState = {
  accessToken: "",
  username: "",
};
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const userDetails = cookies?.get("userDetails") ||
    initialAuthState;
  const [auth, setAuth] = useState(userDetails);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);