import './App.css';
import React,{useState,useEffect} from "react";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import NavBar from './NavBar';
import Home from "./Home";
import CompanyList from "./company/CompanyList";
import CompanyCard from './company/CompanyCard';
import JobList from "./job/JobList";
import Signup from "./form/Signup";
import UserContext from './context/userContext';
import Login from './form/Login';
import Logout from "./Logout"
import UserUpdate from './form/UserUpdateForm'
import useLocalStorageState from './hooks/useLocalStorageState';
import API from "./api"

function App() {
  //Initial user status to empty with useState
  const [currUser,setCurrUser] = useState({})

  //get token from local storage with custom hooks useLocalStorageState
  const [token,setToken] = useLocalStorageState("token")

  //get user from local storage with custom hooks userLocalStorageState
  const [username,setUsername] = useLocalStorageState("username")

  //function handle from register and store the user to user state
  const getRegisterUser = async (userInput)=>{
    const token = await API.register(userInput)
    API.token = token
    const user = await API.getUser(userInput.username)
    setCurrUser(user)
    setToken(token)
    setUsername(user.username)
  }

  //function handle from login and store user to user state
  const getLoginUser = async (loginInfo) => {
    const token = await API.login(loginInfo)
    API.token = token
    const user = await API.getUser(loginInfo.username)
    setCurrUser(user)
    setToken(token)
    setUsername(user.username)
  }
  
  //function handle to update User profile
  const getUpdateUser = async (updateData) => {
    API.token = token
    const user = await API.updateUser(username,updateData)
    setCurrUser(user)
  }

  //function handle job apply
  const updateJobApply = async (jobId)=>{
    API.token = token
    await API.applyJob(username,jobId)
    setCurrUser(await API.getUser(username))
  }

  //use local storage to get current user info
  useEffect(()=>{
    async function getUserFromLocalStorage(){
      const user = await API.getUser(username)
      setCurrUser(user)
    }
    
    if(token && username){
      API.token = token
      getUserFromLocalStorage()
    }

  },[token,username])

  return (
    <div>
    <UserContext.Provider value={{
      currentUser:currUser,
      applyJob:updateJobApply,
      }}>
        <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/companies">
                <CompanyList />
              </Route>

              <Route exact path="/companies/:handle">
                <CompanyCard />
              </Route>

              <Route exact path="/jobs">
                <JobList />
              </Route>

              <Route exact path="/signup">
                <Signup 
                  getRegisterUser={getRegisterUser}
                  />
              </Route>

              <Route exact path="/login">
                <Login 
                  getLoginUser={getLoginUser}
                  />
              </Route>

              <Route exact path="/logout">
                  <Logout />
              </Route>

              <Route exact path="/profile">
                <UserUpdate getUpdateUser={getUpdateUser}/>
              </Route>

              <Route>
                <Redirect to="/"/>
              </Route>
            </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
