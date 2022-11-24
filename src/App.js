import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}></Route>  
    </Routes>
  </BrowserRouter>
  );
};
