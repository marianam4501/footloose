import { useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import { FC, useEffect, useState } from "react";
import { Button, Form, Modal, Table /*Spinner*/ } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { ProductObject } from "../../utils/productObject";
import { userState } from "../../atoms/userState";
import { roles } from "../../utils/roles";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";

interface ProductsProps {
  //children: React.ReactNode;
}

const Products: FC<ProductsProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductObject[]>([]);
  const [productsToShow, setProductsToShow] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<ProductObject>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    image: "",
    brand: "",
    sizes: "",
    category: "",
  });
  const user = useRecoilValue(userState);
  //const [loading, setLoading] = useState<boolean>(true);
  const [show, setShow] = useState(false);
  const [addReady, setAddReady] = useState(false);
  const [updateReady, setUpdateReady] = useState(false);
  const [form, setForm] = useState<number>(0);

  async function getProducts() {
    const fetchProducts = async () => {
      //console.log("Test");
      try {
        const response = await axios.get<ProductObject[]>(
          "http://localhost:8080/product"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }

  useEffect(() => {
    if (loading) {
      getProducts();
      setAddReady(false);
      setUpdateReady(false);
    }
  }, []);

  useEffect(() => {
    if (form === 1) {
      if (
        currentProduct.name !== "" &&
        currentProduct.description !== "" &&
        currentProduct.price !== 0 &&
        currentProduct.brand !== "" &&
        currentProduct.image !== "" &&
        currentProduct.category !== ""
      ) {
        setAddReady(true);
      } else {
        setAddReady(false);
      }
    } else {
      if (
        currentProduct.name !== "" ||
        currentProduct.description !== "" ||
        currentProduct.price !== 0 ||
        currentProduct.brand !== "" ||
        currentProduct.image !== "" ||
        currentProduct.category !== ""
      ) {
        setUpdateReady(true);
      } else {
        setUpdateReady(false);
      }
    }
  }, [currentProduct]);

  useEffect(() => {
    if (products) {
      setProductsToShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (formId: number) => {
    setShow(true);
    setForm(formId);
  };

  async function handleUpdate() {
    if (user.role == roles.ADMIN && updateReady) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let requestBody: any;
      requestBody = {id: currentProduct.id};
      if(currentProduct.name !== ""){
        requestBody = {...requestBody, name: currentProduct.name};
      }
      if(currentProduct.description !== ""){
        requestBody = {...requestBody, description: currentProduct.description};
      }
      if(currentProduct.price !== 0){
        requestBody = {...requestBody, price: currentProduct.price};
      }
      if(currentProduct.brand !== ""){
        requestBody = {...requestBody, brand: currentProduct.brand};
      }
      if(currentProduct.image !== ""){
        requestBody = {...requestBody, image: currentProduct.image};
      }
      if(currentProduct.category !== ""){
        requestBody = {...requestBody, category: currentProduct.category};
      }
      
      if(currentProduct.sizes !== ""){
        requestBody = {...requestBody, sizes: currentProduct.sizes};
      }
      console.log("Body: ",requestBody);
      const updateStatus = async () => {
        try {
          console.log("Body: ",requestBody);
          await axios.put<ProductObject>(
            "http://localhost:8080/product/edit",
            requestBody,
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
          setCurrentProduct({
            id: 0,
            name: "",
            description: "",
            price: 0,
            image: "",
            brand: "",
            sizes: "",
            category: "",
          });
          setUpdateReady(false);
          getProducts();
        }
      };
      if(requestBody){
        updateStatus();
      }
    }
  }

  // function convertStringToArray(inputString: string): string[] {
  //   if (!inputString) {
  //     return [];
  //   }
  
  //   // Divide la cadena por comas, recorta los espacios en blanco y filtra elementos vacíos
  //   const resultArray = inputString.split(',')
  //                                  .map(item => item.trim())
  //                                  .filter(item => item !== '');
  
  //   return resultArray;
  // }

  async function handleAdd() {
    if (user.role == roles.ADMIN && addReady) {
      console.log("current", currentProduct);
      //const sizes = convertStringToArray(currentProduct.sizes);
      //console.log(sizes);
      const updateStatus = async () => {
        try {
          await axios.post<ProductObject>(
            "http://localhost:8080/product/add",
            {
              name: currentProduct.name,
              description: currentProduct.description,
              price: currentProduct.price,
              image: currentProduct.image,
              brand: currentProduct.brand,
              sizes: currentProduct.sizes,
              category: currentProduct.category,
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setLoading(true);
        } catch (error) {
          console.error("Error adding product:", error);
        } finally {
          setShow(false);
          setCurrentProduct({
            id: 0,
            name: "",
            description: "",
            price: 0,
            image: "",
            brand: "",
            sizes: "",
            category: "",
          });
          setAddReady(false);
          getProducts();
        }
      };
      updateStatus();
    }
  }

  async function handleDelete(id: number) {
    if (user.role == roles.ADMIN) {
      const deleteProduct = async () => {
        try {
          await axios.delete<ProductObject>(
            "http://localhost:8080/product/delete/" + id,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          getProducts();
        }
      };
      deleteProduct();
    }
  }

  return (
    <div className="productManagement">
      {/* {loading ? <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner> : */}
      <h1>Product List</h1>
      <Button
        id="checkout"
        onClick={() => {
          handleShow(1);
        }}
      >
        Add new product
      </Button>
      {!productsToShow ? (
        <div className="">
          <h1>The product list is currently empty.</h1>
        </div>
      ) : (
        <Table hover>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <td className=""># {product.id}</td>
                  <td className="productManagement__productDetails">
                    <Image
                      className="productManagement__productDetails__img"
                      src={product.image}
                      thumbnail
                    />
                    <div>
                      <p>{product.name}</p>
                      <p>{product.brand}</p>
                      <p>{product.description}</p>
                      <p>${product.price}</p>
                      <p>{product.category}</p>
                      <p>{product.sizes}</p>
                    </div>
                  </td>
                  <td className="">
                    <Button
                      id="checkout"
                      onClick={() => {
                        setCurrentProduct({...product});
                        handleShow(2);
                      }}
                    >
                      Update <IoPencil />
                    </Button>
                  </td>
                  <td className="">
                    <Button
                      id="checkout"
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      Delete <FaRegTrashAlt />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <Modal
        className="productManagement__modal"
        show={show}
        onHide={handleClose}
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {form === 1 ? (
              "Add new product"
            ) : form == 2 ? (
              "Update product"
            ) : (
              <></>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {form === 1 ? (
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="form.AddProductName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write the name of your product here"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        name: e.target.value,
                      })
                    }
                    isInvalid={!currentProduct.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write the description of your product here"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        description: e.target.value,
                      })
                    }
                    isInvalid={!currentProduct.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product description.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductPrice">
                  <Form.Label>Price $</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write the price of your product here"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        price: parseInt(e.target.value),
                      })
                    }
                    isInvalid={!currentProduct.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product price.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductImage">
                  <Form.Label>Image $</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the url of the image your product here"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        image: e.target.value,
                      })
                    }
                    isInvalid={!currentProduct.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product image URL.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductBrand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write the brand of your product here"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        brand: e.target.value,
                      })
                    }
                    isInvalid={!currentProduct.brand}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product brand.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductSizes">
                  <Form.Label>Sizes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Example: 5, 6, 7, 8, 9"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        sizes: e.target.value,
                      })
                    }
                    isInvalid={!currentProduct.sizes}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the product sizes.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="form.AddProductCategory"
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write the category of your product here"
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        category: e.target.value,
                      })
                    }
                    isInvalid={!currentProduct.category}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product category.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </div>
          ) : form == 2 ? (
            <Form>
                <Form.Group className="mb-3" controlId="form.AddProductName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentProduct.name}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        name: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={currentProduct.description}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductPrice">
                  <Form.Label>Price $</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentProduct.price}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        price: parseInt(e.target.value),
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product price.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductImage">
                  <Form.Label>Image $</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentProduct.image}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductBrand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentProduct.brand}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        brand: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.AddProductSizes">
                  <Form.Label>Sizes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentProduct.sizes}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        sizes: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="form.AddProductCategory"
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={currentProduct.category}
                    required
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        category: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Form>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {form === 1 ? (
            <Button
              disabled={!addReady}
              variant="primary"
              type="submit"
              onClick={handleAdd}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              disabled={!updateReady}
              variant="primary"
              type="submit"
              onClick={handleUpdate}
            >
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
