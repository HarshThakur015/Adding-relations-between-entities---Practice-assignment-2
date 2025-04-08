import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://www.gonoise.com/cdn/shop/files/CompressJPEG.online_500x500-image_4.png?v=1687935476",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://www.gonoise.com/cdn/shop/products/Icon2-6.png?v=1681610912",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw3839dbd9/JBL_GO_4_HERO_BLUE_48170_x6.png?sw=535&sh=535",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts => 
      prevProducts.map(product => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAvgRating = ((product.avgRating * product.totalRatings) + newRating) / newTotalRatings;
          
          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: newTotalRatings
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <h1 className="app-title">Product Ratings</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
