import { Routes, Route } from "react-router-dom";
import ShowCard from "./component/ShowCard";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ShowCard />} />
      </Routes>
    </>
  );
}

export default App;
