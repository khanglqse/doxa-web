import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Select, Checkbox, Button } from "antd";
import { StyledFormItem } from "./styles";
import { connect } from "react-redux";
import { createRequestAction } from "../../helper/requestHelper";

const { Option } = Select;

const Register = (props) => {
  const [status, setStatus] = useState("");

  const onFinish = async (values) => {
    const res = await props.requestRegister(values);
    if (res.status === 200) {
      setStatus("Register successfully!");
    } else {
      setStatus(res.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        placeholder="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="firstName"
        placeholder="firstName"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        placeholder="lastName"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        placeholder="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        placeholder="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="gender"
        placeholder="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="#">agreement</a>
        </Checkbox>
      </Form.Item>
      <StyledFormItem>
        <Button className="mr-1" type="primary" htmlType="submit">
          Register
        </Button>
        <span className="mr-1">or</span>
        <Link to="/login">Login</Link>
      </StyledFormItem>
      <div>{status}</div>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  username: state.user?.username,
});

const mapDispatchToProps = (dispatch) => ({
  requestRegister: (payload) =>
    dispatch(createRequestAction("users/register", payload, dispatch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
