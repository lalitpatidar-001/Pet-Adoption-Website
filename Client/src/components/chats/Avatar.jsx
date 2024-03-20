import React from 'react'
import userAvatar from "../../assets/user-avatar.jpg"
const Avatar = ({profileImage}) => {
    console.log("profileImage",profileImage);
    const fullPath  = "http://localhost:4000/"+profileImage
    return (
        <div className='overflow-hidden '>
            <img className='h-12 w-12 rounded-full border-2 border-green-500' src={profileImage?fullPath:userAvatar} alt='avatar-img'/>
        </div>
    )
}

export default Avatar