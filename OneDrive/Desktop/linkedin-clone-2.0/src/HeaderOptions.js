import React from 'react'
import './css/header.css';
import { Avatar } from '@mui/material';

function HeaderOptions({ Icon, title, avatar}) {
  return (
        <div className='header_options'>
          {
              Icon &&  <Icon />
          }
          {
             avatar && <Avatar name={avatar} />
          }
          <span>{title}</span>
       </div>
  )
}

export default HeaderOptions
