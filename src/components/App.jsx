import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/catalog" element={<Catalog />} />

        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<div>bebra</div>} />
    </Routes>
  );
}

export default App;
