import React from 'react';
import Navbar from '../components/Navbar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SideBar from '../components/SideBar';

function Profile() {
    return (
        // container
        <>
            <div className='flex'>
                <SideBar/>

                <div className='flex flex-[3] justify-center bg-[#dddddd] min-h-[100vh] p-2'>
                    {/* wrapper */}
                    <div className=' w-[1200px] bg-white p-4 '>
                        {/* profile */}
                        <div className='flex p-5 pl-5 lg:gap-[40px] ' >

                            <img className='w-[100px] h-[100px] rounded-[50%]' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                            <div className='px-4 py-2 flex flex-col'>
                                <h1 className='text-xl font-semibold'>Lalit patidar</h1>
                                <span className='font-semibold'>12post</span>
                                <span className=' mt-2 font-bold rounded text-center cursor-pointer bg-[#dddddd]'>Edit Profile</span>
                            </div>
                            {/* options */}
                            <div className='py-2 cursor-pointer'>
                                <MoreHorizIcon />
                            </div>
                        </div>

                        {/* posts */}



                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile