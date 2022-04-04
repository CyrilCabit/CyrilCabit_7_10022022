import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Connect from './components/Connect';
import Session from './pages/Session';
import Home from './pages/home/Home';
import {NewPost, GetOnePost} from  './components/post/Post'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      
      {/* <Header/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="login" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="post" element={<NewPost />} /> */}
        <Route path="/" element={<Connect><Session /></Connect> } />

      </Routes>

      {/* <Post/>  */}
     
      {/* <Footer/> */}
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
