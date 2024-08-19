import React, { useState, Suspense } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Image, Layout, Menu, theme, Typography, Space, Divider } from 'antd';
import { FaCloudMoon } from "react-icons/fa";
import { IoPartlySunny } from "react-icons/io5";
import { faker } from '@faker-js/faker';
import { RiRobot3Fill } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo1.jpg";
import { CiShop } from "react-icons/ci";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// Lazy load the UploadImage component
const UploadImage = React.lazy(() => import('./Upload'));

const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const randompic = faker.image.nature();
  const name = faker.person.firstName();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const aboutus = () => {
    navigate("/about");
  };

  const home = () => {
    navigate("/home");
  };

  const ecomm = () => {
    navigate("/ecommerce");
  };

  return (
    <Layout style={{ height: '200vh', backgroundColor: darkMode ? '#121212' : '#f0f2f5' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: darkMode ? '#1f1f1f' : '#fff' }}
      >
        <div className="demo-logo-vertical" style={{ padding: '16px', textAlign: 'center' }}>
          <Image src={Logo} style={{ width: 40, height: 40, borderRadius: '50%' }} />
          <div style={{ color: darkMode ? '#fff' : '#000', marginTop: '8px' }}>Harsh</div>
        </div>
        <Menu
          theme={darkMode ? 'dark' : 'light'}
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ background: darkMode ? '#1f1f1f' : '#fff' }}
          items={[
            {
              key: '1',
              icon: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Image src={Logo} style={{ width: 24, height: 24, borderRadius: '40%' }} />
                </div>
              ),
              label: "Harsh",
            },
            {
              key: '2',
              icon: darkMode ? (
                <FaCloudMoon onClick={toggleDarkMode} style={{ cursor: 'pointer', color: '#fff' }} />
              ) : (
                <IoPartlySunny onClick={toggleDarkMode} style={{ cursor: 'pointer', color: '#000' }} />
              ),
              label: darkMode ? 'Dark Mode' : 'Light Mode',
            },
            {
              key: '3',
              icon: <RiRobot3Fill style={{ color: darkMode ? '#fff' : '#000' }} />,
              label: 'फसलFIXER',
            },
            {
              key: '4',
              icon: <IoIosInformationCircleOutline onClick={aboutus} style={{ color: darkMode ? '#fff' : '#000' }} />,
              label: 'About Us',
            },
            {
              key: '5',
              icon: <CiShop onClick={ecomm} style={{ color: darkMode ? '#fff' : '#000' }} />,
              label: 'Ecommerce',
            }
          ]}
        />
      </Sider>
      <Layout style={{ padding: 0, background: darkMode ? '#121212' : '#f0f2f5' }}>
        <Header
          style={{
            padding: 0,
            background: darkMode ? '#1f1f1f' : '#fff',
            color: darkMode ? '#fff' : '#000',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={{ color: darkMode ? '#fff' : '#000' }} /> : <MenuFoldOutlined style={{ color: darkMode ? '#fff' : '#000' }} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: darkMode ? '#fff' : '#000',
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: darkMode ? '#1f1f1f' : '#fff',
            borderRadius: borderRadiusLG,
            color: darkMode ? '#fff' : '#000',
          }}
        >
          <Title level={3} style={{ marginBottom: '20px', color: darkMode ? '#fff' : '#000' }}>
            Upload Images
          </Title>
          <Suspense fallback={<div>Loading Upload Component...</div>}>
            <UploadImage />
          </Suspense>
          <Space direction="vertical" style={{ marginTop: '20px' }}>
            <Divider />
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Homepage;
