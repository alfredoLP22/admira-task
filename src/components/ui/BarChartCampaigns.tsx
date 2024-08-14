import { useState } from "react";
import {
  BarChart,
  Bar,
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

const BarChartCampaigns = () => {
  const { data, loading, error } = useFetch(`campaigns`);
  const [filter, setFilter] = useState("");
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

  const filteredData = data.filter((campaign) =>
    campaign.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Filter by campaign name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={600}
          height={300}
          data={filteredData}
          onClick={(e) =>
            e.activePayload && openModal(e.activePayload[0].payload)
          }
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="impressions" fill="#2D3748" />
          <Bar dataKey="clicks" fill="#4A5568" />
          <Bar dataKey="conversions" fill="#F6EAD3" />
        </BarChart>
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
          <li>Clicks: {selectedData?.clicks}</li>
          <li>Conversions: {selectedData?.conversions}</li>
          <li>Cost: {selectedData?.cost}</li>
          <li>Impressions: {selectedData?.impressions}</li>
        </ul>
      </Modal>
    </>
  );
};

export default BarChartCampaigns;
