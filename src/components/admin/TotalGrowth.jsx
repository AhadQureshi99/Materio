import React from 'react'
import Growth from "./Dashboard_charts/Growth";
import { Typography } from '@mui/material'
import { FaRegFileWord } from "react-icons/fa";
import { BsThreeDotsVertical } from 'react-icons/bs';


const TotalGrowth = ({darkMode}) => {
  return (
    <>
        <div className="d-flex flex-column gap-3">
            <div className={`card shadow border-0 ${darkMode ? 'dark-mode-newbg' : ''}`}>
                <Typography className='p-2 px-3' variant='h5'>42.5k</Typography>
                <Growth/>
                <Typography className='py-1 px-3 text-center fw-samibold' variant='p'>Total Growth</Typography>
            </div>
            <div className={`card shadow border-0 ${darkMode ? 'dark-mode-newbg' : ''}`}>
                <div className="d-flex p-3 justify-content-between align-items-center">
                    <FaRegFileWord size={40} className='text-white rounded-circle p-2' style={{backgroundColor:'#8C57FF'}} />
                    <BsThreeDotsVertical className=''/>
                </div>
                <div className="p-2 px-3">
                <Typography className=' py-1'>New Project</Typography>
                <Typography variant='h5' className='fw-bold py-2'>862 <span className='fs-6 fw-normal' style={{color:'#FF4C51'}}>-18%</span></Typography>
                <Typography className='text-secondary py-1' style={{fontSize:'0.8rem'}}>Yearly Project</Typography>
                </div>
            </div>
        </div>
    </>
  )
}

export default TotalGrowth