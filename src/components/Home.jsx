import React from 'react'
import "../styles/Home.css"
import Product from "./Product"
import shoeImage from "../utils/images/pic1.jpg"
import fridge from "../utils/images/pic3.jpg"
import furniture from "../utils/images/pic4.jpg"
import hair from "../utils/images/pic5.jpg"
import Tv from "../utils/images/pic6.jpg"
import kitchen from "../utils/images/pic7.jpg"
import sound from "../utils/images/pic8.jpg"
import pic11 from "../utils/images/pic11.jpg"
import shirt from "../utils/images/pic9.jpg"
import bgPic from "../utils/images/large-1.jpg"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_bgPic " src={bgPic} alt="" />
              
             </div>  
            <div className="home_row">
                <Product id={ Math.random() } price={7.95} title="Nature Long Sleeve T-Shirt"  rating={3} image={sound} comment={ "Add To Basket"}  />
                <Product id={ Math.random()  } price={9.45} title="Sons Of Odin Hoodie"  rating={3} image={shirt} comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={8.39} title="Eye Of The Beholder T-Shirt"  rating={3} image={fridge } comment={ "Add To Basket"} />
                </div>
            <div className="home_row">
                <Product id={ Math.random()  }  price={7.99} title="Odin Ruler Of Valhalla"  rating={4} image={ hair } comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={3.99} title="Forever Love T-Shirt"  rating={5} image={ Tv } comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={5.45} title="V-Forever"  rating={2} image={ shoeImage } comment={ "Add To Basket"} />
              
            </div>
              
            <div className="home_row">
               <Product id={ Math.random()  }  price={7.99} title="Glorious Vikings Hoodie"  rating={3} image={pic11} comment={ "Add To Basket"} />
                <Product id={ Math.random()  }  price={4.68} title="Hook Up With Big Girls T-Shirt"  rating={5} image={furniture} comment={ "Add To Basket"} />
                <Product id={ Math.random()  }  price={9.45} title="Bass Fishing Fong Sleeve"  rating={3} image={kitchen} comment={ "Add To Basket"} />
            </div>         
        </div>
    )
}

export default Home
