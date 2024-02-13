import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider'

function HorizontalOptions({userId}) {
    const {User} = useContext(userContext);
    // console.log("ids ",userId , User)
  return (
    // container
    <div className='bg-white p-2 border-black border-2' >
        {/* wrapper */}
        <div className='absolute top-[18px] right-0 bg-white shadow-lg  w-[70px] cursor-pointer' >
            <ul className='flex flex-col  w-[100%]'>
                <li className='text-center border-2 border-black w-[100%] 
                hover:bg-gray-200
                ' c>save</li>
               {User === userId && <li
                className='text-center border-2 w-[100%]
                hover:bg-gray-200
                border-black'
                >delete</li>}
               
            </ul>
        </div>
    </div>
  )
}

export default HorizontalOptions