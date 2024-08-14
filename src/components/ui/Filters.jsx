import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = ({ onApplyFilters }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [campaignType, setCampaignType] = useState("");
  const [demographicsFilter, setDemographicsFilter] = useState({
    age: "",
    gender: "",
  });

  const handleApplyFilters = () => {
    onApplyFilters({
      startDate,
      endDate,
      campaignType,
      demographicsFilter,
    });
  };

  return (
    <div className="filters-container mb-4">
      <div className="filter-section">
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="filter-section">
        <label>End Date:</label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>

      <div className="filter-section">
        <label>Campaign Type:</label>
        <select
          value={campaignType}
          onChange={(e) => setCampaignType(e.target.value)}
        >
          <option value="">All Campaigns</option>
          <option value="campaign1">Campaign 1</option>
          <option value="campaign2">Campaign 2</option>
          {/* Agrega más tipos de campañas según sea necesario */}
        </select>
      </div>

      <div className="filter-section">
        <label>Age Group:</label>
        <select
          value={demographicsFilter.age}
          onChange={(e) =>
            setDemographicsFilter({
              ...demographicsFilter,
              age: e.target.value,
            })
          }
        >
          <option value="">All Ages</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          {/* Agrega más rangos de edad según sea necesario */}
        </select>
      </div>

      <div className="filter-section">
        <label>Gender:</label>
        <select
          value={demographicsFilter.gender}
          onChange={(e) =>
            setDemographicsFilter({
              ...demographicsFilter,
              gender: e.target.value,
            })
          }
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button className="apply-filters-btn" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
