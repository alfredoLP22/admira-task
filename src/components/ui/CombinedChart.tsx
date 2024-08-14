import { useState } from "react";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";
import Modal from "react-modal";
import useFetch from "../../hooks/fetch";
import Loading from "./Loading";
import ErrorMessage from "./Error";
import "../../styles/ModalStyles.css";

const CombinedChart = () => {
  const { data, loading, error } = useFetch("http://localhost:3001/ads");
  const [showEngagement, setShowEngagement] = useState(true);
  const [showAdSpend, setShowAdSpend] = useState(true);
  const [showConversions, setShowConversions] = useState(true);
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

  return (
    <div>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="checkbox"
            checked={showEngagement}
            onChange={(e) => setShowEngagement(e.target.checked)}
            className="mr-2"
          />
          Show Engagement
        </label>
        <label className="mr-4">
          <input
            type="checkbox"
            checked={showAdSpend}
            onChange={(e) => setShowAdSpend(e.target.checked)}
            className="mr-2"
          />
          Show Ad Spend
        </label>
        <label>
          <input
            type="checkbox"
            checked={showConversions}
            onChange={(e) => setShowConversions(e.target.checked)}
            className="mr-2"
          />
          Show Conversions
        </label>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          onClick={(e) =>
            e.activePayload && openModal(e.activePayload[0].payload)
          }
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {showAdSpend && <Bar dataKey="adSpend" barSize={20} fill="#2D3748" />}
          {showEngagement && (
            <Line type="monotone" dataKey="engagement" stroke="#4A5568" />
          )}
          {showConversions && (
            <Line type="monotone" dataKey="conversions" stroke="#D1D5DB" />
          )}
        </ComposedChart>
      </ResponsiveContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Details"
      >
        <div className="modal-header">
          <h2>Details of {selectedData?.name}</h2>
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
          <li>Reach: {selectedData?.reach}</li>
          <li>Engagement: {selectedData?.engagement}</li>
          <li>Ad Spend: {selectedData?.adSpend}</li>
          <li>Conversions: {selectedData?.conversions}</li>
        </ul>
      </Modal>
    </div>
  );
};

export default CombinedChart;
