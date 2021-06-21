import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import { StyledFormItem } from "./styles";
import { createRequestAction } from "../../helper/requestHelper";


const Login = (props) => {
  const {username} = props
  const history = useHistory()
  const onFinish = (values) => {
    props.requestLogin(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Login failed", errorInfo);
  };

  useEffect(() => {
    if(username) {
      history.push('/home')
    }
  }, [username])

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        placeholder="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        placeholder="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <StyledFormItem >
        <Button className="mr-1" type="primary" htmlType="submit">
          Login
        </Button>
        <span className="mr-1">or</span>
        <Link to="/register">Register</Link>
      </StyledFormItem>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  username: state.user?.username,
})

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (payload) => dispatch(createRequestAction('users/authenticate', payload, dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
