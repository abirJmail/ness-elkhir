import React, { useState } from "react";
import { Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../JS/actions/userActions";
import {Form, Button} from 'react-bootstrap'
import "./UserRegister.css"

const UserRegister = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    
    const newUser = {
      username,
      email,
      telephone,
      password,
    };

    dispatch(userRegister(newUser));
    setUsername("");
    setEmail("");
    setTelephone("");
    setPassword("");
  };
  
  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return loading ? (
    <h1> Please wait .....</h1>
  ) : (
    <div className="reg">
      <h1>Register </h1>
      <h2>Become a blood donor today!</h2>
      <h4>Find out more about who can give blood. You must use a unique email address that can only be accessed by yourself. This service is for whole blood donors who donate in TUNISIA only; component donors (including platelet and plasma donors) are unable to register for an online account.</h4>

      <Form className="REGISTER">
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> Full Name</Form.Label>
      <Form.Control style={{ width: '80%' , margin:" 0 0 0 10%"}} type="text" placeholder="Enter email"  onChange={(e) => setUsername(e.target.value)} />
      <Form.Label>telephone</Form.Label>
      <Form.Control style={{ width: '80%' , margin:" 0 0 0 10%"}} type="number" placeholder="Enter email" onChange={(e) => setTelephone(e.target.value)} />
      <Form.Label>Email address</Form.Label>
      <Form.Control style={{ width: '80%' , margin:" 0 0 0 10%"}} type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} />
      <Form.Text  className="text-muted">
      We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control style={{ width: '80%',margin:" 0 0 0 10%"}} type="password" placeholder="Password"  type="password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Link to="/login"  > 
      <Button variant="primary" type="submit" onClick={() => register()}>Register</Button>
      </Link>
      </Form>
    </div>
  );
};

export default UserRegister;
