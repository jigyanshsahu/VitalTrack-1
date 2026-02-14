import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Pill,
  Activity,
  FileText,
  AlertCircle,
  User,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/meds", icon: Pill, label: "Meds" },
    { path: "/vitals", icon: Activity, label: "Vitals" },
    { path: "/docs", icon: FileText, label: "Docs" },
    { path: "/emergency", icon: AlertCircle, label: "SOS" },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Headr */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">VitalTrack</h1>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive
                ? "bg-emerald-100 text-emerald-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <User className="w-5 h-5" />
          <span className="text-sm font-medium">Profile</span>
        </NavLink>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-center gap-8 px-2 py-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${ 
                isActive
                  ? item.label === "SOS"
                    ? "text-red-600"
                    : "text-emerald-600"
                  : "text-gray-400"
              }`
            }
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
