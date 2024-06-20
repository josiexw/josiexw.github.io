import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundImage = isDarkMode 
    ? '/images/dark-mode.svg' 
    : '/images/light-mode.svg';

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (isMobile) {
    return (
      <div className="App">
        <div className="buttons">
          <button onClick={() => openLink('https://josiexw.github.io/jw-resume.pdf')}>Open resume</button>
          <button onClick={() => openLink('https://github.com/josiexw')}>Go to GitHub</button>
          <button onClick={() => openLink('https://www.linkedin.com/in/josiexw/')}>Go to LinkedIn</button>
        </div>
      </div>
    );
  }

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
        <div className="tooltip">Change light/dark mode</div>
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '19.5%', left: '4%', width: '25%', height: '25%' }} 
        onClick={() => openLink('https://josiexw.github.io/jw-resume.pdf')}
      >
        <div className="tooltip">Open resume</div>
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '15%', left: '47%', width: '18%', height: '20%' }} 
        onClick={() => openLink('https://github.com/josiexw')}
      >
        <div className="tooltip">Go to GitHub</div>
      </div>
      <div 
        className="clickable-area" 
        style={{ top: '15%', left: '65%', width: '18%', height: '20%' }} 
        onClick={() => openLink('https://www.linkedin.com/in/josiexw/')}
      >
        <div className="tooltip">Go to LinkedIn</div>
      </div>
    </div>
  );
}

export default App;
