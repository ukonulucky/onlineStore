import React, { useState } from 'react'
import "../styles/Home.css"
import Product from "./Product"
import shoeImage from "../utils/images/pic10.jpg"
import fridge from "../utils/images/pic3.jpg"
import furniture from "../utils/images/pic4.jpg"
import hair from "../utils/images/pic5.jpg"
import Tv from "../utils/images/pic6.jpg"
import kitchen from "../utils/images/pic7.jpg"
import sound from "../utils/images/pic8.jpg"
import pic11 from "../utils/images/pic11.jpg"
import shirt from "../utils/images/pic9.jpg"
import bgPic from "../utils/images/large-1.jpg"
import Pagination from "./Pagination"
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_bgPic " src={bgPic} alt="" />
              
             </div>  
            <div className="home_row">
                <Product id={Math.random()} price={7.95} title="Nature Long Sleeve T-Shirt" rating={4} image={sound} />
                <Product id={ Math.random()  } price={9.45} title="Sons Of Odin Hoodie"  rating={4} image={shirt} />
                <Product id={ Math.random()  }  price={8.39} title="Eye Of The Beholder T-Shirt"  rating={4} image={fridge }  />
                </div>
            <div className="home_row">
                <Product id={ Math.random()  }  price={7.99} title="Odin Ruler Of Valhalla"  rating={4} image={ hair }  />
                <Product id={ Math.random()  }  price={3.99} title="Forever Love T-Shirt"  rating={5} image={ Tv }  />
                <Product id={ Math.random()  }  price={9.99} title="Strongest Of Warriors"  rating={4} image={ shoeImage } />
              
            </div>
              
            <div className="home_row">
               <Product id={ Math.random()  }  price={7.99} title="Glorious Vikings Hoodie"  rating={4} image={pic11} />
                <Product id={ Math.random()  }  price={4.68} title="Hook Up With Big Girls T-Shirt"  rating={5} image={furniture} />
                <Product id={ Math.random()  }  price={9.45} title="Bass Fishing Long Sleeve"  rating={4} image={kitchen}  />
            </div>
        </div>
    )
}

export default Home
