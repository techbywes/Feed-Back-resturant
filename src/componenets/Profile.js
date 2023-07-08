import React from 'react'
import profileimage from "../images/testimonial-1.png"

function Profile() {
  return (
    <div className='profile_general_div'>
        <div className='profile_img_div'>
            <img className='profile_img' src={profileimage} alt="" />
        </div>
    </div>
  )
}

export default Profile;