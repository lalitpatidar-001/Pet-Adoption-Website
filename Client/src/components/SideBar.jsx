import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../assets/pet-logo.png' 

function SideBar() {
    return (
        // container
        <div className='flex-[2] h-[calc(100vh-8px)] sticky top-[8px] flex flex-col bg-white'>
            {/* wrapper */}
            <div>
                {/* logo */}
                <div className=' flex p-3 border-b-2 items-center gap-1'>
                <img className='w-[50px]' src={logo} alt="" />
                    <h1 className='text-xl font-bold '>Pet-Adoption</h1>
                </div>

                {/* menu */}
                <Link to='/'>
                <div className='flex gap-1 px-4 pt-5 '>
                <HomeIcon/>
                <span className='font-semibold'>Home</span>
                </div>
                </Link>

                <Link to='/profile/1'>
                <div className='flex gap-1 px-4 pt-5 '>
                <HomeIcon/>
                <span className='font-semibold'>Profile</span>
                </div>
                </Link>
                <Link to='/'>
                <div className='flex gap-1 px-4 pt-5 '>
                <HomeIcon/>
                <span className='font-semibold'>Home</span>
                </div>
                </Link>
                <Link to='/'>
                <div className='flex gap-1 px-4 pt-5 '>
                <HomeIcon/>
                <span className='font-semibold'>Home</span>
                </div>
                </Link>
                
               
            </div>
        </div>
    )
}

export default SideBar