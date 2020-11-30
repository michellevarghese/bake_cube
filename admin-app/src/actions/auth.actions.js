import { authConstants } from "./constants"

export const login =(user) =>{
    return (dispatch) =>{

        console.log(user);

        dispatch({type: authConstants.LOGIN_REQUEST,
        payload:{
            ...user
        }
        });
    }
}