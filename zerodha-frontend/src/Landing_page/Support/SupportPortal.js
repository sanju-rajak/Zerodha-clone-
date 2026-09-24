import React, { useState } from 'react';

function SupportPortal() {

    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        {
            name: 'Account Opening',
            icon: 'fa-circle-plus',
            links: [
                'Resident individual',
                'Minor',
                'Non Resident Indian (NRI)',
                'Company, Partnership, HUF and LLP',
                'Glossary'
            ]
        },

        {
            name: 'Your Zerodha Account',
            icon: 'fa-user-circle',
            links: [
                'Your Profile',
                'Account modification',
                'Client Master Report (CMR) and Depository Participant (DP)',
                'Nomination',
                'Transfer and conversion of securities'
            ]
        },

        {
            name: 'Kite',
            icon: 'fa-circle-dollar-to-slot',
            links: [
                'IPO',
                'Trading FAQs',
                'Margin Trading Facility (MTF) and Margins',
                'Charts and orders',
                'Alerts and Nudges',
                'General'
            ]
        },

        {
            name: 'Funds',
            icon: 'fa-circle-dollar-to-slot',
            links: [
                'Add money',
                'Withdraw money',
                'Add bank accounts',
                'eMandates'
            ]
        },

        {
            name: 'Console',
            icon: 'fa-circle-dot',
            links: [
                'Portfolio',
                'Corporate actions',
                'Funds statement',
                'Reports',
                'Profile',
                'Segments'
            ]
        },

        {
            name: 'Coin',
            icon: 'fa-circle',
            links: [
                'Mutual funds',
                'National Pension Scheme (NPS)',
                'Fixed Deposit (FD)',
                'Features on Coin',
                'Payments and Orders',
                'General'
            ]
        }
    ];

    return (
        <section className="support-content">

            <div className="container">

                <div className="row">

                    {/* Left Section */}
                    <div className="col-md-8">

                        {categories.map((category, index) => (

                            <div
                                className="support-category-wrapper"
                                key={index}
                            >

                                {/* Category Header */}
                                <div
                                    className="support-category"
                                    onClick={() =>
                                        setOpenIndex(
                                            openIndex === index
                                                ? null
                                                : index
                                        )
                                    }
                                >

                                    {/* Category Icon */}
                                    <div className="category-icon">
                                        <i
                                            className={`fa-regular ${category.icon}`}
                                        ></i>
                                    </div>

                                    {/* Category Name */}
                                    <div className="category-name">
                                        {category.name}
                                    </div>

                                    {/* Arrow */}
                                    <div className="category-arrow">
                                        {openIndex === index
                                            ? '⌃'
                                            : '⌄'}
                                    </div>

                                </div>


                                {/* Dropdown */}
                                {openIndex === index && (

                                    <div className="category-dropdown">

                                        <ul>

                                            {category.links.map(
                                                (link, linkIndex) => (

                                                    <li key={linkIndex}>

                                                        <button
                                                            type="button"
                                                            className="dropdown-link"
                                                        >
                                                            {link}
                                                        </button>

                                                    </li>

                                                )
                                            )}

                                        </ul>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>


                    {/* Right Section */}
                    <div className="col-md-4">

                        {/* Latest Updates */}
                        <div className="latest-box">

                            <ul>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Latest Intraday leverages and
                                        Square-off timings
                                    </button>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Open Market Buybacks -
                                        September 2026
                                    </button>
                                </li>

                            </ul>

                        </div>


                        {/* Quick Links */}
                        <div className="quick-links">

                            <h4>Quick links</h4>

                            <ol>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Track account opening
                                    </button>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Track segment activation
                                    </button>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Intraday margins
                                    </button>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Kite user manual
                                    </button>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="dropdown-link"
                                    >
                                        Learn how to create a ticket
                                    </button>
                                </li>

                            </ol>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SupportPortal;