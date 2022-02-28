import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"; 

function App() {

  const [mode,setMode]= useState("light");

  const [textChange,setTextChange]=useState("Enable Dark Mode");

  const toggleMode=()=>{
    if(mode ==='light'){
       setMode('dark');
       setTextChange("Enable Light Mode");
    }else {
      setMode('light');
      setTextChange("Enable Dark Mode");
    }
  }


  return (

    <>
    {/* <Router> */}

    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode} textChange={textChange}  />
    <div className="container my-3">
    {/* <Switch>
          <Route path="/about">
            <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <Textform heading="Enter the text to analyze below" /> 
          {/* </Route>
        </Switch> */}
    
   
  
</div>
{/* </Router> */}
    </>
  );
}

export default App;
