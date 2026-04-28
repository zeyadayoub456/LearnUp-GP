import { useState } from "react";
import {
  Bell,
  Bot,
  CircleHelp,
  Clock3,
  LayoutDashboard,
  Link2,
  LogOut,
  Map,
  Search,
  Sparkles,
  SquareChartGantt,
  SquareLibrary,
  SquareTerminal,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import learnupLogo from "../../../assets/learnup-logo.png";
import "./courseBoard.css";

const tabs = [
  { id: "all", label: "All courses" },
  { id: "available", label: "available" },
  { id: "enrolled", label: "enrolled" },
  { id: "locked", label: "locked" },
  { id: "passed", label: "passed" },
];

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/student/dashboard" },
  { label: "Course board", icon: SquareLibrary, to: "/student/course-board" },
  { label: "Academic map", icon: Map, to: "/student/academic-map" },
  { label: "Semester result", icon: SquareChartGantt, to: "/student/semester-result" },
];

const courseTemplates = {
  availableAi: {
    type: "available",
    level: "LEVEL 200",
    title: "Advanced Artificial Intelligence",
    code: "CS-3021",
    credits: "4 Credit Hours",
  },
  availableMath: {
    type: "available",
    level: "LEVEL 200",
    title: "mathematics 2",
    code: "CS-3021",
    credits: "4 Credit Hours",
  },
  enrolledHci: {
    type: "enrolled",
    level: "LEVEL 200",
    title: "Human-Computer Interaction",
    code: "UXD-202",
    credits: "3 Credit Hours",
  },
  enrolledLinear: {
    type: "enrolled",
    level: "LEVEL 200",
    title: "Linear Algebra",
    code: "UXD-202",
    credits: "3 Credit Hours",
  },
  lockedAlgorithm: {
    type: "locked",
    level: "LEVEL 200",
    title: "Advanced Algorithm 2",
    code: "UXD-202",
    credits: "3 Credit Hours",
  },
  passedGraphics: {
    type: "passed",
    level: "LEVEL 100",
    title: "computer graphics",
    code: "UXD-202",
    credits: "3 Credit Hours",
  },
};

const typeDetails = {
  available: {
    icon: Sparkles,
    header: "blue",
    statusLabel: "AVAILABLE FOR YOU",
    statusTone: "blue",
    message:
      "You are eligible for this course based on your completed credit hours and level.",
    buttonLabel: "Enroll Now \u2192",
    buttonTone: "dark",
  },
  enrolled: {
    icon: Link2,
    header: "purple",
    statusLabel: "SUCCESSFULLY ENROLLED",
    statusTone: "green",
    message:
      "you have enrolled this course successfully based on your completed courses credit hours",
    buttonLabel: "Enrolled",
    buttonTone: "green",
  },
  locked: {
    icon: SquareTerminal,
    header: "indigo",
    statusLabel: "LOCKED COURSE",
    statusTone: "red",
    message:
      "you cant enroll this course due to not passing intelligent Algorithm 1 based on your credit hour",
    buttonLabel: "Locked",
    buttonTone: "red",
  },
  passed: {
    icon: SquareTerminal,
    header: "violet",
    statusLabel: "PASSED COURSE",
    statusTone: "yellow",
    message:
      "you have successfully passed this course and now computer graphics 2 is available to enroll",
    buttonLabel: "Passed",
    buttonTone: "yellow",
  },
};

const repeatCourse = (course, count) =>
  Array.from({ length: count }, (_, index) => ({
    ...course,
    id: `${course.type}-${course.title}-${index}`,
  }));

const coursesByTab = {
  all: [
    courseTemplates.availableAi,
    courseTemplates.enrolledHci,
    courseTemplates.lockedAlgorithm,
    courseTemplates.passedGraphics,
    courseTemplates.passedGraphics,
    courseTemplates.availableMath,
    courseTemplates.enrolledLinear,
    courseTemplates.lockedAlgorithm,
  ].map((course, index) => ({ ...course, id: `all-${index}` })),
  available: [
    ...repeatCourse(courseTemplates.availableAi, 4),
    ...repeatCourse(courseTemplates.availableMath, 4),
  ],
  enrolled: [
    ...repeatCourse(courseTemplates.enrolledHci, 4),
    ...repeatCourse(courseTemplates.enrolledLinear, 4),
  ],
  locked: repeatCourse(courseTemplates.lockedAlgorithm, 8),
  passed: repeatCourse(courseTemplates.passedGraphics, 8),
};

const titleLines = {
  "Advanced Artificial Intelligence": ["Advanced Artificial", "Intelligence"],
  "Human-Computer Interaction": ["Human-Computer", "Interaction"],
  "Advanced Algorithm 2": ["Advanced", "Algorithm 2"],
  "computer graphics": ["computer", "graphics"],
  "Linear Algebra": ["Linear", "Algebra"],
  "mathematics 2": ["mathematics 2"],
};

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="course-board__sidebar">
      <Link to="/student/dashboard" className="course-board__logo">
        <img src={learnupLogo} alt="LearnUp" className="learnup-logo" />
      </Link>

      <nav className="course-board__nav" aria-label="Student navigation">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`course-board__nav-item ${
                location.pathname === item.to ? "course-board__nav-item--active" : ""
              }`}
            >
              <Icon size={25} strokeWidth={2.35} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="course-board__sidebar-actions">
        <Link
          to="/student/academic-advisor-bot"
          className="course-board__advisor-button"
        >
          <Bot size={23} strokeWidth={2.3} />
          <span>Academic Advisor Bot</span>
        </Link>
        <button
          type="button"
          className="course-board__logout-button"
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
    <header className="course-board__topbar">
      <label className="course-board__search">
        <Search size={17} strokeWidth={2.2} />
        <input
          type="search"
          placeholder="Search for courses, professors, or departments..."
        />
      </label>

      <div className="course-board__topbar-actions">
        <button type="button" aria-label="Notifications">
          <Bell size={20} strokeWidth={2} />
        </button>
        <button type="button" aria-label="Help">
          <CircleHelp size={20} strokeWidth={2} />
        </button>
        <div className="course-board__user">
          <div>
            <strong>Alex Rivera</strong>
            <span>LEVEL 200</span>
          </div>
          <div className="course-board__avatar" aria-label="Alex Rivera" role="img" />
        </div>
      </div>
    </header>
  );
}

function CourseCard({ course }) {
  const details = typeDetails[course.type];
  const HeaderIcon = details.icon;
  const isAvailable = course.type === "available";

  return (
    <article className={`course-card course-card--${course.type}`}>
      <div className={`course-card__cover course-card__cover--${details.header}`}>
        <div className="course-card__cover-top">
          <span>{course.level}</span>
          <HeaderIcon size={16} strokeWidth={2.35} />
        </div>
        <h2 aria-label={course.title}>
          {(titleLines[course.title] ?? [course.title]).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </div>

      <div className="course-card__meta">
        <span>{course.code}</span>
        <span>
          <Clock3 size={11} strokeWidth={2} />
          {course.credits}
        </span>
      </div>

      <div className="course-card__body">
        <div className={`course-card__status course-card__status--${details.statusTone}`}>
          <strong>{details.statusLabel}</strong>
          <p>{details.message}</p>
        </div>

        <button
          type="button"
          className={`course-card__button course-card__button--${details.buttonTone}`}
          onClick={() =>
            isAvailable
              ? console.log("Enroll course")
              : console.log(`${details.buttonLabel}: ${course.title}`)
          }
        >
          <span>{details.buttonLabel}</span>
        </button>
      </div>
    </article>
  );
}

function CourseBoard() {
  const [activeTab, setActiveTab] = useState("all");
  const visibleCourses = coursesByTab[activeTab];
  const title =
    activeTab === "locked"
      ? "Locked Courses Based on Your Academic Progress"
      : "Available Courses Based on Your Academic Progress";

  return (
    <div className="course-board">
      <Sidebar />

      <div className="course-board__workspace">
        <Topbar />

        <main className="course-board__content">
          <section className="course-board__intro">
            <h1>{title}</h1>
            <p>
              These courses are automatically shown based on your completed
              credits, academic level, and prerequisites.
            </p>
          </section>

          <div className="course-board__tabs" role="tablist" aria-label="Course filters">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`course-board__tab ${
                  activeTab === tab.id ? "course-board__tab--active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <section className="course-board__grid" aria-label={`${activeTab} courses`}>
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default CourseBoard;
