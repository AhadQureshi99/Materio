import { Typography } from '@mui/material'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const MeetingSchedule = ({darkMode}) => {
  return (
    <>
        <div className={`card shadow border-0 p-3 ${darkMode ? 'dark-mode-newbg' : ''}`}> 
            <div className="d-flex  justify-content-between align-item-center">
                <Typography className="fw-semibold fs-5">
                Meeting Schedule
                </Typography>
                <BsThreeDotsVertical />
            </div>
            <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center justify-content-between pt-2">
                <div className="d-flex align-items-center gap-3">
                <img width={40} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/4.png" alt="" />
                <div className="">
                    <p className='m-0 fw-semibold'>Call with Woods</p>
                    <p className='m-0 text-secondary fs-6'>21 Jul | 08:20-10:30</p>
                </div>
                </div>
                <p className='text-purple rounded-pill px-3 fw-semibold' style={{backgroundColor:'#EDE4FF'}}>Business</p>
            </div>


            <div className="d-flex align-items-center justify-content-between pt-2">
                <div className="d-flex align-items-center gap-3">
                <img width={40} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/8.png" alt="" />
                <div className="">
                    <p className='m-0 fw-semibold'>Call with Woods</p>
                    <p className='m-0 text-secondary fs-6'>21 Jul | 08:20-10:30</p>
                </div>
                </div>
                <p className=' rounded-pill px-3 fw-semibold' style={{backgroundColor:'#E4F6D6' , color:'#5BCC08'}}>Meditation</p>
            </div>


            <div className="d-flex align-items-center justify-content-between pt-2">
                <div className="d-flex align-items-center gap-3">
                <img width={40} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/5.png" alt="" />
                <div className="">
                    <p className='m-0 fw-semibold'>Call with Woods</p>
                    <p className='m-0 text-secondary fs-6'>21 Jul | 08:20-10:30</p>
                </div>
                </div>
                <p className=' rounded-pill px-3 fw-semibold' style={{backgroundColor:'#FFF3D6',color:'#FFB400'}}>Dinner</p>
            </div>


            <div className="d-flex align-items-center justify-content-between pt-2">
                <div className="d-flex align-items-center gap-3">
                <img width={40} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/3.png" alt="" />
                <div className="">
                    <p className='m-0 fw-semibold'>Call with Woods</p>
                    <p className='m-0 text-secondary fs-6'>21 Jul | 08:20-10:30</p>
                </div>
                </div>
                <p className=' rounded-pill px-3 fw-semibold' style={{backgroundColor:'#ECEDEE',color:'#B3B5B9'}}>Meetup</p>
            </div>


            <div className="d-flex align-items-center justify-content-between pt-2">
                <div className="d-flex align-items-center gap-3">
                <img width={40} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/2.png" alt="" />
                <div className="">
                    <p className='m-0 fw-semibold'>Call with Woods</p>
                    <p className='m-0 text-secondary fs-6'>21 Jul | 08:20-10:30</p>
                </div>
                </div>
                <p className=' rounded-pill px-3 fw-semibold' style={{backgroundColor:'#FFE2E3',color:'#FF4C51'}}>Dinner</p>
            </div>


            <div className="d-flex align-items-center justify-content-between pt-3">
                <div className="d-flex align-items-center gap-3">
                <img width={40} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png" alt="" />
                <div className="">
                    <p className='m-0 fw-semibold'>Call with Woods</p>
                    <p className='m-0 text-secondary fs-6'>21 Jul | 08:20-10:30</p>
                </div>
                </div>
                <p className='text-purple rounded-pill px-3 fw-semibold' style={{backgroundColor:'#EDE4FF'}}>Business</p>
            </div>

            </div>
        </div>
    </>
  )
}

export default MeetingSchedule