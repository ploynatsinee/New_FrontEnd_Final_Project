import React,{ useState , useEffect} from 'react'
import axios from 'axios';
import login from './Login.css';



const Login = () => {

    

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
    <div className='login_parameter'>
        <img src={profileData.user_photo}/>        
    </div>
  )
}



        
        

export default Login