import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Fragment, Suspense } from "react";

import "./App.css";
import { AuthProvider } from "./contexts/Auth";
import Layout from "./Layout";
const Ticket = lazy(() => import("./Pages/Ticket/Ticket"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));

function App() {
  return (
    <AuthProvider>
      <Layout>
        <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tickets/:id" element={<Ticket />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Suspense>
        </BrowserRouter>
      </Layout>
    </AuthProvider>
  );
}

export default App;
