import BarChartCampaigns from '../components/ui/BarChartCampaigns'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'

const CampaignsView = () => {
  return (
    <Container>
      <Heading title='Campaign Performance'/>
      <BarChartCampaigns />
    </Container>
  )
}

export default CampaignsView
