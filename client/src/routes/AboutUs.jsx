import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import { Container, Col , Row} from "react-bootstrap";
import logo from "../components/img/logo.png";
import hwf from "../components/img/hwf_logo.png";

const AboutUs = (props) => {
    let { region } = useParams();
  return (
    // Return different webpage, depending on the validity of the ID provided
    <>
      <TopNavBar currentRegion={region}/>
      <Container>
          <div align="center">
          <h1>About Health Wellness & Fitness Magazine</h1>
          </div>
          <br />
          <hr />
          <p>


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit quis leo varius egestas eget vitae eros. Suspendisse dapibus nisi ut nunc varius suscipit ut a urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sed tincidunt orci. Sed pellentesque at ipsum eu mollis. Suspendisse in sagittis nisi. Integer condimentum, neque vitae interdum dignissim, elit turpis posuere dolor, vel aliquet nulla lorem ac diam. Nulla interdum vehicula felis eu mollis. Vivamus mattis, risus id volutpat venenatis, quam nunc gravida sapien, sed consectetur quam augue ac ex. Suspendisse potenti. Curabitur eget sollicitudin purus, vel euismod elit. Quisque at enim ac lacus malesuada volutpat non a magna. In placerat venenatis ligula, non ultrices nibh efficitur et. Ut felis lacus, dignissim nec semper et, blandit quis purus. Cras et pellentesque leo.
<br/><br/>
Maecenas finibus imperdiet ligula, et elementum tellus elementum sit amet. Mauris sit amet lorem ac leo varius accumsan. Aliquam sagittis odio neque, convallis ornare nisl porta et. Ut velit tortor, lobortis sit amet mauris faucibus, tempus accumsan metus. Curabitur cursus arcu quis metus rutrum imperdiet. Maecenas vel mauris in mauris consectetur gravida. Donec lobortis, purus a aliquet vehicula, tellus augue maximus ex, eget sodales mi nisl nec quam. Vestibulum facilisis nisi id risus sollicitudin pretium. Donec quis est felis. Nulla quis orci cursus mauris malesuada pulvinar eu sit amet eros. Donec porttitor libero eget porttitor rhoncus. Aenean et dignissim nunc. Aenean vehicula et enim id varius. Duis porta purus est, id condimentum mi faucibus ac.
<br/><br/>
Quisque varius turpis et fringilla lobortis. Nulla facilisi. Curabitur quis nisl elit. Pellentesque vitae elit tincidunt, molestie lorem vitae, consectetur justo. Maecenas efficitur magna et porta volutpat. Fusce at consectetur turpis, id pulvinar nunc. Vestibulum consectetur lacus a porta gravida.
<br/><br/>
Quisque sollicitudin ut sapien sed finibus. Integer luctus lacinia ultrices. Sed ut risus et ipsum laoreet ultricies. Pellentesque auctor urna dolor, a porta arcu tempus non. Duis nunc magna, iaculis vitae lobortis quis, bibendum et ex. Sed ultricies tincidunt elit, ac fermentum massa volutpat ac. Aliquam sollicitudin quam nec ipsum tincidunt, quis dapibus massa vestibulum. Praesent convallis leo orci, placerat congue elit hendrerit eu. Praesent ut lorem pharetra nibh lacinia porttitor. Nam a tincidunt magna. Morbi fermentum tempus ipsum, eu venenatis ante pulvinar at.
<br/><br/>
Phasellus sodales ante elit, sit amet venenatis lorem dictum sit amet. Proin quis libero vel leo scelerisque interdum vitae sed magna. Aenean quis leo pellentesque, bibendum sem vitae, luctus purus. Vestibulum bibendum luctus sem in gravida. Sed nec lobortis velit, ut bibendum est. Nulla facilisi. Sed vitae nibh sapien. 
          </p>
          <hr />
          <br />
          <Container>
              <Row>
          <Col>
          <img src={hwf} width="100%"/>{" "}
          </Col>
          <Col align="right">
          <img src={logo} width={"50%"}/>
          </Col>
          </Row>
          </Container>
          
          <br />
          <div align="center">
          HEALTH WELLNESS & FITNESS MAGAZINE LOGO, A DIVISION OF <a href="http://www.gmfmediagroup.com">GMF MEDIA GROUP, LLC</a>
          </div>
      </Container>
      <br />
      <br />
      <Footer currentRegion={region}/>
    </>
  );
};

export default AboutUs;