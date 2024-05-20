const { urlPath } = require("../axios");

const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);



    try {
        const response = await fetch(`${urlPath}/auth/login`, {
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
            feedback.innerHTML = "something went wrong";
        }
    }
}
