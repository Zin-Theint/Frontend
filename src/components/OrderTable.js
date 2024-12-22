import React from 'react';
import './OrderTable.css';

function OrderTable({ orders }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-striped align-middle">
        <thead className="table-primary">
          <tr>
            <th>Account</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th className="d-none d-md-table-cell">Description</th>
            <th className="d-none d-md-table-cell">Qty</th>
            <th className="d-none d-md-table-cell">Filled Qty</th>
            <th className="d-none d-md-table-cell">Price</th>
            <th>Status</th>
            <th className="d-none d-md-table-cell">Date</th>
            <th className="d-none d-md-table-cell">Expiration</th>
            <th className="d-none d-md-table-cell">No. Ref</th>
            <th className="d-none d-md-table-cell">Ext. Ref</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.account}</td>
              <td>{order.operation}</td>
              <td>{order.symbol}</td>
              <td className="d-none d-md-table-cell">{order.description}</td>
              <td className="d-none d-md-table-cell">{order.qty}</td>
              <td className="d-none d-md-table-cell">{order.filledQty}</td>
              <td className="d-none d-md-table-cell">{order.price}</td>
              <td>{order.status}</td>
              <td className="d-none d-md-table-cell">{order.date}</td>
              <td className="d-none d-md-table-cell">{order.expiration}</td>
              <td className="d-none d-md-table-cell">{order.noRef}</td>
              <td className="d-none d-md-table-cell">{order.extRef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
