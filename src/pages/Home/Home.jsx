import React, { useContext } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import AuthTemp from '../AuthTemp/AuthTemp';
import { BsThreeDots, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { HiOutlineSaveAs } from "react-icons/hi";
import { RiShareLine } from "react-icons/ri";
import AuthContext from '../../context/AuthContext';
import cookie from 'js-cookie';
import './Home.scss';

const Home = () => {

  // auth context
  const { token, dispatch } = useContext(AuthContext);


  // user logout
  const handleUserLogout = (e) => {
    e.preventDefault();

    cookie.remove('token');
    cookie.remove('user');

    dispatch({ type : "USER_LOGOUT" });

  }

  return (
    <div>
      <TopBar />
      {/* <AuthTemp /> */}

      <div className="home-container">
       <div className="home-wrapper">
          <div className="time-line">


            <div className="post-card shadow-sm">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Katherine_Langford_in_2018.jpg" alt="" width="200"/>
                  <div className="user-details">
                    <a href="" className="user-name">Nahian</a>
                    <span className='location'>Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button>
                    <BsThreeDots />
                  </button>
                </div>
              </div>

              <div className="post-image">
                <img src="https://cutewallpaper.org/21/steve-jobs-images/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg" alt="" />
              </div>

              <div className="timeline-icons">
                <div className="icon-left">
                  <a href=""><AiOutlineHeart /></a>
                  <a href=""><AiOutlineComment /></a>
                  <a href=""><RiShareLine /></a>
                </div>
                <div className="icon-right">
                  <a href=""><HiOutlineSaveAs /></a>
                </div>
              </div>

              <div className="post-details">
                <span className="likes">102 Likes</span>
                <div className="post-content">
                  <a href="#">Nahian Khondokar</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos corporis possimus voluptatem nihil architecto optio error ab autem reiciendis rerum.
                </div>
                <div className="post-comments">
                  <span className=''>view all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 DAY AGO</span>
                </div>
              </div>

              <div className="all-comments-area">
                <a href="#">
                  <BsEmojiSmile />
                </a>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>

            <div className="post-card shadow-sm">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Katherine_Langford_in_2018.jpg" alt="" width="200"/>
                  <div className="user-details">
                    <a href="" className="user-name">Nahian</a>
                    <span className='location'>Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button>
                    <BsThreeDots />
                  </button>
                </div>
              </div>

              <div className="post-image">
                <img src="https://cutewallpaper.org/21/steve-jobs-images/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg" alt="" />
              </div>

              <div className="timeline-icons">
                <div className="icon-left">
                  <a href=""><AiOutlineHeart /></a>
                  <a href=""><AiOutlineComment /></a>
                  <a href=""><RiShareLine /></a>
                </div>
                <div className="icon-right">
                  <a href=""><HiOutlineSaveAs /></a>
                </div>
              </div>

              <div className="post-details">
                <span className="likes">102 Likes</span>
                <div className="post-content">
                  <a href="#">Nahian Khondokar</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos corporis possimus voluptatem nihil architecto optio error ab autem reiciendis rerum.
                </div>
                <div className="post-comments">
                  <span className=''>view all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 DAY AGO</span>
                </div>
              </div>

              <div className="all-comments-area">
                <a href="#">
                  <BsEmojiSmile />
                </a>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>

            <div className="post-card shadow-sm">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Katherine_Langford_in_2018.jpg" alt="" width="200"/>
                  <div className="user-details">
                    <a href="" className="user-name">Nahian</a>
                    <span className='location'>Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button>
                    <BsThreeDots />
                  </button>
                </div>
              </div>

              <div className="post-image">
                <img src="https://cutewallpaper.org/21/steve-jobs-images/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg" alt="" />
              </div>

              <div className="timeline-icons">
                <div className="icon-left">
                  <a href=""><AiOutlineHeart /></a>
                  <a href=""><AiOutlineComment /></a>
                  <a href=""><RiShareLine /></a>
                </div>
                <div className="icon-right">
                  <a href=""><HiOutlineSaveAs /></a>
                </div>
              </div>

              <div className="post-details">
                <span className="likes">102 Likes</span>
                <div className="post-content">
                  <a href="#">Nahian Khondokar</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos corporis possimus voluptatem nihil architecto optio error ab autem reiciendis rerum.
                </div>
                <div className="post-comments">
                  <span className=''>view all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 DAY AGO</span>
                </div>
              </div>

              <div className="all-comments-area">
                <a href="#">
                  <BsEmojiSmile />
                </a>
                <input type="text" placeholder='Add a comment...' />
                <button>Post</button>
              </div>
            </div>

  
          </div>

          <div className="user-info">
            <div className="user-personal-info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Katherine_Langford_in_2018.jpg" alt=""/>
              <span><a href="#">Nahian</a>Nahi</span>
            </div>
            
            <a href="#" onClick={handleUserLogout}>Logout</a>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Home;