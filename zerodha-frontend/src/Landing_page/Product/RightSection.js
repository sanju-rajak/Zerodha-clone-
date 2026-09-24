import React from 'react';

function RightSection({
    imageUrl,
    productName,
    productDiscription,
    learnMore
}) {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>

                {/* Left Content */}
                <div className='col-6 p-5'>

                    <h1 className='mb-4'>
                        {productName}
                    </h1>

                    <p
                        className='text-muted'
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.8",
                            marginBottom: "20px"
                        }}
                    >
                        {productDiscription}
                    </p>

                    <a
                        href={learnMore}
                        target='_blank'
                        rel='noreferrer'
                        style={{
                            textDecoration: "none",
                            color: "#387ed1",
                            fontSize: "16px"
                        }}
                    >
                        Learn More →
                    </a>

                </div>

                {/* Right Image */}
                <div className='col-6 text-center'>
                    <img
                        src={imageUrl}
                        alt={productName}
                        
                    />
                </div>

            </div>
        </div>
    );
}

export default RightSection;