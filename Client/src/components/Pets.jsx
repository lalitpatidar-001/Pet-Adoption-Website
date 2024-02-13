import React, { useContext, useEffect, useState } from 'react'
import Pet from './Pet'
import CreatePost from './CreatePost'
import axios from 'axios';
import { postContext } from '../context/PostContext';

function Pets({ isCreateOpened, setIsCreateOpened,posts, setPosts }) {
  
  const {isPostCreated , setIsPostCreated} = useContext(postContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllPost() {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:4000/api/post/all");
        setIsLoading(false);
        setPosts(response.data);
        console.log("response" ,response.data)
      }
      catch (error) {
          console.log(error)
      }
    }
    getAllPost();
  },[]);


  console.log("rendering pets")

  return (
    <>
      <div className=' flex flex-[5] flex-col gap-10  items-center   gap-y-[5px] flex-wrap relative  '>
      

       {
        posts && posts.map((post)=>{
         return  <Pet {...post} key={post._id}/>
        })
       }
      </div>
    </>
  )
}

export default Pets