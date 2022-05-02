import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Ticket from "./Pages/Ticket/Ticket";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tickets/:id" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

