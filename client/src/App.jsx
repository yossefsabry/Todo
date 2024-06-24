import { useEffect,  useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Home from "./pages/Home"
function App() {
  const naviagter = useNavigate();
  const [login, ] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if ( login == null ) 
      naviagter("/sign");
  }, [login])

  return (
    <>
      { login != null ?
        <Home />
        : <h4>not authorization</h4> 
      }
    </>
  )
}

export default App
