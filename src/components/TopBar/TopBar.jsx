import React from 'react';
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { FaGg, FaSafari } from "react-icons/fa";
import './TopBar.scss';

const TopBar = () => {
  return (
    <div className='top-bar-container shadow-sm'>
        <div className="top-bar-wrapper">
            <div className="logo">
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
            </div>

            <div className="top-bar-search">
                <button><FiSearch /></button>
                <input type="text" placeholder='Search'/>
            </div>

            <div className="top-bar-menu">
                <ul>
                    <li><a href=""><AiFillHome /></a></li>
                    <li><a href=""><AiOutlineHeart /></a></li>
                    <li><a href=""><FaGg /></a></li>
                    <li><a href=""><FaSafari /></a></li>
                    <li><a href=""><GrAddCircle /></a></li>
                    <li><a href=""><img src="https://i.pinimg.com/originals/f9/f1/9b/f9f19bb12e1fb197fec3557f321c9d0a.jpg" alt="" width={100}/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopBar;