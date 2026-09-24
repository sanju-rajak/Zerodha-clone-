import React from 'react';

function LeftSection({
    imageUrl,
    productName,
    productDiscription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6'>
                    <img
                        src={imageUrl}
                        alt={productName}
                    />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>

                    <p>{productDiscription}</p>

                    <div>
                        <a
                            href={tryDemo}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            Try Demo →
                        </a>

                        <a
                            href={learnMore}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                marginLeft: "50px",
                                textDecoration: "none"
                            }}
                        >
                            Learn More →
                        </a>
                    </div>

                    <div className='mt-3'>

                        <a href={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Google Play"
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="App Store"
                            />
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default LeftSection;