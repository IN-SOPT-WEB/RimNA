import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Navigate to="/search"></Navigate>}
        ></Route>
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
