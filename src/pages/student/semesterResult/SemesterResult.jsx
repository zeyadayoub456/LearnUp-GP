import {
  AlertTriangle,
  Bell,
  Bot,
  CircleHelp,
  Download,
  Info,
  LayoutDashboard,
  LogOut,
  Map,
  Search,
  SquareChartGantt,
  SquareLibrary,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import learnupLogo from "../../../assets/learnup-logo.png";
import "./semesterResult.css";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/student/dashboard" },
  { label: "Course board", icon: SquareLibrary, to: "/student/course-board" },
  { label: "Academic map", icon: Map, to: "/student/academic-map" },
  { label: "Semester result", icon: SquareChartGantt, to: "/student/semester-result" },
];

const tabs = ["All", "Passed", "Failed", "Withdrawal"];

const resultRows = [
  { courseName: "Machine Learning", code: "CS-401", creditHours: 3, grade: "A", status: "PASSED" },
  { courseName: "Ethics in AI", code: "CS-396", creditHours: 3, grade: "A", status: "PASSED" },
  { courseName: "Operating Systems", code: "CS-302", creditHours: 3, grade: "B+", status: "PASSED" },
  { courseName: "Data Structures", code: "CS-201", creditHours: 3, grade: "A", status: "PASSED" },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="semester-result__sidebar">
      <Link to="/student/dashboard" className="semester-result__logo">
        <img src={learnupLogo} alt="LearnUp" className="learnup-logo" />
      </Link>

      <nav className="semester-result__nav" aria-label="Student navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`semester-result__nav-item ${isActive ? "semester-result__nav-item--active" : ""}`}
            >
              <Icon size={25} strokeWidth={2.35} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="semester-result__sidebar-actions">
        <Link to="/student/academic-advisor-bot" className="semester-result__advisor-button">
          <Bot size={23} strokeWidth={2.3} />
          <span>Academic Advisor Bot</span>
        </Link>
        <button
          type="button"
          className="semester-result__logout-button"
          onClick={() => {
            localStorage.clear();
            navigate("/who-are-you");
          }}
        >
          <LogOut size={15} strokeWidth={2.3} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="semester-result__topbar">
      <label className="semester-result__search">
        <Search size={17} strokeWidth={2.2} />
        <input type="search" placeholder="Search for courses, professors, or departments..." />
      </label>

      <div className="semester-result__topbar-actions">
        <button type="button" aria-label="Notifications">
          <Bell size={20} strokeWidth={2} />
        </button>
        <button type="button" aria-label="Help">
          <CircleHelp size={20} strokeWidth={2} />
        </button>
        <div className="semester-result__user">
          <div>
            <strong>Alex Rivera</strong>
            <span>LEVEL 200</span>
          </div>
          <div className="semester-result__avatar" aria-label="Alex Rivera" role="img" />
        </div>
      </div>
    </header>
  );
}

export default function SemesterResult() {
  const [academicYear, setAcademicYear] = useState("2023-2024");
  const [semester, setSemester] = useState("Fall");
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="semester-result">
      <Sidebar />

      <div className="semester-result__workspace">
        <Topbar />

        <main className="semester-result__content">
          <section className="semester-result__header">
            <h1>Semester Results</h1>
            <p>Review your academic performance for each semester.</p>
          </section>

          <section className="semester-result__filters" aria-label="Result filters">
            <label>
              <span>ACADEMIC YEAR</span>
              <select value={academicYear} onChange={(event) => setAcademicYear(event.target.value)}>
                <option value="2023-2024">2023-2024</option>
              </select>
            </label>

            <label>
              <span>SEMESTER</span>
              <select value={semester} onChange={(event) => setSemester(event.target.value)}>
                <option value="Fall">Fall</option>
              </select>
            </label>

            <button type="button" className="semester-result__export" onClick={() => console.log("Export PDF")}>
              <Download size={16} strokeWidth={2.2} />
              <span>Export PDF</span>
            </button>
          </section>

          <section className="semester-result__stats" aria-label="Semester statistics">
            <article className="result-stat-card">
              <h2>Semester GPA</h2>
              <strong>3.85</strong>
              <span className="result-stat-card__line" />
            </article>

            <article className="result-stat-card">
              <h2>Cumulative GPA</h2>
              <strong>3.92</strong>
              <p>Higher Honors</p>
            </article>

            <article className="result-stat-card">
              <h2>Passed Credits</h2>
              <strong>12</strong>
              <p>Completion rate: 100%</p>
            </article>

            <article className="result-stat-card">
              <h2>Total Credits</h2>
              <strong>12</strong>
              <p>Enrolled: Fall 2024</p>
            </article>
          </section>

          <section className="semester-result__tabs" aria-label="Result status tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={activeTab === tab ? "is-active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </section>

          <section className="semester-result__table-card" aria-label="Semester courses table">
            <table className="semester-result__table">
              <thead>
                <tr>
                  <th>COURSE NAME</th>
                  <th>CODE</th>
                  <th>CREDIT HOURS</th>
                  <th>GRADE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {resultRows.map((row) => (
                  <tr key={row.code}>
                    <td>{row.courseName}</td>
                    <td>{row.code}</td>
                    <td>{row.creditHours}</td>
                    <td>{row.grade}</td>
                    <td>
                      <span className="semester-result__status-badge">{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <button type="button" className="semester-result__audit-link">
            View Detailed Audit <span>→</span>
          </button>

          <section className="semester-result__alerts" aria-label="Important notices">
            <article className="result-alert result-alert--danger">
              <div className="result-alert__icon">
                <AlertTriangle size={18} strokeWidth={2.4} />
              </div>
              <div className="result-alert__content">
                <h3>Grade Discrepancy?</h3>
                <p>Request a re-evaluation before Dec 15th.</p>
              </div>
              <button type="button" onClick={() => console.log("File Dispute")}>
                File Dispute
              </button>
            </article>

            <article className="result-alert result-alert--info">
              <div className="result-alert__icon">
                <Info size={18} strokeWidth={2.4} />
              </div>
              <div className="result-alert__content">
                <h3>AI Course Suggestion</h3>
                <p>Based on your CSE results, consider Distributed Systems next term.</p>
              </div>
              <button type="button" onClick={() => console.log("register now")}>
                register now
              </button>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
