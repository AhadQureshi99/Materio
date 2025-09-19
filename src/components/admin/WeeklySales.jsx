import { Typography } from '@mui/material'
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import WeeklyCharts from "./Dashboard_charts/WeeklyCharts";
import { RiGroupLine, RiPieChart2Line } from 'react-icons/ri';


const WeeklySales = ({darkMode}) => {
  return (
    <>
        <div className={`card border-0 shadow ${darkMode ? 'dark-mode-newbg' : ''} `}>
            <div className="d-flex p-3 justify-content-between align-item-center">
                <div className="d-flex flex-column">
                    <Typography className="fw-semibold fs-5">
                    Weekly Sales
                    </Typography>
                    <Typography>
                    Total 85.4k Sales
                    </Typography>
                </div>
                <BsThreeDotsVertical />
            </div>
            <WeeklyCharts/>
            <div className="d-flex justify-content-evenly p-3" >
              <div className="d-flex gap-2 align-items-center">
                <RiPieChart2Line size={40} color='#8C57FF' className=' rounded p-2' style={{backgroundColor:'#EDE4FF'}} />
                <div className="">
                    <h5 className='m-0 p-0 text-'>245K</h5>
                    <p className='m-0 p-0 text-secondary'>Sales</p>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                  <RiGroupLine size={40} color='#56CA00' className=' rounded p-2' style={{backgroundColor:'#E4F6D6'}} />
                  <div className="">
                    <p className='m-0 p-0 text-secondary'>Users</p>
                    <h5 className='m-0 p-0 text-'>12.5K</h5>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeeklySales