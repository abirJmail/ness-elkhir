import "./App.css";
import { useEffect ,useState } from "react";
import UserRegister from "./components/UserRegister/UserRegister";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import UserLogin from "./components/UserLogin/UserLogin";
import UserProfile from "./components/UserProfile/UserProfile";
import { getProfile} from "./JS/actions/userActions";
import Navbar from "./components/Navbar/Navbar";
import { getUsers } from "./JS/actions/UserActionList";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Hospitals from "./components/Hospitals/Hospitals"
import About from "./components/About/About";
import UsersList from "./components/UserList/UsersList";

function App() {

  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducerlist.users);
  const [myInput, setmyInput] = useState("");
  const [mySearch, setmySearcht] = useState("");

  const getUser = () => {
    dispatch(getProfile());
  };

  const getAllUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getUser();
    getAllUsers();
  }, [isAuth]);

  return (
    <div className="App" >
        <Navbar />
        <main className="main">
        <Switch  >
          <Route exact path="/" render={() => <Home/>} />
          <Route exact path="/About" render={() => <About />} />
          <Route exact path="/register" render={() => <UserRegister />} />
          <Route exact path="/login" render={() => <UserLogin />} />
          <Route exact path="/profile" render={() => <UserProfile user={user}/>} />
          <Route  path="/Hospitals" render={() => <Hospitals/>} />
          <Route exact exact path="/(Add-User|Edit-User)/"  render={() => <AddUser />} />
         <Route  exact path="/User-list" render={() =>  <UsersList setmySearcht={setmySearcht} setmyInput={setmyInput} users={users.filter(
          (el) =>
            el.state.toUpperCase().includes(myInput.toUpperCase().trim()) &&
            el.bloodgroup.toUpperCase().includes(mySearch.toUpperCase())
        )}/>} />
        </Switch>
        </main>
        <Footer/>


    </div>
  );
}

export default App;
