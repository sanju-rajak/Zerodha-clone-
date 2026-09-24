import React from 'react';

function Hero() {
    return (
        <div className='container text-center mt-5'>
            <h1>Zerodha Products</h1>

            <h3 className='text-muted mt-3 fs-4'>
                Sleek, modern, and intuitive trading platforms
            </h3>

            <p className='mt-3'>
                Check out our {""}
                <a
                    href="/products"
                    style={{ textDecoration: "none" }}
                >
                    investment offerings →
                </a>
            </p>

            <br></br>
            <hr></hr>
        </div>
    );
}

export default Hero;