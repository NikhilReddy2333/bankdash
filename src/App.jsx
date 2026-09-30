import React from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Settings from "./pages/Settings";

const menu = [
  { path: "/", icon: "⌂", name: "Dashboard" },
  { path: "/transactions", icon: "⇄", name: "Transactions" },
  { path: "/accounts", icon: "♙", name: "Accounts" },
  { path: "/investments", icon: "↗", name: "Investments" },
  { path: "/credit-cards", icon: "▣", name: "Credit Cards" },
  { path: "/loans", icon: "▥", name: "Loans" },
  { path: "/services", icon: "⚿", name: "Services" },
  { path: "/privileges", icon: "♙", name: "My Privileges" },
  { path: "/settings", icon: "⚙", name: "Settings" },
];

function getTitle(path) {
  const item = menu.find((item) => item.path === path);

  if (!item) {
    return "Overview";
  }

  if (item.name === "Settings") {
    return "Setting";
  }

  return item.name;
}

function Layout() {
  const location = useLocation();

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">▥</div>
          <strong>BankDash.</strong>
        </div>

        <nav className="sidebar-nav">

          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <span className="nav-icon">
                {item.icon}
              </span>

              <span className="nav-text">
                {item.name}
              </span>
            </NavLink>
          ))}

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        <header className="topbar">

          <h1>
            {getTitle(location.pathname)}
          </h1>

          <div className="top-actions">

            <div className="search">
              <span>⌕</span>
              <span>Search for something</span>
            </div>

            <div className="circle">
              ⚙
            </div>

            <div className="circle notification">
              ♧
              <b>2</b>
            </div>

            <div className="avatar">
              NR
            </div>

          </div>

        </header>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/transactions"
            element={<Transactions />}
          />

          <Route
            path="/accounts"
            element={<Accounts />}
          />

          <Route
            path="/investments"
            element={<Investments />}
          />

          <Route
            path="/credit-cards"
            element={<CreditCards />}
          />

          <Route
            path="/loans"
            element={<Loans />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/privileges"
            element={<Services />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default function App() {
  return <Layout />;
}