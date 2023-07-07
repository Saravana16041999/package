import "./App.css";
import LinGio from "./Components/LinGio";
import PieBar from "./Components/PieBar";
import SingleData from "./Components/SingleData";
import TopContainer from "./Components/TopContainer";

const App = () => (
  <div className='bg-blue-100'>
    <TopContainer />
    {/* <DateContainer /> */}
   <div>
   <SingleData/>
    <LinGio/>
    <PieBar/>
   </div>
    
  </div>
);

export default App;
