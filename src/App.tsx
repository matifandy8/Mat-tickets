import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./contexts/Auth";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Ticket from "./Pages/Ticket/Ticket";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tickets/:id" element={<Ticket />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </AuthProvider>
  );
}

export default App;
