import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SideBar from '../components/SideBar';
import Pet from '../components/Pet';
import PetProfile from '../components/petProfile';
import EditProfile from '../components/EditProfile';
import CancelIcon from '@mui/icons-material/Cancel';
import BGCreatePost from '../components/BGCreatePost';
import { useParams } from 'react-router-dom';
import { userContext } from '../context/UserContextProvider';
import axios from 'axios';

const dumyUrl = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600";

function Profile() {
    const [userPosts, setUserPosts] = useState([]);
    const { User, setUser } = useContext(userContext);
    const [userData, setUserData] = useState("");
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [profileImageURL, setProfileImageURL] = useState(null);
    const cleanedUserId = User?.replace(/"/g, '');




    useEffect(() => {
        async function getUser() {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:4000/api/user/${cleanedUserId}`);
                setIsLoading(false)
                setUserData(response.data);

            } catch (error) {
                setIsLoading(false);
                console.log(error)
            }
        }
        if (cleanedUserId) getUser();
    }, []);


    useEffect(() => {
        setProfileImageURL(() => {
            const imageAddress = userData.profileImage?.replace(/\\/g, '/');
            const imageUrl = `http://localhost:4000/${imageAddress}`;
            console.log("profileImageURL", profileImageURL);
            console.log("userData", userData);
            return imageUrl
        })
    }, [userData])

    useEffect(() => {
        async function getUserPosts(userId) {
            try {
                const response = await axios.get(`http://localhost:4000/api/post/getall/${userId}`);
                console.log("response ", response)
                console.log("response data", response.data);
                setUserPosts(response.data.posts);
            } catch (error) {
                console.log(error);

            }
        };
        if (cleanedUserId) { getUserPosts(cleanedUserId); }
    }, [cleanedUserId])

    useEffect(() => {
        if (isEditClicked) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isEditClicked]);

    return (
        // container
        <>
            {isLoading ? <span>Loading...</span> :
                <div className='flex relative overflow-hidden '>

                    {isEditClicked && <BGCreatePost isEditClicked={isEditClicked} setIsEditClicked={setIsEditClicked} />}

                    <SideBar page="profile" />

                    {isEditClicked && <>
                        <EditProfile isEditClicked={isEditClicked} setIsEditClicked={setIsEditClicked} />
                    </>
                    }

                    <div className='flex  flex-col flex-[5] justify-center items-center bg-[#dddddd]  min-h-[100vh] p-2'>
                        {/* wrapper */}

                        <div className='  bg-white p-4 flex flex-col items-center w-full '>
                            {/* profile */}
                            <div className='flex p-5 pl-5 lg:gap-[40px] justify-center ' >

                                <img className='w-[100px] h-[100px] rounded-[50%]' src={userData.profileImage ? profileImageURL : dumyUrl} alt="profile-image" />

                                <div className='px-4 py-2 flex flex-col'>
                                    <h1 className='text-xl font-semibold'>{userData.username}</h1>
                                    <span className='font-semibold'>{userPosts.length}post</span>
                                   { userData._id===cleanedUserId &&
                                    <span onClick={() => setIsEditClicked(!isEditClicked)} className=' mt-2 font-bold rounded text-center cursor-pointer bg-[#dddddd]'>Edit Profile</span>
                                    }
                                </div>
                                {/* options */}
                                <div className='py-2 cursor-pointer'>
                                    <MoreHorizIcon />
                                </div>
                            </div>


                        {/* posts */}
                        <div className='flex flex-col items-center gap-2 w-full max-w-[500px] border-t-2'>
                            {userPosts &&
                                userPosts.map((post) => {
                                    return <Pet key={post._id} {...post} />
                                })
                            }
                        </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Profile