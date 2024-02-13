import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../context/UserContextProvider';
function Login() {
    const navigate = useNavigate();
    const {User,setUser} = useContext(userContext);
    const initalValue = 
                    {username:"",
                     password:""
                    };
    const [userData , setUserData] = useState(initalValue);
    const [isLoading , setIsLoading] = useState(false);

    const handleUserData=(e)=>{
        const {name,value} = e.target;
        setUserData(prevData =>({ ...prevData, [name]: value }) );
    }

    const handleSubmitSignIn= async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        try{
            const response = await axios.post("http://localhost:4000/api/auth/login",userData);
            setIsLoading(false);
            console.log(response);
            if(response.status=200) {
                window.alert("Login Successfull, click ok to continue!");
                let userId = response.data.sendData._id
                localStorage.setItem("user-data" , JSON.stringify(userId));
                userId = userId.replace(/"/g,'');
                setUser(user=>user=userId);
                console.log("user" , User)
                navigate("/");
            }
        }
        catch(error){   
            setIsLoading(false);
            console.log(error)
            if(error.response.status === 404){
                const feedback = document.querySelector(".feedback");
                feedback.innerHTML = error.response.data.msg;
            }
            else if(error.response.status === 401){
                const feedback = document.querySelector(".feedback");
                feedback.innerHTML = error.response.data.msg;
            }
            else{
                const feedback = document.querySelector(".feedback");
                feedback.innerHTML ="something went wrong";
            }
        }
    }
    return (
        // container
        <div className='flex items-center justify-center h-[100vh] w-[100vw] bg-[#dddddd]'>
            {/* wrapper */}
            <div className='flex flex-col gap-[20px] bg-white w-fit h-fit p-8  rounded '>
                <h1 className='text-3xl '>Login here</h1>
                <span className='feedback text-red-500 text-semibold'></span>
                <form onSubmit={handleSubmitSignIn} className='flex flex-col gap-3 '>
                    <input required  className='p-2 border-b-2 outline-none' type="text" placeholder='enter username'
                    name='username' value={userData.username} onChange={handleUserData} />
                    <input required  className='p-2 border-b-2  outline-none' type='password' placeholder='enter password'
                     name='password' value={userData.password} onChange={handleUserData}/>
                    <button disabled={isLoading && true} className={`p-2 px-4 border-none bg-[#5551FF] rounded text-white font-semibold w-fit  ${isLoading && "bg-[#a9a8e9]"}`} type='submit'>Sign In</button>
                    <span>New user? <Link to= 
                        "/register"><span className='text-[#5551FF]'>Register here</span></Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login;