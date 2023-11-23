import { PieChart as PChart, Pie, Tooltip, Legend } from "recharts";

const PieChart = () => {
  const groupData = [
    { name: "Group A", value: 120 },
    { name: "Group B", value: 90 },
    { name: "Group C", value: 150 },
    { name: "Group D", value: 80 },
    { name: "Group E", value: 110 },
  ];

  return (
    <div>
      <h1>Pie Chart</h1>
      <PChart width={400} height={400}>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Pie
          data={groupData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        />
      </PChart>
    </div>
  );
};

export default PieChart;
