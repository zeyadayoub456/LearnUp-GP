import "./dashboard.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Icon = ({ children, size = 22, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Icons = {
  cap: (
    <Icon size={30}>
      <path d="m22 10-10-5-10 5 10 5 10-5Z" />
      <path d="M6 12v5c3.6 2.2 8.4 2.2 12 0v-5" />
      <path d="M22 10v6" />
    </Icon>
  ),
  dashboard: (
    <Icon size={19}>
      <rect width="7" height="9" x="3" y="3" rx="1.5" />
      <rect width="7" height="5" x="14" y="3" rx="1.5" />
      <rect width="7" height="9" x="14" y="12" rx="1.5" />
      <rect width="7" height="5" x="3" y="16" rx="1.5" />
    </Icon>
  ),
  student: (
    <Icon size={19}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </Icon>
  ),
  instructor: (
    <Icon size={19}>
      <path d="M18 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </Icon>
  ),
  assign: (
    <Icon size={19}>
      <path d="M16 3h5v5" />
      <path d="m21 3-7 7" />
      <path d="M8 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M2 21a6 6 0 0 1 12 0" />
    </Icon>
  ),
  bot: (
    <Icon size={18}>
      <rect width="16" height="12" x="4" y="8" rx="3" />
      <path d="M12 4v4" />
      <path d="M8 4h8" />
      <path d="M9 14h.01" />
      <path d="M15 14h.01" />
      <path d="M10 18h4" />
    </Icon>
  ),
  logout: (
    <Icon size={18}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </Icon>
  ),
  search: (
    <Icon size={20}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
  ),
  bell: (
    <Icon size={21}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Icon>
  ),
  users: (
    <Icon size={24}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  ),
  book: (
    <Icon size={24}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </Icon>
  ),
};

const navItems = [
  { label: "Dashboard", icon: Icons.dashboard, to: "/dashboard" },
  { label: "create student", icon: Icons.student, to: "/create-student" },
  { label: "create instructor", icon: Icons.instructor, to: "/create-instructor" },
  { label: "assign instructor", icon: Icons.assign, to: "/assign-instructor" },
];

const stats = [
  { label: "Total Students", value: "1,284", icon: Icons.users },
  { label: "Instructors", value: "86", icon: Icons.instructor },
  { label: "Courses", value: "42", icon: Icons.book },
];

const quickActions = [
  { label: "CREATE STUDENT", icon: Icons.student, to: "/create-student" },
  { label: "CREATE INSTRUCTOR", icon: Icons.instructor, to: "/create-instructor" },
  { label: "ASSIGN INSTRUCTOR", icon: Icons.assign, to: "/assign-instructor" },
];

const courses = [
  {
    code: "CS 101 \u2022 LEVEL 100",
    title: "Advanced Algorithm Design",
    instructor: "Dr. Sarah Jenkins",
    headerClass: "course-header--blue-purple",
    action: "REASSIGN",
  },
  {
    code: "UX 204 \u2022 LEVEL 200",
    title: "Human Computer Interaction",
    instructor: "Not Assigned",
    unassigned: true,
    headerClass: "course-header--navy-blue",
    action: "ASSIGN INSTRUCTOR",
  },
  {
    code: "DS 302 \u2022 LEVEL 300",
    title: "Data Structures & Analysis",
    instructor: "Prof. Michael Chen",
    headerClass: "course-header--purple-pink",
    action: "REASSIGN",
  },
];

const handleClick = (action) => {
  console.log(action);
};

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavClassName = (item) => {
    const isDashboardRoute =
      item.to === "/dashboard" && ["/", "/dashboard"].includes(location.pathname);
    const isActive = isDashboardRoute || location.pathname === item.to;

    return `sidebar-nav__item${isActive ? " sidebar-nav__item--active" : ""}`;
  };

  const handleQuickAction = (action) => {
    if (action.to) {
      navigate(action.to);
      return;
    }

    handleClick(action.label);
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo__icon">{Icons.cap}</div>
          <span>LearnUp</span>
        </div>

        <nav className="sidebar-nav" aria-label="Admin navigation">
          {navItems.map((item) => (
            item.to ? (
              <NavLink className={getNavClassName(item)} key={item.label} to={item.to}>
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ) : (
              <button
                className={getNavClassName(item)}
                key={item.label}
                onClick={() => handleClick(item.label)}
                type="button"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            )
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="advisor-button"
            onClick={() => handleClick("Academic Advisor Bot")}
            type="button"
          >
            {Icons.bot}
            <span>Academic Advisor Bot</span>
          </button>
          <button
            className="logout-button"
            onClick={() => handleClick("Logout")}
            type="button"
          >
            {Icons.logout}
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <label className="search-box">
            {Icons.search}
            <input
              aria-label="Search"
              placeholder="Search resources, students or courses..."
              type="search"
            />
          </label>

          <div className="topbar-profile">
            <button
              className="notification-button"
              onClick={() => handleClick("Notifications")}
              type="button"
              aria-label="Notifications"
            >
              {Icons.bell}
            </button>
            <div className="admin-user">
              <span>Executive Admin</span>
              <strong>SUPERUSER</strong>
            </div>
            <button
              className="admin-avatar"
              onClick={() => handleClick("Profile")}
              type="button"
              aria-label="Profile"
            >
              EA
            </button>
          </div>
        </header>

        <section className="hero-copy" aria-labelledby="dashboard-title">
          <h1 id="dashboard-title">Welcome back, Admin</h1>
          <p>Manage users and course assignments</p>
        </section>

        <section className="stats-grid" aria-label="Dashboard statistics">
          {stats.map((stat) => (
            <article className="stats-card" key={stat.label}>
              <div className="stats-card__icon">{stat.icon}</div>
              <div>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            </article>
          ))}
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="quick-actions__grid">
            {quickActions.map((action) => (
              <button
                className="quick-action-card"
                key={action.label}
                onClick={() => handleQuickAction(action)}
                type="button"
              >
                <span className="quick-action-card__icon">{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="courses-section">
          <div className="section-heading">
            <h2>Active Courses</h2>
            <button
              className="view-all-button"
              onClick={() => handleClick("View All Courses")}
              type="button"
            >
              View All Courses
            </button>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.code}>
                <div className={`course-card__header ${course.headerClass}`}>
                  <span>{course.code}</span>
                </div>
                <div className="course-card__body">
                  <h3>{course.title}</h3>
                  <p className={course.unassigned ? "is-unassigned" : ""}>
                    {course.instructor}
                  </p>
                  <div className="course-card__actions">
                    <button
                      className="course-button course-button--ghost"
                      onClick={() => handleClick(`View students: ${course.title}`)}
                      type="button"
                    >
                      VIEW STUDENTS
                    </button>
                    <button
                      className="course-button course-button--primary"
                      onClick={() => handleClick(`${course.action}: ${course.title}`)}
                      type="button"
                    >
                      {course.action}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
