import React, { useContext, useEffect, useState } from 'react'
import Pet from './Pet'
// import Createpet from './Createpet'
import axios from 'axios';
// import { petContext } from '../context/petContext';
import { useDispatch, useSelector } from 'react-redux';
import { addAllPets } from '../redux/slices/petSlice';

function Pets({ isCreateOpened, setIsCreateOpened }) {
  const {pets} = useSelector(state=>state.pet);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllpet() {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:4000/api/pet/all");
        setIsLoading(false);
        dispatch(addAllPets({data:response.data}))
        console.log("response" ,response.data)
      }
      catch (error) {
          console.log(error)
      }
    }
    getAllpet();
  },[]);


  console.log("rendering pets")

  return (
    <>
      <div className=' flex flex-[5] flex-col gap-10  items-center   gap-y-[5px] flex-wrap relative  '>
      

       {
        pets && pets.map((pet)=>{
         return  <Pet {...pet} key={pet._id}/>
        })
       }
      </div>
    </>
  )
}

export default Pets