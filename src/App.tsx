import CampaignsView from "./views/CampaignsView";
import TrendsView from "./views/TrendsView";
import DemographicsView from "./views/DemographicsView";
import AdSpendView from "./views/AdSpendView";

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <CampaignsView/>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <TrendsView />
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <DemographicsView />
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <AdSpendView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
