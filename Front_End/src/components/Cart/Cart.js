import { useContext, useState } from "react";
import Modal from '../Layouts/Modal';
import '../../styles/Cart.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import axios from "axios";
import { apiurl } from "../env/env";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isDisplayForm, setIsDisplayForm] = useState(null);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onCancelClick = () => {
    setIsDisplayForm(null);
  };
  const OnOrderClick = () => {
    setIsDisplayForm("true");
  };



  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const [userInfo, setUserInfo] = useState({
    userID: 0,
    name: "",
    street: "",
    postalCode: "",
    city: "",
    totalAmount: 0,
  });

  const { name, street, postalCode, city } = userInfo;

  const onInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    cartCtx.User = userInfo;
    axios.post(apiurl, cartCtx);
    alert("Your order has been placed !\nIt will get delivered soon !");


    props.onClose();
    cartCtx.clearall();

  };


  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.foodID}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.foodID)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (


    <>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {!isDisplayForm && (
          <div className="actions">
            <button className="button--alt" onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className="button" onClick={OnOrderClick}>
                Order
              </button>
            )}
          </div>)}
        {isDisplayForm && (
          <div className="cart-items">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label style={{ color: "black" }}>Your Name</label>
                <input required
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className="form-control form-control my-3"
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Street</label>
                <input required
                  type="text"
                  name="street"
                  value={street}
                  onChange={(e) => onInputChange(e)}

                  className="form-control form-control my-3"
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Postal Code</label>
                <input required
                  type="number"
                  name="postalCode"
                  value={postalCode}
                  onChange={(e) => onInputChange(e)}
                  className="form-control form-control my-3"
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>City</label>
                <input required
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                  className="form-control form-control my-3"
                />
              </div>
              <button className="btn btn-dark">Save</button>
              &nbsp;&nbsp;
              <button className="btn btn-dark" onClick={onCancelClick}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </Modal>
    </>


  );
};

export default Cart;