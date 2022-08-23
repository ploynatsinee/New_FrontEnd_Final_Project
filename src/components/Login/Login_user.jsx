import React,{ useState , useEffect} from 'react'
import axios from 'axios';
import LoginUser from './Login_user.css';


const Login_user = ({color = 'black'}) => {

    const [profileData,setProfileData] = useState([])
    const userIdLogin = "62fb0d2f2be7189031288b44"
    useEffect(() => {
        const url = `http://localhost:8080/users/${userIdLogin}/information`
        axios.get(`${url}`)
        
        .then((res) => { setProfileData(res.data)})
        console.log(profileData)
    }
    
        , [])

  return (
    <h2 style={{textAlign: 'center', color}}>{profileData.username}</h2>
  )
}

export default Login_user