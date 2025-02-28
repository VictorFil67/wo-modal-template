import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
