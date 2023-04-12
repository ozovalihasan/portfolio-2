import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, redirect, Routes } from "react-router-dom";
import store from './components/store';
import App from './components/App/App'
import "./main.css"

const redirectTo = async (url: string) => {
  window.location.href = url;
}

const RedirectedLiveLink = ({url}: {url: string}) => {
  setTimeout(() => {
    redirectTo(url)
  }, 2000);

  return <div className='w-screen h-screen text-center flex flex-col justify-center items-center text-fifth bg-third'>
    <div>
      Thanks for checking this project.
    </div>
    <div className='w-3/4 pt-8'>
      You are being redirected to the live demo of the project in a short time.
    </div>

    <div className='animate-ping h-8 w-8 bg-first rounded-full mt-16'>

    </div>
  </div>;
}

const Base = () => {
  const { projects } = useContext(store);

  return (
    <React.StrictMode>
      <Router>
        <Routes>

          <Route 
            path='/ead' 
            element={
              <RedirectedLiveLink url={projects.find(({name}) => name === "EAD")?.liveLink || ""} />
            } 
          />
          <Route 
            path='/dr-ti' 
            element={
              <RedirectedLiveLink url={projects.find(({name}) => name === 'Dr. Ti')?.liveLink || ""} />
            } 
          />
          <Route 
            path='/whistle' 
            element={
              <RedirectedLiveLink url={projects.find(({name}) => name === 'Whistle')?.liveLink || ""} />
            } 
          />
          <Route 
            path='/escape' 
            element={
              <RedirectedLiveLink url={projects.find(({name}) => name === 'Escape')?.liveLink || ""} />
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
