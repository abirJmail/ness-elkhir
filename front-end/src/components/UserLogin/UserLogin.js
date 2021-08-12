import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../../JS/actions/userActions";
import {Series} from "../../data";
import "./UserLogin.css";
import {Form, Carousel, Button} from 'react-bootstrap'

const UserLogin = ( ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PNG, setPNG] = useState(Series);
  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const dispatch = useDispatch();

  const login = () => {
    const loginCred = {
      email,
      password,
    };

    dispatch(userLogin(loginCred));
  };

  return isAuth ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <div style={{   color:"color:#343653", margin:"50px" , height: "420px"}}><img  style={{ height: "50px"}} src="http://www.santetunisie.rns.tn/modules/mod_djimageslider/themes/default/images/loader.gif"/>
     <h1 >Please wait ...</h1>
     </div>
    
  ) : (
      <div className="userlogin">

        <div className="Carousel">
            <Carousel className="carousel" >
        {PNG.map((pnj,i) => (
          <Carousel.Item key={i}  >
            <img className="d-block w-100" style={{ boxShadow: "0px 0px 30px 0px rgb(0 0 0 / 40%)" ,borderRadius: '15px' ,width: '50%',height:'360px'}} src={pnj.img} alt="First slide" />
            <Carousel.Caption style={{ color: '#000'}}>
              <h3 style={{   color:"#fff" }}> {pnj.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
        </div>

      <div className="SinIn">
      <h1>Wolcome Back.</h1>
      <Form className="logIN">
  <Form.Group className="mb-3" controlId="formBasicEmail">
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
  <Form.Group  className="mb-3"  controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit" onClick={() => login()}>
  Login
  </Button>
</Form>

      </div>


    </div>
  );
};

export default UserLogin;
