import { Checkbox } from '@mui/material'
import React, { useState } from 'react'

function Filters() {

 const [rangeValue, setRangeValue] = useState(50); 
 const [rangePrice, setRangePrice] = useState(50000); 
 const [isNoFeeChecked , setIsNoFeeChecked] = useState(false);

  const handleRangeChange = (event) => {
    setRangeValue(parseInt(event.target.value, 10));
  };
  const handlePriceChange = (event) => {
    setRangePrice(parseInt(event.target.value, 10));
  };

  const handlPriceCheckBox = (e)=>{
    setIsNoFeeChecked(!isNoFeeChecked);
  }
    return (
        // container
        <div className='flex-[3] bg-white shadow-md h-[calc(100vh-8px)] sticky top-[8px] ' >
            {/* wrapper */}
            <div className='flex flex-col'>
                <div className='border-b-2'>
                    <h1 className='text-2xl font-bold p-3'>Filter Pets</h1>
                </div>
                <div className='flex flex-col gap-1 p-3'>
                    <span className='text-xl'>Type</span>
                    <input className='p-2 border-2 border-gray-400 rounded outline-none' type="text" placeholder='search by type' />
                </div>
                <div className='flex flex-col gap-1 p-3'>
                    <span className='text-xl'>Breed</span>
                    <input className='p-2 border-2 border-gray-400 rounded outline-none' type="text" placeholder='search by type' />
                </div>
                <div className='flex flex-col gap-1 p-3'>
                    <span className='text-xl'>Gender</span>
                    <div className='flex flex-col px-4 gap-1'>
                    
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    // checked={selectedGender === 'male'}
                                    // onChange={handleGenderChange}
                                />
                                 Male 
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    // checked={selectedGender === 'female'}
                                    // onChange={handleGenderChange}
                                />
                                Female
                            </label>
                    </div>
                    {/* age range */}
                    <div className='flex flex-col p-2'>
                        <span className='text-xl'>Age Range</span>
                        <input className='pl-2' type="range" min={0} max={50} name="" id="" onChange={handleRangeChange}
                     
                        />
                        <div className='flex justify-between px-4'>
                            <span>min : 0yr </span>
                            <span>max : {rangeValue}yr</span>
                        </div>
                    </div>
                    {/* price range */}
                    <div className='flex flex-col p-2'>
                        <span className='text-xl'>Price Range</span>
                        <input className='pl-2' type="range" min={0} max={50000} name="" id="" onChange={handlePriceChange}
                                   disabled={isNoFeeChecked?true:false}
                        />
                        <div className='flex justify-between px-4'>
                            <span>min : 0 </span>
                            <span>max : {rangePrice}</span>
                        </div>
                        <div className='flex gap-1 items-center px-4'> 
                        <span>No Fee</span>
                        <input type="checkbox" name="" id="" onChange={handlPriceCheckBox} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters