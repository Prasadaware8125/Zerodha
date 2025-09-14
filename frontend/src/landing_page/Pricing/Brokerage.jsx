import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8">
          <a href="">
            <h4 className="mb-5 text-center">Brokerage Calculator</h4>
          </a>
          <ul className="text-muted " style={{lineHeight:"2.5", fontSize:"0.87rem"}}>
            <li>Call & Trade and RMS auto-squreoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>for NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% of ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per excuted order instead of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className="col-4">
          <a href="">
            <h4 className="mb-3 text-center">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
