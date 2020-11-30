const initState={
    name: "Neiko"
};

export default (state=initState, action)=>{

    console.log(action);

    switch(action.type){
        case authCanstants.LOGIN_REQUEST:
            sate={
                ...state,
                ...action.payload
            }
            break;
    }

    return state;
}