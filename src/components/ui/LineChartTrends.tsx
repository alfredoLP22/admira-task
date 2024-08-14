import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Modal from "react-modal";
import useFetch from "../../hooks/fetch";
import Loading from "./Loading";
import ErrorMessage from "./Error";
import "../../styles/ModalStyles.css";

const LineChartTrends = () => {
  const { data, loading, error } = useFetch("http://localhost:3001/analytics");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const filteredData = data.pageViews.filter((pageView) => {
    const date = new Date(pageView.date);
    return (
      (!startDate || new Date(startDate) <= date) &&
      (!endDate || date <= new Date(endDate))
    );
  });

  return (
    <>
      <div className="mb-4">
        <label>
          Start date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border border-gray-300 rounded ml-2"
          />
        </label>
        <label className="ml-4">
          End date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border border-gray-300 rounded ml-2"
          />
        </label>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={filteredData}
          onClick={(e) =>
            e.activePayload && openModal(e.activePayload[0].payload)
          }
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#2D3748" />{" "}
        </LineChart>
      </ResponsiveContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Details"
      >
        <div className="modal-header">
          <h2>Details</h2>
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
          <li>Date: {selectedData?.date}</li>
          <li>Unique views: {selectedData?.uniqueViews}</li>
          <li>Views: {selectedData?.views}</li>
        </ul>
      </Modal>
    </>
  );
};

export default LineChartTrends;
