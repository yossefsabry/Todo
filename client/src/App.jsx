import { useEffect,  useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Home from "./pages/Home"
import SignIn from './pages/Sign';
function App() {
  const naviagter = useNavigate();
  //const [login, ] = useState(localStorage.getItem("user"));
  const [login, ] = useState(true);
  useEffect(() => {
    if ( login == null ) 
      naviagter("/sign");
  }, [login])

  return (
    <>
      { login != null ?
        <Home />
        : <SignIn />
      }
    </>
  )
}

export default App
