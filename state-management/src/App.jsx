import { useEffect, useState } from "react"
import Popup from "./components/Popup"

function App() {
  const [count, setCount] = useState(0);
  // Destructuring
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        // setLoading(false);
      })
      .catch((err) => {console.log(err);
        // setLoading(false);
      });
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <>
     <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count +1)}>
         increase
      </button>
      <button onClick={() => setCount(count -1)}>
         decrease
      </button>
     

     <div className="App" style={{padding: '50px', textAlign: "center" }}>
      <h1>
        React Popup Example
      </h1>
      <button onClick={() => setIsPopupOpen(true)}>
        Open Popup
      </button>


      <div>
        {products.map(product =>(
          <h3 Key={product.id}>
            {product.title}
          </h3>          
        ))}
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>
          Hello form the Pop-out!
        </h2>
        <p>
          this is a dynamic content passed as children to the popup component
        </p>
        </Popup>
     </div>
      </div> 
    </>
  )
}

export default App