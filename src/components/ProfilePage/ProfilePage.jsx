import React from "react";
import "./ProfilePage.css"
import { useState , useEffect} from "react";
import MyActivites from "../MyActivites/MyActivities";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const ProfilePage= () =>{


    const [profileData,setProfileData] = useState([])
    const userIdLogin = "62fb0d2f2be7189031288b44"
    useEffect(() => {
        const url = `http://localhost:8080/users/${userIdLogin}/information`
        axios.get(`${url}`)
        
        .then((res) => { setProfileData(res.data)})
        console.log(profileData)
    }
    
        , [])
    

    return(
        <div>
           <div className="navbar">
                <Navbar/>
           </div>
            <div className="box-profile-page">
                <div className="user-profile">
                    <div className="profile-picture">
                        <img src={profileData.user_photo} 
                        alt="profile-picture"/>
                    </div>
                    <div className="profile-detail">
                        <h2>Name : <span>{profileData.username}</span></h2>
                        <h2>Age : <span>{profileData.age}</span></h2>
                        <h2>Height : <span>{profileData.height} cm</span></h2>
                        <h2>Weight : <span>{profileData.weight} kg</span></h2>
                        <h2>BMI : <span>{profileData.bmi}</span></h2>
                    </div>
                    
                </div>
                <div className="my-activity">
                 
                    <MyActivites />
                </div>

            </div>
        </div>
    )
}
export default ProfilePage