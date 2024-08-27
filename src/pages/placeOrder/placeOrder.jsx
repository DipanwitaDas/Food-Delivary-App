import React, { useContext } from 'react';
import { storeContext } from '../../context/storeContext';
import { useNavigate } from 'react-router-dom';
import './placeOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(storeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all input fields
    const inputs = document.querySelectorAll('#form input');

    // Check if all fields are filled
    const allFieldsFilled = Array.from(inputs).every(input => input.value !== '');

    if (allFieldsFilled) {
      navigate('/'); // Redirect to the home page if all fields are filled
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <div className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="title-fields">
            <input name='firstName' type="text" placeholder='First name' />
            <input name='lastName' type="text" placeholder='Last name' />
          </div>

          <input name='email' type="email" placeholder='Email address' />
          <input name='street' type="text" placeholder='Street' />

          <div className="title-fields">
            <input name='city' type="text" placeholder='City' />
            <input name='state' type="text" placeholder='State' />
          </div>

          <div className="title-fields">
            <input name='pinCode' type="text" placeholder='Pin Code' />
            <input name='country' type="text" placeholder='Country' />
          </div>
          <input name='phone' type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()} /-</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2} /-</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} /-</b>
              </div>
            </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
