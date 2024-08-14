import { useState } from "react";

const DateRangeFilter = ({ onFilterChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ startDate, endDate });
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 rounded-lg"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded-lg"
      />
      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Apply
      </button>
    </div>
  );
};
export default DateRangeFilter;
