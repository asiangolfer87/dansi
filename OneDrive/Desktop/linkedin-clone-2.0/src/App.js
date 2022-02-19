import React from 'react'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Login from './Login'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user =  useSelector(selectUser);

  console.log(user);
  return (
    !user ? (<Login/>) : (
      <div className='app_wrapper'>
        <Header />
        <div className='app_body'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    )
  );
}
    
export default App
