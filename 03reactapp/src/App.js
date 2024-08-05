// import './App.css';
// import G1 from './component/G1.js'
// function App() {
//   return (
//     <div className="App">
//         <G1/>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes,NavLink } from "react-router-dom";  
import Contact from "./component/Contact";
import About  from "./component/About";
import Detail from "./component/Detail";
import C1 from './component/C1'
import C2 from './component/C2'
import C3 from './component/C3'
import C4 from './component/C4'




import store from './store/index.js';

export default function App() {  
  return (  
    <Router>  
      <main>  
        <nav>  
          <ul>  
            <li>  
              <a href="/">Home</a>  
            </li>  
            <li>  
              <a href="/about">About</a>  
            </li>  
            <li>  
              <a href="/contact">Contact</a>  
            </li>  
            <C1 store={store}/>
            <C2 />
            <C3 />
            <C4 />



          </ul>  
          <NavLink to="/" exact activeStyle={{color: "red"}}>首页</NavLink>

          {/* {userName && (  
          <NavLink to={`/about/${userName}`}>About</NavLink>  
        )}   */}
          <NavLink to="/about/tom" activeStyle={{color: "red"}}>关于</NavLink>
          <NavLink to="/contact" activeStyle={{color: "red"}}>链接</NavLink>
          <NavLink to={{
              pathname: "/detail2", 
              query: {name: "kobe", age: 30},
              state: {height: 1.98, address: "洛杉矶"},
              search: "?apikey=123"
            }}>
            详情2
        </NavLink>
        <NavLink to="/detail2?apikey=why&age=18">详情2</NavLink>
        </nav>  
        <Routes>  
          <Route path="/" element={<h1>Welcome to Home!</h1>} />  
          <Route path="/about/:name" element={<About/>} />  
          <Route path="/contact" element={ <Contact/> } />  
          <Route path="/detail2" element={ <Detail/> } />  

        </Routes>  
       
      </main>  
    </Router>  
  );  
}