import React from "react";
import "../../../styles/ProductDropdown.css";

//import images
import Cloud from "../../../assets/images/InVision-Cloud-logo-pixel-light.svg";
import Studio from "../../../assets/images/InVision-Studio-logo-pixel-light.svg";
import DSM from "../../../assets/images/InVision-DSM-logo-pixel-light.svg";
import Enterprise from "../../../assets/images/InVision-Enterprise-logo-pixel-light.svg";

const ProductDropdown = () => {
  return (
    <div className={`product-dropdown`}>
      <div className="product-left-side">
        <div className="product-cloud">
          <div className="product-cloud-logo">
            <img src={Cloud} alt="" />
          </div>
          <div className="product-cloud-text">
            <ul>
              <li>
                <a href="/">Prototype</a>
              </li>
              <li>
                <a href="/">Craft</a>
              </li>
              <li>
                <a href="/">Inspect</a>
              </li>
              <li>
                <a href="/">Freehand</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-studio">
          <div className="product-studio-logo">
            <img src={Studio} alt="" />
          </div>
          <a href="/">Design and animate.</a>
        </div>
        <div className="product-dsm">
          <div className="product-dsm-logo">
            <img src={DSM} alt="" />
          </div>
          <a href="/">Build a design system.</a>
        </div>
        <div className="product-enterprise">
          <div className="product-enterprise-logo">
            <img src={Enterprise} alt="" />
          </div>
          <a href="/">Elevate your business with design.</a>
        </div>
      </div>
      <div className="vertical-separator"></div>
      <div className="product-right-side">
        <ul>
          <li>
            <a href="/">Plans & pricing</a>
          </li>
          <li>
            <a href="/">Product updates</a>
          </li>
          <li>
            <a href="/">Customers</a>
          </li>
          <li>
            <a href="/">Security</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Learn</a>
          </li>
          <li>
            <a href="/">Integrations</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDropdown;
