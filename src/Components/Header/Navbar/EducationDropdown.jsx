import React from "react";
import "../../../styles/EducationDropdown.css";

const EducationDropdown = () => {
  return (
    <div className="education-dropdown">
      <div className="education-dropdown-container">
        <div className="education-best-practices">
          <ul>
            Best practices
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/">Design Maturity Model</a>
            </li>
            <li>
              <a href="/">Books</a>
            </li>
            <li>
              <a href="/">Podcasts</a>
            </li>
            <li>
              <a href="/">Conversations</a>
            </li>
          </ul>
        </div>
        <div className="education-vertical-separator"></div>
        <div className="education-industry-insights">
          <ul>
            Industry Insights
            <li>
              <a href="/">Total Economic Impact™ of InVision</a>
            </li>
            <li>
              <a href="/">Product Design Hiring Report</a>
            </li>
            <li>
              <a href="/">Design Trends Report: Talent</a>
            </li>
            <li>
              <a href="/">The Outsized Cost of a Broken Design Process</a>
            </li>
            <li>
              <a href="/">The Design Genome Project</a>
            </li>
          </ul>
        </div>
        <div className="education-vertical-separator"></div>
        <div className="education-films">
          <ul>
            Films
            <li>
              <a href="/">Squads</a>
            </li>
            <li>
              <a href="/">Design Disruptors</a>
            </li>
            <li>
              <a href="/">The Loop</a>
            </li>
          </ul>
        </div>
        <div className="education-vertical-separator"></div>
        <div className="education-learn">
          <ul>
            Learn
            <li>
              <a href="/">Explore</a>
            </li>
            <li>
              <a href="/">Course Catalog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationDropdown;
