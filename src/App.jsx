import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageRoutes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  const url = useLocation().pathname;
  useEffect(()=>{
    window.scrollTo(0,0);
  },[url])
  return (
    <div className="App">
      <ToastContainer />
      <PageRoutes />
    </div>
  )
}

export default App
