import { useEffect } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// import ReactGA from 'react-ga4';
// ReactGA.initialize('G-R2R4010YVC')

function App() {

  useEffect(() => {
    console.log('Daniel emitiendo pageview');
    window.gtag('config', 'G-R2R4010YVC', {
      page_path: window.location.pathname,
    });

  }, []);

  const handleClick1 = () => {
    console.log('Daniel emitiendo evento');
    window.gtag('event', 'button_click_params', {
      value: 1,
      userId:12312,
      userName:'Daniel Montenegro',
      companyId:42,
      sessionId:'123123123'
    });

  }
  const handleClick2 = () => {
    console.log('Daniel emitiendo evento 2');

  }
  const handleClick3 = () => {
    console.log('Daniel emitiendo evento 3');

  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleClick1()}>
          click en 1
        </button>
        <button onClick={() => handleClick2()}>
          click en 2
        </button>
        <button onClick={() => handleClick3()}>
          click en 3
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


