import './Style.css';
import { useState } from "react";

function Header({ balance, user, onLogin, onLogout }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="header">
      <div className="logo">My Company</div>
      <div className="balance">{`$${balance.toFixed(2)}`}</div>
      {user ? (
        <div className="avatar-logout">
          <div className="avatar">{user.name.charAt(0)}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> 
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
export default Header