import React from 'react';
function Hero() {
    return ( 
        <div className='container  '>
<div className='mb-2'>

                   <h1 className="text-center  mt-2">Charges</h1>
                  <p className="text-center">List of all charges and taxes</p>
</div>
             <div className='row'>
                <div className='col'>
                    <img src="media\images\pricingEquity.svg" alt="pricing"/>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col '>
                     <img src="media\images\other-trades.svg" alt="pricing"/>
                     <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col'>
                    <img src="media\images\pricingEquity.svg" alt="pricing"/>
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
            </div>
            
            
        </div>
     );
}

export default Hero;