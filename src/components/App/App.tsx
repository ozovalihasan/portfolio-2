import { useEffect, useState } from "react";
import Loader from '../Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">(localStorage.theme);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';

    if (updatedTheme === "light") {
      document.querySelector(':root')?.classList.remove("dark")
    } else {
      document.querySelector(':root')?.classList.add("dark")
    }
    
    setTheme(updatedTheme);
    localStorage.theme = updatedTheme;
  };

  useEffect(() => {   
    if (theme === "light") {
      document.querySelector(':root')?.classList.remove("dark")
    } else {
      document.querySelector(':root')?.classList.add("dark")
    }
  }, []);

  window.onload = () => {
    setLoading(false);
  };


  return (
    <div className="bg-first h-screen w-full">
      {loading && <Loader />}

      <button onClick={toggleTheme}> Dark / Light </button>
    </div>
  )
}

export default App
