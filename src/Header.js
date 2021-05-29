
import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <header className="header">

           <div className="logo">

           <h2 className="logo__large">Picture <span>Gallery</span></h2>
           <h2 className="logo__small">P<span>G</span></h2>
           </div>
         
               <div className="form__container">
                 <form action="">
                   <div className="form__group">
                     <input type="text" name="" id="" placeholder="Enter An Image Name"/>
                     <button type="submit"><SearchIcon /></button>
                   </div>
                 </form>
               </div>
        </header>
    )
}

export default Header
