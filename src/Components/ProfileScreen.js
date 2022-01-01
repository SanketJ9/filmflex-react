import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav  from '../Nav'
import { auth } from '../firebase';
import "./ProfileScreen.css"


function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className='profilescreen'>
            <Nav />
            <div className="profilescreen-body">
                <h1>Edit Profile</h1>
                <div className="profile-id">
                    <img className='profile-avatar' src={require('./media/avatar.png')} alt="" />
                        <h2>{user.email}</h2>
                </div>
                <div className="profile-plans">
                    <h3>Plans</h3>
                    <div className="plans">
                        <p>filmflex <span className='gold'>GOLD</span> </p>
                        <button className='sub-btn sub-btn-active'>Current</button>
                    </div>
                    <div className="plans">
                        <p>filmflex <span className='platinum'>PLATINUM</span> </p>
                        <button className='sub-btn'>Subscribe</button>
                    </div>
                    <div className="plans">
                        <p>filmflex <span className='diamond'>DIAMOND</span></p>
                        <button className='sub-btn'>Subscribe</button>
                    </div>
                    <button onClick={() => auth.signOut()} 
                    className="signout-btn">Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
