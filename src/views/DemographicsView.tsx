import PieChartDemographics from "../components/ui/PieChartDemographics";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";

const DemographicsView = () => {
  return (
    <Container>
      <Heading title="Demographic Distribution" />
      <PieChartDemographics />
    </Container>
  );
};

export default DemographicsView;
