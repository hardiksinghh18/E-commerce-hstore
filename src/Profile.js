import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
const Profile = () => {

    
    const { logout ,isAuthenticated,user} = useAuth0()
    return (<>


       {isAuthenticated&& <div className=' profileSection'>
            <div className='profileDetails'>
                <h2>Profile Details</h2>
               
                <div className='profileBox'>
                <div className='flexitem'>    <div className='profileImage flex'>
                        <img src={user.picture} alt={user.name}/>
                        
                    </div></div>
                   
                    <div className="profileinfo ">
                    <p className='flex'> Name<h5>{user.name}</h5></p>
                    <p className='flex'> Email : <h5>{user.email}</h5></p>
                    <p className='flex'> Address : Lucknow,India</p>
                    <p className='flex'> Contact : 94xxxxxx00</p>

                    <div className="profiletocart">
                    <NavLink to={"/wishlist"}>My Wishlist  <i class="ri-arrow-right-line"></i> </NavLink>
                    <NavLink to={"/cart"}>My Cart   <i class="ri-arrow-right-line"></i></NavLink>
                    </div>
                   
                    </div>
                </div>

                <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>

            </div>
        </div>}
        </>
    )
}

export default Profile
