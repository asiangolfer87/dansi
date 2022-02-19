import  auth from './firebase';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import './css/login.css';
function Login() {

 const [signup, setSignUp] = useState(false);
 const [name, setName] = useState('');
 const [PhotoURL, setPhotoURL] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

const dispatch = useDispatch();

  const register = (e) => {
      e.preventDefault();

      if(!name)
      {
        return alert('Name is required.')
      }
  
     if(!PhotoURL)
      {
        return alert('PhotoURL is required.')
      }
  
      if(!email)
      {
        return alert('Email is required.')
      }
  
      if(!password)
      {
        return alert('Password is required.')
      }
  
     auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
       userAuth.user.updateProfile({
          displayName:name,
          PhotoURL:PhotoURL
       }).then(()=> {
          dispatch(({

          }))
       })
     })
    
    setName('');
    setPhotoURL(''); 
     setEmail('');
     setPassword('');
  }

  return (
    <>
    
    <div className='loginScreen'>
          <img src='https://cdn2.downdetector.com/static/uploads/logo/LinkedIn.png' />

          {
              signup===true ? (
      <form onSubmit={register}> 
            <input type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/> 
            <input type='text' placeholder='Profile Picture URL' value={PhotoURL} onChange={e=>setPhotoURL(e.target.value)}/>
            <input type='email' placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

            <input type='submit' value='Sign Up' />

              <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
          </form>)
           : 
          (
          <form>        
              <input type='email' placeholder='Email'/>
              <input type='password' placeholder='Password'/>

              <input type='submit' value='Sign In'/>

               <h4>Not a member ?  <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
         </form>)
}




    </div>
    </>
  )
}

export default Login
