import React from 'react'

const ProfileUser = () => {
    return (
        <>
            <div className="wrapperProfile flex items-center justify-center gap-1 cursor-pointer">
                <h1 className="userTitle">
                    User Profile
                </h1>
                <div className="image w-8 ">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user" className='rounded-full'/>
                </div>

            </div>
        </>
  )
}

export default ProfileUser
