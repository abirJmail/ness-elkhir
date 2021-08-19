import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addUser, editUser,deleteUser } from "../../JS/actions/UserActionList"
import { Link } from "react-router-dom"
import { logOut } from "../../JS/actions/userActions";
import "./AddUser.css"
import { FaPaperPlane } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const AddUser = () => {

  const [user,setUser] = useState({
    name:"",
    gender:"",
    age:"",
    bloodgroup:"",
    phone:"",
    state:"",
    city:"",
    error:""
})
  const isEdit = useSelector(state => state.isEdit)
  const userId = useSelector(state => state.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isEdit) {
      setUser(userId)
    }
    else {
      setUser({
        name:"",
        gender:"",
        age:"",
        bloodgroup:"",
        phone:"",
        state:"",
        city:"",
        error:""
      })
    }
  }, [isEdit, userId])

    const handleInputs=(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleValidation()
    {
     
        var formIsValid = true;
        var age=parseInt(user.age);
        var phone=parseInt(user.phone);
        var city=user.city;
     
        if(age<=18 || age>=60)
        {
            formIsValid=false;
            user.error="Age should be between 18 to 60. Please check the eligibility to donate .";
            alert("Age should be between 18 to 60. Please check the eligibility to donate");
        } 
        else if(phone<=9999999)
        {
                formIsValid=false;
                user.error="Phone should have 8 number";
                alert("Phone should have 8 number");
        }
        else if(city.value=="")
        {
                formIsValid=false;
                user.error="your city Please";
                alert("your city Please");
      
        }
        return formIsValid;
    }

    const PostData = async(e) =>{
        e.preventDefault();
        if(!handleValidation())
        {
            alert(user.error);
        }
        else
        {
            isEdit  ?dispatch(editUser(user._id, user)) :dispatch(addUser(user));
            alert("Registration successful");
        }
       
        }


    return(
                <div className="signup-form">
                    <h2 className="heading">{isEdit ? "Edit User" : "Add New User"}</h2>
                <hr />    
                <form method="POST" className="register-form" id="register-form">
                <div class="form-group">
                <span className="labels">Name *</span>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FaUserAlt/>
                            </span>
                        </div>
                        <input 
                        type="text" 
                        class="form-control" 
                        name="name" 
                        value={user.name} 
                        onChange={handleInputs}
                        placeholder="Enter your full name" 
                        required="required" />
                    </div>
                </div>
                <div class="form-group">
                <span className="labels">Gender *</span>
                    <div class="input-group">
                        <input
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="Male"
                        checked={user.gender === "Male"}
                        onChange={handleInputs}
                      
                        />&nbsp;
                        <span className="radiolabels" for="male">Male</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="Female"
                        checked={user.gender === "Female"}
                        onChange={handleInputs}

                        />&nbsp;
                        <span className="radiolabels" for="female">Female</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
                    </div>
                </div>
                <div class="form-group">
                <span className="labels">Age * (Should be between 18 to 60)</span>
                    <div class="input-group">
                        
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FaUserAlt/>
                            </span>
                        </div>
                        <input 
                        type="number" 
                        class="form-control" 
                        name="age" 
                        value={user.age} 
                        onChange={handleInputs}
                        placeholder="Enter your age" 
                        required="required" />
                    </div>
                </div>
                <div class="form-group">
                <span className="labels">Blood Group *</span>
                    <div className="input-group">
                        <input 
                        type="radio" 
                        id="O+" 
                        name="bloodgroup" 
                        value="O+"
                        checked={user.bloodgroup === "O+"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="O+">O+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="O-" 
                        name="bloodgroup" 
                        value="O-"
                        checked={user.bloodgroup === "O-"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="O-">O-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="A+" 
                        name="bloodgroup" 
                        value="A+"
                        checked={user.bloodgroup === "A+"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="A+">A+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="A-" 
                        name="bloodgroup" 
                        value="A-"
                        checked={user.bloodgroup === "A-"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="A-">A-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="B+" 
                        name="bloodgroup" 
                        value="B+"
                        checked={user.bloodgroup === "B+"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="B+">B+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="B-" 
                        name="bloodgroup" 
                        value="B-"
                        checked={user.bloodgroup === "B-"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="B-">B-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="AB+" 
                        name="bloodgroup" 
                        value="AB+"
                        checked={user.bloodgroup === "AB+"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="AB+">AB+</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="AB-" 
                        name="bloodgroup" 
                        value="AB-"
                        checked={user.bloodgroup === "AB-"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="AB-">AB-</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input 
                        type="radio" 
                        id="no" 
                        name="bloodgroup" 
                        value="Don't Know"
                        checked={user.bloodgroup === "Don't Know"}
                        onChange={handleInputs}
                        />&nbsp;
                        <span className="radiolabels"  for="no">Don't Know</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>

                <div class="form-group">
                <span className="labels">Phone Number *</span>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FaPaperPlane />
                            </span>
                        </div>
                        <input 
                        type="tel"
                        class="form-control" 
                        maxlength="8" 
                        pattern="\d{8}"
                        name="phone" 
                        value={user.phone} 
                        onChange={handleInputs}
                        placeholder="Enter your 8 digit phone number" 
                        required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <span className="labels">State *</span>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FaPaperPlane />
                            </span>
                        </div>
                        <input 
                        type="text" 
                        class="form-control"
                        name="state" 
                        value={user.state} 
                        onChange={handleInputs}
                        placeholder="Enter your state" 
                        required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <span className="labels">City *</span>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FaPaperPlane />
                            </span>
                        </div>
                        <input 
                        type="text" 
                        class="form-control" 
                        name="city" 
                        value={user.city} 
                        onChange={handleInputs}
                        placeholder="Enter your city" 
                        required="required" />
                    </div>
                </div>

                <div class="btnGroupe">
          <Link  to="/User-list ">
            <button  class="btn btn-primary btn-lg" id="register"   onClick={PostData}>
                  {isEdit ? "Edit" : "Add"}
            </button >
          </Link>
          </div>
          </form>
          
         </div>
       
    );
}




export default AddUser;