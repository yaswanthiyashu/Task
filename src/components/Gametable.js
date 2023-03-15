import './Style.css'
import React, { useState } from 'react';

function Game({balance, setBalance}) {
  //const [balance, setBalance] = useState(10);
  const [results, setResults] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSpin = () => {
    const symbols = ['♠', '♥', '♦', '♣', 'X', 'Y', 'Z'];
    const spinResult = [symbols[Math.floor(Math.random() * symbols.length)],
                       symbols[Math.floor(Math.random() * symbols.length)],
                       symbols[Math.floor(Math.random() * symbols.length)]];
    let spinCost = 2;
    if (spinResult.every(symbol => symbol === 'X')) {
      setBalance(balance + 2);
    } else if (spinResult.every(symbol => symbol === '♠')) {
      setBalance(balance + 5);
    } else if (spinResult.includes('X') && spinResult.includes('Y')) {
      setBalance(balance + 0.5);
    } else if (spinResult.includes('X') && spinResult.includes('Z')) {
      setBalance(balance + 0.5);
    } else if (spinResult.includes('Y') && spinResult.includes('Z')) {
      setBalance(balance + 0.5);
    } else {
      spinCost = 0;
    }
    setResults([{ id: results.length + 1, slots: spinResult.join(''), time: new Date().toLocaleString() }, ...results]);
    setBalance(balance - spinCost);
    if (balance - spinCost < 2) {
      setPopupOpen(false);
      alert('Game Over!');
    }
  };

  const handleDebug = () => {
    const spinResult = ['♠', '♠', '♠'];
    setResults([{ id: results.length + 1, slots: spinResult.join(''), time: new Date().toLocaleString() }, ...results]);
    setBalance(balance + 5);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className='container'>
      <button onClick={handleOpenPopup}>Start Game</button>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Slots</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {results.slice(0, 10).map(result => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.slots}</td>
              <td>{result.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {popupOpen && (
        <div>
          <div>
            <span>Balance: ${balance.toFixed(2)}</span>
            <button onClick={handleClosePopup}>Close</button>
          </div>
          <div>
            <span>{results.length > 0 ? `Last spin: ${results[0].slots}` : ''}</span>
            <button onClick={handleDebug}>Debug</button>
            <button onClick={handleSpin} disabled={balance < 2}>Spin</button>
          </div>
          <div>
            <span>Slot 1: </span><span>{results.length > 0 ? results[0].slots[0] : ''}</span>
          </div>
          <div>
            <span>Slot 2: </span><span>{results.length > 0 ? results[0].slots[0] : ''}</span>
          </div>
          <div>
            <span>Slot 3: </span><span>{results.length > 0 ? results[0].slots[0] : ''}</span>
          </div>
        </div>
      )}
    </div>
  )     
}
export default Game;       
