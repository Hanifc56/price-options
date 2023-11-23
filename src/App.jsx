import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/Linechart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import PieChart from "./components/PieChart/PieChart";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-6xl bg-rose-500 ">Price Options</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <PieChart></PieChart>
    </>
  );
}

export default App;
