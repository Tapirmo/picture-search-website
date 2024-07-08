import React from 'react'

const Picture = ({ data }) => {

  return (
    <div className="picture">
      <p>Photographer: {data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large2x} alt="" />
      </div>
        <a target="_blank" href={data.src.large}>
          <button
            style={{ margin: "0.3rem 0rem" }}
            className="btn btn-outline-secondary"
          >
            Download Picture
          </button>
        </a>
    </div>
  );
};

export default Picture