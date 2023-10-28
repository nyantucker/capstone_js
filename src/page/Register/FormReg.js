import React, { useState } from 'react';
import {AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select, message} from 'antd';
import axios from 'axios';
import { BASE_URL, configHeaders } from '../../service/config';
import {useNavigate} from 'react-router-dom';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const FormRegister = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate()
  const onFinish = (values) => {
    axios.post(`${BASE_URL}/QuanLyNguoiDung/DangKy`,values, {
        headers: configHeaders(),
      })
        .then((res) => {
              console.log(res);
              message.success("Đăng ký thành công")
                navigate("/login")
            })
        .catch((err) => {
             console.log(err);
             message.error("Đăng ký không thành công")
            });
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
    className="lg:w-1/2 mr-5"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
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
        name="matKhau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Xác nhận mật khẩu"
        dependencies={['matKhau']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Vui lòng xác nhận mật khẩu!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('matKhau') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu đang nhập chưa đúng ...'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Email không hợp lệ',
          },
          {
            required: true,
            message: 'Vui lòng nhập Email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="hoTen"
        label="Họ Tên"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập họ tên!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="soDt"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button  className='bg-orange-600' type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormRegister;