import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth";

const Header = () => {
  const { logout } = useAuth();

  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUsername(parsedUser.username);
    }
  }, []);

  if (username !== "") {
    return (
      <div className="Header">
        <div className="Header__logo">
          <a href="/">
            <h1 className="Header__logo-text">Mat-Tickets</h1>{" "}
          </a>
        </div>
        <div className="Header__auth">
        <button onClick={logout}>Logout</button>
        <p>{username}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Header">
        <div className="Header__logo">
          <a href="/">
            <h1 className="Header__logo-text">Mat-Tickets</h1>{" "}
          </a>
        </div>
        <div className="Header__auth">
          <a href="/login">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    );
  }
};

export default Header;
