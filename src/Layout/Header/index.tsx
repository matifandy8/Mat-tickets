import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
       <a href="/"><h1 className="Header__logo-text">Mat-Tickets</h1> </a> 
      </div>
      <div className="Header__auth">
        <a href="/">Login</a>
        <a href="/">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
