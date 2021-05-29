
import React , {useState} from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import "./Image.css";
function Image({imageSrc}) {
    const [like , setLike] =  useState(false);
    return (
        <div className="image">
          <img src={imageSrc} alt="User" />
          <div className="links">
                
                <div className="link">
                   <GetAppIcon />
                </div>
                <div className="link" onClick={() => setLike(!like)}>
                      {!like ? 
                      <FavoriteBorderIcon />
                      :
                      <FavoriteIcon   style={{color:"red"}}/>

}
                    </div>
                    <div className="link" >
                      <AddCircleOutlineIcon />
                    </div>
                
              </div>           
        </div>
    )
}

export default Image
 