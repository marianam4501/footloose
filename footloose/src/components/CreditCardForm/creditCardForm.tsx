import { useState } from "react";
import ReactCreditCards, { Focused } from "react-credit-cards-2";
import "./styles.scss";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Accordion, Col, Form, Row } from "react-bootstrap";

function CardForm() {
  const [number, setNumber] = useState<string | number>("");
  const [name, setName] = useState<string>("");
  const [focused, setFocused] = useState<Focused>("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "number":
        if (
          checkLuhn(value)
        ) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            number: "Invalid card number",
          }));
        } else {
          setType(getCardType(value));
          setErrors((prevErrors) => ({ ...prevErrors, number: "" }));
        }
        setNumber(value);
        break;
      case "name":
        if (value.trim() === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Cardholder name is required",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
        }
        setName(value);
        break;
      case "expiry":
        if (!/^\d{4}$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            expiry: "Invalid expiry date format (MM/YY)",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, expiry: "" }));
        }
        setExpiry(value);
        break;
      case "cvc":
        if (validateCvc(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            cvc: "Invalid CVC",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, cvc: "" }));
        }
        setCvc(value);
        break;
      default:
        break;
    }
  };

  function checkLuhn(cardNo: string): boolean {
    const nDigits = cardNo.length;
    let nSum = 0;
    let isSecond = false;

    for (let i = nDigits - 1; i >= 0; i--) {
      let d = parseInt(cardNo[i], 10);

      if (isSecond) {
        d = d * 2;
      }

      // Sumar los dígitos de los números que tienen más de un dígito después de duplicarse
      nSum += Math.floor(d / 10);
      nSum += d % 10;

      isSecond = !isSecond;
    }

    return nSum % 10 === 0;
  }

  const validateCvc = (cvc: string): boolean => {
    // Obtener el tipo de tarjeta basado en el número
    // Validar el CVC según el tipo de tarjeta
    switch (type) {
      case "Visa":
        return /^\d{3}$/.test(cvc);
      case "MasterCard":
        return /^\d{3}$/.test(cvc);
      case "American Express":
        return /^\d{4}$/.test(cvc);
      default:
        return /^\d{3,4}$/.test(cvc);
    }
  };

  const getCardType = (number: string): string => {
    // Lógica para determinar el tipo de tarjeta según el número
    // Implementa tu propia lógica aquí
    // Por ejemplo:
    console.log("type", type);
    if (/^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/.test(number)) {
      return "Visa";
    } else if (
      /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/.test(number)
    ) {
      return "MasterCard";
    } else if (/^3[47][0-9-]{16}$/.test(number)) {
      return "American Express";
    } else {
      return "Unknown";
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(e.target.name as Focused);
  };

  return (
    //<div className="cardForm">
    <Accordion className="shippingAddressForm" id="">
      <Accordion.Item eventKey="0">
        <Accordion.Header id="shippingAddressForm__header">
          <div>
            <p className="cardForm__title">Credit Card Information</p>
            <p className="cardForm__italic">
              Add your credit/debit card information
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="cardForm__container">
            <div className="cardForm__creditCard">
              <ReactCreditCards
                cvc={cvc}
                name={name}
                number={number}
                expiry={expiry}
                focused={focused}
              />
            </div>
            <div className="cardForm__form">
              <Form>
                <Form.Group
                  className="mb-2"
                  as={Col}
                  lg={"12"}
                  md={"12"}
                  controlId="number"
                >
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    className="cardForm__form__entry"
                    type="text"
                    placeholder="Card Number"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} controlId="name">
                  <Form.Label>Cardholder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cardholder Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-2">
                  <Form.Group as={Col} controlId="expiry" md={"auto"}>
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="MM/YY"
                      name="expiry"
                      value={expiry}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      isInvalid={!!errors.expiry}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiry}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="cvc">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CVC"
                      name="cvc"
                      value={cvc}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      isInvalid={!!errors.cvc}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cvc}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CardForm;
