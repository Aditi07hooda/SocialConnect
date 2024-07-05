import React from "react";
import "./LogoSearch.css";
import Logo from "../../Img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="../home">
        <TiSocialSkypeOutline fontSize={50} />
      </Link>

      <div className="Search">
        <input type="text" placeholder="#Search" />

        <div className="s-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
