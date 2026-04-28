import {
  Bell,
  Bot,
  CheckCircle2,
  CircleHelp,
  LayoutDashboard,
  Lock,
  LogOut,
  Map,
  MoreHorizontal,
  Search,
  SquareChartGantt,
  SquareLibrary,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import learnupLogo from "../../../assets/learnup-logo.png";
import "./academicMap.css";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/student/dashboard" },
  { label: "Course board", icon: SquareLibrary, to: "/student/course-board" },
  { label: "Academic map", icon: Map, to: "/student/academic-map" },
  { label: "Semester result", icon: SquareChartGantt, to: "/student/semester-result" },
];

const legendItems = [
  { label: "Passed", status: "passed" },
  { label: "Enrolled", status: "enrolled" },
  { label: "Locked", status: "locked" },
];

const roadmapLevels = [
  {
    level: "100",
    levelDotTone: "yellow",
    title: "Level 100",
    courses: [
      { code: "CS101", title: "Programming 1", status: "passed", description: "3 Credits • Intro Logic" },
      { code: "MA105", title: "Discrete Math", status: "passed", description: "4 Credits • Math Foundation" },
      { code: "CS102", title: "Programming 2", status: "passed", description: "3 Credits • Data Flow" },
      { code: "CS102", title: "OOD 1", status: "passed", description: "3 Credits • Data Flow" },
      { code: "CS102", title: "Human Rights", status: "passed", description: "2 Credits • Data Flow" },
    ],
  },
  {
    level: "200",
    levelDotTone: "indigo",
    title: "Level 200",
    courses: [
      { code: "CS201", title: "Data Structures", status: "enrolled", description: "3 Credits • Linked Lists & Trees" },
      { code: "CS202", title: "Architecture", status: "passed", description: "3 Credits • Von Neumann" },
      { code: "MA201", title: "Linear Algebra", status: "enrolled", description: "4 Credits • Vector Spaces" },
      { code: "MA201", title: "OOD 2", status: "enrolled", description: "4 Credits • Vector Spaces" },
      { code: "MA201", title: "Scientific thinking", status: "enrolled", description: "4 Credits • Vector Spaces" },
    ],
  },
  {
    level: "300",
    levelDotTone: "blue",
    title: "Level 300",
    courses: [
      { code: "CS301", title: "Algorithms", status: "locked", description: "3 Credits • Big-O Notation" },
      { code: "CS302", title: "Databases", status: "enrolled", description: "3 Credits • SQL & NoSQL" },
      { code: "CS303", title: "Networks", status: "locked", description: "4 Credits • TCP/IP" },
      { code: "CS303", title: "OOD 3", status: "locked", description: "4 Credits • TCP/IP" },
    ],
  },
  {
    level: "400",
    levelDotTone: "pink",
    title: "Level 400",
    courses: [
      { code: "CS401", title: "AI", status: "locked", description: "3 Credits • Neural Nets" },
      { code: "CS402", title: "Software Proj.", status: "locked", description: "4 Credits • Agile Dev" },
      { code: "CS499", title: "Capstone", status: "locked", description: "6 Credits • Senior Status" },
      { code: "CS499", title: "Capstone", status: "locked", description: "6 Credits • Senior Status" },
    ],
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="academic-map__sidebar">
      <Link to="/student/dashboard" className="academic-map__logo">
        <img src={learnupLogo} alt="LearnUp" className="learnup-logo" />
      </Link>

      <nav className="academic-map__nav" aria-label="Student navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`academic-map__nav-item ${isActive ? "academic-map__nav-item--active" : ""}`}
            >
              <Icon size={25} strokeWidth={2.35} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="academic-map__sidebar-actions">
        <Link to="/student/academic-advisor-bot" className="academic-map__advisor-button">
          <Bot size={23} strokeWidth={2.3} />
          <span>Academic Advisor Bot</span>
        </Link>
        <button
          type="button"
          className="academic-map__logout-button"
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
    <header className="academic-map__topbar">
      <label className="academic-map__search">
        <Search size={17} strokeWidth={2.2} />
        <input type="search" placeholder="Search for courses, professors, or departments..." />
      </label>

      <div className="academic-map__topbar-actions">
        <button type="button" aria-label="Notifications">
          <Bell size={20} strokeWidth={2} />
        </button>
        <button type="button" aria-label="Help">
          <CircleHelp size={20} strokeWidth={2} />
        </button>
        <div className="academic-map__user">
          <div>
            <strong>Alex Rivera</strong>
            <span>LEVEL 200</span>
          </div>
          <div className="academic-map__avatar" aria-label="Alex Rivera" role="img" />
        </div>
      </div>
    </header>
  );
}

function getStatusIcon(status) {
  if (status === "passed") {
    return <CheckCircle2 size={18} />;
  }

  if (status === "enrolled") {
    return <MoreHorizontal size={18} />;
  }

  return <Lock size={16} />;
}

function RoadmapColumn({ level, showArrow }) {
  return (
    <section className="roadmap-column" aria-label={level.title}>
      <div className="roadmap-column__header">
        <span className={`roadmap-column__dot roadmap-column__dot--${level.levelDotTone}`}>{level.level}</span>
        <h2>
          <span>Level</span>
          <span>{level.level}</span>
        </h2>
      </div>

      <div className="roadmap-column__items">
        {level.courses.map((course) => (
          <article
            key={`${course.code}-${course.title}`}
            className={`roadmap-card roadmap-card--${course.status} ${showArrow ? "has-arrow" : ""}`}
          >
            <div className="roadmap-card__top">
              <span className={`roadmap-card__badge roadmap-card__badge--${course.status}`}>
                {course.status.toUpperCase()}
              </span>
              <span className={`roadmap-card__icon roadmap-card__icon--${course.status}`}>
                {getStatusIcon(course.status)}
              </span>
            </div>
            <h3>
              {course.code}: {course.title}
            </h3>
            <p>{course.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AcademicMap() {
  return (
    <div className="academic-map">
      <Sidebar />

      <div className="academic-map__workspace">
        <Topbar />

        <main className="academic-map__content">
          <section className="academic-map__heading">
            <div className="academic-map__heading-copy">
              <p className="academic-map__breadcrumb">
                <span>Academic Portal</span>
                <span>/</span>
                <span>Degree Roadmap</span>
              </p>
              <h1>Academic Map</h1>
              <p>
                Your personalized academic journey. Track prerequisites, current enrollments, and future
                milestones.
              </p>
            </div>

            <div className="academic-map__legend" aria-label="Course status legend">
              {legendItems.map((item) => (
                <div key={item.label} className="academic-map__legend-item">
                  <span className={`academic-map__legend-dot academic-map__legend-dot--${item.status}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="roadmap-grid" aria-label="Academic roadmap timeline">
            {roadmapLevels.map((level, index) => (
              <RoadmapColumn key={level.title} level={level} showArrow={index < roadmapLevels.length - 1} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
