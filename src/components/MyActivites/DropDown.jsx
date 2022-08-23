import React from 'react';
import './DropDown.css';
import { useState } from 'react';
// import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
// import './DropDown.css';


// To bind JSON object
// const sportsData:{ [key: string]: Object }[] = [
//   { Id: 'game1', Game: 'Badminton' },
//   { Id: 'game2', Game: 'Football' },
//   { Id: 'game3', Game: 'Tennis' }
// ];

const DropDown = () => {
  const [selectWeek,setSelectWeek] = useState(1)


  return (
    <div className="dropdown">
      <button className="dropbtn">Week {selectWeek}</button>
      <div className="dropdown-content">
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(1))}}>Weeks 1</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(2))}}>Weeks 2</a> 
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(3))}}>Weeks 3</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(4))}}>Weeks 4</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(5))}}>Weeks 5</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(6))}}>Weeks 6</a>
      </div>
    </div>
  );
}





export default DropDown;