import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Menu from './components/menu-desktop';
import { useState } from 'react';

function App() {
  const[isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Navbar handleClick={handleClick} />
      {isVisible && <Menu handleClick={handleClick} />}
      <div className="z-0 flex items-center justify-center pt-72 md:px-[100px]">
        <div className="hidden mr-8 shrink-0 md:block md:w-[250px] md:h-[445px] bg-black rounded-lg lg:w-[337px] lg:h-[600px]">

        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold my-4 lg:text-5xl">Introducing Snapchat+</h1>
          <h3 className="md:text-lg md:font-bold mb-3 lg:text-2xl">Be first to access unique and pre-release features for only $3.99/month.</h3>
          <button className="text-lg font-bold bg-black text-white rounded-full px-6 py-2 transition duration-300 ease-in-out hover:scale-110">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default App;