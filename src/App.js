import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Restaurant from "./pages/Restaurant";
import DetailRestaurant from "./pages/DetailRestaurant";
import DetailDestination from "./pages/DetailDestination";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/restaurant" element={<Restaurant/>}/>
      <Route path="/detailrestaurant" element={<DetailRestaurant/>}/>
      <Route path="/detaildestination" element={<DetailDestination/>}/>
    </Routes>
  );
}

export default App;