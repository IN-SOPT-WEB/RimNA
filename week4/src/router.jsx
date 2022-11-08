import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import DetailBox from "./DetailBox";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/search"
          element={<SearchPage />}
        >
          <Route
            path=":gitID"
            element={<DetailBox />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
