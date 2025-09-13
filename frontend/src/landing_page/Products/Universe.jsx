import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5">
          <div className="col-4 p-3">
            <img
              id="uniImg"
              src="media/images/zerodhaFundhouse.png"
              alt="image not found"
            />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              id="uniImg"
              src="media/images/sensibullLogo.svg"
              alt="image not found"
            />
            <p className="text-small text-muted mt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              id="uniImg"
              src="media/images/goldenpiLogo.png"
              alt="image not found"
            />
            <p className="text-small text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 p-3">
            <img
              id="uniImg"
              src="media/images/streakLogo.png"
              alt="image not found"
            />
            <p className="text-small text-muted mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              id="uniImg"
              src="media/images/smallcaseLogo.png"
              alt="image not found"
            />
            <p className="text-small text-muted mt-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              id="uniImg"
              src="media/images/dittoLogo.png"
              alt="image not found"
            />
            <p className="text-small text-muted mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button className='p-3 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
