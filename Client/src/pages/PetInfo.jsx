import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import axios from "axios"

function PetInfo() {

    const [postData , setPostData] = useState({});
    const {id} = useParams();
    console.log("id " ,id)

    

    useEffect(()=>{
       async function getPostData(postId){
        try{
            const response = await axios.get(`http://localhost:4000/api/post/get/${postId}`);
            console.log(response)
            console.log(response.data.post)
            setPostData(response.data.post)
        }catch(error){
            console.log(error)
        }
        }
        getPostData(id);
    },[id])

    const imageAddress = postData.image?.replace(/\\/g, '/');
    const imageURL = `http://localhost:4000/${imageAddress}`;
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
                            <h1 className='text-2xl font-bold '>{postData.name}  ({postData.type})</h1>

                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <span className='text-xl text-[gray]  '>Gender : </span>
                                <span className='text-xl'>{postData.gender}</span>
                            </div>
                            <div >
                                <span className='text-xl'>{postData.breed} | {postData.age}yr</span>
                            </div>
                        </div>
                        <span className='font-bold text-green-700'>{postData.status}</span>

                        <div className='flex mt-[10px]'>
                            <p> <span className=' font-semibold ' >Health : </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit itaque similique asperiores? </p>
                        </div>

                        <div className='flex mt-[10px]'>
                            <p> <span className=' font-semibold ' >Location : </span>Indore, M.P.</p>
                        </div>
                        <div className='flex mt-[10px] gap-[5px]'>
                            <span className=' font-semibold ' >Adoption Fee : </span><span className='font-semibold'>{postData.isNoFee?"No Fee":postData.price} </span>
                        </div>

                        <p className='mt-[10px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam, qui odio nostrum dolorum nisi blanditiis dolore obcaecati corporis quibusdam.</p>

                    </div>
                        <div className='flex gap-[10px] '>
                            <button className='bg-[#007BE5] rounded px-2 text-white font-semibold flex-1 '>Add To Favrouite</button>
                            <button className='bg-[#007BE5] rounded px-2 text-white font-semibold flex-1'>Save To Collection</button>
                        </div>
                    </div>
                    <div className='flex-[2] h-[70vh] overflow-hidden '>
                        <img className='w-full h-full' src={imageURL} alt="" />
                        
            
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetInfo