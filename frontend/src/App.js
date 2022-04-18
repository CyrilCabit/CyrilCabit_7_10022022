import './App.css';
import Connect from './components/Connect';
import Home from './pages/Home';
import HomeSignin from './pages/home/HomeSignin';
import HomeSignup from './pages/home/HomeSignup';
import { Routes, Route } from "react-router-dom";
import Comment from './pages/Comment'

function App() {
  return (
    <div>
      

      <Routes>
     
        <Route path="login" element={<HomeSignin />} />
        <Route path="signup" element={<HomeSignup />} />
        <Route path="/" element={<Connect><Home /></Connect> } />
        <Route path="post/:id" element={<Comment/>} />
        
        

      </Routes>

    </div>
    
     
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
