import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mt-5 p-5" style={{ paddingLeft: "1rem" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-4">
            <a
              href={learnMore}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="image not found" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
