import React from 'react';
import { Layout, Typography, Divider, Card, Row, Col, Image, Button } from 'antd';
import { InfoCircleOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Groupphoto from "../../assets/G1.jpg";
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <Layout style={{ height: '100%', padding: '24px' }}>
      <Content style={{ padding: '24px', background: '#fff', borderRadius: '8px', minHeight: 'calc(100vh - 48px)' }}>
        <Title level={2} style={{ textAlign: 'center' }}>About Us</Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px' }}>
          Our app is designed to provide farmers with comprehensive support, from identifying plant diseases and offering remedies to potentially managing the disposal of affected plants.
        </Paragraph>
        <Divider />

        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Disease Identification"
              bordered={false}
              style={{ textAlign: 'center' }}
              headStyle={{ color: '#1890ff' }}
              bodyStyle={{ color: '#595959' }}
              cover={<InfoCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />}
            >
              <Paragraph>
                Our app uses advanced technology to help you accurately identify plant diseases.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Remedies and Solutions"
              bordered={false}
              style={{ textAlign: 'center' }}
              headStyle={{ color: '#52c41a' }}
              bodyStyle={{ color: '#595959' }}
              cover={<CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />}
            >
              <Paragraph>
                We offer a range of remedies and solutions to address various plant health issues.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Disposal Management"
              bordered={false}
              style={{ textAlign: 'center' }}
              headStyle={{ color: '#fa541c' }}
              bodyStyle={{ color: '#595959' }}
              cover={<ExclamationCircleOutlined style={{ fontSize: '48px', color: '#fa541c' }} />}
            >
              <Paragraph>
                Get guidance on how to properly dispose of affected plants to prevent further spread of diseases.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Divider />

        <Title level={3} style={{ textAlign: 'center' }}>Our Team(2023-2024)</Title>
        <Row justify="center" style={{ marginBottom: '24px' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Image
              src={Groupphoto}
              alt="Group Photo"
              style={{ borderRadius: '8px', marginBottom: '16px' }}
            />
          </Col>
        </Row>

        <Title level={4} style={{ textAlign: 'center' }}>Team Members(2023-2024)</Title>
        <Row gutter={16} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Harsh Jain</Title>
              <Paragraph>Team Leader</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Naman Shah</Title>
              <Paragraph>UI/UX Designer</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Parv Siria</Title>
              <Paragraph>Project Manager</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Ruchi Gadgil</Title>
              <Paragraph>Project Manager</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Jainam Shah</Title>
              <Paragraph>UI/UX Designer</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Vansh Shetty</Title>
              <Paragraph>UI/UX Designer</Paragraph>
            </Card>
          </Col>
        </Row>
        <Title level={4} style={{ textAlign: 'center' }}>Team Members(2024-2025)</Title>
        <Row gutter={16} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Harsh Jain</Title>
              <Paragraph>Team Leader</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Krish Ramani</Title>
              <Paragraph>Lead Developer</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Parv Siria</Title>
              <Paragraph>Project Manager</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Ruchi Gadgil</Title>
              <Paragraph>Project Manager</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Jainam Shah</Title>
              <Paragraph>UI/UX Designer</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={5}>Vansh Shetty</Title>
              <Paragraph>UI/UX Designer</Paragraph>
            </Card>
          </Col>
        </Row>
        <Title level={4} style={{ textAlign: 'center' }}>Achievements</Title>
        <Paragraph style={{ textAlign: 'center' }}>
          - Selected in Internal Hackathon (SIH) in 2023-24<br />
        </Paragraph>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',  // Adjust this height if needed
        }}>
          <Link to="/home">
            <Button style={{ backgroundColor: '#000', color: '#Eee' }}>Back to home</Button>
          </Link>
        </div>
      </Content>
    </Layout>
  );
};

export default AboutUs;
