import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/js/dist/modal";
import Apps from "./compo/Apps";
import "../src/index.css";

export function Ecommerce() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errMsg2,setErrMsg2] = useState('')
  const [notFoundMsg, setNotFoundMsg] = useState("");

  const [orderMsg, setOrderMsg] = useState("");

  function getCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setCategory(response.data);
      });
  }
  function displayProducts(url) {
    axios.get(url).then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }
  function categoryChangeFun(e) {
    if (e.target.value === "all") {
      displayProducts("https://fakestoreapi.com/products");
    } else {
      displayProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }
  function navButtonsClick(categoryName) {
    if (categoryName === "all") {
      displayProducts("https://fakestoreapi.com/products");
    } else {
      displayProducts(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
    }
  }
  function addToCart(item) {
    cartItems.push(item);

    alert(`${item.title} \nAdded to cart`);
    setCartCount(cartItems.length);
    console.log(item);
  }
  useEffect(() => {
    setErrMsg('d-none')
    getCategories();

    displayProducts("https://fakestoreapi.com/products");
  }, []);

  function handleSearch() {
    console.log(inputText);
    if (
      inputText === "electronics" ||
      inputText === "jewelery" ||
      inputText === "men's clothing" ||
      inputText === "women's clothing"
    ) {
      displayProducts(
        `https://fakestoreapi.com/products/category/${inputText}`
        
      );
      setErrMsg('d-none')
    } else {
      setErrMsg2("d-none");
      setErrMsg('d-block')
      
    }
  }

  return (
    <div className="body d-flex flex-column">
      <header className="nav p-3 text-white d-flex justify-content-between align-items-center">
        <div>
          <h3 className="">SHOPPING.</h3>
        </div>
        <div className="d-flex justify-content-center">
          <span
            className="px-2 mx-1 w-25 btn "
            onClick={() => navButtonsClick("electronics")}
          >
            Electronics{" "}
          </span>
          <span
            className="px-2 mx-1 w-25 btn"
            onClick={() => navButtonsClick(`men's clothing`)}
          >
            Men's Fashion
          </span>
          <span
            className="px-2 mx-1 w-25 btn"
            onClick={() => navButtonsClick("jewelery")}
          >
            Jewellery
          </span>
          <span
            className="px-2 mx-1 w-25 btn"
            onClick={() => navButtonsClick(`women's clothing`)}
          >
            Women's Fashion
          </span>
        </div>

        <div className="d-flex justify-content-end">
          <div className="input-group mx-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="electronics | jewelery | men's clothing | women's clothing "
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <button
              className="bi bi-search btn btn-warning"
              onClick={handleSearch}
            ></button>
          </div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#cart"
            className="bi bi-cart4 btn btn-warning p-2 rounded position-relative"
          >
            <span className="bg-danger badge text-white rounded rounded-circle position-absolute">
              {cartCount}
            </span>
          </button>
          <div className="modal fade" id="cart">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-primary">
                  <h5>
                    <b>Cart Items</b>
                  </h5>
                  <button
                    className="btn btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body text-secondary">
                  {cartItems.map((ite, i) => (
                    <dl
                      key={i}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <dd className="w-25">{ite.title}</dd>
                      <dt>${ite.price}</dt>
                      <dt>
                        <img src={ite.image} width={"50px"} />
                      </dt>
                      <button className="bi bi-trash btn btn-danger"></button>
                    </dl>
                  ))}
                </div>
                <div className="modal-footer text-secondary d-flex justify-content-between">
                  <p>
                    Total Price :{" "}
                    <b className="text-primary">
                      ${cartItems.reduce((total, itm) => total + itm.price, 0)}
                    </b>
                  </p>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#placeOrder"
                    className="btn btn-secondary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="placeOrder">
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ height: "400px" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="text-success">
                    <b>Order has been placed successfully</b>
                  </h3>
                </div>
                <div className="modal-body">
                  <p className="text-dark">Happy Shopping...🙏</p>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    data-bs-target="#placeOrder"
                    data-bs-dismiss="modal"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="mx-3 btn rounded-circle bg-warning">
            <span className="bi bi-person-fill rounded-circle"></span>
          </button>
        </div>
      </header>
      <span className="h3">
        {" "}
        <span style={{ color: "#0b9b8a" }}>
          <b>C</b>
        </span>
        <span style={{ color: "#f596a1" }}>
          <b>O</b>
        </span>
        <span style={{ color: "#fadeeb" }}>
          <b>L</b>
        </span>
        <span style={{ color: "#c4e1f6" }}>
          <b>O</b>
        </span>
        <span style={{ color: "#f9c975" }}>
          <b>R</b>
        </span>
      </span>
      <main className="row m-3">
        <div className="">
          <label className="fs-5">Select Category</label>
          <select
            className="rounded rounded-3 form-select"
            onChange={categoryChangeFun}
          >
            {category.map((cate) => (
              <option key={cate} value={cate}>
                {cate.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <marquee>
            <img
              src={`${process.env.PUBLIC_URL}/electronics.jpeg`}
              width={"100px"}
              height={"100px"}
              alt="electronics"
              className="mx-2 img"
            />
            <img
              src={`${process.env.PUBLIC_URL}/mens.jpeg`}
              width={"100px"}
              height={"100px"}
              alt="men's wear"
              className="mx-2 img"
            />
            <img
              src={`${process.env.PUBLIC_URL}/jewellery.jpeg`}
              width={"100px"}
              height={"100px"}
              alt="jewellery"
              className="mx-2 img"
            />
            <img
              src={`${process.env.PUBLIC_URL}/women.jpeg`}
              width={"100px"}
              height={"100px"}
              alt="women's wear"
              className="mx-2 img"
            />
          </marquee>
        </div>
        <div className={`${errMsg}`}>
        <div className="main_wrapper">
            <div className="main">
              <div className="antenna">
                <div className="antenna_shadow"></div>
                <div className="a1"></div>
                <div className="a1d"></div>
                <div className="a2"></div>
                <div className="a2d"></div>
                <div className="a_base"></div>
              </div>
              <div className="tv">
                <div className="cruve">
                
                </div>
                <div className="display_div">
                  <div className="screen_out">
                    <div className="screen_out1">
                      <div className="screen">
                        <span className="notfound_text"> NOT FOUND</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lines">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
                <div className="buttons_div">
                  <div className="b1">
                    <div></div>
                  </div>
                  <div className="b2"></div>
                  <div class="speakers">
                    <div className="g1">
                      <div className="g11"></div>
                      <div className="g12"></div>
                      <div className="g13"></div>
                    </div>
                    <div className="g"></div>
                    <div className="g"></div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="base1"></div>
                <div className="base2"></div>
                <div className="base3"></div>
              </div>
            </div>
            <div className="text_404">
              <div className="text_4041">4</div>
              <div className="text_4042">0</div>
              <div className="text_4043">4</div>
            </div>
          </div>
        </div>
        <div
          className={`d-flex flex-row justify-content-center flex-wrap overflow-auto ${errMsg2}`}
          style={{ height: "500px" }}
        >
          {products.map((item) => (
            <div
              className="card d-flex mx-2"
              key={item.id}
              style={{ width: "350px" }}
            >
              <img src={item.image} className="m-3" width={"120px"} />
              <div className="card-body">
                <h5 className="py-2">{item.title}</h5>
                <span className="bg-success text-white p-1 rounded">
                  <span>{item.rating.rate} </span>
                  <span className="bi bi-star-fill"></span>
                </span>
                <span className="px-1">({item.rating.count})</span>
                <div className="my-2 d-flex">
                  <div className="fs-5">Price: </div>{" "}
                  <div className="h4 mx-2">
                    {" "}
                    {item.price.toLocaleString("en-us", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-warning bi bi-cart4"
                  onClick={() => addToCart(item)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
