import React from "react"; 
 
function Team() { 
  return ( 
    <div className="container"> 
 
      {/* People Heading */} 
      <div className="row"> 
        <div className="col text-center"> 
          <h1 
            className="fw-normal text-muted" 
            style={{ 
              marginTop: "90px", 
              marginBottom: "80px", 
            }} 
          > 
            People 
          </h1> 
        </div> 
      </div> 
 
      {/* Team Member */} 
      <div 
        className="row align-items-center" 
        style={{ 
          marginBottom: "100px", 
        }} 
      > 
 
        {/* Left Image */} 
        <div className="col-md-6 text-center"> 
          <img 
            src="media/images/nithinKamath.jpg" 
            alt="Nithin Kamath" 
            style={{ 
              width: "45%", 
              borderRadius: "50%", 
            }} 
          /> 
 
          <h5 
            className="text-muted fw-normal" 
            style={{ 
              marginTop: "25px", 
              marginBottom: "8px", 
            }} 
          > 
            Nithin Kamath 
          </h5> 
 
          <p 
            className="text-muted" 
            style={{ 
              fontSize: "14px", 
              margin: 0, 
            }} 
          > 
            Founder, CEO 
          </p> 
        </div> 
 
        {/* Right Text */} 
        <div className="col-md-6"> 
          <div 
            className="text-muted" 
            style={{ 
              maxWidth: "500px", 
              marginLeft: "25px", 
            }} 
          > 
            <p style={{ lineHeight: "1.8", marginBottom: "25px" }}> 
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the 
              hurdles he faced during his decade long stint as a trader. Today, 
              Zerodha has changed the landscape of the Indian broking industry. 
            </p> 
 
            <p style={{ lineHeight: "1.8", marginBottom: "25px" }}> 
              He is a member of the SEBI Secondary Market Advisory Committee 
              (SMAC) and the Market Data Advisory Committee (MDAC). 
            </p> 
 
            <p style={{ lineHeight: "1.8", marginBottom: "25px" }}> 
              Playing basketball is his zen. 
            </p> 
 
            <p style={{ lineHeight: "1.8" }}> 
              Connect on&nbsp;&nbsp; 
 
              <a 
                href="#" 
                style={{ 
                  textDecoration: "none", 
                  color: "#387ed1", 
                  marginRight: "8px", 
                }} 
              > 
                Homepage 
              </a> 
 
              / 
 
              <a 
                href="#" 
                style={{ 
                  textDecoration: "none", 
                  color: "#387ed1", 
                  margin: "0 8px", 
                }} 
              > 
                TradingQnA 
              </a> 
 
              / 
 
              <a 
                href="#" 
                style={{ 
                  textDecoration: "none", 
                  color: "#387ed1", 
                  marginLeft: "8px", 
                }} 
              > 
                Twitter 
              </a> 
            </p> 
          </div> 
        </div> 
 
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
        src="media\images\Nikhil.jpg"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      <h5
        className="text-muted fw-normal"
        style={{
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        Nikhil Kamath
      </h5>

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        Co-founder & CFO
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\Kailash.jpg"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      <h5
        className="text-muted fw-normal"
        style={{
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        Dr. Kailash Nadh
      </h5>

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        CTO
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\Venu.jpg"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      <h5
        className="text-muted fw-normal"
        style={{
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        Venu Madhav
      </h5>

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        COO
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
        src="media\images\Seema.jpg"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      <h5
        className="text-muted fw-normal"
        style={{
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        Seema Patil
      </h5>

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        Director
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\karthik.jpg"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      <h5
        className="text-muted fw-normal"
        style={{
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        Karthik Rangappa
      </h5>

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        Chief of Education
      </p>
    </div>

    <div
      className="col text-center"
      style={{
        padding: "20px",
      }}
    >
      <img
        src="media\images\Austin.jpg"
        style={{
          width: "55%",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      <h5
        className="text-muted fw-normal"
        style={{
          marginTop: "15px",
          marginBottom: "8px",
        }}
      >
        Austin prakesh
      </h5>

      <p
        className="text-muted"
        style={{
          fontSize: "14px",
          margin: 0,
        }}
      >
        Director Strategy
      </p>
    </div>

  </div>
</div>
    </div> 
  ); 
} 
 
export default Team; 