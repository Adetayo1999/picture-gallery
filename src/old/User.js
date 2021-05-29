
import React , {useEffect , useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
function User(props) {
    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState({});
    const [error , setError] = useState("");
    const id = props.match.params.id
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res.data)
            setLoading(false);
            setUser(res.data);
        })
        .catch(error => {
            console.log(error.message)
            setLoading(false);
            setError(error.message)
        })

    },[id]) 
    return (
        <div>
            {
                loading ? <p>Loading ...</p>
                :
                 <div> 
                     <p>{user.name}</p>
                     <p>{user.username}</p>
                     <p>{user.email}</p>
                    
                     </div> 
            }

               <Link to="/" >Go Home</Link>
        </div>
    )
}

export default withRouter(User)
