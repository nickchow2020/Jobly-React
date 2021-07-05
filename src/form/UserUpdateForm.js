import React,{useState,useContext} from "react";
import { Form, Input, Button } from 'antd';
import UserContext from "../context/userContext";
import { useHistory } from "react-router-dom";
import "./UserUpdateForm.css"

const Signup = ({getUpdateUser})=>{

  const {currentUser} = useContext(UserContext)

  const history = useHistory()

  const [userInput,setUserInput] = useState(currentUser)

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 15,
    }
  };
  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
    }
  };
  /* eslint-enable no-template-curly-in-string */

  const handleChange = (e)=>{
    setUserInput(inputValue => ({
      ...inputValue,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = ()=>{
    const updateData = {
      firstName:userInput.firstName,
      lastName:userInput.lastName,
      email:userInput.email
    }
    getUpdateUser(updateData)
    history.push("/")
  }

  console.log(userInput)


  return (
    <div className="SignupWrapper">
      <h1>User Info Update</h1>
        <Form {...layout} 
          initialValues={{
            username:currentUser.username,
            email:currentUser.email,
            firstName:currentUser.firstName,
            lastName:currentUser.lastName
          }}
          name="nest-messages" 
          onFinish={handleSubmit} 
          validateMessages={validateMessages} 
          className="SignupForm">
          <Form.Item
            name={['username']}
            label="Username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChange} name="username"  disabled/>
          </Form.Item>

          <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input onChange={handleChange} name="email" />
            </Form.Item>

          <Form.Item
            name={['firstName']}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChange} name="firstName" />
          </Form.Item>

          <Form.Item
            name={['lastName']}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChange} name="lastName" />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default Signup



