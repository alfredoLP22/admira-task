import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useFetch from "../../hooks/fetch";

const TrendLineChart = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3001/vistasPagina"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="vistas" stroke="#8884d8" />
    </LineChart>
  );
};

export default TrendLineChart;
