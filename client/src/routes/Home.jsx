import React, { useEffect, useContext } from 'react';
import TestAPI from '../apis/TestAPI';
import InputTest from '../components/InputTest';
import { TestContext } from '../context/TestContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Col, Media} from 'react-bootstrap';
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




// bootstrap styles library (gives automatic styling)
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

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <br />

            <Container>
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
</ul> </Col>


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
            <Container>
                <h1>Home</h1>
                <InputTest />
                <br />
                <br />
                <h2>Results:</h2>
                <div>
                    {tests && tests.map(tests => {
                        return (
                            <ListGroup key={tests.test_id}>
                                <ListGroup.Item>
                                    { tests.test_id }
                                    <br/>
                                    { tests.content }
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </div>
            </Container>
            
        </div>
    )
}

export default Home;