import Container from "../components/ui/Container";
import CombinedChart from "../components/ui/CombinedChart";
import Heading from "../components/ui/Heading";

const AdSpendView = () => {
  return (
    <Container>
      <Heading title="Ad Spend vs Engagement & Conversions" />
      <CombinedChart />
    </Container>
  );
};

export default AdSpendView;
