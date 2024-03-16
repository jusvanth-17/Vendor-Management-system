
import React from 'react'
import { useAuth } from './Auth'
export const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div>

      <br></br>
      Welcome to our website {auth.user}<br></br><br></br>
      <button className='prob' onClick={handlelogout}>logout</button>
    </div>
  )
}
