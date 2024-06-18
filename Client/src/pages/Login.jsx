import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContextProvider';
import axiosInstance, { urlPath } from '../axios';

function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(userContext);
    const initialValue = {
        username: "",
        password: ""
    };
    const [userData, setUserData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    const handleUserData = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleSubmitSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            setIsLoading(false);
            const responseData = await response.json();
            console.log(responseData);

            if (response.status === 200) {
                window.alert("Login Successfull, click ok to continue!");
                let userId = responseData.sendData._id;
                localStorage.setItem("user-data", JSON.stringify(userId));
                userId = userId.replace(/"/g, '');
                setUser(userId);
                navigate("/");
            }
        }
        catch (error) {
            setIsLoading(false);
            console.log(error);
            const feedback = document.querySelector(".feedback");
            if (error.response && error.response.status === 404) {
                feedback.innerHTML = error.response.data.msg;
            } else if (error.response && error.response.status === 401) {
                feedback.innerHTML = error.response.data.msg;
            } else {
                feedback.innerHTML = "Something went wrong";
            }
        }
    }

    return (
        <div className='flex items-center justify-center h-[100vh] w-[100vw] bg-[#dddddd]'>
            <div className='flex flex-col gap-[20px] bg-white w-fit h-fit p-8 rounded '>
                <h1 className='text-3xl'>Login here</h1>
                <span className='feedback text-red-500 text-semibold'></span>
                <form onSubmit={handleSubmitSignIn} className='flex flex-col gap-3 '>
                    <input required className='p-2 border-b-2 outline-none' type="text" placeholder='enter username'
                        name='username' value={userData.username} onChange={handleUserData} />
                    <input required className='p-2 border-b-2  outline-none' type='password' placeholder='enter password'
                        name='password' value={userData.password} onChange={handleUserData} />
                    <button disabled={isLoading} className={`p-2 px-4 border-none bg-[#5551FF] rounded text-white font-semibold w-fit ${isLoading && "bg-[#a9a8e9]"}`} type='submit'>Sign In</button>
                    <span>New user? <Link to="/register"><span className='text-[#5551FF]'>Register here</span></Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login;
