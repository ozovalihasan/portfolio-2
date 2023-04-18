import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import RedirectedLink from "../RedirectedLink/RedirectedLink";

const App = () => {
  
  return (
    <Router>
        <Routes>
    
        <Route 
            path='/*' 
            element={
              <RedirectedLink />
            } 
        />
        
        <Route path='/' element={<MainPage />}/>
        </Routes>
    </Router>
  )
}

export default App