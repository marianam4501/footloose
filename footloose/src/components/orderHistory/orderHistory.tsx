import "./styles.scss";
import { FC, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";
import { OrderObject } from "../../utils/orderObject";
import axios from "axios";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { orderState } from "../../atoms/orderState";
import { roles } from "../../utils/roles";
import Modal from "react-bootstrap/Modal";

interface OrderHistoryProps {
  //children: React.ReactNode;
}

const OrderHistory: FC<OrderHistoryProps> = (/*{children}*/) => {
  const [orders, setOrders] = useRecoilState(orderState);
  const [currentOrder, setCurrentOrder] = useState<OrderObject>({
    id: 0,
    address: "",
    address2: "",
    city: "",
    province: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    subtotal: 0,
    taxes: 0,
    total: 0,
    orderStatus: "",
    createdAt: "",
    products: [],
    owner: 0,
});
  const [loading, setLoading] = useState<boolean>(true);
  const [noOrders, setNoOrders] = useState<boolean>(true);
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("");

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
    setCurrentOrder({
      id: 0,
      address: "",
      address2: "",
      city: "",
      province: "",
      zipCode: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      subtotal: 0,
      taxes: 0,
      total: 0,
      orderStatus: "",
      createdAt: "",
      products: [],
      owner: 0,
  });
  }
  const handleShow = () => {
    setStatus(currentOrder.orderStatus);
    setShow(true)
  };

  async function handleUpdate(){
    if (user.role == roles.ADMIN) {
      const updateStatus = async () => {
        try {
          await axios.put<OrderObject>(
            "http://localhost:8080/order/changeStatus", 
            {
              "id": currentOrder.id,
              "status": status
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setLoading(true);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setShow(false);
        }
      };
      updateStatus();
    }
  }

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    if (loading) {
      if (user.role == roles.USER) {
        const fetchOrders = async () => {
          try {
            const response = await axios.get<OrderObject[]>(
              "http://localhost:8080/order",
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              }
            );
            setOrders(response.data);
          } catch (error) {
            console.error("Error fetching orders:", error);
          } finally {
            setLoading(false);
            if (orders.length > 0) {
              setNoOrders(false);
            } else {
              setNoOrders(true);
            }
          }
        };
        fetchOrders();
      } else if (user.role == roles.ADMIN) {
        const fetchOrders = async () => {
          try {
            const response = await axios.get<OrderObject[]>(
              "http://localhost:8080/order/all",
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              }
            );
            setOrders(response.data);
          } catch (error) {
            console.error("Error fetching orders:", error);
          } finally {
            setLoading(false);
            if (orders.length > 0) {
              setNoOrders(false);
            } else {
              setNoOrders(true);
            }
          }
        };
        fetchOrders();
      }
    }
  }, [loading]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {loading ? (
        <div className="orderHistory__spinner">
          <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="orderHistory">
          <h1>Order History: </h1>
          <Table hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Details</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr>
                    <td className="orderHistory__row"># {order.id}</td>
                    <td className="orderHistory__row">
                      {user.role == roles.ADMIN ? (
                        <p>Owner id: {order.owner}</p>
                      ) : (
                        <></>
                      )}
                      <p>Date: {formatDateString(order.createdAt)}</p>
                      <p>Total: {order.total}</p>
                      <p>
                        Shipping: {order.city}, {order.province},{" "}
                        {order.zipCode}
                      </p>
                    </td>
                    <td>
                      <p>Status: {order.orderStatus}</p>
                      {user.role == roles.ADMIN ? (
                        <Button
                          id="checkout"
                          onClick={() => {
                            setCurrentOrder(order);
                            handleShow();
                          }}
                        >
                          Update Status
                        </Button>
                      ) : (
                        <></>
                      )}
                    </td>
                    <td className="orderHistory__row">
                      <Button
                        id="checkout"
                        onClick={() => {
                          navigate("/orderDetails/" + order.id);
                        }}
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Modal
            className="orderHistory__modal"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Order ID: {currentOrder.id}</p>
              <Form.Label>Status</Form.Label>
                  <Form.Select
                    defaultValue={status}
                    name="status"
                    onChange={handleStatusChange}
                  >
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleUpdate}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default OrderHistory;
