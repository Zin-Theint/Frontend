import React, { useState, useEffect } from 'react';
import mockOrders from './data/mockOrders';
import SearchFilter from './components/SearchFilter';
import OrderTable from './components/OrderTable';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [periodFilter, setPeriodFilter] = useState('Transmission');
  const [statusFilter, setStatusFilter] = useState('Waiting');

  useEffect(() => {
    // Show all orders by default
    setOrders(mockOrders);
    setFilteredOrders(mockOrders);
  }, []);

  const handleSearch = () => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const results = orders.filter((order) => {
      // Period must match
      if (periodFilter && order.period !== periodFilter) {
        return false;
      }
      // Status must match
      if (statusFilter && order.status !== statusFilter) {
        return false;
      }
      // Check date range
      if (start && end) {
        const orderDate = new Date(order.date);
        if (orderDate < start || orderDate > end) {
          return false;
        }
      }
      return true;
    });

    setFilteredOrders(results);
  };

  return (
    <div className="App container">
      <h1 className="my-4 text-primary text-center">Orders Search</h1>

      <SearchFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        handleSearch={handleSearch}
        periodFilter={periodFilter}
        setPeriodFilter={setPeriodFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="table-container">
        <OrderTable orders={filteredOrders} />
      </div>
    </div>
  );
}

export default App;
