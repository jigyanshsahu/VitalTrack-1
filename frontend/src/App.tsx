import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Medications from "./pages/Medications";
import Vitals from "./pages/Vitals";
import Documents from "./pages/Documents";
import Emergency from "./pages/Emergency";
import Profile from "./pages/Profile";
import AppProvider from "./AppProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/meds" element={<Medications />} />
            <Route path="/vitals" element={<Vitals />} />
            <Route path="/docs" element={<Documents />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
