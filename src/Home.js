import { Result, Button } from 'antd';
import React,{useContext} from "react";
import UserContext from './context/userContext';
import {v4 as uuid} from "uuid"
import { Link } from 'react-router-dom';
import "./Home.css";
const Home = ()=>{

  const {currentUser} = useContext(UserContext)

  const hasCurrentUser = Object.entries(currentUser).length === 0

  return (
    <>
      {
        hasCurrentUser 
        // user without login
        ? <Result
        className="HomePage"
        title="Thank For Visiting Jobly,Please Login or join us"
        subTitle="Goal is to help find you dream jobs"
        extra={[
          <Link key={uuid()} to="/signup"><Button type="primary">Sign Up</Button></Link>,
          <Link key={uuid()} to="/login"><Button type="primary">Log In</Button></Link>,
        ]}
      />
      : <Result
        // user with login
        status="success"
        className="HomePage"
        title={`Successfully Login,Welcome ${currentUser.firstName} ${currentUser.lastName} !`}
        subTitle="Goal is to help find you dream jobs"
        extra={[
          <Link key={uuid()} to="/companies"><Button type="primary">Companies</Button></Link>,
          <Link key={uuid()} to="/jobs"><Button type="primary">Jobs</Button></Link>,
          <Link key={uuid()} to="/profile"><Button type="primary">Edit User</Button></Link>,
          <Link key={uuid()} to="/logout"><Button type="primary">Logout</Button></Link>,
        ]}
      />
      }
    </>
  )
}

export default Home;
