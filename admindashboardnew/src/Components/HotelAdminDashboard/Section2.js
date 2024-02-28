import React from "react";

function Section2() {
  return (
    <div className="page-wrapper">
        <div className="content container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">VISITORS</h4>
              </div>
              <div className="card-body">
                <div id="line-chart" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">ROOMS BOOKED</h4>
              </div>
              <div className="card-body">
                <div id="donut-chart" />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  );
}

export default Section2;
