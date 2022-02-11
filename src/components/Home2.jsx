import React from 'react'
import "../styles/Home.css"
import Product from "./Product"
import shoeImage from "../utils/images/pg12.jpg"
import fridge from "../utils/images/pg13.jpg"
import furniture from "../utils/images/pg14.jpg"
import hair from "../utils/images/pg15.jpg"
import Tv from "../utils/images/pg16.jpg"
import kitchen from "../utils/images/pg17.jpg"
import sound from "../utils/images/pg18.jpg"
import shirt from "../utils/images/pg19.jpg"
import bgPic from "../utils/images/large-1.jpg"
import Pagination from "./Pagination"
function Home2() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_bgPic " src={bgPic} alt="" />
             </div>  
            <div className="home_row">
                <Product id={ Math.random() } price={6.99} title="Lets Go Raising T-Shirt"  rating={4} image={sound}  />
                <Product id={ Math.random()  } price={9.99} title="Get Loved Up"  rating={4} image={shirt}  />
                <Product id={ Math.random()  }  price={6.99} title="Nitroglycerin"  rating={4} image={fridge } />
                </div>
            <div className="home_row">
                <Product id={ Math.random()  }  price={10.99} title="I Am Choosen Hoodie" rating={4} image={ hair }  />
                <Product id={ Math.random()  }  price={11.23} title="Your A Gift Long T-Shirt"  rating={5} image={ Tv }  />
                <Product id={ Math.random()  }  price={8.99} title="Its Not A Phase Hoodie"  rating={4} image={ shoeImage } />
              
            </div>
              
            <div className="home_row">
                <Product id={ Math.random()  }  price={8.99} title="Music Is Mine"  rating={5} image={furniture} />
                <Product id={ Math.random()  }  price={6.99} title="Embrace Your Real Long Sleev"  rating={4} image={kitchen} />
            </div>
                
        </div>
    )
}

export default Home2
