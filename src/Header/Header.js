import React from "react";
import "./Header.css";
import {AiOutlineSearch, AiOutlineWallet} from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import {MdOndemandVideo} from "react-icons/md";
import {FaUsers,FaRegFlag,FaPlusCircle,FaBell,FaFacebookMessenger} from "react-icons/fa";
import Mainarea from "../Mainarea/Mainarea";

function Header(){
    return(
        <div className="Homepage">
            <div className="header">
                <div className="first-header">
                    <div className="logo">
                        <img src="images/icons8-facebook-48.png" alt="facebook logi" style={{height:"50px", padding:"0,5rem"}}></img>
                    </div>
                    <div className="Search">
                        <AiOutlineSearch/>
                        <input placeholder="Search Facebook" type="Search"></input>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="Icon">
                        <AiFillHome fontsize="2.3rem" color="#1877f2"/>
                    </div>
                    <div className="Icon">
                        <FaRegFlag fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                        <MdOndemandVideo fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                        <FaUsers fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet fontsize="2.3rem" />
                    </div>
                </div>

                <div className="third-Header">
                    <div className="plus">
                        <FaPlusCircle fontsize="2rem"/>
                    </div>

                    <div className="plus">
                        <FaFacebookMessenger fontsize="2rem"/>
                    </div>

                    <div className="plus">
                        <FaBell fontsize="2rem"/>
                    </div>

                    <div className="pluss">
                        <img src="images/dreamy.jpg" alt="profile_picture" style={{height:"60px"}}></img>
                    </div> 
                </div>       
            </div>
            <Mainarea/>
        </div>
    );
};

export default Header;