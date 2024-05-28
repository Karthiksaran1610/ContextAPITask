import React, { createContext, useState } from 'react';
import Cart from './Components/Cart';
import './App.css';

export const mycontext = createContext();

const App = () => {
  let products=[
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "Think different, everything different the iPhone.",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5v0mWYOyGI2jrY70hNktWPVRPf1VoaS1qsscGPYDjQ&s",
      "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ],
  },
  {
      "id": 2,
      "title": "iPhone X",
      "description": "Apple has a tightly integrated ecosystem of products and services, including the iPhone, iPad, Mac, and Apple Watch",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://www.neolight.in/wp-content/uploads/2022/01/iphone-x-silver.png",
      "images": [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ],
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's future hinges on new businesses, new products and new technologies....",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.png?height=474&width=711&fit=bounds",
      "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
      ],
  },
  {
      "id": 4,
      "title": "OPPOF19",
      "description": "Oppo is known for pushing the envelope in smartphone design and charging technology",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://images.meesho.com/images/products/161627923/wzyci_512.webp",
      "images": [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ],
  },
  {
      "id": 5,
      "title": "Huawei P30",
      "description": "Welcome to HUAWEI Community, a place for global HUAWEI fans to gather and communicate! Here",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://m.media-amazon.com/images/I/51-5xO0cT8L.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
      ],
  }
  ]
  const[data,setData]=useState(products)
  return (
    <>
      <mycontext.Provider value={[data,setData]}>
        <Cart />
      </mycontext.Provider>
    </>
  );
};

export default App;