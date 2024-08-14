import { useState } from "react";

const CampaignTypeFilter = ({ options, onFilterChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleFilterChange = (e) => {
    setSelectedOption(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleFilterChange}
      className="border p-2 rounded-lg"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default CampaignTypeFilter;
