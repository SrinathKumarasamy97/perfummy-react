import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"

function Products() {
    return (
      <div className="products">
  
        <div className="box">
          <img src={one} />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div className="box">
          <img src={two} />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div className="box">
          <img src={three} />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
      </div>
    )
  }

  export default Products
  