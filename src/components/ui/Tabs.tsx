import { TabsProps } from "../../interfaces/TabOptions";

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="text-sm font-medium flex justify-center text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "CampaignPerformance"
                ? "text-primary border-primary"
                : "hover:text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("CampaignPerformance")}
          >
            Campaign Performance
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "Trends"
                ? "text-primary border-primary"
                : "hover:text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("Trends")}
          >
            Trends
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "Demographics"
                ? "text-primary border-primary"
                : "hover:text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("Demographics")}
          >
            Demographics
          </button>
        </li>
        <li className="me-2">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "AdSpend"
                ? "text-primary border-primary"
                : "hover:text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("AdSpend")}
          >
            Ad Spend
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
