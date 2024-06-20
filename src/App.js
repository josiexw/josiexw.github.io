import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundImage = isDarkMode 
    ? '/images/dark-mode.svg' 
    : '/images/light-mode.svg';

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="App" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div 
        className="clickable-area" 
        style={{ top: '0%', left: '10%', width: '13%', height: '16%' }} 
        onClick={toggleMode}
      >
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '19.5%', left: '4%', width: '25%', height: '65%' }} 
        onClick={() => openLink('https://josiexw.github.io/jw-resume.pdf')}
      >
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '15%', left: '47%', width: '18%', height: '20%' }} 
        onClick={() => openLink('https://github.com/josiexw')}
      >
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '15%', left: '65%', width: '18%', height: '20%' }} 
        onClick={() => openLink('https://www.linkedin.com/in/josiexw/')}
      >
      </div>
    </div>
  );
}

export default App;
