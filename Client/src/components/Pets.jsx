import React from 'react'
import Pet from './Pet'

function Pets() {
  return (
   <>
        {/* Container */}
        {/* <div className='flex   justify-center bg-[#dcdcdc] '> */}
            {/* wrapper */}
            <div className=' flex flex-[5]  flex-col  items-center   gap-y-[5px] flex-wrap '>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
                    <Pet/>
            </div>
        {/* </div> */}
   </>
  )
}

export default Pets