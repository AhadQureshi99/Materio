import React from 'react'

const Visits = () => {
  return (
    <>
       <div className="card p-4 shadow border-0 position-relative">
      <div className="d-flex justify-content-between  ">
        <div>
          <p className="fw-semibold">Visits</p>
          <div className="mt-4 d-flex gap-2">
            <h4>24.5K</h4>
            <p style={{ color: "red" }} className=" fw-semibold">
              -20%
            </p>
          </div>
          <div className="bg-light  py-1 px-3 rounded-pill">
            Last Week
          </div>
        </div>
        <img
          src="/Dashboard_Images/visits.png"
          className="position-absolute"
          width={95}
          style={{ top: "-2rem",  right:"7%"}}
          alt=""
        />
      </div>
    </div>
    </>
  )
}

export default Visits
