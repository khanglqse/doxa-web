import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledFormItem } from "./styles";
import { Form, Input, Radio, Select, Button } from "antd";
import { createRequestAction } from "../../helper/requestHelper";

const { Option } = Select;
const UserProfile = (props) => {

  const onFinish = (values) => {
    props.updateUser({...values, id: props.user.id})
  }
  
  return (
    <div>
      <h1>User profile</h1>
      <Form
        name="basic"
        initialValues={props.user}
        onFinish={onFinish}
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
          name="currency"
          placeholder="currency"
          rules={[
            {
              required: true,
              message: "Please select currency!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="USDT_BTC">BTC</Option>
            <Option value="USDT_ETH">ETH</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="timer"
          placeholder="currency"
        >
          <Radio.Group>
            <Radio value={30}>30 mins</Radio>
            <Radio value={60}>60 mins</Radio>
          
          </Radio.Group>
        </Form.Item>
        <StyledFormItem>
          <Button className="mr-1" type="primary" htmlType="submit">
            Save
          </Button>
          <span className="mr-1">or</span>
        </StyledFormItem>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => dispatch(createRequestAction('users/update', payload, dispatch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
