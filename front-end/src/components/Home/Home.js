import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from "react-router-dom";
import ApiCard from '../APICard/ApiCard';


function Home() {
  const [List, setList] = useState([])
  const fetchUser =()=>{
    axios.get('https://corona.lmao.ninja/v2/all?yesterday=').then((res)=>setList(res.data)).catch(err=>(console.log(err)))
}

useEffect(() => {
    fetchUser()
}, [])

    return (
        <div className="Home" >
            <div className="Homeone">
          <div  className="para">
            <h1>Give Blood..Save Lives...</h1>
            <h3>
            Donating Blood Makes a Big Difference in the Lives of Others.
            </h3>
          </div>
          <div className="btmin">
          <div  className="login">
          <Link to="/login"  className="SIGNIN">
            <span>SIGN IN</span>
          </Link>
          <Link className="link" to="/register">
            <button className="SIGNUP">SIGN UP</button>
          </Link>
          </div>
          <div className="UserList">
          <Link className="link" to="/User-list">
        <button  className="btmList" >Donors List</button>
      </Link>
      </div>
        </div>
        </div>
        <div className="Hometow" >
          <div className="clnone"> <h2>First Time Donors</h2></div>
          <div className="clntow"><h2>Where to give</h2></div>
          <div className="clnthree"><h2>Become a donor</h2></div>
          <div className="clnfore"><h2>About us</h2></div>
        </div>
        <div className="Homethree" >
        <div className="zero" ><h2><b>BLOOD DONATION </b>STEPS</h2></div>
          <div  className="one"><h2>01</h2><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4929.png" /><span>Fill the form</span></div>
          <div className="tow"><h4></h4><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4703.png"/><span></span></div>
          <div  className="three"><h2>02</h2><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4930.png"/><span>Register with your emirates ID</span></div>
          <div  className="fore"><h2>03</h2><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4931.png"/><span>Medical screening & examination</span></div>
          <div  className="five"><h2>04</h2><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4932.png"/><span>Donate blood</span></div>
          <div  className="sex"><h2>05</h2><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4933.png"/><span>Post donation care & instructions</span></div>
          <div  className="seven"><h2>06</h2><img src="https://www.seha.ae/assets/uploads/2021/03/Group-4934.png"/><span>Rest & refreshments</span></div>
        </div>
        <div className="Homefive"><h1>COVID-19 Statistics</h1></div>
        <div className="Homefore">
        <h2>Worldometer Coronavirus ,Live statistics ...</h2>
        <ApiCard List={List}/>

        </div>

        </div>
    )
}

export default Home
