import React from "react";
import "././crypto-card.styles.css";

//logos
import globe_logo from "../../assets/images/globe-logo.png";
import telegram_logo from "../../assets/images/telegram-logo.png";
import twitter_logo from "../../assets/images/twitter-logo.png";
import medium_logo from "../../assets/images/medium-logo.png";

const CryptoCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto mt-5">
        <div className="card" style={{ width: "22rem", borderRadius: "10px" }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="icon">
                <img
                  src={props.imgsrc}
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="ms-2 c-details">
                <h6 className="mb-0">BC : BINANCE</h6>
              </div>
            </div>
            {/* <Icons /> */}
            <div className="badge">
              <a href="https://xono.network">
                <img
                  src={globe_logo}
                  alt="..."
                  style={{ height: "20px", width: "20px", marginTop: "5px" }}
                />
                {/* <FontAwesomeIcon icon="globe" /> */}
              </a>
              <a href="https://telegram.me/XonoNetwork">
                <img
                  src={telegram_logo}
                  alt="..."
                  style={{ height: "20px", width: "20px", marginTop: "5px" }}
                />
              </a>
              <a href="https://twitter.com/XonoNetwork">
                <img
                  src={twitter_logo}
                  alt="..."
                  style={{ height: "20px", width: "20px", marginTop: "5px" }}
                />
              </a>
              <a href="https://twitter.com/XonoNetwork">
                <img
                  src={medium_logo}
                  alt="..."
                  style={{ height: "20px", width: "20px", marginTop: "5px" }}
                />
              </a>
            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.description}</p>
            <div className="mt-3">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <table className="table mt-1">
                <tbody>
                  <tr>
                    <th scope="col">Hard Cap</th>
                    <td>{props.hard_cap}</td>
                  </tr>
                  <tr>
                    <th scope="col">Soft Cap</th>
                    <td>{props.soft_cap}</td>
                  </tr>
                  <tr>
                    <th scope="col">Access</th>
                    <td>{props.access}</td>
                  </tr>
                  <tr>
                    <th scope="col">Presale Price</th>
                    <td>{props.presale_price}</td>
                  </tr>
                  <tr>
                    <th scope="col">Minimum</th>
                    <td>{props.minimum}</td>
                  </tr>
                  <tr>
                    <th scope="col">Maximum</th>
                    <td>{props.maximum}</td>
                  </tr>
                </tbody>
              </table>
              <h6>Token Address</h6>
              <h6>{props.token_address}</h6>
              <h6>Start :{props.start}</h6>
              <h6>End : {props.end}</h6>
              <h6>Sale Start : {props.sale_start_time}</h6>

              <h5 className="mt-3">Status: {props.status} </h5>
              <a href="/refund_fund">
                <button className="btn btn-danger">{props.btn1}</button>
              </a>
              <button className="btn btn-primary">End :{props.btn2}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
