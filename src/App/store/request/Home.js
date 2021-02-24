import axios from 'axios';
import {info_User_Action} from "../actionCreator/Home"


export const request_Get_User= async (value)=>{

    const { id } = value.action
    const { store } = value

   

    try{
        const res = await axios.get(`users/${id}`)
        console.log("🚀 ~ file: Home.js ~ line 14 ~ constrequest_Get_User= ~ res", res)
      
        store.dispatch(info_User_Action(res.data.data))

    }catch(err){
 
        
        store.dispatch(info_User_Action(false))
    }
    
}