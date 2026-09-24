import React from 'react';

function Hero() {
    return (
        <section className="support-hero">
            <div className="container">

                <div className="support-header">
                    <h1>Support Portal</h1>

                    <button className="tickets-btn">
                        My tickets
                    </button>
                </div>

                <div className="search-box">
                    <span className="search-icon">⌕</span>

                    <input
                        type="text"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;