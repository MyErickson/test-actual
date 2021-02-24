import axios from 'axios';
import {info_User_Action} from "../actionCreator/Home"


export const request_Put_Info= async (value)=>{

    const { id,first_name, last_name , birthday } = value.action.data
 
    const { store } = value

    try{
        const res = await axios.put(`users/${id}`,{
            first_name,
            last_name,
            birthday
        })

    
        store.dispatch(info_User_Action(res.data))

    }catch(err){
 
        
        store.dispatch(info_User_Action(false))
    }
    
}