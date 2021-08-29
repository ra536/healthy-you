import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import OrderAPI from "../apis/OrderAPI";
import { Link } from "react-router-dom";

const AdminPendingOrders = () => {
  const [orderList, setOrderList] = useState([]);

  const formatDT = (dt) => {
    dt = new Date(dt);
    return Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dt);
  };

  const handleApprove = async (e) => {
    //console.log(e.target.id);
    try {
      await OrderAPI.post("/complete", {
        order_id: e.target.id,
      });
      try {
        const response = await OrderAPI.get("/getPendingOrders", {});
        // console.log(response.data.data);
        setOrderList(response.data.data);
      } catch (err) {
        console.log(err);
      }
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OrderAPI.get("getPendingOrders");
        //console.log(response.data.data);
        setOrderList(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Complete Order</th>
            <th>Email</th>
            <th>Order Number</th>
            <th>Date Created</th>
            <th>Order Total ($)</th>
            <th>Form</th>
            <th>Payment Status</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => {
            const status = order.user_approval;
            let element = <td></td>;
            if (status === "true") {
              element = (
                <td>
                  <Button id={order.order_id} onClick={handleApprove}>
                    Complete
                  </Button>
                </td>
              );
            } else {
              element = (
                <td style={{ color: "red" }}>AWAITING USER APPROVAL</td>
              );
            }
            return (
              <tr key={index}>
                <td>{index}</td>
                {element}
                <td>{order.email}</td>
                <td>{order.order_number + 1957}</td>
                <td>{formatDT(order.createdAt)}</td>
                <td>{order.total}</td>
                <td>
                  <Link to={"/viewOrder/" + order.order_id}>View</Link>
                </td>
                <td>TODO</td>
                <td style={{ color: "blue" }}>{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPendingOrders;
