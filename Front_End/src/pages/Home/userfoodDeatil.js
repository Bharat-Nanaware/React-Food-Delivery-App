import Modal from '../../components/Layouts/Modal';
import React from 'react';
export default function UserfoodDeatil(props) {


  return (
    <>
      <Modal>
        <div className="container my-5">
          <h4>User Name :- {props.userData.name}</h4>
        <table class="fl-table">
            <thead>
              <tr >
                <th >Food</th>
                <th >Price</th>
                <th >Quantity</th>
                <th >Total</th>
              </tr>
            </thead>
            <tbody>
              {props.food.map((u) => (
                <tr>
                  <td>{u.name}</td>
                  <td>{u.price}</td>
                  <td>{u.quantity}</td>
                  <td>{u.total}</td>
                </tr>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td >
                  <b>Total :-</b>
                </td>
                <td >
                  <b>${props.userData.totalAmount}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => props.onClose()} className='btn btn-dark'>
            Close
          </button>
        </div>
      </Modal>
    </>
  )
}
