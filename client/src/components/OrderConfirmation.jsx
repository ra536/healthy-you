import React, { useEffect, useState, useContext } from "react";
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
import Button from "@material-ui/core/Button";
import OrderAPI from "../apis/OrderAPI";
import { AppContext } from "../context/AppContext";
import { useHistory } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function createDigitalService(description, total) {
  return { description, total };
}

const DigitalServicesList = [
  // "Web Design",
  // "Web Hosting",
  "SEO",
  "Local SEO",
  "Content Marketing",
  "Email Marketing",
  "Email Automation",
  "Featured News",
  "PPC",
  "Ad Words",
  "Video",
  "Link Building",
  "Branding",
];

function createOnlineData(description, size, unit, monthsOrdered, total) {
  return { description, size, unit, monthsOrdered, total };
}

const onlineRows = [
  createOnlineData("Leaderboard", "728 x 90", "$0.00"),
  createOnlineData("Billboard", "970 x 250", "$0.00"),
  createOnlineData("Medium Banner", "300 x 250", "$0.00"),
  createOnlineData("Wide Skyscraper", "160 x 600", "$0.00"),
  createOnlineData("Learge Leaderboard", "970 x 90", "$0.00"),
  createOnlineData("Square", "728 x 90", "$0.00"),
  createOnlineData("Small Square", "250 x 250", "$0.00"),
  createOnlineData("Skyscraper", "120 x 600", "$0.00"),
];

function createData(description, print, unit, unitsOrdered, total) {
  return { description, print, unit, unitsOrdered, total };
}

const rows = [
  createData("2-Page Spread", '16.50" x 10.75"', "$3,290.44"),
  createData("Back Page", '8.25" x 10.75"', "$2,141.30"),
  createData("Inside Front Cover 2", '8.25" x 10.75"', "$1,922.80"),
  createData("Inside Back Cover", '8.25" x 10.75"', "$1,857.25"),
  createData("Inside Front Cover 3-5", '8.25" x 10.75"', "$1,857.25"),
  createData("Full Page", '8.25" x 10.75"', "$1,775.53"),
  createData("Three Quarters Page", '5.59" x 9.76"', "$1,075.92"),
  createData("Half Page", '3.5" x 9.75"', "$1,142.81"),
  createData("Quarter Page", '3.5" x 9.75"', "$662.40"),
  createData("One Third", '2.25" x 9.75"', "$1,007.40"),
  createData("1/6 Vertical", '2.25" x 4.75"', "$322.00"),
  createData("One Eigth Page", '2.25" x 3.25"', "$259.33"),
];
const unit = [
  3290.44,
  2141.3,
  1922.8,
  1857.25,
  1857.25,
  1775.53,
  1075.92,
  1142.81,
  662.4,
  1007.4,
  322.0,
  259.33,
];
const onlineUnit = [0, 0, 0, 0, 0, 0, 0, 0];

const OrderConfirmation = (props) => {
  const region = props.currentRegion;
  let history = useHistory();
  const {
    setConfirming,
    printingOptions,
    onlineType,
    digitalServices,
    advertisingDuration,
    user,
    onlineAdvertising,
    webDesignComments,
    webHostingComments,
    webDesignTotal,
    webHostingTotal,
    comments,
  } = useContext(AppContext);
  const [printingOptionsChosen, setPrintingOptionsChosen] = useState([]);
  const [onlineTypeChosen, setOnlineTypeChosen] = useState([]);
  const [digitalServicesChosen, setDigitalServicesChosen] = useState([]);
  const [advertisingDurationChosen, setAdvertisingDurationChosen] = useState(
    []
  );
  const [onlineAdvertisingChosen, setOnlineAdvertisingChosen] = useState([]);
  const [total, setTotal] = useState(null);
  const [webDesignCommentsChosen, setWebDesignCommentsChosen] = useState(null);
  const [webDesignTotalChosen, setWebDesignTotalChosen] = useState(null);
  const [webHostingCommentsChosen, setWebHostingCommentsChosen] = useState(
    null
  );
  const [webHostingTotalChosen, setWebHostingTotalChosen] = useState(null);
  const [commentsChosen, setCommentsChosen] = useState(null);

  useEffect(() => {
    console.log(webDesignComments);
    const fetchData = () => {
      var tempPrintingOptionsChosen = [];
      var tempOnlineAdvertisingChosen = [];
      var tempOnlineTypeChosen = [];
      var tempDigitalServicesChosen = [];
      var tempAdvertisingDurationChosen = [];
      var tempDesignTotal = 0;
      var tempHostingTotal = 0;
      var tempPrintingOptionsTotal = 0;
      var tempOnlineTotals = 0;
      var tempDigitalServicesTotal = 0;
      if (comments.length > 0) {
        setCommentsChosen(comments);
      } else {
        setCommentsChosen("No additional comments.");
      }
      if (webDesignComments.length > 0) {
        setWebDesignCommentsChosen(webDesignComments);
        setWebDesignTotalChosen(webDesignTotal);
        tempDesignTotal = parseFloat(webDesignTotal);
      } else {
        setWebDesignCommentsChosen("No comments.");
        setWebDesignTotalChosen(0);
      }
      if (webHostingComments.length > 0) {
        setWebHostingCommentsChosen(webHostingComments);
        setWebHostingTotalChosen(webHostingTotal);
        tempHostingTotal = parseFloat(webHostingTotal);
      } else {
        setWebHostingCommentsChosen("No comments.");
        setWebHostingTotalChosen(0);
      }
      for (var i = 0; i < printingOptions.length; i++) {
        if (printingOptions[i] > 0) {
          tempPrintingOptionsChosen.push(
            createData(
              rows[i].description,
              rows[i].print,
              rows[i].unit,
              printingOptions[i],
              printingOptions[i] * unit[i]
            )
          );
          tempPrintingOptionsTotal =
            tempPrintingOptionsTotal + parseFloat(printingOptions[i]) * unit[i];
        }
      }
      for (var m = 0; m < onlineAdvertising.length; m++) {
        if (onlineAdvertising[m] > 0) {
          tempOnlineAdvertisingChosen.push(
            createOnlineData(
              onlineRows[m].description,
              onlineRows[m].size,
              onlineRows[m].unit,
              onlineAdvertising[m],
              onlineAdvertising[m] * onlineUnit[m]
            )
          );
          tempOnlineTotals =
            tempOnlineTotals + parseFloat(onlineAdvertising[m]) * onlineUnit[m];
          console.log(onlineAdvertising[m]);
        }
      }
      for (var k = 0; k < digitalServices.length; k++) {
        if (digitalServices[k] > 0) {
          tempDigitalServicesChosen.push(
            createDigitalService(DigitalServicesList[k], digitalServices[k])
          );
          tempDigitalServicesTotal =
            tempDigitalServicesTotal + parseFloat(digitalServices[k]);
        }
      }
      if (onlineType.length > 0) {
        for (var j = 0; j < onlineType.length; j++) {
          tempOnlineTypeChosen.push(onlineType[j]);
        }
      } else {
        tempOnlineTypeChosen.push("You did not select any specific ad type.");
      }
      if (advertisingDuration.length > 0) {
        for (var l = 0; l < advertisingDuration.length; l++) {
          tempAdvertisingDurationChosen.push(advertisingDuration[l]);
        }
      } else {
        tempAdvertisingDurationChosen.push(
          "You did not select an advertising Duration."
        );
      }
      setTotal(
        (tempPrintingOptionsTotal +
          tempOnlineTotals +
          tempDigitalServicesTotal +
          tempDesignTotal +
          tempHostingTotal) *
          tempAdvertisingDurationChosen[0]
      );
      setPrintingOptionsChosen(tempPrintingOptionsChosen);
      setOnlineAdvertisingChosen(tempOnlineAdvertisingChosen);
      setOnlineTypeChosen(tempOnlineTypeChosen);
      setDigitalServicesChosen(tempDigitalServicesChosen);
      setAdvertisingDurationChosen(tempAdvertisingDurationChosen);
    };
    fetchData();
  }, [
    printingOptions,
    onlineType,
    digitalServices,
    advertisingDuration,
    onlineAdvertising,
    webDesignComments,
    webDesignTotal,
    webHostingComments,
    webHostingTotal,
    comments,
  ]);

  const handleSubmit = async (e) => {
    // console.log(printingOptionsChosen);
    // console.log(digitalServicesChosen);
    // console.log(advertisingDurationChosen);
    // console.log(total);
    try {
      const response = await OrderAPI.post("/create", {
        email: user,
        total: total,
        printing_options: printingOptionsChosen,
        online_type: onlineTypeChosen,
        digital_services: digitalServicesChosen,
        advertising_duration: advertisingDurationChosen,
        online_advertising: onlineAdvertisingChosen,
        web_design_comments: webDesignCommentsChosen,
        web_hosting_comments: webHostingCommentsChosen,
        web_design_total: webDesignTotalChosen,
        web_hosting_total: webHostingTotalChosen,
        comments: commentsChosen,
      });
      console.log(response.data);
      if (response.data.status === "success") {
        alert("Your order has been successfully submitted!");
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = (e) => {
    setConfirming(false);
  };

  return (
    <>
      <TopNavBar currentRegion={region} />
      <Container>
        <h1>Order Confirmation</h1>
        <Card>
          <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Client</Typography>
              </AccordionSummary>
              <AccordionDetails>{user}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Print Advertising</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Print</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Number of Units Ordered</TableCell>
                        <TableCell>Total ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {printingOptionsChosen.map((option, index) => (
                        <TableRow key={index}>
                          <TableCell>{option.description}</TableCell>
                          <TableCell>{option.print}</TableCell>
                          <TableCell>{option.unit}</TableCell>
                          <TableCell>{option.unitsOrdered}</TableCell>
                          <TableCell>{option.total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Online Advertising</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Type: {onlineTypeChosen} </Typography>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Number of Months Ordered</TableCell>
                        <TableCell>Total ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {onlineAdvertisingChosen.map((option, index) => (
                        <TableRow key={index}>
                          <TableCell>{option.description}</TableCell>
                          <TableCell>{option.size}</TableCell>
                          <TableCell>{option.unit}</TableCell>
                          <TableCell>{option.monthsOrdered}</TableCell>
                          <TableCell>{option.total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Digital Services</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Total ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {digitalServicesChosen.map((service, index) => (
                        <TableRow key={index}>
                          <TableCell>{service.description}</TableCell>
                          <TableCell>{service.total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Container>
                  <Typography variant="h6" gutterBottom>
                    Web Design Comments:
                  </Typography>
                  <Typography gutterBottom>
                    {webDesignCommentsChosen}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Web Design Total ($):
                  </Typography>
                  <Typography gutterBottom>{webDesignTotalChosen}</Typography>
                  <Typography variant="h6" gutterBottom>
                    Web Hosting Comments:
                  </Typography>
                  <Typography gutterBottom>
                    {webHostingCommentsChosen}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Web Hosting Total ($):
                  </Typography>
                  <Typography gutterBottom>{webHostingTotalChosen}</Typography>
                </Container>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Advertising Duration</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {advertisingDurationChosen[0]} Issues
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Additional Comments</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Typography gutterBottom>{commentsChosen}</Typography>
                </Container>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Button type="submit" onClick={handleBack}>
              Back
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </CardContent>
        </Card>
      </Container>
      <Footer currentRegion={region} />
    </>
  );
};

export default OrderConfirmation;
