
import React , {useState} from 'react'
import { actionType } from './reducer';
import { UserContext } from './StateContext'

function UserInfo() {

    const [username , setName ] = useState("");
    const [useremail , setEmail ] = useState("");
    // const [btn, setbtn] = useState(false)


       const [state , dispatch] = UserContext();

       console.log(state);
        const handleSubmit = (e) => {
            e.preventDefault();

            dispatch({
                type:actionType.SET_TERM,
                name:username,
                email:useremail
            })
        }
    return (
        <form action="" onSubmit={handleSubmit}>
             <label htmlFor="">Name</label>
             <br />
             <input type="text" name="" id="" value={username} onChange={(e) => setName(e.target.value)}  />
             <br />
             <label htmlFor="">Email</label>
             <br />
             <input type="email" name="" id="" value={useremail} onChange={(e) => setEmail(e.target.value)}/>
             <br />

             <input type="submit" value="Submit"  disabled={username ? (useremail ? false : true) : true} />
        </form>
    )
}

export default UserInfo
