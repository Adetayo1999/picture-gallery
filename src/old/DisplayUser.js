
import React from 'react'
import { UserContext } from './StateContext';

function DisplayUser() {
    const [{name , email} , dispatch] = UserContext();
    return (
        <div >

            <br />
            <hr />
            <br />
            {


            name && email && <h1> Hello {name} , we just sent you a mail to {email}</h1>

            ||

            ""
            }
        </div>
    )
}

export default DisplayUser
