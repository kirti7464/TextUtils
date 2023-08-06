import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] =useState("light")
  const [alert,setAlert] =useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#2C3E50"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextHelper' mode={mode} toggleMode={toggleMode}/> 
     <Alert  alert={alert}/> 
      <div className='container my-3'>
      <Routes>
         {/* <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter some text" mode={mode} />
          </Route> */}
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter some text" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
         
        </Routes>
        
        {/* <About /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
