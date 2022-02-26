import React from "react";
import './profileComponent.css';
import {useDispatch, useSelector} from "react-redux";
import { getUsersFetch} from '../redux/actions/sagaActions'

const ProfileComponent = () => {
    

    const dispatch = useDispatch();

    const profiles = useSelector((state) => state.allProfiles.profiles)

    return (
        <div> {profiles.map((users, index) => 
        <div className="card" key={index}> 
            <button onClick={() => dispatch(getUsersFetch())}>  </button>
            
            <div className="avatar">
                <img src={`https://avatars.dicebear.com/v2/avataaars/{{users.username}}.svg`} alt="avatar" className="profile__image"/>
            </div>
            <div className="profileinfo">
                <div className="profile__name"> {users.name} </div>
                <div className="profile__email"> <span className="material-icons">email</span>{users.email} </div>
                <div className="profile__phone"> <span className="material-icons">call</span> {users.phone} </div>
                <div className="profile__website"> <span className="material-icons">language</span> {users.website} </div> 
            </div>
            <div className="buttons">
                <button className="likePost"><span style={{fontSize: "13px"}} className="material-icons">favorite_border</span></button>
                <button className="editPost"><span style={{fontSize: "13px"}} className="material-icons">edit</span></button>
                <button className="deletePost"><span style={{fontSize: "13px"}} className="material-icons">delete</span></button>
            </div>
        </div> )}
        </div>
    );
};


export default ProfileComponent;