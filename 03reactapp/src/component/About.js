import { Fragment, useEffect } from "react";
// import {Redirect} from 'react-router-dom'
import { Navigate, useLocation,useParams } from "react-router-dom";
const About = () => {
  const { name } = useParams();  
  const location = useLocation();

  useEffect(() => {
    console.log(name);
  }, [name, location]);

  // 如果 name 不是 "tom"，则重定向到根路径
  if (name !== "tom") {
    return <Navigate to="/" replace />; // 使用 Navigate 组件进行重定向
  }
  return (
    <Fragment>
      <h1>About {name}</h1>
    </Fragment>
  );
};

export default About;
