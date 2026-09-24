import React from 'react';

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-6 mb-5">
          <div className="row text-center">

            {/* ₹0 Card */}
            <div className="col border p-2">
              <h1>₹0</h1>
              <p>
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>

            {/* ₹20 Card */}
            <div className="col border p-2">
              <h1>₹20</h1>
              <p>
                Intraday and F&O
                <br />
                per executed order
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;