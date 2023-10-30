import React, { useState } from 'react';
import {AutoComplete, Button, Cascader, Checkbox, Col, DatePicker, Form, Input, InputNumber, Row, Select, Switch, Upload, message} from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { addPhim } from '../../../../service/api';

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


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };


const AddForm = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate()
  const onFinish = (values) => {
   console.log(values);
   let formData = new FormData();
    formData.append('tenPhim', values.tenPhim);
    formData.append('moTa', values.moTa);
    formData.append('ngayKhoiChieu', values.ngayKhoiChieu);
    formData.append('sapChieu', values.sapChieu);
    formData.append('dangChieu', values.dangChieu);
    formData.append('hot', values.hot);
    formData.append('danhGia', values.danhGia);
    formData.append('maPhim', values.maPhim);
    formData.append('File', values.hinhAnh);
    console.log(formData);
    addPhim(formData)
    .then((res) => {
            console.log(res);
          })
    .catch((err) => {
           console.log(err);
          });
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
      label="Tên phim"
      name="tenPhim"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập tên phim!',
        },
      ]}
    >
      <Input />
     </Form.Item>

     <Form.Item
      label="Trailer"
      name="trailer"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập trailer!',
        },
      ]}
    >
      <Input />
     </Form.Item>


      <Form.Item
        label="Mô tả"
        name="moTa"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mô tả!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
      name="ngayKhoiChieu"
      label="Ngày khởi chiếu">
          <DatePicker />
        </Form.Item>

        <Form.Item 
        name = "SapChieu"
        label="Sắp chiếu" 
        valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item 
        name = "DangChieu"
        label="Đang chiếu" 
        valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item 
        name = "Hot"
        label="Phim Hot" 
        valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item name="danhGia" label="Đánh giá">
        <InputNumber />
      </Form.Item>

      <Form.Item
      name="hinhAnh"
      label="Hình ảnh"
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload name="hinhAnh" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button  className='bg-orange-600' type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddForm;