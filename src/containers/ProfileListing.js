import React from "react";
import { useSelector } from "react-redux"
import ProfileComponent from "../components/ProfileComponent";


const ProfileListing = () => {

    const profiles = useSelector((state) => state)
    console.log(profiles)
    return (
        <div>         
            <ProfileComponent />
        </div> 
    );
};


export default ProfileListing;