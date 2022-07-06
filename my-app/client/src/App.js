import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Body from "./components/body/Body";
import "./styles.css";
import { BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
},[token, dispatch])


  return (
    <Router>
      <Navbar />
      <Body />
      <ScrollButton/>
      <Footer />
    </Router>
  );
}

export default App;
