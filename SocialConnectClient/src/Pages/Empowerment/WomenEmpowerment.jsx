import React from "react";
import "./WomenEmpowerment.css";
import { ProductData } from "../../Components/Data/ProductData";
import ProfilePageLeft from "../../Components/ProfilePageLeft/ProfilePageLeft";
import RightSide from "../../Components/RightSide/RightSide";

const WomenEmpowerment = () => {
  return (
    <>
      <div className="Profile">
        <ProfilePageLeft />

        <div className="ProfilePage-Center">
          <div className="product-grid">
            <div className="WomenEmpowerment">
              <h2>Inspired By</h2>
              <div className="InspiredBy">
                <div className="CEO-Women">
                  <img
                    src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSat9WjL0j-HA9o6rLB5yKT66lEqXJr7nuaS7V1W60LZuDCaFRcIZx2vC5Vb5VWAxm3"
                    alt="Sonia Syngal"
                  />
                  <img
                    src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRO6hhktDHM1e_2LSky9qjaRt3S5iL14ffKz9l98UgP1vDoHqLsTfZGn-wzIrpEVenU"
                    alt="Roshni Nadar"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Jayshree_Ullal_Arista_CEO.jpg"
                    alt="Jayshree Ullal"
                  />
                  <img
                    src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSat9WjL0j-HA9o6rLB5yKT66lEqXJr7nuaS7V1W60LZuDCaFRcIZx2vC5Vb5VWAxm3"
                    alt="Sonia Syngal"
                  />
                  <img
                    src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRO6hhktDHM1e_2LSky9qjaRt3S5iL14ffKz9l98UgP1vDoHqLsTfZGn-wzIrpEVenU"
                    alt="Roshni Nadar"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Jayshree_Ullal_Arista_CEO.jpg"
                    alt="Jayshree Ullal"
                  />
                </div>
              </div>

              <h2>Thoughts on Women Empowerment</h2>
              <div className="Carousel">
                <div className="Carousel-Items">
                  <div className="Carousel-Item">
                    <p>
                      "The future belongs to those who believe in the beauty of
                      their dreams." - Eleanor Roosevelt
                    </p>
                  </div>
                  <div className="Carousel-Item">
                    <p>
                      "Women are the largest untapped reservoir of talent in the
                      world." - Hillary Clinton
                    </p>
                  </div>
                  <div className="Carousel-Item">
                    <p>
                      "Empowerment of women is essential to the development of
                      any society." - Malala Yousafzai
                    </p>
                  </div>
                </div>
              </div>

              <h2>Products from Women Sellers</h2>
              <div className="Product-Grid">
                {ProductData.map((prd) => {
                  return (
                    <div className="Product-Card">
                      <div className="Product-Image">
                        <img src={prd.image} alt="Product Image" />
                      </div>
                      <div className="Product-Info">
                        <h2 className="Product-Name">{prd.name}</h2>
                        <p className="Product-Description">{prd.description}</p>
                        <p className="Product-Price">₹ {prd.price}</p>
                        <p className="Product-Rating">{prd.rating} / 5 stars</p>
                        <button className="button fc-button">Add to Cart</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <RightSide />
      </div>
    </>
  );
};

export default WomenEmpowerment;
