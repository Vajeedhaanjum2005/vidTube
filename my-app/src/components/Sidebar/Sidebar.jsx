import React from 'react';
import './Sidebar.css';
 import home_icon from '../../assets/home.png';
import gaming_icon from '../../assets/game_icon.png';
import automobiles_icon from '../../assets/automobiles.png';
import sports_icon from '../../assets/sports.png';
import entertainment_icon from '../../assets/entertainment.png';
import tech_icon from '../../assets/tech.png';
import music_icon from '../../assets/music.png';
import blogs_icon from '../../assets/blogs.png';
import news_icon from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar,category,setCategory } = {}) => { // Default prop to avoid undefined errors
  return (
    <div className={sidebar ? "sidebar" : "small-sidebar"}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""} `} onClick={()=>setCategory(0)}>
          <img src={home_icon} alt="Home" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""} `} onClick={()=>setCategory(20)}>
          <img src={gaming_icon} alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""} `} onClick={()=>setCategory(2)}>
          <img src={automobiles_icon} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""} `} onClick={()=>setCategory(17)}>
          <img src={sports_icon} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""} `} onClick={()=>setCategory(24)}>
          <img src={entertainment_icon} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active":""} `} onClick={()=>setCategory(28)}>
          <img src={tech_icon} alt="Tech" />
          <p>Tech</p>
        </div>
        <div className={`side-link ${category===10?"active":""} `} onClick={()=>setCategory(10)}>
          <img src={music_icon} alt="Music" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""} `} onClick={()=>setCategory(22)}>
          <img src={blogs_icon} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""} `} onClick={()=>setCategory(25)}>
          <img src={news_icon} alt="News" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="Jack" />
          <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="Simon" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="Tom" />
          <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="Megan" />
          <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="Cameron" />
          <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;