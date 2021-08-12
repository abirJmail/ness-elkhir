import React ,{useState}from 'react'
import UserCard from "../UserCard/UserCard";
import BloodSearch from "../BloodSearch/BloodSearch"
import "./UsersList.css"

const UsersList = ({users, setmyInput,setmySearcht}) => {

    return (
        <div>
      		<div className='search'>
		<div  className='col col-sm-4'>
            <h3>Search by State,City</h3>
			<input
				className='form-control'
				value={setmyInput.value}
				onChange={(event) => setmyInput(event.target.value)}
				placeholder='Type to search...'
			></input>

		</div>
		<BloodSearch setmySearcht={setmySearcht}/>

		</div>
            <div className="contact-list" >{users.map((el, i) => (<UserCard key={i} user={el} />))}</div>
        </div>
    )
}

export default UsersList
