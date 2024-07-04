import React from "react";
import "./LogoSearch.css";
import Logo from "../../Img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { TiSocialSkypeOutline } from "react-icons/ti";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <TiSocialSkypeOutline fontSize={50} />

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
