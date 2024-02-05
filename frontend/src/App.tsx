import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./views/layout/MainLayout";
import Artists from "./views/pages/Artists";
import Songs from "./views/pages/Songs";
import Albums from "./views/pages/Albums";
import Genres from "./views/pages/Genres";
import NotFound from "./views/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Songs />} />
          <Route path="artists" element={<Artists />} />
          <Route path="albums" element={<Albums />} />
          <Route path="genres" element={<Genres />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
