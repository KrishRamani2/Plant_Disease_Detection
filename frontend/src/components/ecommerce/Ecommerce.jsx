import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Slider from './Carousel';
import Cards from './card';
import SmallCards from './smallcard';
import CompanyLogo from './Company';
import Footer from './footer';
import Newsletter from "../ecommerce/newsletter"
import { BiCategory } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch,CiHome } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Ecommerce = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const home = ()=>{
    navigate("/home")
  }
  return (
    <Layout style={{height:"100%"}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:"280vh"}} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Account',
            },
            {
              key: '2',
              icon: <BiCategory />,
              label: 'Category',
            },
            {
              key: '3',
              icon: <FaShoppingBag />,
              label: 'Seller',
            },
            {
                key: '4',
                icon: <CiSearch />,
                label: 'Search',
            },
            {
                key: '5',
                icon: <CiHome onClick={home} />,
                label: 'Home',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Slider />
          <Cards />
          <SmallCards />
          <SmallCards />
          <CompanyLogo />
          <Newsletter />
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Ecommerce;