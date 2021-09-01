import React, { useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OrderAPI from "../apis/OrderAPI";
import UserAPI from "../apis/UserAPI";
import { useParams } from "react-router-dom";
import RightLogo from "../components/RightLogo.png";
import MiddleLogo from "../components/MiddleLogo.png";
import LeftLogo from "../components/LeftLogo.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";

const ViewForm = () => {
  const { order_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [printingOptions, setPrintingOptions] = useState([]);
  const [digitalServices, setDigitalServices] = useState([]);
  const [advertisingDuration, setAdvertisingDuration] = useState([]);
  const [onlineAdvertising, setOnlineAdvertising] = useState([]);
  const [onlineType, setOnlineType] = useState([]);
  const [comments, setComments] = useState("");
  const [webDesignComments, setWebDesignComments] = useState("");
  const [webHostingComments, setWebHostingComments] = useState("");
  const [webDesignTotal, setWebDesignTotal] = useState(null);
  const [webHostingTotal, setWebHostingTotal] = useState(null);
  const [client, setClient] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await OrderAPI.post("/getOrderDetails", {
          order_id: order_id,
        });
        //console.log(response.data.data);
        if (response.data.status === "success") {
          setEmail(response.data.data.email);
          setPrintingOptions(response.data.data.printing_options);
          setDigitalServices(response.data.data.digital_services);
          setAdvertisingDuration(response.data.data.advertising_duration);
          setOnlineType(response.data.data.online_type);
          setOnlineAdvertising(response.data.data.online_advertising);
          setComments(response.data.data.comments);
          setWebDesignComments(response.data.data.web_design_comments);
          setWebHostingComments(response.data.data.web_hosting_comments);
          setWebDesignTotal(response.data.data.web_design_total);
          setWebHostingTotal(response.data.data.web_hosting_total);
          setTotal(response.data.data.total);
          try {
            const userResponse = await UserAPI.post("/getClient", {
              email: response.data.data.email,
            });
            if (userResponse.data.status === "success") {
              setLoading(false);
              setClient(userResponse.data.data);
              //console.log(userResponse.data.data);
            } else {
              console.log(userResponse);
            }
          } catch (userErr) {
            console.log(userErr);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [order_id]);

  //return <h1>TESTING</h1>;
  return loading === false ? (
    <Container>
      <Grid direction="column">
        <Grid container justify="space-between" alignItems="center">
          <img src={LeftLogo} alt="logo" width="275" height="75" />
          <img src={MiddleLogo} alt="logo" width="200" height="150" />
          <img src={RightLogo} alt="logo" width="200" height="150" />
        </Grid>
        <Grid>
          <Box
            bgcolor="black"
            color="primary.contrastText"
            p={1}
            textAlign="center"
            fontWeight="bold"
            fontSize="25px"
          >
            ADVERTISING SALES AGREEMENT
          </Box>
        </Grid>
        <Grid>
          <Box>Company: {client.company}</Box>
          <Box>Address: {client.address}</Box>
          <Box>
            City: {client.city} State: {client.state} Zip: {client.zip}
          </Box>
          <Box>Phone: {client.phone}</Box>
          <Box>
            Email: {email} Website: {client.website}
          </Box>
        </Grid>
        <Grid>
          <Box
            bgcolor="#0161ab"
            color="primary.contrastText"
            p={1}
            // textAlign="center"
            // fontWeight="bold"
            fontSize="15px"
          >
            PRINT ADVERTISING
          </Box>
        </Grid>
        <Grid>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width="20%">Item</TableCell>
                  <TableCell width="20%">Description</TableCell>
                  <TableCell width="20%">Unit</TableCell>
                  <TableCell width="20%">Quantity</TableCell>
                  <TableCell width="20%">Total ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {printingOptions.map((option, index) => (
                  <TableRow key={index}>
                    <TableCell>{option.description}</TableCell>
                    <TableCell>{option.print}</TableCell>
                    <TableCell>{option.unit}</TableCell>
                    <TableCell>{option.unitsOrdered}</TableCell>
                    <TableCell>${option.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box
              bgcolor="#0161ab"
              color="primary.contrastText"
              p={1}
              // textAlign="center"
              // fontWeight="bold"
              fontSize="15px"
            >
              ONLINE ADVERTISING
            </Box>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width="20%">Item</TableCell>
                  <TableCell width="20%">Description</TableCell>
                  <TableCell width="20%">Unit</TableCell>
                  <TableCell width="20%">Quantity</TableCell>
                  <TableCell width="20%">Total ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {onlineAdvertising.map((option, index) => (
                  <TableRow key={index}>
                    <TableCell>{option.description}</TableCell>
                    <TableCell>{option.size}</TableCell>
                    <TableCell>{option.unit}</TableCell>
                    <TableCell>{option.monthsOrdered}</TableCell>
                    <TableCell>${option.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box
              bgcolor="#0161ab"
              color="primary.contrastText"
              p={1}
              // textAlign="center"
              // fontWeight="bold"
              fontSize="15px"
            >
              DIGITAL SERVICES
            </Box>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width="20%">Item</TableCell>
                  <TableCell width="20%">Description</TableCell>
                  <TableCell width="20%">Unit</TableCell>
                  <TableCell width="20%">Quantity</TableCell>
                  <TableCell width="20%">Total ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {digitalServices.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>${service.total}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>${service.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Web Design</TableCell>
                  <TableCell>{webDesignComments}</TableCell>
                  <TableCell>${webDesignTotal}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>${webDesignTotal}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>Web Hosting</TableCell>
                  <TableCell>{webHostingComments}</TableCell>
                  <TableCell>${webHostingTotal}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>${webHostingTotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container justify="space-between" alignItems="center">
          <Box width="50%">
            <Typography style={{ wordWrap: "break-word" }}>
              Additional Comments: {comments}
            </Typography>
          </Box>
          <Box width="25%">
            <Box>Sub Total: ${total / advertisingDuration}</Box>
            <Box>Advertising Duration: {advertisingDuration}x Issues</Box>
            <Box>Total: ${total}</Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <h1>Loading...</h1>
  );
};

export default ViewForm;
