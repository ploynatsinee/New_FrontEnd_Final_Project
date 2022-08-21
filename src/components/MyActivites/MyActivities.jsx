import React, { useState,useEffect } from "react";
// import MuiSelect from "./DropDown";
import CardMyActivites from "../CardMyActivies/CardMyActivies";
import DropDown from "./DropDown";
import "./MyActivites.css";
import axios from "axios";

const MyActivites = () => {
    const username_id = "62f7cc755f03dde81aa2e305"
    const url="http://localhost:8080"
    const [dataActivities,setDataActivites] = useState([])
    const [click,setClick] = useState(true)
    useEffect(()=>{
            axios.get(`${url}/activites/${username_id}`).then((res)=>{
            setDataActivites(res.data)
        })
    console.log("delete")
    },[click])
 
    const removeItem = (id) =>{
        axios.delete(`${url}/activites/${id}`).then(
        setClick(!click))
     
    }
    
    const updateItem =(id) =>{
        setClick(!click)
    }
    
    // const textComment=" Simply dummy text of the printing and is simply dummy text of the printing and is simply dummy text of the printing and text of the printing and is simply dummy text of the printing and the printing "
    // const imageComment="./assert/garden1.jpg"
    // const location = "สวนจตุจักร"
    // const date = "12/05/2022"
    // const time = "08:00"
    // const unitTime = "AM"
    

    

  
    return (
        
        <div className='show-card-activities'>
            <div className="h1__weeks">
                <h1>My Activities</h1>
                <DropDown />
            </div>
            {dataActivities.map((data,index)=>{
                return <CardMyActivites key = {index} textComment = {data.captions} location = {data.location} date = {data.date_post.split("T")[0]} time = {data.date_post.split("T")[1].split(".")[0]}  
                imageComment = {data.sport_photo} removeItem={removeItem} id={data._id} updateItem = {updateItem}/>
            })}
            {/* <CardMyActivites textComment={textComment} imageComment={imageComment} location={location}
                date={date} time={time} unitTime={unitTime} /> */}
    
           
        </div>
    )
}
export default MyActivites