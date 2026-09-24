import React from 'react';
function Universe() {
return ( 
       <div className='container '>
        <div className='text-center p-3 mt-4'>
            <h1 className='text-center p-3 mt-4'>The Zerodha Universe</h1>
            <p className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>



    
        <div>
  <div
    className="row"
    style={{
      marginTop: "80px",
      marginBottom: "30px",
    }}
  >

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\zerodhaFundhouse.png  "  alt="zerodhaFund"
        style={{
          width: "65%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      
      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
       Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\sensibull-logo.svg"  alt=" sensibull"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />
      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        
Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\streakLogo.png"  alt="strak"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

     

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
       
Systematic trading platform
that allows you to create and backtest
strategies without coding.
      </p>
    </div>

  </div>


  <div
    className="row"
    style={{
      marginTop: "30px",
      marginBottom: "100px",
    }}
  >

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\smallcaseLogo.png"  alt="small"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />
      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\tijori.svg"  alt="tijori"
        style={{
          width: "55%",
          borderRadius: "20%",
          marginBottom: "15px",
        }}
      />

      

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
       
Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\dittoLogo.png"  alt="ditto"
        style={{
          width: "55%",
         
          marginBottom: "15px",
        }}
      />

     

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
       
Personalized advice on life
and health insurance. No spam
and no mis-selling.
      </p>
    </div>

  </div>
</div>
<div className='text-center'>
    <button className=' p-2 btn btn-primary' style={{width:"20%" , hight:"30", margin:"0 auto" }}>Sign up for free</button>
        
</div>
 
       </div>
     );
}

export default Universe;