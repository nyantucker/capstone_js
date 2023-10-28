import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { BASE_URL, configHeaders } from '../../service/config';
import { SET_INFO } from '../../redux/constant/user';
import { userLocalStorage } from '../../service/localStorage';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const FormLogin = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
    axios.post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`,values, {
            headers: configHeaders(),
          })
    .then((res) => {
        let action = {
            type: SET_INFO,
            payload: res.data.content
        };
        dispatch(action)
        userLocalStorage.set(res.data.content)
        message.success("Đăng nhập thành công")
        navigate("/")
              })
    .catch((err) => {
        message.error("Tài khoản mật khẩu không đúng")
              });
      };
 return <Form
    className="lg:w-1/2"
    layout='vertical'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 20,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Tài khoản"
      name="taiKhoan"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập tài khoản!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Mật khẩu"
      name="matKhau"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập mật khẩu!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 20,
      }}
    >
      <Checkbox>Ghi nhớ tài khoản</Checkbox>
      
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 20,
      }}
    >
      <Button type="primary" className='bg-orange-600' htmlType="submit">
        Đăng nhập
      </Button>
      <NavLink to={"/register"} type="primary" className='text-black underline shadow ml-[150px] font-medium'>
        Đăng ký
      </NavLink>
    </Form.Item>

  </Form>
};
export default FormLogin;