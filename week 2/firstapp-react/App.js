// import logo from './logo.svg';
// import './App.css';
import Body from './components/body';
import Counter from './components/counter';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Maincss from './components/maincss';
import Productlist from './components/productlist';
import Slider from './components/slider';
import Statedemo from './components/statedemo';
import { useState } from "react";
import Login from './components/login';
import Register from './components/register';

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      {/* <Header/>
      <Statedemo />
      <br/>
      <Counter />
      <br/>
      <Productlist /> */}
      {/* <Login/>
      <Register/> */}

      <button className="my-3 btn btn-secondary w-100" onClick={() => setFlag(!flag)}>{flag? 'Register': 'Login'}</button>
      {flag ? <Login/> : <Register/>}
        

      {/* {
        flag? <h3>Valid</h3> :<h3>Not Valid</h3>
      }
      <button onClick={()=> setFlag(!flag)} >Change</button> */}
      
      {/* <Maincss/> */}
    
      {/* <Slider/>
      <Body/> */}
      {/* <Main/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
