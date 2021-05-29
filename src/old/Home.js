

import React , {useState , useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
function Home() {
    const [loading , setLoading] = useState(true);
    const [users , setUsers] = useState([]);
    const [error , setError] = useState("");
    useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res => {
              setLoading(false);
              setUsers(res.data)
          })
          .catch(error => {
              setLoading(false)
              setError(error.message);
          })
    },[])
    return (
        <div>
            {
                loading ?
                 <p>Loading...</p>
                 :
                 users.map(user => <div key={user.id}>
                       <Link to={`/user/${user.id}`}>
                          {user.name}
                       </Link>
                 </div>) 
            }

            {
                error && <h1 style={{color:"red"}}>{error}</h1>
            }
        </div>
    )
}

export default Home
