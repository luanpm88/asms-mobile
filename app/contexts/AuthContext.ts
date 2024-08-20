import { createContext } from "react";
import { User } from "react-native-gifted-chat";

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
