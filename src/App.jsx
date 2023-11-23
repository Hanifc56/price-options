import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-6xl bg-rose-500 ">Price Options</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
