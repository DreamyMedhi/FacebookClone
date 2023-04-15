import React from "react";
import "./Mainarea.css";
import {FaAngleDown,FaBell,FaFacebookMessenger,FaGrin,FaMedrt,FaFontAwesomeFlag,FaUserFriends,FaSearch,FaRegFlag,FaRegThumbsUp,FaCommentAlt,FaRegShareSquare, FaComment} from "react-icons/fa";
import { MdVideoCall,MdMoreHoriz } from "react-icons/md";
import {AiFillFileImage} from 'react-icons/ai'
function MainArea(){
    return (
        <div className="Main">

            <div className="Rside">
            <div className="Profile">
            <img src="images/dreamy.jpg" alt="profile_picture" style={{height:"60px",width:"60px"}}></img>
               <div id="name"> Dreamy Medhi</div>
            </div>
            <div className="Pro">
            <FaUserFriends color="blue" fontSize="2rem"/>
            <div>Friends</div>
            </div>
            <div className="Pro">
                <FaFontAwesomeFlag color="green" fontSize="2rem"/>
                <div>Pages</div>
            </div>
            <div className="Pro">
                <FaMedrt color="blue" fontSize="2rem"/>
                <div>COVID-19 Information Center</div>
            </div>
            <div className="Pro">
                <FaFacebookMessenger color="green" fontSize="2rem"/>
                <div>Messenger Kids</div>
            </div>

            <div className="Pro">
                <FaAngleDown color="green" fontSize="2rem"/>
                <div>See More</div>
            </div>
            <br></br>
            <div className="Profiles">
                <img src="images/dog2.jpg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                React Developer
            </div>
            <div className="Profiles">
                <img src="images/dog2.jpg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                MEAN STACK
            </div>
            <div className="Profiles">
                <img src="images/dog2.jpg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                JavaScript
            </div>
            <div className="Profiles">
                <img src="images/dog2.jpg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                React Developer
            </div>
            <div className="Pross">
                <FaAngleDown color="blue" fontSize="2rem"/>
                <div>See More</div>
            </div>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="images/dog3.jpg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Cute Puppy1
                    </div>
                    <div className="Story">
                        <img src="images/dog3.jpg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Cute Puppy2
                    </div>
                    <div className="Story">
                        <img src="images/dog3.jpg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Cute Puppy3
                    </div>
                    <div className="Story">
                        <img src="images/dog3.jpg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                       Cute Puppy4
                    </div>
                    {/* <div className="Story">
                        <img src="/images/home.jpeg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Picture
                    </div> */}
                    </div>
                    <div className="message">
                        <div className="text">
                            <div className="Post">
                                <img src="images/dreamy.jpg" alt="PIC"/>
                                <input type="Mind" placeholder="What's on your mind, Dreamy?"/>
                            </div>
                            <div className="Call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize="2rem" color="red"/>
                                        <div><strong>LiveVideo</strong></div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize="2rem" color="green"/>
                                        <div><strong>Video</strong></div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize="2rem" color="orange"/>
                                        <div><strong>Felling/activity</strong></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="Posted">
                        <div className="poster">
                            <div className="Simplilearn">
                                <img src="images/dreamy.jpg" alt="Img" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                                Dreamy Medhi 
                                <div className="update"> Updated his cover image.</div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                        <div className="caption">
                            Please Like, Comment and Subscribe to my YouTube Channel.
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                            <img src="images/main.png" alt="dp" style={{height:"auto",width:"100%"}}/>
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="grey"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey"/>Share
                            </div>
                        
                        </div>
                    </div>
                </div>

            </div>

            <div className ="Lside">
             <div className="Contact">  
                 <div className="Contacts">
                     Contacts
                 </div>
             
             <div className="chaticon">
                 <div className="icons">
                     <MdVideoCall fontSize="1.8rem"/>
                 </div>
                 <div className="icons">
                        <FaSearch fontSize="1.6rem"/>
                     </div>
                     <div className="icons">
                        <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                </div>
                </div>
            <div className="concise">
                <div className="Profilee">
                    <img src="images/contact.jpg" alt="logo" style={{height:"40px", padding:"1rem"}}/>
                    Puppy1
                </div>
                <div className="Profilee">
                    <img src="images/contact.jpg" alt="logo" style={{height:"40px", padding:"1rem"}}/>
                    Puppy2
                </div>
                <div className="Profilee">
                    <img src="images/contact.jpg" alt="logo" style={{height:"49px", padding:"1rem"}}/>
                   Puppy3
                </div>
                <div className="Profilee">
                    <img src="images/contact.jpg" alt="logo" style={{height:"40px", padding:"1rem"}}/>
                      Puppy4
                </div>
                <div className="Profilee">
                    <img src="images/contact.jpg" alt="logo" style={{height:"40px", padding:"1rem"}}/>
                  Puppy5
                </div>
            </div>
            </div>
        </div>
    )
}
export default MainArea