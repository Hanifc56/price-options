import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarks = [
    {
      student: "Student 1",
      math: 85,
      physics: 78,
      chemistry: 90,
    },
    {
      student: "Student 2",
      math: 78,
      physics: 85,
      chemistry: 70,
    },
    {
      student: "Student 3",
      math: 92,
      physics: 88,
      chemistry: 95,
    },
    {
      student: "Student 4",
      math: 65,
      physics: 70,
      chemistry: 60,
    },
    {
      student: "Student 5",
      math: 70,
      physics: 75,
      chemistry: 68,
    },
    {
      student: "Student 6",
      math: 88,
      physics: 92,
      chemistry: 85,
    },
    {
      student: "Student 7",
      math: 75,
      physics: 80,
      chemistry: 72,
    },
    {
      student: "Student 8",
      math: 82,
      physics: 87,
      chemistry: 78,
    },
    {
      student: "Student 9",
      math: 90,
      physics: 95,
      chemistry: 88,
    },
    {
      student: "Student 10",
      math: 79,
      physics: 83,
      chemistry: 75,
    },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarks}>
        <XAxis dataKey="student"></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey="math" stroke="blue" />
        <Line type="monotone" dataKey="physics" stroke="green" />
        <Line type="monotone" dataKey="chemistry" stroke="brown" />
      </LChart>
    </div>
  );
};

export default LineChart;
