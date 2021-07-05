import React,{useState} from "react";
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";
import "./Signup.css"

const Signup = ({getRegisterUser})=>{

  const history = useHistory()

  const INITIAL_VALUE = {
    username:"",
    password:"",
    email:"",
    firstName:"",
    lastName:""
  }

  const [userInput,setUserInput] = useState(INITIAL_VALUE)

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 15,
    },
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
    getRegisterUser(userInput)
    history.push("/")
  }
  

  return (
    <div className="SignupWrapper">
      <h1>User Register</h1>
        <Form {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages} className="SignupForm">
          <Form.Item
            name={['user', 'name']}
            label="Username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChange} name="username" />
          </Form.Item>

          <Form.Item
            name={['user', 'password']}
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password onChange={handleChange} name="password" />
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
            name={['user', 'firstName']}
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
            name={['user', 'lastName']}
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
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default Signup