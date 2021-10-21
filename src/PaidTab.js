import React from "react";
import Navbar from "./Navbar";
import PaidItem from "./PaidItem";
import "./css/AccountInfo.css";

const Paid = () => {
  return (
    <div className="container py-4">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 ">
          <div className="card p-5">
            <Navbar />
            <table className="table table-borderless">
              <PaidItem />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paid;
