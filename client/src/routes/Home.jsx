import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { TestContext } from '../context/TestContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Kika from './Kika.png';
import JesseJeffers from './JesseJeffers.jpg';
import PinkRibbonProgram1 from './PinkRibbonProgram1.png';
import stretchstock from './stretchstock.jpg';
import { Media } from 'react-bootstrap';
import strech from './strech.jpeg';
import cleanjuice from './cleanjuice.jpeg';
import Health from './Health.png';
import wellness from './wellness.jpeg';
import coke from './coke.jpg';
import magazine from './magazine.jpg';
import ad250 from './ad250.jpg';
import ad728 from './ad728.jpg';
import healthpic from './healthpic.jpg';
import healthpic2 from './healthpic2.jpg';
import healthpic3 from './healthpic3.jpg';
import wellnesspic from './wellnesspic.jpg';
import wellnesspic2 from './wellnesspic2.jpg';
import wellnesspic3 from './wellnesspic3.jpg';
import fitnesspic from './fitnesspic.jpg';
import fitnesspic2 from './fitnesspic2.jpg';
import fitnesspic3 from './fitnesspic3.jpg';
import foodpic from './foodpic.jpg';
import foodpic2 from './foodpic2.jpg';
import foodpic3 from './foodpic3.jpg';
import drkai from './drkai.jpg';




import Carousel from 'react-bootstrap/Carousel';
import hwf_logo from'./hwf_logo.png';
import ad_logo from'./ad_logo.jpeg';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    // Store the data retrieved from backend API into context
    const { tests, setTests } = useContext(TestContext);

    // Call our backend API to retrieve list of test objects from db
    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (TestAPI.get("/"));
                console.log(response.data.data)
                setTests(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

// add image,fix carousel

    return (
        <div>

            <div align="center">
                <h1>MORRIS</h1>
            </div>

            <Container>
                 <Row>
                    <Col>

                        <Image src={hwf_logo} style={{ width: '100%' }}fluid/>  
                                
                    </Col>
                 </Row>
            </Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
						<Nav.Link href="#link">Home</Nav.Link>
						<Nav.Link href="#home">Food</Nav.Link>
						<Nav.Link href="#link">Nutrition</Nav.Link>
						<Nav.Link href="#link">Health</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
						<Nav.Link href="#home">Language</Nav.Link>
						<Nav.Link href="#link">Covid 19</Nav.Link>
						<Nav.Link href="#home">News</Nav.Link>
						<Nav.Link href="#link">Exercise</Nav.Link>
						<Nav.Link href="#home">Directory</Nav.Link>
						<Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ad_logo}
                alt="First slide"
                />
 
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ad_logo}
                alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ad_logo}
                alt="Third slide"
                />

            </Carousel.Item>
            </Carousel>

            <br />
		<Container>
		
			<Row>
			<Col>
			<div align="center">
				<Image src={PinkRibbonProgram1} className="mx-auto d-block" style={{ width: '70%' }} fluid rounded />
				<h2>
				Empowering Breast Cancer Survivors through Fitness, through the first post-operative exercise program for Breast Cancer Survivors 
				<p>
				by Lealah Afif
				</p>
				</h2>
			</div>
			</Col>			
			</Row>
			<br/>
			<br/>
			<br/>
			
			<Row>
				<Col>
					<div align="center">
					<Image src={Kika} fluid rounded />
					<h4>
					Learn the story of how Kika's studio came to be, and how it manages to continue through the pandemic
					</h4>
					</div>
				</Col>
				<Col>
					<div align="center">
					<Image src={JesseJeffers} fluid rounded />
					<h4>
					Meet Jesse Jeffers, Morristown's first personal Trainer, and learn with a professional
					</h4>
					</div>
				</Col>
				<Col>
					<div align="center">
					<Image src={stretchstock} fluid rounded />
					<h4>
					As Small Businesses Close, Gym Owners and Fitness Professionals Open the Door
						to New Methods of Exercise and Advocacy
					</h4>
					</div>
				</Col>
			</Row>
		</Container>



        <Container>
            <div align= "center">
                <h2>Health Guide</h2>
            </div>

            <Container>
                 <Row>
                     <Col>
                        <Button
                            variant="outline-dark"size="sm" block
                            >
                        Doctor
                        </Button>
                    </Col>
                    <Col> 
                        <Button
                             variant="outline-dark"size="sm" block
                     >
                         Dentist
                         </Button>
                    </Col>
                 </Row>
                 <br/>
                 <Row>
                    <Col>
                        <Button
                            variant="outline-dark"size="sm" block
                    >
                        Chiropractor
                        </Button>
                    </Col>
                     <Col>            
                    <Button
                        variant="outline-dark"size="sm" block
                    >
                    More...
                    </Button></Col>
                </Row>

            </Container>
            <br />

            <Container>
            <div align= "left">
                    <h3>The Latest</h3>       
            </div>

            <br />
                 <Row>
                     <Col>
                        <img src={strech} alt="strech"width={330} height={210} mode='fit' /> 
                    </Col>
             
                    <Col>
                        <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Strech</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fitness</Card.Subtitle>
                            <Card.Text>
                            As Small Businesses Close, Gym Owners and Fitness Profressionals Open the Door to New Methods of Excercise and Advocacy
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                         <small className="text-muted">Author Name | March 12, 2021</small>
                         </Card.Footer>
                        </Card>
                    </Col>

                    <Col>3 of 3</Col>
                 </Row>
                 
                 <br />

                 <Row>
                     <Col>
                        <img src={cleanjuice} alt="cleanjuice"width={330} height={210} mode='fit' /> 
                    </Col>
             
                    <Col>
                        <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Clean Juice is Good for the Soul</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Food</Card.Subtitle>
                            <Card.Text>
                            I chatted with Leilah and David Tyree about their new business adventure, "Tyree Nation," (comprised of seven childen)
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Author Name | March 12, 2021</small>
                        </Card.Footer>
                        </Card>
                    </Col>

                    <Col>3 of 3</Col>
                 </Row>

                 <br />

                 <Row>
                     <Col>
                        <img src={Health} alt="Health"width={330} height={210} mode='fit' /> 
                    </Col>
             
                    <Col>
                        <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Thank You Health Care Heroes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Health</Card.Subtitle>
                            <Card.Text>
                            2020 has been a year of controversy and dramatic change due to the Covid-19 pandemic. 
                            </Card.Text>
                            <Card.Link href="#">Read More...</Card.Link>
                            <Card.Link href="#">Share article...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Author Name | March 12, 2021</small>
                        </Card.Footer>
                        </Card>
                    </Col>

                    <Col>3 of 3</Col>
                 </Row>

                 <br />

                <Row>
                    <Col>
                    <img src={wellness} alt="wellness"width={330} height={210} mode='fit' /> 
                </Col>

                <Col>
                    <Card style={{ width: '23rem' }}>
                    <Card.Body>
                        <Card.Title>Obesity & Cancer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Wellness</Card.Subtitle>
                        <Card.Text>
                        Did you know that 2 out of every 3 adults in the United States is overweight or obese? While we may live...
                        </Card.Text>
                        <Card.Link href="#">Read More...</Card.Link>
                        <Card.Link href="#">Share article...</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Author Name | March 12, 2021</small>
                    </Card.Footer>
                    </Card>
                </Col>

                <Col>3 of 3</Col>
                </Row>
 
            </Container>
                    
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col><img src={ad250} alt="ad250"width={250} height={250} mode='fit' /></Col>
            </Row>
            <br />
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col><img src={magazine} alt="magazine"width={250} height={250} mode='fit' /></Col>
            </Row>
            <br />
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col> Recent Articles </Col>
            </Row>
            <br />
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col><ul className="list-unstyled">
                    <Media as="li">
                        <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                        <h5>Expert Name</h5>
                        <p>
                            Expert Description
                        </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                        <h5>Expert Name</h5>
                        <p>
                        Expert Description
                        </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                        <h5>Expert Name</h5>
                        <p>
                            Expert Description
                        </p>
                        </Media.Body>
                    </Media>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col><img src={ad250} alt="ad250"width={250} height={250} mode='fit' /></Col>


            </Row>
            <br>
            </br>
            <br>
            </br>

  
        </Container>
            

            <Col><img src={ad728} alt="ad728"width={728} height={90} mode='fit' /></Col>
    <br/>
            <Container>
   
             <div align= "center">
                    <h2>Health</h2>

            </div>
    <br/>
    <Row>
    
    <Col>
    <img src={healthpic} alt="healthpic"width={250} height={250} mode='fit' />
       <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>

    <Col>
    <img src={healthpic2} alt="healthpic2"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


    <Col>
    <img src={healthpic3} alt="healthpic3"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>
  
  
  </Row>

  
</Container>
<Container>
    <br>
    </br>
    <div align= "center">
                    <h2>Wellness</h2>

                </div>
                <br/>
    <Row>
    
    <Col>
    <img src={wellnesspic} alt="wellnesspic"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>

    <Col>
    <img src={wellnesspic2} alt="wellnesspic3"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>

    <Col>
    <img src={wellnesspic3} alt="wellnesspic3"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


  </Row>
</Container>
<Container>
    <br>
    </br>
    <div align= "center">
                    <h2>Fitness</h2>

                </div>
                <br/>
    <Row>
    
    <Col>
    <img src={fitnesspic} alt="fitnesspic"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


    <Col>
    <img src={fitnesspic2} alt="fitnesspic2"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


    <Col>
    <img src={fitnesspic3} alt="fitnesspic3"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


  </Row>
</Container>
<Container>
    <br>
    </br>
    <div align= "center">
                    <h2>Food</h2>

                </div>
                <br/>
    <Row>
    
    <Col>
    <img src={foodpic} alt="foodpic"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


    <Col>
    <img src={foodpic2} alt="foodpic2"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


    <Col>
    <img src={foodpic3} alt="foodpic3"width={250} height={250} mode='fit' />
    <div align = "center">
        <h3>
            Article Title
        </h3>
        </div>
    </Col>


  </Row>
  <br>
  </br>
</Container>


<Container>
    
<Col><img src={ad728} alt="ad728"width={728} height={90} mode='fit' /></Col>

</Container>
<br>
</br>


            
            

        </div>
    )
}

export default Home;