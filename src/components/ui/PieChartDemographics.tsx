import { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import Modal from "react-modal";
import useFetch from "../../hooks/fetch";
import Loading from "./Loading";
import ErrorMessage from "./Error";
import "../../styles/ModalStyles.css";

const PieChartDemographics = () => {
  const { data, loading, error } = useFetch("http://localhost:3001/analytics");
  const [category, setCategory] = useState("Age");
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const COLORS = ["#2D3748", "#4A5568", "#D1D5DB", "#E53E3E"];

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  const chartData =
    category === "Age" ? data?.demographics?.age : data?.demographics?.gender;

  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="age">Distribution by age</option>
        <option value="gender">Distribution by gender</option>
      </select>

      <h3>{category} distribution</h3>
      <PieChart
        width={200}
        height={300}
        onClick={(e) =>
          e.activePayload && openModal(e.activePayload[0].payload)
        }
      >
        <Pie
          data={chartData}
          dataKey="percentage"
          nameKey={category === "Age" ? "range" : "type"}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#2D3748"
          label
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Details"
      >
        <div className="modal-header">
          <h2>Details of {category}</h2>
          <button className="modal-close-button" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul>
          <li>Percentage: {selectedData?.percentage}</li>
          <li>Range: {selectedData?.range}</li>
          <li>Total: {selectedData?.total}</li>
        </ul>
      </Modal>
    </div>
  );
};

export default PieChartDemographics;
