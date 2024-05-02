import { FC, useEffect, useState } from "react";
import "./styles.scss";
import { Accordion, Col, Form, Row } from "react-bootstrap";

type handleFunc = (ready: boolean) => void;

interface ShippingProps {
  handleReady: handleFunc
}

const ShippingAddressForm: FC<ShippingProps> = ({handleReady}) => {
  const [address, setAddress] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("San José");
  const [zipCode, setZipCode] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    address: "",
    city: "",
    province: "",
    zipCode: ""
  });

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    handleReady(!hasErrors);
  }, [errors, handleReady]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const zipCodeRegex = /^\d{5}$/; // Regular expression for 5 digits
    switch (name) {
      case "address":
        setErrors((prevErrors) => ({ ...prevErrors, address: value ? "" : "The address field is required." }));
        setAddress(value);
        break;
      case "address2":
        setAddress2(value);
        break;
      case "city":
        setErrors((prevErrors) => ({ ...prevErrors, city: value ? "" : "The city field is required." }));
        setCity(value);
        break;
      case "province":
        setErrors((prevErrors) => ({ ...prevErrors, province: value ? "" : "Please select a province." }));
        setProvince(value);
        break;
      case "zipCode":
        setErrors((prevErrors) => ({ ...prevErrors, zipCode: zipCodeRegex.test(value) ? "" : "Zip code must be a 5-digit number corresponding with Costa Rican format." }));
        setZipCode(value);
        break;
      default:
        break;
    }
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
  }

  return (
    <Accordion className="shippingAddressForm" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header id="shippingAddressForm__header">
          <div>
            <p className="shippingAddressForm__title">Shipping Address</p>
            <p className="shippingAddressForm__italic">Add your shipping information</p>
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
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
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
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
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
                    onChange={handleProvinceChange}
                    isInvalid={!!errors.province}
                  >
                    <option>San José</option>
                    <option>Alajuela</option>
                    <option>Cartago</option>
                    <option>Heredia</option>
                    <option>Guanacaste</option>
                    <option>Puntarenas</option>
                    <option>Limón</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.province}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.zipCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zipCode}
                  </Form.Control.Feedback>
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
