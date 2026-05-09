

import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';
import './App.css';
import ProductCard from './componenets/ProductCard';


function App() {


  const [products, setproducts] = useState([]);

  const getproducts = async () => {
    try {
      const ApiReply = await axios.get("https://dummyjson.com/products");
      setproducts(ApiReply.data.products)
      console.log(ApiReply);
    } catch (error) {
      console.log("error", error)
    }
  }


  useEffect(() => {
    getproducts();
  }, [])



  return (
    <div className="App">
      {products.map((eachProduct) => {
        // console.log(eachProduct)
        return (
          <ProductCard
            key={eachProduct.id}
            title={eachProduct.title}
            images={eachProduct.thumbnail}
            //  discription={eachProduct.description}
            price={eachProduct.price}
            category={eachProduct.category}


          />
          // {title: "abc"}
        )
      })}
    </div>
  );
}

export default App;





