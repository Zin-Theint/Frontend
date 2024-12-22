import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchFilter({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleSearch,
  periodFilter,
  setPeriodFilter,
  statusFilter,
  setStatusFilter
}) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
      <div>
        <label className="fw-bold me-1">Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          minDate={new Date(2012, 0, 1)}
          maxDate={new Date(2024, 11, 22)}
          placeholderText="Select start date"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>
      <div>
        <label className="fw-bold me-1">End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          minDate={startDate || new Date(2012, 0, 1)}
          maxDate={new Date(2024, 11, 22)}
          placeholderText="Select end date"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>

      <div>
        <label className="fw-bold me-1">Period:</label>
        <select
          value={periodFilter}
          onChange={(e) => setPeriodFilter(e.target.value)}
        >
          <option value="Transmission">Transmission</option>
        </select>
      </div>

      <div>
        <label className="fw-bold me-1">Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="Waiting">Waiting</option>
        </select>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchFilter;
