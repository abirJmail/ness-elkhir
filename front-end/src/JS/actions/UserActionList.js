import axios from "axios"
import { GET_USER, GET_USERS, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/UserActionList"

export const getUsers = () => (dispatch) => {
    axios.get("/api/list")
        .then(res => dispatch({ type: GET_USERS, payload: res.data }))
        .catch(err => console.log(err))
}
export const addUser  = (newUser) => async (dispatch) => {
    dispatch({ type: GET_USER });
  
    try {
      const res = await axios.post("/api/list", newUser);
  
      console.log(res);
    } catch (error) {
      console.log( error );
    }
  };
  

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`/api/list/${id}` )
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const getUser = (id) => (dispatch) => {
    axios.get(`/api/list/${id}` )
        .then(res => dispatch({ type: GET_USER, payload: res.data }))
        .catch(err => console.log(err))
}

export const editUser=(id, editUser)=>(dispatch)=>{
    axios.put(`/api/list/${id}`, editUser)
    .then(() => dispatch(getUsers()))
    .catch(err => console.log(err))
}

export const toggleTrue = () => {
    return { type: TOGGLE_TRUE }
}

export const toggleFalse = () => {
    return { type: TOGGLE_FALSE }
}