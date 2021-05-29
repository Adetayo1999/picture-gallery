

import React from 'react'
import Header from './Header';
import "./Home.css";
import Image from './Image';
function Home() {
    return (
        <div className="home">
            <Header />
            <div className="catchword">
                <center>
                    <h3>Nature Backgroud Photos</h3>
                </center>
                
            </div>

            <div className="images__container">
                       <Image  imageSrc={"./images/2.jpg"}/>
                       <Image  imageSrc={"./images/3.jpg"}/>
                       <Image  imageSrc={"./images/1.jpg"}/>                      
                       <Image  imageSrc={"./images/4.jpg"}/>
                       <Image  imageSrc={"./images/1.jpg"}/>                      
                       <Image  imageSrc={"./images/4.jpg"}/>
                       <Image  imageSrc={"./images/1.jpg"}/>                      
                       <Image  imageSrc={"./images/4.jpg"}/>
                       <Image  imageSrc={"./images/1.jpg"}/>                      
                       <Image  imageSrc={"./images/4.jpg"}/>
                       <Image  imageSrc={"./images/1.jpg"}/>                      
                       <Image  imageSrc={"./images/4.jpg"}/>

                    </div>

              <footer>
                  Copyright &copy; 2017 - 2020
              </footer>
        </div>
    )
}

export default Home
