import React from "react";
import './Navbar.css';
import { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Logout from "../Logout/Logout";
import Login_user from "../Login/Login_user";
import { color } from "@mui/system";

function Navbar() {
    const [tabMobile, setTabMobile] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    // Login //
    const [showLogin, setshowLogin] = useState(true)
    // Login-mobile //
    const [showLoginMobile, setshowLoginMobile] = useState(true)




    const handleClick = () => {
        setshowLogin(!showLogin)
    }






    const toggleMobile = () => {
        setTabMobile(!tabMobile)
    }
    const setNavBar = () => {

        if (window.scrollY >= 200) {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }






    window.addEventListener('scroll', setNavBar)
    return (
        <div className={showNavbar ? 'Nav-content' : 'Nav-content hide'}>
            <div className="Nav-content1">
                <div className="logo">
                    <a href="#home"><img src="/images/logo-removebg-preview.png" /></a>
                </div>
            </div>
            <div className="ul">
                <ul className="Nav-ul">
                    <li>Community</li>
                    <li>Add Post</li>
                    <li>My Activities</li>

                </ul>
            </div>



            <div className="login-name">
                {showLogin ? (<div><button onClick={handleClick}><a id='#' className="sign-in"><i className="fa-solid fa-right-to-bracket"></i>Sign in</a></button>
                    <button><a id='#' className="sign-up"><i className="fa-solid fa-user-plus"></i>Sign up</a></button></div>) :
                    <div className="Show__login__complete"><Login />
                    <div >
                    <Login_user />
                    </div>
                    <button onClick={handleClick}>Log out </button></div>}
            </div>




            {/* Mobile */}
            <div className="nav-mobile">
                <div className="toggle-bar">
                    <i className="fa-solid fa-bars" onClick={toggleMobile}></i>
                </div>
                <div className={tabMobile ? "tab-mobile active" : "tab-mobile"}>
                    <div className="container-mobile">
                        <div className="mobile-login-name">

                            {showLogin ?
                                (
                                    <div>
                                        <div >
                                            <button onClick={() => {
                                                toggleMobile();
                                                setshowLogin(false)
                                            }}><i className="fa-solid fa-right-to-bracket"></i><a id='#' className="sign-in">Sign in</a>
                                            </button>
                                        </div>
                                        <div>
                                            <button onClick={toggleMobile}><i className="fa-solid fa-user-plus"></i><a id='#' className="sign-up">Sign up</a>
                                            </button>
                                        </div>
                                    </div>
                                ) :
                                <div className="">
                                    <div>
                                        <Login />
                                    </div>
                                    <div style={{ marginTop: 8, marginBottom: 5 }}>
                                        <Login_user color="white" />
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <button onClick={handleClick}>Log out </button>
                                    </div>
                                </div>}






                        </div>
                        <div className="mobile-ul">
                            <ul className="mobile-nav-ul">
                                <li onClick={toggleMobile}>Community</li>
                                <li onClick={toggleMobile}>Add Post</li>
                                <li onClick={toggleMobile}>My Activities</li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>

        //     // {/* ===================================MEDIA QUERY========================================== */}

        // {/* <div className="Nav-mobile">
        //     <div className="logo-mobile">
        //         <img src="/images/logo-removebg-preview.png" />
        //     </div>

        //     <div className="Nav-ui-mobile">
        //         <div id="myLinks">
        //             <li><a href="#Community" id='#community'><img src="../images/283-2836870_community-icon-transparent-background-png-download-transparent-transparent.png" alt="Community" /></a></li>
        //             <li><a href="Workout" id='#workout'><img src="../images/illust58-5797-01.jpg" alt="Community" /></a></li>
        //             <li><a href="Recipes" id='#recipes'><img src="../images/2389105.png" alt="Community" /></a></li>
        //             <li><a href="Goals" id='#goals'><img src="../images/png-clipart-arrow-target-practicing-board-cartoon-cartoon-target-miscellaneous-cartoon-character.png" alt="Community" /></a></li>


        //             <div className="login-name-mobile">
        //                 <button><a href="#" id='#' className="sign-in">Sign in</a></button>
        //                 <button><a href="#" id='#' className="sign-up">Sign up</a></button>
        //             </div>
        //         </div>



        //     </div>
        // </div> */}

        // {/* </div> */}


    )
};


export default Navbar