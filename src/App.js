import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false); // New state to handle click effect

  const handleClick = () => {
    if (clickCount < 4) {
      setClickCount(clickCount + 1);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'We see you!',
        confirmButtonColor: '#d33',
        background: '#000',
        color: '#fff',
        showCancelButton: false, // Hides the cancel button
        showConfirmButton: false, // Hides the confirm button
        willClose: () => {
          // Optional: Do something when the alert is closed
        }
      });
    }
    setIsClicked(true); // Set clicked state to true
    setTimeout(() => {
      setIsClicked(false); // Reset clicked state after 300ms
    }, 300);
  };

  return (
    <div className="App">
      <div className="button-container">
        <button
          className={`big-button ${isClicked ? 'clicked' : ''}`} // Add class based on click state
          onClick={handleClick}
        >
          Click!
        </button>
      </div>
    </div>
  );
}

export default App;