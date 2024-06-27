import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { FinancesProvider } from "./contexts/FinancesContext";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import Despesa from "./components/Finances/Despesas/Despesa";
import Receita from "./components/Finances/Receitas/Receita";
import Orçamento from "./components/Finances/Orçamentos/Orçamento";
import Meta from "./components/Finances/Metas/Meta";
import FinancialChart from "./components/Charts/Chart";
import PrivateRoute from "./components/Auth/PrivateRoute";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <FinancesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/Home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/Despesa"
              element={
                <PrivateRoute>
                  <Despesa />
                </PrivateRoute>
              }
            />
            <Route
              path="/Receita"
              element={
                <PrivateRoute>
                  <Receita />
                </PrivateRoute>
              }
            />
            <Route
              path="/Orçamento"
              element={
                <PrivateRoute>
                  <Orçamento />
                </PrivateRoute>
              }
            />
            <Route
              path="/Meta"
              element={
                <PrivateRoute>
                  <Meta />
                </PrivateRoute>
              }
            />
            <Route
              path="/Chart"
              element={
                <PrivateRoute>
                  <FinancialChart />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </FinancesProvider>
    </AuthProvider>
  );
};

export default App;
