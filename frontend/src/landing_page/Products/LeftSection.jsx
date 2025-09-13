import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5" style={{paddingRight:"1rem"}}>
          <img src={imageURL} alt="image not found" />
        </div>
        <div className="col-6 mt-5 p-5" style={{paddingLeft:"1rem"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-4">
            <a href={tryDemo} style={{marginLeft:"20%", paddingRight:"5.5rem"}}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img 
                src="media/images/googlePlayBadge.svg"
                alt="google play img"
                style={{marginLeft:"20%", paddingRight:"1rem"}}
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="app   store img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
