import {Fragment} from 'react'
import { useNavigate } from 'react-router-dom';  
const Contact = () =>{
   const navigate = useNavigate();  
   return <Fragment>
      <h1>Contact</h1>
      <button onClick={() => navigate("/")}>Go to home</button>
    </Fragment>
};

  export default Contact