import { HelpCircle, LayoutDashboard, MonitorDot, PieChart, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "../Style/Sidebar.css"; // Import the CSS file

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Subscriptions", icon: PieChart },
  { label: "Customers", icon: Users },
  { label: "Income", icon: PieChart },
  { label: "Promote", icon: Settings },
  { label: "Help", icon: HelpCircle },
];

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <MonitorDot className="sidebar-icon" />
        <span className="sidebar-title">Dashboard</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to="#"
            className={`sidebar-link ${item.active ? "active" : ""}`}
          >
            <item.icon className="sidebar-icon" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
