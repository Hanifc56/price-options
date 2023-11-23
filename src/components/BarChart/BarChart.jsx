import {
  BarChart as BChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = () => {
  const usersInBangladesh = [
    { year: 2010, mobileUsers: 50_000_000, internetUsers: 5_000_000 },
    { year: 2011, mobileUsers: 55_000_000, internetUsers: 7_000_000 },
    { year: 2012, mobileUsers: 60_000_000, internetUsers: 9_000_000 },
    { year: 2013, mobileUsers: 65_000_000, internetUsers: 12_000_000 },
    { year: 2014, mobileUsers: 70_000_000, internetUsers: 15_000_000 },
    { year: 2015, mobileUsers: 75_000_000, internetUsers: 20_000_000 },
    { year: 2016, mobileUsers: 80_000_000, internetUsers: 25_000_000 },
    { year: 2017, mobileUsers: 85_000_000, internetUsers: 30_000_000 },
    { year: 2018, mobileUsers: 90_000_000, internetUsers: 35_000_000 },
    { year: 2019, mobileUsers: 95_000_000, internetUsers: 40_000_000 },
    { year: 2020, mobileUsers: 100_000_000, internetUsers: 45_000_000 },
  ];

  return (
    <div>
      <BChart
        width={600}
        height={400}
        data={usersInBangladesh}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="mobileUsers"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="internetUsers"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BChart>
    </div>
  );
};

export default BarChart;
