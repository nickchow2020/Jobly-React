import React,{useState}from "react"
import { Form, Input, Button} from 'antd';
import {useHistory} from "react-router-dom"
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import "./Login.css"

const Login = ({getLoginUser})=>{

  const history = useHistory()

  const INITIAL_VALUE = {
    username:"",
    password:""
  }

  const [loginInfo,setLoginInfo] = useState(INITIAL_VALUE)

  const handleChange = (e)=>{
    setLoginInfo(loginInfo => ({
      ...loginInfo,
      [e.target.name]:e.target.value
    }))
  }

    const onFinish = () => {
      getLoginUser(loginInfo)
      history.push('/')
    };

    return (
        <div className="UserFormLogin">
          <h1>User Login</h1>
          <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Username" 
                    name="username"
                    onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="/signup">register now!</a>
                </Form.Item>
          </Form>
        </div>
    )
}

export default Login