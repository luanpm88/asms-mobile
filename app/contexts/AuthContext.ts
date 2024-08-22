import { createContext } from "react";

interface AuthContextType {
  user: any;
  setUser: any;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  setUser: null,
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export default AuthContext;
