export type TabOption =
  | "CampaignPerformance"
  | "Trends"
  | "Demographics"
  | "AdSpend";
  
export interface TabsProps {
  activeTab: TabOption;
  setActiveTab: React.Dispatch<React.SetStateAction<TabOption>>;
}
