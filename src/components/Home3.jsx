import React from 'react'
import "../styles/Home.css"
import Product from "./Product"
import shoeImage from "../utils/images/pg20.jpg"
import fridge from "../utils/images/pg21.jpg"
import furniture from "../utils/images/pg22.jpg"
import hair from "../utils/images/pg23.jpg"
import Tv from "../utils/images/pg24.jpg"
import kitchen from "../utils/images/pg25.jpg"
import bgPic from "../utils/images/large-1.jpg"
function Home3() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_bgPic " src={bgPic} alt="" />
             </div>  
            <div className="home_row">
                <Product id={ Math.random() } price={9.99} title="Basement Hoodie" description="A black pavolio shoe made from the very best of material" rating={3} image={kitchen} comment={ "Add To Basket"}  />
                <Product id={ Math.random()  } price={5.89} title="Books Equal Happiness" description="A black pavolio shoe made from the very best of material" rating={3} image={furniture} comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={4.99} title="Health is Wealth T-Shirt" description="A black pavolio shoe made from the very best of material" rating={3} image={fridge } comment={ "Add To Basket"} />
            </div>
            <div className="home_row">
                <Product id={ Math.random()  }  price={7.99} title="No Fluffs Given" description="A black pavolio shoe made from the very best of material" rating={4} image={ hair } comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={6.89} title="Christian T-Shirt" description="A black pavolio shoe made from the very best of material" rating={5} image={ Tv } comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={8.99} title="Natures Lungs" description="A black pavolio shoe made from the very best of material" rating={2} image={ shoeImage } comment={ "Add To Basket"} />
            </div>
           
           
                
        </div>
    )
}

export default Home3
