import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { RiCheckDoubleLine, RiGroupLine, RiMoreLine, RiStarSmileLine } from 'react-icons/ri'
import { FiMapPin } from "react-icons/fi";

const DeveloperMeetup = ({darkMode}) => {
  return (
    <>
        <div className={`card shadow border-0 ${darkMode ? 'dark-mode-newbg' : ''}`}>
            <img src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/cards/workstation.png" width={'100%'} alt="" />
            <div className="p-3">
                <div className="d-flex gap-3 align-items-center">
                    <div className={`text-purple px-3 py-1 rounded ${darkMode ? 'dark-mode-newbgn' : ''}`} style={{backgroundColor:'#EDE4FF'}}>
                        <p className='m-0'>Jan</p>
                        <p className='m-0 fw-semibold'>24</p>
                    </div>
                    <div className="">
                        <p className='m-0'>Developer Meetup</p>
                        <p className='m-0 text-secondary ' style={{fontSize:'0.9rem'}}>The WordPress open source,free software project is the community behind the…</p>
                    </div>
                </div>
                <hr className='text-secondary' />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-center text-secondary">
                        <RiStarSmileLine size={25} />
                        <p className='m-0'>Interested</p>
                    </div>
                    <div className="text-center text-secondary">
                        <RiCheckDoubleLine size={25} />
                        <p className='m-0'>Joined</p>
                    </div>
                    <div className="text-center text-secondary">
                        <RiGroupLine size={25} />
                        <p className='m-0'>Invited</p>
                    </div>
                    <div className="text-center text-secondary">
                        <RiMoreLine size={25} />
                        <p className='m-0'>More</p>
                    </div>
                    
                </div>
                <hr className="text-secondary" />
                <div className="d-flex text-secondary align-items-center gap-3">
                    <IoTimeOutline size={25}/>
                    <div className="">
                        <p className='m-0'>Tuesday, 24 january, 10:20 - 12:30</p>
                        <p className='m-0'>After 1 week</p>
                    </div>
                </div>
                <div className="d-flex text-secondary align-items-center gap-3">
                    <FiMapPin size={25}/>
                    <div className="">
                        <p className='m-0'>The Rochard NYC</p>
                        <p className='m-0'>1305 Lexington Ave, New York</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DeveloperMeetup