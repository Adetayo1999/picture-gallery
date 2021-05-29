import React  , { createContext , useContext  , useReducer} from "react";



export const StateContext = createContext();



const UserProvider = ({reducer , initalState , children}) =>
 (
    <StateContext.Provider value={useReducer(reducer , initalState)}>
              {children}
        </StateContext.Provider>

)



export const UserContext = () => useContext(StateContext)






export default UserProvider;

   