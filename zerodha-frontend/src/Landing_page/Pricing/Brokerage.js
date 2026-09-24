import React from 'react';

function Brokerage() {
    return (
        <div className='container'>

            <style>
                {`
                    /* ================= TABLE STYLE ================= */

                    .brokerage-table,
                    .charges-table {
                        width: 100%;
                        border: 1px solid #dee2e6;
                        border-collapse: separate;
                        border-spacing: 0;
                        color: #424242;
                    }

                    .brokerage-table th,
                    .brokerage-table td,
                    .charges-table th,
                    .charges-table td {
                        border-left: 1px solid #dee2e6;
                        border-right: 1px solid #dee2e6;
                    }

                    .brokerage-table thead th,
                    .charges-table thead th {
                        border-top: 1px solid #dee2e6;
                        border-bottom: 1px solid #dee2e6;
                        padding: 18px 20px;
                        font-weight: 500;
                        color: #424242;
                        background: #fff;
                    }

                    .brokerage-table tbody td,
                    .charges-table tbody td {
                        border-top: none !important;
                        border-bottom: none !important;
                        padding: 18px 20px;
                        vertical-align: middle;
                        color: #666;
                        line-height: 1.6;
                    }

                    .brokerage-table tbody tr:last-child td,
                    .charges-table tbody tr:last-child td {
                        border-bottom: 1px solid #dee2e6 !important;
                    }


                    /* ================= BUTTON STYLE ================= */

                    .free-button {
                        background-color: #5cb85c;
                        color: white;
                        border: none;
                        padding: 5px 18px;
                        border-radius: 4px;
                        font-size: 14px;
                    }


                    /* ================= SECTION HEADINGS ================= */

                    .charges-title {
                        font-size: 28px;
                        font-weight: 500;
                        color: #424242;
                        margin-top: 55px;
                        margin-bottom: 35px;
                    }

                    .account-title {
                        font-size: 28px;
                        font-weight: 500;
                        color: #424242;
                        margin-top: 55px;
                        margin-bottom: 30px;
                    }

                    .demat-title {
                        font-size: 28px;
                        font-weight: 500;
                        color: #424242;
                        margin-top: 55px;
                        margin-bottom: 25px;
                    }


                    /* ================= CHARGES EXPLAINED ================= */

                    .charges-explained {
                        margin-top: 65px;
                        margin-bottom: 70px;
                    }

                    .charges-explained-title {
                        font-size: 28px;
                        font-weight: 500;
                        color: #424242;
                        margin-bottom: 45px;
                    }

                    .charges-column {
                        padding-right: 45px;
                    }

                    .charges-column-right {
                        padding-left: 45px;
                    }

                    .charges-column h6,
                    .charges-column-right h6 {
                        font-size: 16px;
                        font-weight: 500;
                        color: #424242;
                        margin-top: 30px;
                        margin-bottom: 12px;
                        line-height: 1.5;
                    }

                    .charges-column h6:first-child,
                    .charges-column-right h6:first-child {
                        margin-top: 0;
                    }

                    .charges-column p,
                    .charges-column-right p,
                    .charges-column li,
                    .charges-column-right li {
                        font-size: 14px;
                        font-weight: 400;
                        color: #666;
                        line-height: 1.8;
                    }

                    .charges-column p,
                    .charges-column-right p {
                        margin-bottom: 25px;
                    }

                    .charges-column ul,
                    .charges-column-right ul {
                        padding-left: 20px;
                        margin-bottom: 25px;
                    }

                    .charges-column li,
                    .charges-column-right li {
                        margin-bottom: 8px;
                    }


                    /* ================= DISCLAIMER ================= */

                    .disclaimer {
                        margin-top: 65px;
                        padding-top: 35px;
                        border-top: 1px solid #eee;
                        margin-bottom: 60px;
                    }

                    .disclaimer h4 {
                        font-size: 20px;
                        font-weight: 500;
                        color: #424242;
                        margin-bottom: 18px;
                    }

                    .disclaimer p {
                        font-size: 13px;
                        color: #666;
                        line-height: 1.8;
                        margin-bottom: 0;
                    }


                    /* ================= RESPONSIVE ================= */

                    @media (max-width: 768px) {

                        .charges-column,
                        .charges-column-right {
                            padding-left: 15px;
                            padding-right: 15px;
                        }

                        .charges-explained-title {
                            font-size: 25px;
                            margin-bottom: 30px;
                        }

                        .charges-column-right {
                            margin-top: 35px;
                        }

                        .brokerage-table th,
                        .brokerage-table td,
                        .charges-table th,
                        .charges-table td {
                            padding: 14px 12px;
                        }
                    }
                `}
            </style>


            <div className="row mb-1">
                <div className="col-12 d-flex gap-2">
                    <a
                        href="#tab-equities"
                        style={{
                            textDecoration: "none",
                            color: "blue",
                        }}
                    >
                        <h3>Equity</h3>
                    </a>
                </div>
            </div>


            {/* Equity Table */}
            <div className="table-responsive">
                <table className="table brokerage-table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Equity delivery</th>
                            <th>Equity intraday</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Brokerage</td>
                            <td>Zero Brokerage</td>
                            <td>
                                0.03% or Rs. 20/executed order whichever is lower
                            </td>
                        </tr>

                        <tr>
                            <td>STT/CTT</td>
                            <td>0.1% on buy & sell</td>
                            <td>0.025% on the sell side</td>
                        </tr>

                        <tr>
                            <td>Transaction charges</td>
                            <td>
                                NSE: 0.00307%
                                <br />
                                BSE: 0.00375%
                            </td>
                            <td>
                                NSE: 0.00307%
                                <br />
                                BSE: 0.00375%
                            </td>
                        </tr>

                        <tr>
                            <td>GST</td>
                            <td>
                                18% on (brokerage + SEBI charges + transaction charges)
                            </td>
                            <td>
                                18% on (brokerage + SEBI charges + transaction charges)
                            </td>
                        </tr>

                        <tr>
                            <td>SEBI charges</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                        </tr>

                        <tr>
                            <td>Stamp charges</td>
                            <td>
                                0.015% or ₹1500 / crore on buy side
                            </td>
                            <td>
                                0.003% or ₹300 / crore on buy side
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>


            <h4 className='text-center text-muted mb-1'>
                Calculate your costs upfront using our brokerage calculator
            </h4>


            <p>
                <h3 className='account-title'>Charges for account opening</h3>
            </p>


            {/* *charges */}
            <div className="table-responsive">
                <table className="table brokerage-table">

                    <thead>
                        <tr>
                            <th>Type of account</th>
                            <th>Charges</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Individual account</td>
                            <td>
                                <button className="free-button">
                                    Free
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>Minor account</td>
                            <td>
                                <button className="free-button">
                                    Free
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>NRI account</td>
                            <td>
                                ₹ 500
                            </td>
                        </tr>

                        <tr>
                            <td>HUF account</td>
                            <td>
                                <button className="free-button">
                                    Free
                                </button>
                                (online) / ₹ 500 (offline)
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Partnership, LLP, and Corporate accounts (offline only) ₹
                            </td>
                            <td>₹ 500</td>
                        </tr>

                    </tbody>

                </table>
            </div>


            <h2 className='demat-title'>
                Demat AMC (Annual Maintenance Charge)
            </h2>

            <button className="free-button">
                Free for first year*
            </button>


            {/* *charges */}
            <div className="table-responsive mt-4">
                <table className="table brokerage-table">

                    <thead>
                        <tr>
                            <th>Value of holdings</th>
                            <th>AMC</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Up to ₹4 lakh</td>
                            <td>
                                <button className="free-button">
                                    Free
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>₹4 lakh – ₹10 lakh</td>
                            <td>
                                ₹100 per year + 18% GST, charged quarterly
                            </td>
                        </tr>

                        <tr>
                            <td>Above ₹10 lakh</td>
                            <td>
                                ₹300 per year + 18% GST, charged quarterly
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>


            <div className='text-muted'>
                <p>
                    For a non-BSDA account, AMC is ₹300 per year + 18% GST,
                    regardless of holdings value, charged quarterly.
                </p>

                <p>
                    To learn more about BSDA, click here. To learn more about AMC,
                    click here.
                </p>

                <p>
                    *Resident individual accounts only.
                </p>
            </div>


            <div>
                <p>Charges for optional value added services</p>
            </div>


            <style>
                {`
                    .charges-table {
                        border: 1px solid #dee2e6;
                    }

                    .charges-table th,
                    .charges-table td {
                        border-left: 1px solid #dee2e6;
                        border-right: 1px solid #dee2e6;
                    }

                    .charges-table thead th {
                        border-top: 1px solid #dee2e6;
                        border-bottom: 1px solid #dee2e6;
                        padding: 18px 15px;
                    }

                    .charges-table tbody td {
                        border-top: none !important;
                        border-bottom: none !important;
                        padding: 18px 15px;
                    }

                    .charges-table tbody tr:last-child td {
                        border-bottom: 1px solid #dee2e6 !important;
                    }
                `}
            </style>


            <div className="table-responsive">
                <table className="table charges-table">

                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Billing Frequency</th>
                            <th>Charges</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Quarterly / Annual</td>
                            <td>
                                Free: 0 | Pro: 249/699/2399
                            </td>
                        </tr>

                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>
                                Buy & Invest More: 100 | SIP: 10
                            </td>
                        </tr>

                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>
                                Connect: 500 | Personal: Free
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>


            {/* ================= CHARGES EXPLAINED ================= */}

            <div className="charges-explained">

                <h3 className="charges-explained-title">
                    Charges explained
                </h3>

                <div className='row'>

                    <div className='col-md-6 charges-column'>

                        <h6>Securities/Commodities transaction tax</h6>

                        <p>
                            Tax by the government when transacting on the exchanges.
                            Charged as above on both buy and sell sides when trading
                            equity delivery. Charged only on selling side when trading
                            intraday or on F&O.

                            <br />
                            <br />

                            When trading at Zerodha, STT/CTT can be a lot more than
                            the brokerage we charge. Important to keep a tab.
                        </p>


                        <h6>Transaction/Turnover Charges</h6>

                        <p>
                            Charged by exchanges (NSE, BSE, MCX) on the value of your
                            transactions.

                            <br />
                            <br />

                            BSE has revised transaction charges in XC, XD, XT, Z and
                            ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and
                            XD groups have been merged into a new group X w.e.f
                            01.12.2017)

                            <br />
                            <br />

                            BSE has revised transaction charges in SS and ST groups
                            to ₹1,00,000 per crore of gross turnover.

                            <br />
                            <br />

                            BSE has revised transaction charges for group A, B and
                            other non exclusive scrips (non-exclusive scrips from
                            group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover
                            on flat rate basis w.e.f. December 1, 2022.

                            <br />
                            <br />

                            BSE has revised transaction charges in M, MT, TS and MS
                            groups to ₹275 per crore of gross turnover.
                        </p>


                        <h6>Call & trade</h6>

                        <p>
                            Stamp charges by the Government of India as per the
                            Indian Stamp Act of 1899 for transacting in instruments
                            on the stock exchanges and depositories.
                        </p>


                        <h6>NRI brokerage charges</h6>

                        <ul>
                            <li>
                                For a non-PIS account, 0.5% or ₹50 per executed order
                                for equity and F&O (whichever is lower).
                            </li>

                            <li>
                                For a PIS account, 0.5% or ₹200 per executed order
                                for equity (whichever is lower).
                            </li>

                            <li>
                                ₹500 + GST as yearly account maintenance charges
                                (AMC) charges.
                            </li>
                        </ul>


                        <p>Account with debit balance</p>

                        Accounts with a debit balance will be charged an additional
                        ₹20 per executed order.


                        <h6>
                            Charges for Investor's Protection Fund Trust (IPFT) by NSE
                        </h6>

                        <ul>
                            <li>
                                Equity and Futures - ₹0.01 per crore + GST of the
                                traded value.
                            </li>

                            <li>
                                Options - ₹0.01 per crore + GST traded value
                                (premium value).
                            </li>

                            <li>
                                Currency - ₹0.05 per lakh + GST of turnover for
                                Futures and ₹2 per lakh + GST of premium for Options.
                            </li>
                        </ul>


                        <h6>Margin Trading Facility (MTF)</h6>

                        <ul>
                            <li>
                                MTF Interest: 0.04% per day (₹40 per lakh) on the
                                funded amount. The interest is applied from T+1 day
                                until the day MTF stocks are sold.
                            </li>

                            <li>
                                MTF Brokerage: 0.3% or Rs. 20/executed order,
                                whichever is lower.
                            </li>

                            <li>
                                MTF pledge charge: ₹15 + GST per pledge and unpledge
                                request per ISIN.
                            </li>
                        </ul>

                    </div>


                    <div className='col-md-6 charges-column-right'>

                        <h6>GST</h6>

                        <p>
                            Tax levied by the government on the services rendered.
                            18% of ( brokerage + SEBI charges + transaction charges)
                        </p>


                        <h6>SEBI Charges</h6>

                        <p>
                            Charged at ₹10 per crore + GST by Securities and Exchange
                            Board of India for regulating the markets.
                        </p>


                        <h6>DP (Depository participant) charges</h6>

                        <p>
                            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee +
                            ₹2.34 GST) is charged on the trading account ledger when
                            stocks are sold, irrespective of quantity.

                            <br />
                            <br />

                            Female demat account holders (as first holder) will enjoy
                            a discount of ₹0.25 per transaction on the CDSL fee.

                            <br />
                            <br />

                            Debit transactions of mutual funds & bonds get an
                            additional discount of ₹0.25 on the CDSL fee.
                        </p>


                        <h6>Pledging charges</h6>

                        ₹30 + GST per pledge request per ISIN.


                        <h6>AMC (Account maintenance charges)</h6>

                        <p>
                            Free for the first year on all new resident individual
                            accounts.

                            <br />
                            <br />

                            For BSDA demat account: Zero charges if the holding value
                            is less than ₹4,00,000. To learn more about BSDA, Click here.

                            <br />
                            <br />

                            For non-BSDA demat accounts: ₹300/year + 18% GST charged
                            quarterly (90 days). To learn more about AMC, Click here
                        </p>


                        <h6>Corporate action order charges</h6>

                        ₹20 plus GST will be charged for OFS / buyback / takeover /
                        delisting orders placed through Console.


                        <h6>Off-market transfer charges</h6>

                        ₹25 per transaction.


                        <h6>Physical CMR request</h6>

                        First CMR request is free. ₹20 + ₹100 (courier charge) +
                        18% GST for subsequent requests.


                        <h6>Payment gateway charges</h6>

                        ₹9 + GST (Not levied on transfers done via UPI)


                        <h6>Delayed Payment Charges</h6>

                        Interest is levied at 18% a year or 0.05% per day on the
                        debit balance in your trading account. Learn more.


                        <h6>Trading using 3-in-1 account with block functionality</h6>

                        <ul>
                            <li>
                                Delivery & MTF Brokerage: 0.5% per executed order
                            </li>

                            <li>
                                Intraday Brokerage: 0.05% per executed orde
                            </li>
                        </ul>

                    </div>

                </div>


                <div className="disclaimer">

                    <h4>Disclaimer</h4>

                    <p>
                        For Delivery based trades, a minimum of ₹0.01 will be charged
                        per contract note. Clients who opt to receive physical contract
                        notes will be charged ₹20 per contract note plus courier charges.
                        Brokerage will not exceed the rates specified by SEBI and the
                        exchanges. All statutory and regulatory charges will be levied
                        at actuals. Brokerage is also charged on expired, exercised,
                        and assigned options contracts. Free investments are available
                        only for our retail individual clients. Companies, Partnerships,
                        Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less)
                        as delivery brokerage. A brokerage of 0.25% of the contract
                        value will be charged for contracts where physical delivery
                        happens. For netted off positions in physically settled contracts,
                        a brokerage of 0.1% will be charged.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Brokerage;