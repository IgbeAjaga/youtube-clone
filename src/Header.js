import React, {useState} from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    
    
    <div className='header'>
      <div className='header_left'>
      <MenuIcon />
      <Link to='/'>
      <img 
      className='header_logo'
      src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' 
      alt='' />
      </Link>
      </div>
      <div className='header_input'>
      <input onChange={(e) => setInputSearch(e.target.value)}
      value={inputSearch} 
      type='text' placeholder='Search'/>
     
     <Link to={`/search/${inputSearch}`}> 
      <SearchIcon className='header_inputbutton' />
      </Link>
      </div> 
      <div className='header_icons'>
      <VideoCallIcon className='header_icon' />
      <AppsIcon className='header_icon'/>
      <NotificationAddIcon className='header_icon'/>
      <Avatar src='https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='Igbe Ajaga'/>
    </div>
    </div>
  )
}

export default Header
