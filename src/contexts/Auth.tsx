import { createContext, useContext } from "react";
type User = {
  username: string;
  password: string;
};

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as any);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }: Props) => {

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("auth")) return true;
    return false;
  };

  const login = async ({ username, password }: User) => {
      console.log(username, password);
    if (username === "admin1" && password === "admin123456") {
      localStorage.setItem("auth", "abcdef");
      localStorage.setItem("user", JSON.stringify({ username }));
      window.location.href = "/";
    } else {
      console.log("error");
      alert("Invalid username or password");
    }
  };

  return <Provider value={{ logout, login, isLoggedIn }}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped witn AuthProvider");
  return context;
};
