import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../assets/pet-logo.png' ;
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CreatePost from './CreatePost';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { userContext } from '../context/UserContextProvider';

function SideBar({isCreateOpened ,setIsCreateOpened , page}) {
    const navitgate = useNavigate();
    const {User,setUser} = useContext(userContext);

    const handleLogout = ()=>{
        localStorage.removeItem("user-data");
        setUser(false);
        navitgate("/login");
    }

    return (
        // container
        <div className='flex-[2] h-[calc(100vh-10px)] sticky top-[8px] flex flex-col bg-white '>
            {/* wrapper */}
            <div>
                {/* logo */}
                <div className=' flex p-1 border-b-2 items-center gap-1'>
                <img className='w-[50px] h-[50px]' src={logo} alt="" />
                    <h1 className='text-xl font-bold '>Pet-Adoption</h1>
                </div>

                {/* menu */}
                <Link to='/'>
                <div className='flex gap-1 px-4 pt-5 '>
                <HomeIcon/>
                <span className='font-semibold'>Home</span>
                </div>
                </Link>

                <Link to={`/profile/${User}`}>
                <div className='flex gap-1 px-4 pt-5 '>
                <AccountBoxIcon/>
                <span className='font-semibold'>Profile</span>
                </div>
                </Link>
              
                {page!=="profile" && <div onClick={()=>setIsCreateOpened(!isCreateOpened)} className='flex gap-1 px-4 pt-5 cursor-pointer '>
                <AddBoxIcon/>
                <span className='font-semibold'>Create</span>
                </div>}

                <Link to={`/request/${User}`}>
                <div className='flex gap-1 px-4 pt-5 '>
                <AccountBoxIcon/>
                <span className='font-semibold'>Requests</span>
                </div>
                </Link>
                <Link to={`/applicant/${User}`}>
                <div className='flex gap-1 px-4 pt-5 '>
                <AccountBoxIcon/>
                <span className='font-semibold'>Applicants</span>
                </div>
                </Link>
                <Link to={`/chat/${User}`}>
                <div className='flex gap-1 px-4 pt-5 '>
                <AccountBoxIcon/>
                <span className='font-semibold'>Conversations</span>
                </div>
                </Link>
                <Link to={`/donate`}>
                <div className='flex gap-1 px-4 pt-5 '>
                <AccountBoxIcon/>
                <span className='font-semibold'>Donate Us</span>
                </div>
                </Link>
           
                <div className='flex gap-1 px-4 pt-5 ' onClick={handleLogout}>
                <LogoutOutlinedIcon />
                <span className='font-semibold'>Logout</span>
                </div>
                
               
            </div>
        </div>
    )
}

export default SideBar