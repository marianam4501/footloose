import { FC, useEffect, useState } from "react";
import ReactCreditCards, { Focused } from "react-credit-cards-2";
import "./styles.scss";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Accordion, Col, Form, Row } from "react-bootstrap";

type HandleReadyFunc = (isValid: boolean) => void;

interface CardFormProps {
  handleReady: HandleReadyFunc;
}

const CardForm: FC<CardFormProps> = ({ handleReady }) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [focusedElement, setFocusedElement] = useState<Focused>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [cardType, setCardType] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  
  useEffect(() => {
    console.log(errors);
    const hasErrors = Object.values(errors).some((error) => error !== "");
    handleReady(!hasErrors);
  }, [errors, handleReady]);
  
  useEffect(() => {
    if (cardNumber) {
      const errorMessage = validateCardNumber(cardNumber);
      setErrors((prevErrors) => ({ ...prevErrors, cardNumber: errorMessage }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber]);
  
  useEffect(() => {
    const errorMessage = validateCardName(cardName);
    setErrors((prevErrors) => ({ ...prevErrors, cardName: errorMessage }));
  }, [cardName]);
  
  useEffect(() => {
    if (expiryDate) {
      const errorMessage = validateExpiryDate(expiryDate);
      setErrors((prevErrors) => ({ ...prevErrors, expiryDate: errorMessage }));
    }
  }, [expiryDate]);
  
  useEffect(() => {
    if (cvv) {
      const errorMessage = validateCvv(cvv);
      setErrors((prevErrors) => ({ ...prevErrors, cvv: errorMessage }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cvv, cardNumber]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardName":
        setCardName(value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusedElement(e.target.name as Focused);
  };

  const validateCardNumber = (number: string): string => {
    if (!/^\d{16}$/.test(number)) {
      return "Invalid card number. Please enter a valid 16-digit number.";
    }
    if(!checkLuhn(number)){
      return "Invalid card number. The number does not correspond to a valid card.";
    }
    setCardType(getCardType(number));
    return "";
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

  const validateCardName = (name: string): string => {
    return !/\w+ \w+/.test(name) ? "Cardholder name is required." : "";
  };

  const validateExpiryDate = (expiry: string): string => {
    const isValidFormat1 = /^\d{4}$/.test(expiry);
    const isValidFormat2 = /^\d{2}\/\d{2}$/.test(expiry);
  
    if (!isValidFormat1 && !isValidFormat2) {
      return "Invalid expiry date. Please enter the date in the format MM/YY or MM/YYYY.";
    }
  
    return "";
  };

  const validateCvv = (cvv: string): string => {
    if (!cardNumber) {
      return "Please enter the card number first.";
    }
    switch (cardType) {
      case "Visa":
      case "MasterCard":
        return !/^\d{3}$/.test(cvv)
          ? "Invalid CVV. Please enter a 3-digit number."
          : "";
      case "American Express":
        return !/^\d{4}$/.test(cvv)
          ? "Invalid CVV. Please enter a 4-digit number."
          : "";
      default:
        return !/^\d{3,4}$/.test(cvv) ? "CVV must contain only digits." : "";
    }
  };

  const getCardType = (number: string): string => {
    if (/^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/.test(number)) {
      return "Visa";
    } else if (
      /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/.test(number)
    ) {
      return "MasterCard";
    } else if (/^3[47][0-9-]{16}$/.test(number)) {
      return "American Express";
    } else {
      return "Unknown";
    }
  };

  return (
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
                cvc={cvv}
                name={cardName}
                number={cardNumber}
                expiry={expiryDate}
                focused={focusedElement}
              />
            </div>
            <div className="cardForm__form">
              <Form>
                <Form.Group
                  className="mb-2"
                  as={Col}
                  lg={"12"}
                  md={"12"}
                  controlId="cardNumber"
                >
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    className="cardForm__form__entry"
                    type="text"
                    placeholder="Card Number"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    isInvalid={!!errors.cardNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cardNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} controlId="cardName">
                  <Form.Label>Cardholder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cardholder Name"
                    name="cardName"
                    value={cardName}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    isInvalid={!!errors.cardName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cardName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-2">
                  <Form.Group as={Col} controlId="expiryDate" md={"auto"}>
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="MM/YY"
                      name="expiryDate"
                      value={expiryDate}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      isInvalid={!!errors.expiryDate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiryDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="cvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CVV"
                      name="cvv"
                      value={cvv}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      isInvalid={!!errors.cvv}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cvv}
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
};

export default CardForm;
