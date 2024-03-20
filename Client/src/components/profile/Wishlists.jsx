import React, { useContext, useEffect, useState } from 'react'
import Pet from '../Pet'
import axios from 'axios'
import { userContext } from '../../context/UserContextProvider';

const Wishlists = () => {
  const { User } = useContext(userContext);
  const [wishlist , setWishlists] = useState([]);
  useEffect(()=>{
    async function getWishlist (){
      try{
        const response = await axios.get(`http://localhost:4000/api/user/wishlists/${User}`)
        console.log(response)
        console.log(response.data.data);
        setWishlists(response.data.data)
      }catch(error){
        console.log(error)
      }
    }
    getWishlist();
  },[User])
  return (
      <>

        {wishlist &&
          wishlist.map((post) => {
            return <Pet key={post._id} {...post?.post} userId={post?.owner} />
          })
        }
      </>
 
  )
}

export default Wishlists