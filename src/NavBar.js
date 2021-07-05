import React,{useContext} from "react";
import UserContext from "./context/userContext";
import { PageHeader, Button } from 'antd';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ()=> {

  const {currentUser} = useContext(UserContext)

  const hasUser = Object.entries(currentUser).length === 0;

  return (
    <div className="site-page-header-ghost-wrapper">
      {
        hasUser 
        ? <PageHeader
          // without login 
            className="Navbar"
            title="Jobly"
            extra={[
              <Link key="4" to="/login"><Button>Login</Button></Link>,
              <Link key="5" to="/signup"><Button>Sign Up</Button></Link>
            ]}
        />
        : <PageHeader
          // with login
        className="Navbar"
        title="Jobly"
        extra={[
          <Link key="1" to="/companies"><Button>Companies</Button></Link>,
          <Link key="2" to="/jobs"><Button>Jobs</Button></Link>,
          <Link key="3" to="/profile"><Button>Profile</Button></Link>,
          <Link key="4" to="/logout"><Button>Logout as {currentUser.firstName}</Button></Link>
        ]}
      />
      }
    </div>
  )
}

export default NavBar