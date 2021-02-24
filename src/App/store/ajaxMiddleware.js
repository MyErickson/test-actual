import axios from 'axios';

import {  GET_USER } from './reducer'
import { request_Get_User } from './request/Home'


const ajaxMiddleware = store => next => async (action) => {

    
  axios.defaults.baseURL = 'https://reqres.in/api/'
  next(action);

  switch (action.type) {

    case GET_USER:
      next(action)

      let valueUser = {}
      valueUser.action = action
      valueUser.store = store

      await request_Get_User(valueUser)

    break;

   
    default:
      next(action);
  }
};
export default ajaxMiddleware;
