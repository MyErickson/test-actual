import { INFO_USER , GET_USER} from '../reducer'

export const info_User_Action=(data)=>({
    type:INFO_USER,
    data
})

export const get_User_Action=(id)=>({
    type:GET_USER,
    id
})

