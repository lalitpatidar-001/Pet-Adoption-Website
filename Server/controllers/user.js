const { findById } = require("../models/User");
const User = require('../models/User')


const getUser = async(req,res)=>{
       const id =  req.params.id;
       console.log(id)
      try{
        const user = await User.findById(id);
        console.log(user)
        res.status(200).json(user)
        }catch(error){
            res.status(500).json("something went wrong on server");
            console.log(error);
      }

};

// update profile
const updateProfile = async (req, res) => {
      console.log("update called")
      const id = req.query.id;
      const {fullname ,username , gender , address , DOB , profileImage} = req.body;
      console.log("body " , req.body)
     
  
      try {
          // Check if the user exists
          const isUserExist = await User.findById(id);
  
          if (!isUserExist) {
              return res.status(404).json({ msg: "User not found" });
          }
          console.log("file" ,req.file)
          // Update the user
          const updateField = {};
          if(fullname) updateField.fullname = fullname;
          if(username) updateField.username = username;
          if(gender) updateField.gender = gender;
          if(address) updateField.address = address;
          if(DOB) updateField.DOB = DOB;
          if(req.file) updateField.profileImage = req.file.path;


          const updatedUser = await User.findByIdAndUpdate(id, updateField, { new: true });
  
          // Send the updated user as the response
          console.log("updated field " , updateField)
          // res.json(updatedUser);
          return res.json({msg:"profile updated successfully"})
      } catch (error) {
          // Handle errors
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
      }
  };

module.exports = {
    getUser,
    updateProfile
}