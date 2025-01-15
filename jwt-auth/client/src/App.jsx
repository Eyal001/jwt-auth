import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        {/* <UserProfile /> */}
        <main className="container">
          <Routes>
            <Route path="/" element={<h2>Welcom to our App</h2>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
