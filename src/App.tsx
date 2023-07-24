import { Routes, Route } from "react-router-dom";
import ShowCard from "./component/ShowCard";
import NavBar from "./component/NavBar";
import ShowDetailPage from "./component/ShowDetailpage";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route index element={<ShowCard />} />
        <Route path="/:showid" element={<ShowDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
