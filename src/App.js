import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainClient from "./MainClient";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VotingBoard from "./pages/VotingBoard";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <MainClient />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/voting" element={<VotingBoard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
