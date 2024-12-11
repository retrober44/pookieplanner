import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bild from './../src/img-background/3.png';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.Fragment>
      <div className="App" style={{ 
        backgroundImage: `url(${bild})`,  
        backgroundRepeat: 'repeat', 
        backgroundSize: 'auto', 
        backgroundPosition: 'center',
        width: '100%',  
        height: '100vh'
      }}> 
        <App />
      </div>
    </React.Fragment>
  );
}

// Optional webvitals
export default reportWebVitals();
