import React from 'react';
import "./ProfileScreen.css";
import Nav from "../Nav";
import profile_logo from '../profile-logo.png';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);


    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src={profile_logo} alt="profile-img" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans(Current Plan: premium)</h3>
                            <div className="profileScreen__date">
                                <h4>Renewal date: 04/03/2021</h4>
                            </div>
                            <div className="profileScreen__subscribe">
                                <div className="profileScreen__subtitle">
                                    <h4>Netflix Standard</h4>
                                    <p>1080p</p>
                                </div>
                                <button className="profileScreen__subscribebutton">Subscribe</button>
                            </div>
                            <div className="profileScreen__subscribe">
                                <div className="profileScreen__subtitle">
                                    <h4>Netflix Premium</h4>
                                    <p>4k+HDR</p>
                                </div>
                                <button className="profileScreen__subscribebutton">Subscribe</button>
                            </div>
                            <div className="profileScreen__subscribe">
                                <div className="profileScreen__subtitle">
                                    <h4>Netflix Basic</h4>
                                    <p>480p</p>
                                </div>
                                <button className="profileScreen__subscribebutton1">Current Package</button>
                            </div>
                            <button onClick={() => auth.signOut()} className="profileScreen__signout">Sign Out</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileScreen;
