import React from "react";
import { Redirect,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  logOut } from "../../JS/actions/userActions";
import {  toggleFalse } from "../../JS/actions/UserActionList";
import "./UserProfile.css"
import AddUser from "../AddUser/AddUser";
import { Route, Switch } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  


  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="prf">
        <div className="profile">
        <div className="signed" >
             <h4>Hallo {user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h4>
           <button className="logout Link" onClick={() => dispatch(logOut())}> Log Out</button>
          
           </div>
      <div className="imgback" >
           <div className="prg">
             <h3>Become a blood donor today!</h3>
             <p>By registering with the Blood Donor Digital Service you will be able to do the following:</p>
             <ol>
               <li>Find out where you can donate and book an appointment</li>
               <li>View, change or cancel appointments</li>
               <li>View your blood group (after your first donation)</li>
               <li>Use the NHSGiveBlood app</li>
             </ol>
             <p>Find out more about who can give blood. You must use a unique email address that can only be accessed by yourself. This service is for whole blood donors who donate in England only; component donors (including platelet and plasma donors) are unable to register for an online account.</p>
             <div className="add">
           <Link  className="link" to="/profile/AddUser/">
        <span    onClick={() => dispatch(toggleFalse())}>
        Join the team to save lives!
        </span>
      </Link>
      </div>
           </div>
           </div>

       </div>

           <Route path="/profile/AddUser/"  render={() => <AddUser />} />
    </div>
  );
};

export default UserProfile;
