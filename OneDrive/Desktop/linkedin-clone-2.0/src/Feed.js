import React, { useEffect, useState } from 'react'
import { Avatar} from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import './css/feed.css';
import Post from './Post';
import firebase from 'firebase'
import { db } from './firebase';


function Feed() {
   
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();

     const submitPost=(e) => {
         e.preventDefault();
         db.collection('posts').add({
           name: 'Daniel Sidiki',
           description: 'This is a test description',
           message: input,
           photoURL: 'https://media-exp1.licdn.com/dms/image/D4E03AQHSA_7JnmjyVQ/profile-displayphoto-shrink_100_100/0/1641707108732?e=1650499200&v=beta&t=HTX0UaqPbkEw7-MC-6wmxEwr5eYpfADbsFauv0Uzwtg',
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         });
            setInput('');
          
     }
  
        useEffect(() => {
           db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
             setPost(snapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
           })))
           })
        }, [])

       
  return (
        <div className='feed'>
           <div className='feed_input'>
             <div className='feed_form'>
              <Avatar  src='https://media-exp1.licdn.com/dms/image/D4E03AQHSA_7JnmjyVQ/profile-displayphoto-shrink_200_200/0/1641707108732?e=1648684800&v=beta&t=kN1MygkCu-Y9mmNuxeYUoh790tT-DQledMduBURfgco'/>
              <form onSubmit={submitPost}>
                 <input type='text' placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)}/>
                 <input type='submit'/>
              </form>
              </div>

           <div className='feed_options'>
                <div className='option'>
                   <InsertPhotoIcon style={{color:'#70b5f9'}}/>  
                   <span>Photo</span>    
                </div>

            <div className='option'>
               <YouTubeIcon style={{color: '#7fc15e'}}/>
                <span>Video</span>
            </div>

            <div className='option'>
              <EventIcon style={{color: '#e7a33e'}}/>
              <span>Event</span>
            </div>

          <div className='option'>
            <ArticleIcon  style={{color: '#fc9295'}}/>
            <span>Write Article</span>  
          </div>  
      </div>
      </div>

{
    posts.map(({id, data : {name, description, message, photoURL}}) => {
       return  <Post key={id} name={name} description={description} message={message} photoURL={photoURL}/>
   })
}
        
       </div>             
   )
}

export default Feed

