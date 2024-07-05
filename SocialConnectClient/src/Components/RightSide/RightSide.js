import React, { useState } from "react";
import "./RightSide.css";
import Comment from "../../Img/comment.png";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";
import { MdEmojiEvents } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
import { Subscribed } from "../Data/SubscribedPeople";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="../ecommerce">
          <FaCartPlus fontSize={30} />
        </Link>
        <Link to="../event">
          <MdEmojiEvents fontSize={35} />
        </Link>
        <Link to="../women">
          <FcBusinesswoman fontSize={35} />
        </Link>
        <Link to="../bot">
          <IoChatbubbleEllipsesSharp fontSize={35} />
        </Link>
      </div>

      {Subscribed.map((person) => {
        return (
          <div className="follower">
            <img src={person.img ? `${serverPublic}/${person.img}` : `${serverPublic}/defaultProfile.png`} alt="" className='followerImg' />
            <div className="name">
              <span>{person.name}</span>
              <span>@{person.username}</span>
            </div>
            <button className="button fc-button">See Items</button>
          </div>
        );
      })}

      <div className="button rg-button" onClick={() => setModalOpened(true)}>
        See More
      </div>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
