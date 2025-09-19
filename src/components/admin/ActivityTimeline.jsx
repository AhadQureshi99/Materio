import { Typography } from '@mui/material'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { BiSolidFilePdf } from "react-icons/bi";


const ActivityTimeline = ({darkMode}) => {
  return (
    <>
        <div className={`card shadow p-4 pb-0 border-0 ${darkMode ? 'dark-mode-newbg' : ''}`}>
            <Typography className="fw-semibold">Activity Timeline</Typography>
            <div className="d-flex align-items-top justify-content-between mt-4">
                <div className="d-flex align-top-center gap-2">
                    <GoDotFill className="text-purple" />
                    <div className="d-flex flex-column">
                    <Typography className='py-1'>12 Invoices have been paid</Typography>
                    <Typography className='py-2 text-secondary'>Invoices have been paid to the company</Typography>
                    <div className={`d-flex align-items-center gap-2 bg-lights text-secondary w-50 px-2 rounded ${darkMode ? 'dark-mode-newbgn' : ''}`}>
                        <BiSolidFilePdf color='#CB0606' size={23}/>
                        <Typography>invoices.pdf</Typography>
                    </div>
                    </div>
                </div>
                <Typography className='text-secondary'>12 min ago</Typography>
            </div>

            <div className="d-flex align-items-top justify-content-between my-4">
                <div className="d-flex align-top-center gap-2">
                    <GoDotFill className="" color='#56CA00' />
                    <div className="d-flex flex-column">
                    <Typography className='py-1'>Client Meeting</Typography>
                    <Typography className='py-2 text-secondary'>Project meeting with john @10:15am</Typography>
                    <div className="d-flex align-items-center gap-2 pt-1  text-secondary  px-2 rounded">
                    <img width={30} className='rounded-circle ' src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png" alt="" />
                    <div className="">
                    <Typography>Lester McCarthy (Client)</Typography>
                    <Typography>CEO of ThemeSelection</Typography>
                    </div>
                    </div>
                    </div>
                </div>
                <Typography className='text-secondary'>45 min ago</Typography>
            </div>

            <div className="d-flex align-items-top justify-content-between mt-2 ">
                <div className="d-flex align-top-center gap-2">
                    <GoDotFill className="" color='#16B1FF' />
                    <div className="d-flex flex-column">
                        <Typography className='py-1'>Create a new project for client</Typography>
                        <Typography className='py-2 text-secondary'>Create a new project for client</Typography>
                    </div>
                </div>
                <Typography className='text-secondary'>2 Day Ago</Typography>
            </div>
        </div>
    </>
  )
}

export default ActivityTimeline