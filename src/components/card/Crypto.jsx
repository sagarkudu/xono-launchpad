import React from "react";
import CryptoDataAPI from "../../api/CryptoDataAPI";
import CryptoCard from "./CryptoCard";

const Crypto = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto my-auto">
            <div className="row gy-4">
              {CryptoDataAPI.map((val, index) => {
                return (
                  <CryptoCard
                    key={index}
                    imgsrc={val.imgsrc}
                    description={val.description}
                    title={val.title}
                    hard_cap={val.hard_cap}
                    soft_cap={val.soft_cap}
                    access={val.access}
                    presale_price={val.presale_price}
                    minimum={val.minimum}
                    maximum={val.maximum}
                    token_address={val.token_address}
                    start={val.start}
                    end={val.end}
                    sale_start_time={val.sale_start_time}
                    status={val.status}
                    btn1={val.btn1}
                    btn2={val.btn2}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
