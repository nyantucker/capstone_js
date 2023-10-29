import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbNav from "../component/BreadCrumbNav";
import { userLocalStorage } from "../service/localStorage";
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [LaptopOutlined , UserOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    const title = ["Movie","User"]
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: <NavLink to={`/admin/${title[key-1].toLowerCase()}`}>{title[key-1]}</NavLink>,
      // children: [
      //   {key: index*2+1, label: <NavLink to={`/admin/${title[key-1].toLowerCase()}/add`}>Thêm</NavLink>},
      //   {key: index*2+2, label: <NavLink to={`/admin/${title[key-1].toLowerCase()}/edit`}>Sửa</NavLink>},
      // ]
    };
  }
);

console.log(items2);
let handleLogout = () => { 
  userLocalStorage.remove();
  window.location.href="/login"
 }
const AdminLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 200
        }}
      >
        <span className="text-white font-medium text-2xl">
          Cyber Flix Admin
        </span>
        <button onClick={handleLogout} className="text-black bg-white rounded px-5 h-10 leading-10 shadow shadow-white">
          Log out
        </button>
      </Header>
      <Layout>
        <Sider
          theme="dark"
          width={200}
          // style={{
          //   background: colorBgContainer,
          // }}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
           className="site-layout"
           style={{
             marginLeft: 200,
           }}
          // style={{
          //   padding: "0 24px 24px",

          // }}
        >
          <BreadCrumbNav />

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
