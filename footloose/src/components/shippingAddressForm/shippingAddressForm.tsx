import { useState } from "react";
import "./styles.scss";
import { Accordion, Col, Form, Row } from "react-bootstrap";

function ShippingAddressForm() {
  const [address, setAddress] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "address":
        setAddress(value);
        break;
      case "address2":
        setAddress2(value);
        break;
      case "city":
        setCity(value);
        break;
      case "province":
        setProvince(value);
        break;
      case "zipCode":
        setZipCode(value);
        break;
      default:
        break;
    }
  };

  return (
    //<div className="shippingAddressForm">
      <Accordion className="shippingAddressForm" id="">
        <Accordion.Item eventKey="0">
          <Accordion.Header id="shippingAddressForm__header">
            <div>
              <p className="shippingAddressForm__title">Shipping Address</p>
              <p className="shippingAddressForm__italic">Add your shipping information {address}</p>
              <p className="shippingAddressForm__preview">
                Province: {province + " - "} City: {city  + " - "} Zip: {zipCode}
              </p>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="shippingAddressForm__form">
              <Form>
                <Form.Group className="mb-2" as={Col} controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    rows={3}
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} controlId="address2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    rows={3}
                    as="textarea"
                    placeholder="Address 2"
                    name="address2"
                    value={address2}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row className="mb-2">
                  <Form.Group
                    className="mb-2"
                    as={Col}
                    md={"4"}
                    controlId="city"
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="City"
                      name="city"
                      value={city}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-2"
                    as={Col}
                    md={"4"}
                    controlId="province"
                  >
                    <Form.Label>Province</Form.Label>
                    <Form.Select
                      defaultValue="Select a province"
                      name="province"
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-2"
                    as={Col}
                    md={"4"}
                    controlId="zipCode"
                  >
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip Code"
                      name="zipCode"
                      value={zipCode}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

export default ShippingAddressForm;
