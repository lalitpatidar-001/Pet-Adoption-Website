import React, { useContext, useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HorizontalOptions from './HorizontalOptions';
import { userContext } from '../context/UserContextProvider';

function Pet({ _id, name, type, breed, age, gender, price, isNoFee,userId, image, status }) {
  const {User} = useContext(userContext)
  console.log("image", image)
  const [isPostLike, setIsPostLike] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dumyUrl = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.2055932209.1698127747&semt=ais"
  console.log("image", image)
  let imageAddress = '';
  if (image) {
    imageAddress = image.replace(/\\/g, '/');
  }
  const imageURL = `http://localhost:4000/${imageAddress}`;
  console.log(userId?.profileImage)
  const profileAddress = userId?.profileImage?.replace(/\\/g, '/');
  const profileURL = `http://localhost:4000/${profileAddress}`;


  useEffect(() => {
    async function getIslike(userId, _id) {
      try {
        const response = await axios.get(`http://localhost:4000/api/post/islike/${User}?postId=${_id}`);
        console.log(response.data.isLike);
        setIsPostLike(response.data.isLike);
      } catch (error) {
        console.log(error)
      }
    };
    getIslike(userId, _id);
  }, [userId, _id, isPostLike]);

  const handleLikeButton = async (e) => {
    try {
      const response = await axios.post(`http://localhost:4000/api/post/like/${User}?postId=${_id}`);
      console.log("data ", response.data)
      setIsPostLike(response.data.isLike);
    } catch (error) {
      console.log(error)
    }

  }

  const handleMoreOptionClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (

    <div className='w-full h-[85vh]  flex flex-col   p-1 shadow-lg bg-white border-1 border-[#bfbdbd]'>
      {/* user details */}
      <div className='flex p-2 justify-between items-center '>
        <div className='flex gap-2'>
          <img
            className='w-[50px] rounded-[50%]'
            src={profileURL}
            alt="profile-image"
          />
          <h1 className='py-2 font-semibold text-xl'>{userId.username}</h1>
        </div>
        <div className='relative'>
          <MoreHorizIcon onClick={handleMoreOptionClick} />

          {isMenuOpen && <HorizontalOptions
            postId={_id}
            userId={userId._id}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />}
        </div>
      </div>
      <Link to={`/pet/${_id}`}>
        <div className='h-[60vh] w-[100%]   ' style={{
          background: `url(${imageURL})`,
          backgroundPosition: "center ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }} />
      </Link>
      {/* details */}
      <div className='flex flex-col w-[100%] '>
        <div className='flex justify-between '>
          <h2 className='capitalize font-bold'>
            <span className='text-[gray]  '>Name : </span>
            {name}
          </h2>
          <h4 className='capitalize font-bold'>
            <span className='text-[gray]'>Age : </span>
            {age} yr
          </h4>
        </div>
        <div className='flex justify-between border-b-2'>
          <span className='capitalize font-bold'>
            <span className='text-[gray]'>Type : </span>
            {type}({gender})
          </span>

          <span className='capitalize font-bold'>
            <span className='text-[gray]'>Breed : </span>
            {breed}
          </span>
        </div>
        {/* actions */}
        <div className='flex justify-between p-1 '>
          <div className='flex gap-[10px] w-[100%]'>
            {isPostLike ? <div className='flex items-center' onClick={handleLikeButton}><FavoriteIcon style={{ color: "#F70086", cursor: "pointer" }} /></div> : <div onClick={handleLikeButton} className='flex items-center'><FavoriteBorderIcon className='self-start' style={{ cursor: "pointer" }} /></div>}
            <BookmarkBorderIcon />
            <SendOutlinedIcon />
          </div>
          <span className='text-green-700 font-semibold'>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default Pet;
