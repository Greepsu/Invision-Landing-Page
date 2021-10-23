import React from "react";
import "../../../styles/BlogDropdown.css";

const BlogDropdown = () => {
  return (
    <div className="blog-dropdown">
      <div className="blog-dropdown-container">
        <ul>
          <li>
            <a href="/">All Topics</a>
          </li>
          <li>
            <a href="/">Teams</a>
          </li>
          <li>
            <a href="/">Process</a>
          </li>
          <li>
            <a href="/">Remote work</a>
          </li>
          <li>
            <a href="/">Design resources</a>
          </li>
          <li>
            <a href="/">Videos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogDropdown;
