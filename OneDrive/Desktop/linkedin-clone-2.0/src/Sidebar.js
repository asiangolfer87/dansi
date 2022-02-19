import React from 'react'
import "./css/sidebar.css"
import { Avatar} from "@mui/material";
function Sidebar() {
  return (
      <div className='sidebar'> 
        <div className='sidebar_profile'>
          <img src='https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg' />
           
               <div className='profile_details'>
                 <Avatar />
                 <h4>Daniel Sidiki</h4>
                 <p>Web Developer</p>
               </div>

               <div className='profile_stats'>
                 <span>Who viewed your profile</span>
                 <span className='stat_number'>20</span>
               </div>

               <div className='profile_stats'>
                 <span>Connection<br/><b>Grow Your Network</b></span>
                 <span className='stat_number'>150</span>
               </div>
      </div>

            <div className='sidebar_recent'>
              <p>Recent</p>
              <p className='hash'><span>#</span> branding</p>
              <p className='hash'><span>#</span> marketing</p>
              <p className='hash'><span>#</span> web development </p>
              <p className='hash'><span>#</span> programming</p>
              <p className='hash'><span>#</span> react.js</p>
              <p className='hash'><span>#</span> redux toolkit</p>
            </div>

      </div>
  )
}

export default Sidebar
