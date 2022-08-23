import React from "react";
// import MuiSelect from "./DropDown";
import CardMyActivites from "../CardMyActivies/CardMyActivies";
import DropDown from "./DropDown";
import "./MyActivites.css"

const MyActivites = () => {
    const textComment = " Simply dummy text of the printing and is simply dummy text of the printing and is simply dummy text of the printing and text of the printing and is simply dummy text of the printing and the printing "
    const imageComment = "./assert/garden1.jpg"
    const location = "สวนจตุจักร"
    const date = "12/05/2022"
    const time = "08:00"
    const unitTime = "AM"



    console.log(textComment.length)
    return (
        <div className='show-card-activities'>


            <div className="h1__weeks">
                <h1>My Activities</h1>
                <DropDown />
            </div>
            


            <CardMyActivites textComment={textComment} imageComment={imageComment} location={location}
                date={date} time={time} unitTime={unitTime} />
            <CardMyActivites />
            <CardMyActivites />
            <CardMyActivites />
            <CardMyActivites />
        </div>
    )
}
export default MyActivites