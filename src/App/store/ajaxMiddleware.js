import axios from 'axios';

import {  GET_USER,PUT_INFORMATION } from './reducer'
import { request_Get_User } from './request/Home'
import { request_Put_Info } from './request/Informations'


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

    case PUT_INFORMATION :
      next(action);

      let valueInfo ={}
      valueInfo.action = action
      valueInfo.store = store

      await request_Put_Info(valueInfo)
    
    break;
   
    default:
      next(action);
  }
};
export default ajaxMiddleware;
