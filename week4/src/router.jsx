import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/search"
          element={<SearchPage />}
        >
          <Route
            path=":userName"
            element={<SearchPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
