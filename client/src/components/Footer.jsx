import React from "react";
import logo from "./img/logo.png";
import {Container, Col, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

const Footer = (props) => {
  return (
    <>
      <br />
      <br />
      <div style= {{backgroundColor:'#333'}}>

        <Container>
            <Row>

        <Col>
        <img src={logo} alt="logo" width={200} height={200} mode="fit" />
      

        <p style={{color:'white'}}>
        C (COPYRIGHT) 2021 GMF MEDIA GROUP, LLC
        </p> 
        
        <p style={{color:'white'}}>
        WEB SITE DESIGN: PNJ DIGITAL <br/> (www.pnjdigital.com)</p> 
        </Col>

        
      <Col>
        
        <br/>
        <br/>
    

        

        <p style={{color:'white'}}>
        211 Warren Street
        </p>

        <p style={{color:'white'}}>
        Newark, NJ. 07103
        </p>

        <p style={{color:'white'}}>
        877-426-0005
        </p>

        <p style={{color:'white'}}>
        Email: contact@gmfmediagroup.com 
        </p>
        </Col>
        
    
        <div>
          <br/>
          <br/>
          <SocialIcon fgColor= 'white' url="https://www.facebook.com/hwfmg/" />{" "}
          <SocialIcon fgColor= 'white' url="https://twitter.com/HWFMagazine1/" />{" "}
          <SocialIcon fgColor= 'white' url="https://www.instagram.com/healthwellnessfitnessmag/" />{" "}
          <SocialIcon fgColor= 'white' url="https://www.linkedin.com/company/health-wellness-&-fitness" />
        </div>
       
        </Row>

    </Container>

    <br/>
    <br/>
    <br/>

       
      </div>
    </>


  );
};

export default Footer;
