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
        style={{ top: '0px', left: '200px', width: '180px', height: '100px' }} 
        onClick={toggleMode}
      >
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '140px', left: '70px', width: '370px', height: '450px' }} 
        onClick={() => openLink('https://josiexw.github.io/jw-resume.pdf')}
      >
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '110px', left: '720px', width: '280px', height: '80px' }} 
        onClick={() => openLink('https://github.com/josiexw')}
      >
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '110px', left: '1000px', width: '280px', height: '80px' }} 
        onClick={() => openLink('https://www.linkedin.com/in/josiexw/')}
      >
      </div>
    </div>
  );
}

export default App;
