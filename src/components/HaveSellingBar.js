import React from 'react'

export default function HaveSellingBar() {
    return (
      <>
        <br />
        <div className="card card-body" style={{ background: "#460610" }}>
          <div className="row justify-content-between align-items-center ">
            <div className="col col-8 text-light ">
              <h4 className="border-black">
                <strong>Have you been selling on eBay already?</strong>
              </h4>
              <h6 className="border-black">To pay your fees or ask questions</h6>
            </div>
            <div className="col col-3">
              <button className="form-control btn btn-outline-light ">
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="32"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
