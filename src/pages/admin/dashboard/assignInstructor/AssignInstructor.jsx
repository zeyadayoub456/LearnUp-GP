import { useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./assignInstructor.css";

const Icon = ({ children, size = 18, className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const Icons = {
  logo: (
    <Icon size={31}>
      <path d="m22 10-10-5-10 5 10 5 10-5Z" />
      <path d="M6 12v5c3.6 2.2 8.4 2.2 12 0v-5" />
      <path d="M22 10v6" />
    </Icon>
  ),
  dashboard: (
    <Icon>
      <rect width="7" height="9" x="3" y="3" rx="1.5" />
      <rect width="7" height="5" x="14" y="3" rx="1.5" />
      <rect width="7" height="9" x="14" y="12" rx="1.5" />
      <rect width="7" height="5" x="3" y="16" rx="1.5" />
    </Icon>
  ),
  student: (
    <Icon>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </Icon>
  ),
  instructor: (
    <Icon>
      <path d="M18 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </Icon>
  ),
  assign: (
    <Icon>
      <path d="M16 3h5v5" />
      <path d="m21 3-7 7" />
      <path d="M8 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M2 21a6 6 0 0 1 12 0" />
    </Icon>
  ),
  bot: (
    <Icon size={17}>
      <rect width="16" height="12" x="4" y="8" rx="3" />
      <path d="M12 4v4" />
      <path d="M8 4h8" />
      <path d="M9 14h.01" />
      <path d="M15 14h.01" />
      <path d="M10 18h4" />
    </Icon>
  ),
  logout: (
    <Icon size={17}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </Icon>
  ),
  search: (
    <Icon size={15}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </Icon>
  ),
  bell: (
    <Icon size={18}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Icon>
  ),
  check: (
    <Icon size={18}>
      <path d="m20 6-11 11-5-5" />
    </Icon>
  ),
  spark: (
    <Icon size={18}>
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="m4.93 4.93 3.54 3.54" />
      <path d="m15.54 15.54 3.53 3.53" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="m4.93 19.07 3.54-3.53" />
      <path d="m15.54 8.46 3.53-3.53" />
    </Icon>
  ),
  link: (
    <Icon size={22}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </Icon>
  ),
};

const navItems = [
  { label: "Dashboard", icon: Icons.dashboard, to: "/dashboard" },
  { label: "create student", icon: Icons.student, to: "/create-student" },
  { label: "create instructor", icon: Icons.instructor, to: "/create-instructor" },
  { label: "assign instructor", icon: Icons.assign, to: "/assign-instructor" },
];

const courses = [
  {
    id: "neural",
    category: "COMPUTER SCIENCE",
    title: "Advanced Neural Architectures",
    meta: "Level: Graduate \u2022 4 Credits \u2022 Spring 2024",
  },
  {
    id: "brand",
    category: "MARKETING",
    title: "Strategic Brand Management",
    meta: "Level: Undergraduate \u2022 3 Credits \u2022 Spring 2024",
  },
];

const instructors = [
  {
    id: "julian",
    name: "Dr. Julian Vance",
    initials: "JV",
    subtitle: "Senior Research Fellow \u2022 AI Department",
    department: "AI Department",
    badge: "\u2605 Best Match",
    workload: 67,
    courses: "2 / 3 COURSES",
    tags: ["Available", "Neural Nets Expert"],
    experience: "12+ Years Experience",
    credential: "PhD, MIT Architecture",
    available: true,
  },
  {
    id: "sarah",
    name: "Prof. Sarah Jenkins",
    initials: "SJ",
    subtitle: "Associate Professor \u2022 Computer Science",
    department: "Computer Science",
    tags: ["ML Systems", "Near Capacity"],
    experience: "8 Years Exp.",
    credential: "",
    available: false,
  },
];

const filters = ["All", "Available Only", "Experience", "Department"];

function Sidebar() {
  return (
    <aside className="ai-sidebar">
      <Link className="ai-logo" to="/dashboard" aria-label="LearnUp dashboard">
        <span className="ai-logo__mark">{Icons.logo}</span>
        <span>LearnUp</span>
      </Link>

      <nav className="ai-nav" aria-label="Admin navigation">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `ai-nav__item${isActive ? " ai-nav__item--active" : ""}`
            }
            key={item.label}
            to={item.to}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="ai-sidebar__footer">
        <button className="ai-advisor-button" type="button">
          {Icons.bot}
          <span>Academic Advisor Bot</span>
        </button>
        <button className="ai-logout-button" type="button">
          {Icons.logout}
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="ai-topbar">
      <label className="ai-topbar-search">
        {Icons.search}
        <input
          aria-label="Search"
          placeholder="Search resources, students or courses..."
          type="search"
        />
      </label>

      <div className="ai-profile">
        <button className="ai-notification" type="button" aria-label="Notifications">
          {Icons.bell}
        </button>
        <div className="ai-admin-copy">
          <strong>Executive Admin</strong>
          <span>SUPERUSER</span>
        </div>
        <button className="ai-avatar" type="button" aria-label="Open admin profile">
          EA
        </button>
      </div>
    </header>
  );
}

function StepHeading({ number, children }) {
  return (
    <div className="ai-step-heading">
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

function CourseCard({ course, isSelected, onSelect }) {
  return (
    <button
      className={`ai-course-card${isSelected ? " ai-course-card--selected" : ""}`}
      onClick={() => onSelect(course.id)}
      type="button"
    >
      {isSelected ? <span className="ai-course-card__check">{Icons.check}</span> : null}
      <span className="ai-course-card__category">{course.category}</span>
      <strong>{course.title}</strong>
      <span className="ai-course-card__meta">{course.meta}</span>
    </button>
  );
}

function CourseSelection({ selectedCourseId, onSelectCourse }) {
  return (
    <section className="ai-section">
      <StepHeading number="1">Select Course</StepHeading>
      <div className="ai-course-grid">
        {courses.map((course) => (
          <CourseCard
            course={course}
            isSelected={selectedCourseId === course.id}
            key={course.id}
            onSelect={onSelectCourse}
          />
        ))}
      </div>
    </section>
  );
}

function InstructorFilters({ activeFilter, onFilterChange, onSearchChange, searchQuery }) {
  return (
    <div className="ai-filter-bar">
      <label className="ai-instructor-search">
        {Icons.search}
        <input
          aria-label="Search instructor"
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search instructor..."
          type="search"
          value={searchQuery}
        />
      </label>

      <div className="ai-filter-pills" aria-label="Instructor filters">
        {filters.map((filter) => (
          <button
            className={`ai-filter-pill${activeFilter === filter ? " ai-filter-pill--active" : ""}`}
            key={filter}
            onClick={() => onFilterChange(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

function InstructorCard({ instructor, isSelected, onSelect }) {
  return (
    <button
      className={`ai-instructor-card${isSelected ? " ai-instructor-card--selected" : ""}`}
      onClick={() => onSelect(instructor.id)}
      type="button"
    >
      <div className="ai-instructor-main">
        <div className="ai-instructor-avatar">{instructor.initials}</div>
        <div className="ai-instructor-copy">
          <div className="ai-instructor-title-row">
            <h3>{instructor.name}</h3>
            {instructor.badge ? <span className="ai-best-match">{instructor.badge}</span> : null}
          </div>
          <p>{instructor.subtitle}</p>

          {instructor.workload ? (
            <div className="ai-workload">
              <div className="ai-workload__top">
                <span>Workload</span>
                <strong>{instructor.courses}</strong>
              </div>
              <span className="ai-workload__track">
                <span style={{ width: `${instructor.workload}%` }} />
              </span>
            </div>
          ) : null}

          <div className="ai-tags">
            {instructor.tags.map((tag) => (
              <span
                className={`ai-tag${tag === "Available" ? " ai-tag--available" : ""}`}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="ai-instructor-side">
        <strong>{instructor.experience}</strong>
        {instructor.credential ? <span>{instructor.credential}</span> : null}
      </div>
    </button>
  );
}

function ChooseInstructor({
  activeFilter,
  filteredInstructors,
  onFilterChange,
  onSearchChange,
  onSelectInstructor,
  searchQuery,
  selectedInstructorId,
}) {
  return (
    <section className="ai-section ai-section--instructors">
      <StepHeading number="2">Choose Instructor</StepHeading>
      <InstructorFilters
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
      />
      <div className="ai-instructor-list">
        {filteredInstructors.map((instructor) => (
          <div key={instructor.id}>
            <InstructorCard
              instructor={instructor}
              isSelected={selectedInstructorId === instructor.id}
              onSelect={onSelectInstructor}
            />
            {selectedInstructorId === instructor.id && instructor.id === "julian" ? (
              <div className="ai-match-banner">
                <span>{Icons.spark}</span>
                <p>
                  94% curriculum match, currently under-loaded with 35% time for new
                  research integration.
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function AssignmentSummary({ course, instructor, onComplete }) {
  return (
    <section className="ai-assignment-summary" aria-label="Assignment summary">
      <div className="ai-summary-icon">{Icons.link}</div>
      <div className="ai-summary-copy">
        <span>ASSIGNING</span>
        <strong>
          {course.title} <span>{"\u2192"}</span> {instructor.name}
        </strong>
      </div>
      <button className="ai-complete-button" onClick={onComplete} type="button">
        Complete Assignment
      </button>
    </section>
  );
}

export function AssignmentSuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.courseTitle || "Advanced Neural Architectures";
  const instructor = state?.instructorName || "Dr. Julian Vance";

  return (
    <main className="assignment-success-page">
      <section className="assignment-success-card">
        <div className="assignment-success-icon">{Icons.check}</div>
        <h1>Assignment Complete</h1>
        <p>
          {course} has been assigned to {instructor}.
        </p>
        <button onClick={() => navigate("/dashboard")} type="button">
          RETURN TO DASHBOARD
        </button>
      </section>
    </main>
  );
}

export default function AssignInstructorPage() {
  const navigate = useNavigate();
  const [selectedCourseId, setSelectedCourseId] = useState("neural");
  const [selectedInstructorId, setSelectedInstructorId] = useState("julian");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCourse = courses.find((course) => course.id === selectedCourseId) || courses[0];
  const selectedInstructor =
    instructors.find((instructor) => instructor.id === selectedInstructorId) || instructors[0];

  const filteredInstructors = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return instructors.filter((instructor) => {
      const matchesQuery =
        !normalizedQuery ||
        [instructor.name, instructor.subtitle, instructor.department, ...instructor.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesFilter = activeFilter !== "Available Only" || instructor.available;

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, searchQuery]);

  const handleCompleteAssignment = () => {
    navigate("/assignment-success", {
      state: {
        courseTitle: selectedCourse.title,
        instructorName: selectedInstructor.name,
      },
    });
  };

  return (
    <div className="assign-instructor-page">
      <Sidebar />
      <main className="ai-main">
        <Topbar />
        <div className="ai-content">
          <section className="ai-page-header" aria-labelledby="assign-instructor-title">
            <h1 id="assign-instructor-title">Assign Instructor to Course</h1>
            <p>
              Select a course and assign the most suitable instructor based on expertise
              and availability.
            </p>
          </section>

          <div className="ai-container">
            <CourseSelection
              selectedCourseId={selectedCourseId}
              onSelectCourse={setSelectedCourseId}
            />
            <ChooseInstructor
              activeFilter={activeFilter}
              filteredInstructors={filteredInstructors}
              onFilterChange={setActiveFilter}
              onSearchChange={setSearchQuery}
              onSelectInstructor={setSelectedInstructorId}
              searchQuery={searchQuery}
              selectedInstructorId={selectedInstructorId}
            />
            <AssignmentSummary
              course={selectedCourse}
              instructor={selectedInstructor}
              onComplete={handleCompleteAssignment}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
