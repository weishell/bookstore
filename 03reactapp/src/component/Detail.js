import { Fragment, useEffect } from "react";
// import {Redirect} from 'react-router-dom'
import { Navigate, useLocation,useParams, useSearchParams } from "react-router-dom";
const Detail = (props) => {
   
    const val = useLocation()// {pathname: '/detail2', search: '?apikey=123', hash: '', state: null, key: 'gv3sr6yo'}
    const [search] = useSearchParams() //123

    console.log(search.get('apikey'))

    // console.log(val1)
  return (
    <Fragment>
      <h1> Detail </h1>
    </Fragment>
  );
};

export default  Detail ;
