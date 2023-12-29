import React from 'react'
import Navbar from '../components/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

function PetInfo() {
    return (
        <>
            <Navbar />
            {/* container */}
            <div className='flex justify-center bg-[#dddddd] p-2 '>
                {/* wrapper */}
                
                <div className='w-[1200px] flex p-4 bg-white h-[calc(100vh-66px)] items-center relative '>

                
              <Link to='/'>
                <div className='flex items-center absolute top-2 left-[2px] rounded-[50%] bg-[#dddddd]'  >
                    <ArrowBackIcon/>
                </div>
              </Link>
           
                    <div className=' flex-1 p-4 flex flex-col justify-between h-[70vh]'>
                    <div >
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold '>Rocky  (Dog)</h1>

                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <span className='text-xl text-[gray]  '>Gender : </span>
                                <span className='text-xl'>Male</span>
                            </div>
                            <div >
                                <span className='text-xl'>Labrador | 4yr</span>
                            </div>
                        </div>
                        <span className='font-bold text-green-700'>Available</span>

                        <div className='flex mt-[10px]'>
                            <p> <span className=' font-semibold ' >Health : </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit itaque similique asperiores? </p>
                        </div>

                        <div className='flex mt-[10px]'>
                            <p> <span className=' font-semibold ' >Location : </span>Indore, M.P.</p>
                        </div>
                        <div className='flex mt-[10px] gap-[5px]'>
                            <span className=' font-semibold ' >Adoption Fee :  </span><span className='font-semibold'>No Fee</span>
                        </div>

                        <p className='mt-[10px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam, qui odio nostrum dolorum nisi blanditiis dolore obcaecati corporis quibusdam.</p>

                    </div>
                        <div className='flex gap-[10px] '>
                            <button className='bg-[#007BE5] rounded px-2 text-white font-semibold flex-1 '>Add To Favrouite</button>
                            <button className='bg-[#007BE5] rounded px-2 text-white font-semibold flex-1'>Save To Collection</button>
                        </div>
                    </div>
                    <div className='flex-[2] h-[70vh] '>
                        <img src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg
            " alt="" />
                        
            
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetInfo