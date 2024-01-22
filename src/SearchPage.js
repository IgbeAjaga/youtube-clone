import React from 'react'
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='SearchPage'>

    
    <div className='SearchPage_filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>

    </div>
    <hr/>
    <ChannelRow 
    image='https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    channel='Igbe Ajaga'
    verified
    subs='678K'
    noOfVideos={400}
    description='Learn Web Development in 30 minutes'
    />
    <hr/>
    <VideoRow 
    views='1.1M'
    subs='678K'
    description='Learning everything about react, e.g facebook clone'
    timestamp='2 hours ago'
    channel='Everything React'
    title='Be free'
    image='https://images.pexels.com/photos/10127367/pexels-photo-10127367.jpeg?cs=srgb&dl=pexels-deane-bayas-10127367.jpg&fm=jpg'
    />

<VideoRow 
    views='1.1M'
    subs='678K'
    description='mental health is health too'
    timestamp='2 hours ago'
    channel='Soul Music'
    title='Be free'
    image='https://images.pexels.com/photos/2413839/pexels-photo-2413839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    />

<VideoRow 
    views='1.1M'
    subs='678K'
    description='Healthy Eating Habit is Life'
    timestamp='2 hours ago'
    channel='Eat right'
    title='Be free'
    image='https://images.pexels.com/photos/11202095/pexels-photo-11202095.jpeg?cs=srgb&dl=pexels-jasmin-chew-11202095.jpg&fm=jpg'
    />

<VideoRow 
    views='1.1M'
    subs='678K'
    description='Parenting teenagers'
    timestamp='2 hours ago'
    channel='Teenage Life'
    title='Parents and teens'
    image='https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    />
</div> 
 )
}

export default SearchPage
