import React from "react";
import Icons from "./../icons/Icons";

import binanceIcon from "../../assets/images/binance-icon.svg";

const CryptoCoin = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
        </div>
      </div>

      <div className="my-5"></div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto my-auto">
            <div className="row gy-4">
              <div className="card" style={{ width: "22rem" }}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <img
                        src={binanceIcon}
                        alt="..."
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">BC : BINANCE</h6>
                    </div>
                  </div>
                  <Icons />
                </div>

                <div className="card-body">
                  <h3 className="card-title">Network Name</h3>
                  <p className="card-text">
                    Cryto description Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                  </p>
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
                          <td>1500 BNB</td>
                        </tr>
                        <tr>
                          <th scope="col">Soft Cap</th>
                          <td>750 BNB</td>
                        </tr>
                        <tr>
                          <th scope="col">Access</th>
                          <td>Public</td>
                        </tr>
                        <tr>
                          <th scope="col">Presale Price</th>
                          <td>0.0002 BNB</td>
                        </tr>
                        <tr>
                          <th scope="col">Minimum</th>
                          <td>0.1 BNB</td>
                        </tr>
                        <tr>
                          <th scope="col">Maximum</th>
                          <td>5 BNB</td>
                        </tr>
                      </tbody>
                    </table>
                    <h6>Token Address</h6>
                    <h6>0XB3FCE485089B72D7B0E7282160123E68C125A1C7</h6>
                    <h6>Start : 8/15/2021, 6:30:00 PM</h6>
                    <h6>End : 8/22/2021, 6:30:00 PM</h6>
                    <h6> </h6>
                    <h5 className="mt-3">Status : Open </h5>
                    <a href="/refund_fund">
                      <button className="btn btn-danger">Claim Refund</button>
                    </a>
                    <button className="btn btn-primary">Wrong Network</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCoin;
