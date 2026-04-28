import {
  Bell,
  BookOpenCheck,
  Bot,
  Camera,
  Check,
  ChevronRight,
  LayoutDashboard,
  Lock,
  LogOut,
  Map,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  SquareChartGantt,
  SquareLibrary,
  UserRoundSearch,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import learnupLogo from "../../../assets/learnup-logo.png";
import "./studentDashboard.css";

const navigationItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/student/dashboard" },
  { label: "Course board", icon: SquareLibrary, to: "/student/course-board" },
  { label: "Academic map", icon: Map, to: "/student/academic-map" },
  { label: "Semester result", icon: SquareChartGantt, to: "/student/semester-result" },
];

const courseCards = [
  {
    level: "LEVEL 200",
    title: "Advanced Artificial Intelligence",
    code: "CS-3021",
    credits: "4 Credit Hours",
    icon: Sparkles,
    theme: "blue",
    statusTone: "blue",
    status: "AVAILABLE FOR YOU",
    description:
      "You are eligible for this course based on your completed credit hours and level.",
    button: "Enroll Now",
    buttonTone: "dark",
  },
  {
    level: "LEVEL 200",
    title: "Human-Computer Interaction",
    code: "UXD-202",
    credits: "3 Credit Hours",
    icon: BookOpenCheck,
    theme: "indigo",
    statusTone: "green",
    status: "SUCCESSFULLY ENROLLED",
    description:
      "you have enrolled this course successfully based on your completed courses credit hours",
    button: "Enrolled",
    buttonTone: "green",
  },
  {
    level: "LEVEL 200",
    title: "Advanced Algorithm 2",
    code: "UXD-202",
    credits: "3 Credit Hours",
    icon: SquareChartGantt,
    theme: "violet",
    statusTone: "red",
    status: "LOCKED COURSE",
    description:
      "you cant enroll this course due to not passing intelligent Algorithm 1 based on your credit hour",
    button: "Locked",
    buttonTone: "red",
  },
  {
    level: "LEVEL 100",
    title: "computer graphics",
    code: "UXD-202",
    credits: "3 Credit Hours",
    icon: SquareChartGantt,
    theme: "purple",
    statusTone: "yellow",
    status: "PASSED COURSE",
    description:
      "you have successfully passed this course and now computer graphics 2 is available to enroll",
    button: "Passed",
    buttonTone: "yellow",
  },
];

function getStoredUser() {
  try {
    const rawUser = localStorage.getItem("user");
    return rawUser ? JSON.parse(rawUser) : null;
  } catch (error) {
    console.error("Invalid user data in localStorage", error);
    return null;
  }
}

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="student-dashboard__sidebar">
      <Link to="/student/dashboard" className="student-dashboard__logo">
        <img src={learnupLogo} alt="LearnUp" className="learnup-logo" />
      </Link>

      <nav className="student-dashboard__nav" aria-label="Student navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`student-dashboard__nav-item ${
                location.pathname === item.to ? "student-dashboard__nav-item--active" : ""
              }`}
            >
              <Icon size={25} strokeWidth={2.3} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="student-dashboard__sidebar-actions">
        <Link
          to="/student/academic-advisor-bot"
          className="student-dashboard__advisor-button"
        >
          <Bot size={24} strokeWidth={2.2} />
          <span>Academic Advisor Bot</span>
        </Link>
        <button
          type="button"
          className="student-dashboard__logout-button"
          onClick={() => {
            localStorage.clear();
            navigate("/who-are-you");
          }}
        >
          <LogOut size={16} strokeWidth={2.3} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Topbar({ fullName }) {
  return (
    <header className="student-dashboard__topbar">
      <label className="student-dashboard__search">
        <Search size={18} strokeWidth={2.2} />
        <input type="search" placeholder="Search courses, terms..." />
      </label>

      <nav className="student-dashboard__tabs" aria-label="Dashboard sections">
        <button type="button" className="student-dashboard__tab student-dashboard__tab--active">
          Term Overview
        </button>
        <button type="button" className="student-dashboard__tab">
          Degree Audit
        </button>
        <button type="button" className="student-dashboard__tab">
          Course Catalog
        </button>
      </nav>

      <div className="student-dashboard__topbar-actions">
        <button
          type="button"
          className="student-dashboard__support"
          onClick={() => console.log("Chatbot Support")}
        >
          <MessageSquare size={18} strokeWidth={2.2} />
          <span>Chatbot Support</span>
        </button>
        <button
          type="button"
          className="student-dashboard__icon-button"
          aria-label="Notifications"
          onClick={() => console.log("Notifications")}
        >
          <Bell size={20} strokeWidth={2.1} />
        </button>
        <button
          type="button"
          className="student-dashboard__icon-button"
          aria-label="Settings"
          onClick={() => console.log("Settings")}
        >
          <Settings size={20} strokeWidth={2.1} />
        </button>
        <div className="student-dashboard__small-avatar" aria-label={fullName} role="img" />
      </div>
    </header>
  );
}

function ProfileCard({ fullName }) {
  return (
    <section className="student-profile-card" aria-label="Student profile">
      <div className="student-profile-card__avatar-wrap">
        <div className="student-profile-card__avatar" aria-hidden="true" />
        <button
          type="button"
          className="student-profile-card__camera"
          aria-label="Update profile image"
          onClick={() => console.log("Update profile image")}
        >
          <Camera size={16} strokeWidth={2.4} />
        </button>
      </div>

      <h2>{fullName}</h2>
      <p>Computer Science {"\u2022"} Data science</p>

      <div className="student-profile-card__divider" />

      <dl className="student-profile-card__meta">
        <div>
          <span className="student-profile-card__meta-icon">
            <UserRoundSearch size={18} strokeWidth={2.1} />
          </span>
          <div>
            <dt>Academic Advisor</dt>
            <dd>Dr. Amira Ahmed</dd>
          </div>
        </div>
        <div>
          <span className="student-profile-card__meta-icon">
            <Search size={18} strokeWidth={2.1} />
          </span>
          <div>
            <dt>Student ID</dt>
            <dd>#CS-225140</dd>
          </div>
        </div>
      </dl>
    </section>
  );
}

function ProgressCard() {
  return (
    <section className="student-progress-card" aria-label="Academic progress">
      <div className="student-progress-card__status">
        <span />
        <p>ACTIVE TERM</p>
      </div>

      <div className="student-progress-card__header">
        <div>
          <span className="student-progress-card__badge">DEGREE MILESTONE</span>
          <h2>Academic Progress</h2>
        </div>
        <div className="student-progress-card__percent">
          <strong>75%</strong>
          <span>OF DEGREE COMPLETED</span>
        </div>
      </div>

      <div className="student-progress-card__bar" aria-label="75% of degree completed">
        <span />
      </div>

      <div className="student-progress-card__stats">
        <div>
          <span>Credits Earned</span>
          <strong>90/120</strong>
        </div>
        <div>
          <span>Current GPA</span>
          <strong>3.82</strong>
        </div>
        <div className="student-progress-card__stat-highlight">
          <span>Remaining</span>
          <strong>30 Credits hours</strong>
        </div>
      </div>

      <div className="student-progress-card__footer">
        <p>
          Estimated Graduation: <strong>June 2026</strong>
        </p>
        <button
          type="button"
          onClick={() => console.log("View Detailed Audit")}
        >
          <span>View Detailed Audit</span>
          <ChevronRight size={18} strokeWidth={2.4} />
        </button>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  const HeaderIcon = course.icon;
  const isEnrolled = course.buttonTone === "green";
  const isLocked = course.buttonTone === "red";

  return (
    <article className="student-course-card">
      <div className={`student-course-card__cover student-course-card__cover--${course.theme}`}>
        <div className="student-course-card__top">
          <span>{course.level}</span>
          <HeaderIcon size={20} strokeWidth={2.3} />
        </div>
        <h3>{course.title}</h3>
      </div>

      <div className="student-course-card__body">
        <div className="student-course-card__meta">
          <span>{course.code}</span>
          <span>{course.credits}</span>
        </div>

        <div className={`student-course-card__status student-course-card__status--${course.statusTone}`}>
          <strong>{course.status}</strong>
          <p>{course.description}</p>
        </div>

        <button
          type="button"
          className={`student-course-card__button student-course-card__button--${course.buttonTone}`}
          onClick={() => console.log(`${course.button}: ${course.title}`)}
        >
          <span>{course.button}</span>
          {isEnrolled && <Check size={16} strokeWidth={2.5} />}
          {isLocked && <Lock size={15} strokeWidth={2.4} />}
          {!isEnrolled && !isLocked && course.buttonTone === "dark" && (
            <ChevronRight size={17} strokeWidth={2.4} />
          )}
        </button>
      </div>
    </article>
  );
}

export default function StudentDashboard() {
  const user = getStoredUser();
  const fullName = user?.fullName || "Guest User";

  return (
    <div className="student-dashboard">
      <Sidebar />

      <div className="student-dashboard__workspace">
        <Topbar fullName={fullName} />

        <main className="student-dashboard__content">
          <section className="student-dashboard__hero">
            <h1>Welcome back, {fullName}</h1>
            <p>Your academic journey is on track. Here&apos;s your current status.</p>
          </section>

          <section className="student-dashboard__overview" aria-label="Student overview">
            <ProfileCard fullName={fullName} />
            <ProgressCard />
          </section>

          <section className="student-dashboard__courses" id="courses">
            <div className="student-dashboard__section-header">
              <h2>course board</h2>
              <button type="button" onClick={() => console.log("See all courses")}>
                see All
              </button>
            </div>

            <div className="student-dashboard__course-grid">
              {courseCards.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
