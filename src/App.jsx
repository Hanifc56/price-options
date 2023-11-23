import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/Linechart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PieChart from "./components/PieChart/PieChart";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-6xl text-white font-semibold bg-rose-400 pl-10 py-8 ">
        <span className="text-blue-600">Price </span>Options
      </h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <PieChart></PieChart>
      <Phones></Phones>
    </>
  );
}

export default App;
