import React from 'react'
import './output.css'
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Header from './components/Header/Header.jsx'


function App (){
  const {user,isLoaded,isSignedIn} =useUser();
  if(!isSignedIn && isLoaded){
    return <Navigate to={'/signup'} />
  }
  return (
    <>
      
      <Outlet></Outlet>
    </>
  )
}
export default App;