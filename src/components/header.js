import { FaShareAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p className="logo">MyPortfolio </p>
      <div className="headerspecial">
        <i className="downloadicon">
          <IoMdCloudDownload />
        </i>
        <i>
          <FaShareAlt />
        </i>
      </div>
    </div>
  );
};

export default Header;
