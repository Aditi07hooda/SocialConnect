import React from "react";
import "./Events.css";
import ProfilePageLeft from "../../Components/ProfilePageLeft/ProfilePageLeft";
import RightSide from "../../Components/RightSide/RightSide";

const Events = () => {
  return (
    <>
      <div className="Profile">
        <ProfilePageLeft />
        <div className="ProfilePage-Center container m-xl-5">
        <h3>Events</h3>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F784207459%2F2175219138143%2F1%2Foriginal.20240606-084620?w=400&auto=format%2Ccompress&q=75&sharp=10&s=118008c89450c393996b45edb3d1cc6f" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWh5fae_VB7PZdecszkPczuW9QGZwUjMGb8sur6z_aVwpGggBjwK8gqZ7jVpbpTohmw_k&usqp=CAU" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F635428729%2F262347974128%2F1%2Foriginal.20220416-175546?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C21%2C754%2C377&s=d3a99a630534a3363e963a4182ad5ed2" alt="Third slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <RightSide />
      </div>
    </>
  );
};

export default Events;
