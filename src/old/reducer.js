

export const initialState = {
    name:"",
    email:""
}

 export const actionType = {
    SET_TERM: "SET_TERM",
    SET_EMAIL:"SET_EMAIL"
}


const reducer = (currentState , action) => {
            console.log(action)
           switch(action.type){
                  case actionType.SET_TERM:
                      return{
                          ...currentState,
                          name:action.name,
                          email:action.email
                      };

                     

                          default:
                              return currentState;
           }


}


export default reducer;