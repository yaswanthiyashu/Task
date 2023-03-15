import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameTable from './components/Gametable';

function App() {
  const [balance, setBalance] = useState(10);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      setUser(JSON.parse(userString));
    }
    const balanceString = localStorage.getItem("balance");
    if (balanceString) {
      setBalance(parseFloat(balanceString));
    }
  }, []);

  const handleLogin = (email, password) => {
    // Perform login logic and set user object
    const user = { name: "John Doe", email };
    setUser(user);

    // Set user data in local storage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("balance", balance);
  };

  const handleLogout = () => {
    // Perform logout logic and unset user object
    setUser(null);

    // Remove user data from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("balance");
  };

  return (
    <div className="app">
      <Header
        balance={balance}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <GameTable balance={balance} setBalance={setBalance}/>
      <Footer />
    </div>
  );
}
 

export default App;
