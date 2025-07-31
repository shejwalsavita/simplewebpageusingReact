function Hero(){
    return(
        <>
           <main className="hero container">
               <div className="hero-content">
                  <h1>YOUR FEET DESERVE THE BEST</h1>
                  <p>YOUR DEET DESERVE THE  BEST AND WERE HERE TO HELP TO HELP 
                     TO  HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE  BEST 
                     AND  WERE HERE TO HELP YPU WITH OUR SHOES.</p>
                  <div className="hero-btn">
                      <button>Shop Now</button>
                      <button className="secondary-btn">Category</button>
                  </div>
                  <div className="hero-shoping">
                        <p>Also Available On</p>
                        <div className="hero-icons">
                            <img src="./public/Images/amazon.png"/>
                            <img src="./public/Images/flipkart.png"/>  
                        </div>
                 </div>
                 
               </div>
               <div class="hero-images">
                  <img src="./public/Images/hero-image.png"/>
               </div>
              
            </main>
        </>
    )
}
export default Hero;