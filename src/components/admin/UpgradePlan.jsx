import { Typography } from '@mui/material'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const UpgradePlan = ({darkMode}) => {
  return (
    <>
        <div className={`card shadow border-0 p-3 ${darkMode ? 'dark-mode-newbg' : ''} `}>
            <div className="d-flex  justify-content-between align-item-center">
                <Typography className="fw-semibold fs-5">
                    Upgrade Plan
                </Typography>
                <BsThreeDotsVertical />
            </div>
            <Typography variant='p' className='text-secondary py-3'>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</Typography>
            <div className={`d-flex align-items-center  p-2 rounded justify-content-between ${darkMode ? 'dark-mode-ne' : ''}`} style={{backgroundColor:'#EDE4FF'}}>
                <div className="d-flex gap-3 align-items-center">
                    <img width={38} height={38} className='p-2 imj rounded' style={{backgroundColor: darkMode ? '#403468' : '#EDE4FF'}} src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/cards/briefcase.png" alt="" />
                    <div className="">
                        <h6 className='p-0 m-0'>Platinum</h6>
                        <p className='p-0 m-0' style={{color:'#8C57FF'}}>Upgrade Plan</p>
                    </div>
                </div>
                <p>$<span className='fs-4 fw-semibold' >5,250</span>/Year</p>
            </div>
            <p className='pt-2'>Payment details</p>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <img width={38} height={38} className='p-2 rounded' style={{backgroundColor: darkMode ? '#403468' : '#F7F6F7'}} src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/logos/mastercard.png" alt="" />
                    <div className="">
                        <p className='m-0'>Credit Card</p>
                        <p className='m-0'>2566 xxxx xxxx 8908</p>
                    </div>
                </div>
                <button className={`btn border w-25 ${darkMode ? 'dark-mode-newbg' : ''}`}>CVV</button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <img width={38} height={38} className='p-2 rounded' style={{backgroundColor: darkMode ? '#403468' : '#F7F6F7'}} src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/logos/dinners-club.png" alt="" />
                    <div className="">
                        <p className='m-0'>Credit Card</p>
                        <p className='m-0'>8990 xxxx xxxx 6852</p>
                    </div>
                </div>
                <button className={`btn border w-25 ${darkMode ? 'dark-mode-newbg' : ''}`}>CVV</button>
            </div>
            <p className='mt-3' style={{color:'#8C57FF' ,fontSize:'0.8rem'}}>Add Payment Method</p>
            <input type="email" placeholder='Email Address' className='form-control text-secondary' />
            <button className="btn bg-purple mt-2 text-white fw-bold w-100">Contact Now</button>
        </div>
    </>
  )
}

export default UpgradePlan