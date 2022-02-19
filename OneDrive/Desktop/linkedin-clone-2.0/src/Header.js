import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './css/header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
function Header() {
  return (
       <div className='header'>
             <div className='header_left'>
               <div className='header_logo'>
                  <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1644646645~hmac=901a6ff68318d11a2221f41aab309024' />
               </div>
             
               <div className='header_search'>
                  <SearchIcon />
                  <input type="text" placeholder='Search' />
                  </div>
               </div>

             <div className='header_right'>
              <HeaderOptions Icon={HomeIcon} title="Home"/>
              <HeaderOptions Icon={PeopleIcon} title="My Network"/>
              <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
              <HeaderOptions Icon={MessageIcon} title="Messaging"/>
              <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
               <HeaderOptions avatar={Avatar} title="Daniel Sidiki" />
             </div>
       </div>
  )
}



export default Header
