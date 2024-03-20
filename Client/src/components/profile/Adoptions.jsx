import React, { useContext, useEffect, useState } from 'react'
import Pet from '../Pet'
import axios from 'axios'
import { userContext } from '../../context/UserContextProvider';

const Adoptions = () => {
  const { User } = useContext(userContext);
  const [adoptions ,setAdoptions] = useState([])
  useEffect(()=>{
    async function getAllAdoptions (){
      try{
        const response = await axios.get(`http://localhost:4000/api/user/adoptions/${User}`)
        console.log(response)
        console.log(response.data.data);
        setAdoptions(response.data.data)
      }catch(error){
        console.log(error)
      }
    }
    getAllAdoptions();
  },[User])
  return (
      <>

        {adoptions &&
          adoptions.map((post) => {
            return <Pet key={post._id} {...post?.pet} userId={post?.owner} />
          })
        }
      </>
 
  )
}

export default Adoptions