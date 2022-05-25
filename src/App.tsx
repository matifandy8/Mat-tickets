import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./contexts/Auth";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Ticket from "./Pages/Ticket/Ticket";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tickets/:id" element={<Ticket />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </AuthProvider>
  );
}

export default App;
