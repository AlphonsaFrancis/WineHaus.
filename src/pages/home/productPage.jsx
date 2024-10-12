// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './product.css';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/v1/products/list/')
//       .then(response => {
//         setProducts(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   if (error) {
//     return <div>Error fetching products: {error}</div>;
//   }

//   return (
    
//     <div className="product-page">
//       <h1 className="page-title">Discover Our Premium Products</h1>

//       <div className="main-content">
//         {/* Sidebar Filter Section */}
//         <aside className="filter-sidebar">
//           <h3>Filter & Sort</h3>

//           {/* Sort Bar */}
//           <div className="sort-bar">
//             <label htmlFor="sortOrder">Sort by:</label>
//             <select id="sortOrder">
//               <option value="default">Default</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating">Rating</option>
//             </select>
//           </div>

//           {/* Category Filter */}
//           <div className="filter-group">
//             <h4>Brand</h4>
//             <select id="filterCategory">
//               <option value="all">All</option>
//               <option value="Frateli">Frateli</option>
//               <option value="Zamba">Zamba</option>
//               <option value="Spade & Spare">Spade & Spare</option>
//               <option value="Riesling">Riesling</option>
//             </select>
//           </div>

//           {/* Country Filter */}
//           <div className="filter-group">
//             <h4>Country</h4>
//             <select id="filterCountry">
//               <option value="all">All</option>
//               <option value="India">India</option>
//               <option value="France">France</option>
//               <option value="Italy">Italy</option>
//               <option value="Russia">Russia</option>
//             </select>
//           </div>

//           {/* Made Of Filter */}
//           <div className="filter-group">
//             <h4>Made Of</h4>
//             <select id="filterMadeOf">
//               <option value="all">All</option>
//               <option value="Wood">Wood</option>
//               <option value="Metal">Metal</option>
//               <option value="Glass">Glass</option>
//             </select>
//           </div>
//         </aside>

//         {/* Main Product Display Section */}
//         <div className="product-display">
//           <div className="products-grid">
//             {products.map(product => (
//               <div className="product-card" key={product.product_id}>
//                 <a href={`/products/${product.product_id}`} className="product-link">
//                   <img
//                     src={product.image || 'https://via.placeholder.com/150'}
//                     alt={product.name}
//                     className="product-image"
//                   />
//                   <div className="product-info">
//                     <h4>{product.name}</h4>
//                     <p className="price">₹ {product.price}</p>
//                     {/* <p className="description">{product.description}</p>
//                     <p className="brand">Brand: {product.brand}</p>
//                     <p className="category">Category: {product.category}</p>
//                     <p className="made_of">Made of: {product.made_of}</p>
//                     <p className="country">Country: {product.country}</p>
//                     <p className="stock">In Stock: {product.stock_quantity}</p> */}
//                   </div>
//                 </a>
//                 <div className="product-actions">
//                   <button className="wishlist-btn">
//                     <i className="fas fa-heart"></i> Wishlist
//                   </button>
//                   <button className="cart-btn">
//                     <i className="fas fa-shopping-cart"></i> Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar'; // Make sure to import the Navbar component correctly
import './product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/products/list/')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error}</div>;
  }

  return (
    <div>
      <Navbar /> {/* Place the Navbar component here */}
      <div className="product-page">
        <h1 className="page-title">Discover Our Premium Products</h1>

        <div className="main-content">
          {/* Sidebar Filter Section */}
          <aside className="filter-sidebar">
            <h3>Filter & Sort</h3>

            {/* Sort Bar */}
            <div className="sort-bar">
              <label htmlFor="sortOrder">Sort by:</label>
              <select id="sortOrder">
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h4>Brand</h4>
              <select id="filterCategory">
                <option value="all">All</option>
                <option value="Frateli">Frateli</option>
                <option value="Zamba">Zamba</option>
                <option value="Spade & Spare">Spade & Spare</option>
                <option value="Riesling">Riesling</option>
              </select>
            </div>

            {/* Country Filter */}
            <div className="filter-group">
              <h4>Country</h4>
              <select id="filterCountry">
                <option value="all">All</option>
                <option value="India">India</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Russia">Russia</option>
              </select>
            </div>

            {/* Made Of Filter */}
            <div className="filter-group">
              <h4>Made Of</h4>
              <select id="filterMadeOf">
                <option value="all">All</option>
                <option value="Wood">Wood</option>
                <option value="Metal">Metal</option>
                <option value="Glass">Glass</option>
              </select>
            </div>
          </aside>

          {/* Main Product Display Section */}
          <div className="product-display">
            <div className="products-grid">
              {products.map(product => (
                <div className="product-card" key={product.product_id}>
                  <a href={`/products/${product.product_id}`} className="product-link">
                    <img
                      src={product.image || 'https://via.placeholder.com/150'}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p className="price">₹ {product.price}</p>
                      {/* Uncomment the details below if needed */}
                      {/* <p className="description">{product.description}</p>
                      <p className="brand">Brand: {product.brand}</p>
                      <p className="category">Category: {product.category}</p>
                      <p className="made_of">Made of: {product.made_of}</p>
                      <p className="country">Country: {product.country}</p>
                      <p className="stock">In Stock: {product.stock_quantity}</p> */}
                    </div>
                  </a>
                  <div className="product-actions">
                    <button className="wishlist-btn">
                      <i className="fas fa-heart"></i> Wishlist
                    </button>
                    <button className="cart-btn">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;