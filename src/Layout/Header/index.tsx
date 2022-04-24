
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <h1 className="Header__logo-text">Mat-Tickets</h1>
      </div>
      <div className="Header__auth">
        <a href="/">Login</a>
        <a href="/">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
