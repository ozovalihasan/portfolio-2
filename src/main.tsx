import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, redirect, Routes, useLocation } from "react-router-dom";
import { routes } from './components/store';
import App from './components/App/App'
import "./main.css"

const redirectTo = async (url: string) => {
  window.location.href = url;
}

const RedirectedLiveLink = () => {
  let { pathname } = useLocation();
  
  pathname = pathname.replace(/^\//, "")
  const route = routes[pathname as ( (keyof typeof routes))]

  setTimeout(() => {
    redirectTo(route || "/" )
  }, 2000);

  return <div className='w-screen h-screen text-center flex flex-col justify-center items-center text-fifth bg-third'>
    <div>
      {
        route
          ? "Thanks for checking this project."
          : "The page is not found."
      }
    </div>
    <div className='w-3/4 pt-8'>
    {
      route
        ? "You are being redirected to the related page in a short time." 
        : "You are being redirected to the main page."
    }
      
    </div>

    <div className='animate-ping h-8 w-8 bg-first rounded-full mt-16'>

    </div>
  </div>;
}

const Base = () => {
  

  return (
    <React.StrictMode>
      <Router>
        <Routes>

          <Route 
            path='/*' 
            element={
              <RedirectedLiveLink />
            } 
          />
          
          <Route path='/' element={<App />}/>
        </Routes>
      </Router>
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Base></Base>,
)
