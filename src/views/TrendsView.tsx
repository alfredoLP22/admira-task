import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import LineChartTrends from '../components/ui/LineChartTrends'

const TrendsView = () => {
  return (
    <Container>
      <Heading title='Page Views and Sessions'/>
      <LineChartTrends />
    </Container>
  )
}

export default TrendsView
