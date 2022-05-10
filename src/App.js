import { Route, Routes } from "react-router-dom";
import Characters from "./views/Characters";
import Episodes from "./views/Episodes";
import Locations from "./views/Locations";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/" element={<Locations />} />
      <Route path="/" element={<Episodes />} />
    </Routes>
  );
}

export default App;