
import "./App.css";
import {useState , useEffect} from "react";
import Header from "./Header";
function App() {
  const [width , setWidth] = useState(0);


  const getWidth = () => {
    const windowWidth = window.innerWidth;
      setWidth(windowWidth);


      console.log(width);
  }
  useEffect(() => {
         getWidth()
          window.addEventListener('resize' , getWidth)


            return () => {
             document.removeEventListener('resize' , getWidth)
          }
  }, [width])
  
        if(width <= 400){
            return(
                <div>
                  <h1>Hello World On Small Screens</h1>
                </div>
            )
        }else if (width > 400 && width < 900){
              return (       <div>
                       <h1>Hello World On Medium Screens</h1>
                     </div>

              )
        }
        else{
              return(
                <div>
                   <h1>Hello World On Large Screens</h1>
                </div>
              )
        }


  
}

export default App
