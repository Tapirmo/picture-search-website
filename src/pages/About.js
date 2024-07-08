import React from "react";
import about1 from "../img/about1.svg";

//關於這個網站
const About = () => {
  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="text-center mt-4">
          <img
            src={about1}
            className="card-img-top"
            alt="About illustration"
            style={{ height: "auto", width: "30%", maxWidth: "300px" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">關於這個網站</h5>
          <p className="card-text">
            此網站為一個Side
            Project，由Pexels所提供免費相片及unDraw提供的免費icon所構成。
          </p>
          <p className="card-text">主要技術如下:</p>
          <ul className="list-unstyled">
            <li>使用React框架及Bootstrap提供的Doc</li>
            <li>使用axios來fetch data photos</li>
          </ul>
          <p className="card-text">
            <small className="text-muted">
              更多建議，歡迎來信 uuya153@gamil.com
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;