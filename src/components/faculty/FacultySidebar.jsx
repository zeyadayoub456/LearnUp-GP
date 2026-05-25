import { Bell, Bot, LayoutDashboard, LogOut, ScrollText } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import learnupLogo from "../../assets/learnup-logo.png";
import "./facultyShell.css";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/faculty/dashboard" },
  { label: "Course board", icon: ScrollText, to: "/faculty/course-board" },
  { label: "notifications", icon: Bell, to: "/faculty/notifications" },
];

export default function FacultySidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="faculty-sidebar">
      <Link to="/faculty/dashboard" className="faculty-sidebar__logo" aria-label="LearnUp faculty dashboard">
        <img src={learnupLogo} alt="LearnUp" />
      </Link>

      <nav className="faculty-sidebar__nav" aria-label="Faculty navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`faculty-sidebar__link ${active ? "faculty-sidebar__link--active" : ""}`}
            >
              <Icon size={24} strokeWidth={2.6} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="faculty-sidebar__bottom">
        <Link to="/faculty/academic-advisor-bot" className="faculty-sidebar__bot">
          <Bot size={22} strokeWidth={2.5} />
          <span>Academic Advisor Bot</span>
        </Link>
        <button
          type="button"
          className="faculty-sidebar__logout"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          <LogOut size={14} strokeWidth={2.6} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
