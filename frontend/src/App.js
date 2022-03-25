import logo from './logo.svg';
import './App.css';
import Signup from './pages/forms/Signup';
import Signin from './pages/forms/Signin';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Signin/>
      <Footer/>
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
