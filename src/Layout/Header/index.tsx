import { useAuth } from "../../contexts/Auth";

const Header = () => {
  const { logout, getUser } = useAuth();
  const username = getUser();

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
