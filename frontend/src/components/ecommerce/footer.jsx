import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram ,FaTwitter ,FaPinterest } from "react-icons/fa";
import { CiLocationOn,CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


const Container = styled.div`
  display: flex;
  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 470px) {
   background-color: #fff8f8;
  }
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 28px;
`;

const SpecialContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Listitem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
margin-bottom: 20px; 
display:flex;
align-items: center;
`
const Payment = styled.img`
display:flex;
align-items: center;
justify-content: center;
width: 50%;
height: 50%;
`
const RightContent = styled.div`
  // Add your styles for the content in the Right section here
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>फसलFIXER</Logo>
        <Description>
        Our app is designed to provide farmers with comprehensive support, from identifying plant<br /> diseases and offering remedies to potentially <br />managing the disposal of affected plants.
        </Description>
        <SpecialContainer>
          <SocialIcon color="385999">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter />
          </SocialIcon>
        </SpecialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms</Listitem>
          <Listitem>Customer Service</Listitem>
        </List>
      </Center>
      <Right>
        <RightContent>
         <Title>Contact</Title>
         <ContactItem >
         <CiLocationOn style={{marginRight:"10px"}}/> 622 Dixile Path , South Tobinchester 98336
         </ContactItem>
         <ContactItem>
          <CiPhone style={{marginRight:"10px"}}/>+1 245 65 23
          </ContactItem>
          <ContactItem>
           <MdEmail style={{marginRight:"10px"}}/>info@फसलFIXER.dev
          </ContactItem>
          <Payment src ="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/payment-method.png" />
        </RightContent>
      </Right>
    </Container>
  );
};

export default Footer;