import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-5">
          Free equity investments and flat ₹20 trady and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="img1" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="img1" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat 20 of 0.03% (whichever is lower) per executed order on intraday trades across equity, and commodity traades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="img1" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund in absolutely free - 0 commisions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
