import { CLEAR_ERRORS, LOADING_UI, LOADING_USER, SET_ERRORS, SET_UNAUTHENTICATED, SET_USER } from '../type';

import axios from 'axios';
import history from '../../history';
import { toast } from "react-toastify";

const url = 'https://calm-anchorage-14244.herokuapp.com'

export const loginUser = (data, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post(`${url}/user/login`, data)
      .then(res => {
          console.log(res)
          setAuthorizationHeader(res.data.message);
          dispatch(getUser(history));
          dispatch({type: CLEAR_ERRORS});
          history.push('/');
      })
      .catch(err => {
          console.log(err)
          dispatch({
              type: SET_ERRORS,
              payload: err.response.data
          });
          toast.error(err.response.data.message)
      })
}

export const getUser = (history) => (dispatch) => {
    dispatch({type: LOADING_USER})
    axios.get(`${url}/user/me`)
    .then(res => {
        console.log('from A',res.data)
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: SET_ERRORS,
            payload: err
        })
        dispatch(logoutUser(history))
    })
}

export const signupUser = (newUserData) => (dispatch) => {
    console.log('got here')
    dispatch({type: LOADING_UI});
    axios.post(`${url}/user/`, newUserData)
      .then(res => {
          console.log(res)
          setAuthorizationHeader(res.data.message);
          dispatch(getUser());
          dispatch({type: CLEAR_ERRORS});
          history.push('/');
      })
      .catch(err => {
          dispatch({
              type: SET_ERRORS,
              payload: err.response.data
          })
          toast.error(err.response.data.message)
      })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('JWT_TOKEN');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type: SET_UNAUTHENTICATED})
    history.push('/');

}

export const uploadImage = (FormData) => (dispatch) => {
    dispatch({type: LOADING_USER})
    axios.post('/user/image', FormData)
    .then(res => {
        dispatch(getUser())
    })
    .catch(err => console.log(err))
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('JWT_TOKEN', FBIdToken)
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}