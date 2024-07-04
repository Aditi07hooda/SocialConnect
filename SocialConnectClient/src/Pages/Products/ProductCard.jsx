import React from "react";
import "./ecommerce-category-product.css";
import ProfilePageLeft from "../../Components/ProfilePageLeft/ProfilePageLeft";
import RightSide from "../../Components/RightSide/RightSide";
import { ProductData } from "../../Components/Data/ProductData";

const ProductCard = () => {
  return (
    <div className="Profile">
      <ProfilePageLeft />

      <div className="ProfilePage-Center">
        <div className="product-grid">
          {ProductData.map((prd) => {
            return (
              <div className="product-card">
                <div className="product-image">
                  <img src={prd.image} alt="Product Image" />
                </div>
                <div className="product-info">
                  <h2 className="product-name">{prd.name}</h2>
                  <p className="product-description">{prd.description}</p>
                  <p className="product-price">₹ {prd.price}</p>
                  <p className="product-rating">{prd.rating} / 5 stars</p>
                  <p className="product-category">Category: {prd.category}</p>
                  <p className="product-supply">Supply: {prd.supply} units</p>
                  <p className="product-seller">Seller: {prd.seller}</p>
                  <button className='button fc-button'>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <RightSide />
    </div>
  );
};

export default ProductCard;