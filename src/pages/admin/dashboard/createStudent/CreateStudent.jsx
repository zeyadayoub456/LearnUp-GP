import { Link, NavLink, useNavigate } from "react-router-dom";
import "./createStudent.css";

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
  enrollment: (
    <Icon size={23}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 12h-6" />
      <path d="M19 9v6" />
    </Icon>
  ),
  idCard: (
    <Icon size={76}>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <circle cx="9" cy="12" r="2" />
      <path d="M14 10h4" />
      <path d="M14 14h3" />
      <path d="M7 16.2a4 4 0 0 1 4 0" />
    </Icon>
  ),
  eye: (
    <Icon size={17}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
  refresh: (
    <Icon size={17}>
      <path d="M3 12a9 9 0 0 1 15.1-6.6L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.1 6.6L3 16" />
      <path d="M3 21v-5h5" />
    </Icon>
  ),
  create: (
    <Icon size={17}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </Icon>
  ),
  info: (
    <Icon size={15}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Icon>
  ),
};

const navItems = [
  { label: "Dashboard", icon: Icons.dashboard, to: "/dashboard" },
  {
    label: "create student",
    icon: Icons.student,
    to: "/create-student",
  },
  { label: "create instructor", icon: Icons.instructor, to: "/create-instructor" },
  { label: "assign instructor", icon: Icons.assign, to: "/assign-instructor" },
];

const levels = ["100", "200", "300", "400"];

function Sidebar() {
  return (
    <aside className="cs-sidebar">
      <Link className="cs-logo" to="/dashboard" aria-label="LearnUp dashboard">
        <span className="cs-logo__mark">{Icons.logo}</span>
        <span>LearnUp</span>
      </Link>

      <nav className="cs-nav" aria-label="Admin navigation">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `cs-nav__item${isActive ? " cs-nav__item--active" : ""}`
            }
            key={item.label}
            to={item.to}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="cs-sidebar__footer">
        <button className="cs-advisor-button" type="button">
          {Icons.bot}
          <span>Academic Advisor Bot</span>
        </button>
        <button className="cs-logout-button" type="button">
          {Icons.logout}
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="cs-topbar">
      <label className="cs-search">
        {Icons.search}
        <input
          aria-label="Search"
          placeholder="Search resources, students or courses..."
          type="search"
        />
      </label>

      <div className="cs-topbar__profile">
        <button className="cs-notification" type="button" aria-label="Notifications">
          {Icons.bell}
        </button>
        <div className="cs-admin-copy">
          <strong>Executive Admin</strong>
          <span>SUPERUSER</span>
        </div>
        <button className="cs-avatar" type="button" aria-label="Open admin profile">
          EA
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <section className="cs-page-header" aria-labelledby="create-student-title">
      <div className="cs-page-header__copy">
        <p className="cs-breadcrumb">
          LMS <span>&gt;</span> Students <span>&gt;</span> <strong>New Registration</strong>
        </p>
        <h1 id="create-student-title">Create New Student</h1>
        <p>
          Enter the student's personal and academic details to register them in the
          system. All fields are required unless stated otherwise.
        </p>
      </div>

      <div className="cs-enrollment-card" aria-label="Active enrollment academic year">
        <span className="cs-enrollment-card__icon">{Icons.enrollment}</span>
        <div>
          <span>ACTIVE ENROLLMENT</span>
          <strong>AY 2023/24</strong>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children, ghost }) {
  return (
    <div className="cs-section-heading">
      <span className="cs-section-heading__rule" />
      <h2>{children}</h2>
      {ghost ? <span className="cs-card-ghost">{ghost}</span> : null}
    </div>
  );
}

function Field({ id, label, children }) {
  return (
    <div className="cs-field">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

function PersonalInfoCard() {
  return (
    <article className="cs-card cs-personal-card">
      <SectionHeading ghost={Icons.idCard}>Personal Information</SectionHeading>

      <Field id="full-name" label="FULL NAME">
        <input id="full-name" name="fullName" placeholder="Jonathan Aris" type="text" />
      </Field>

      <div className="cs-form-grid">
        <Field id="email-address" label="EMAIL ADDRESS">
          <input
            id="email-address"
            name="email"
            placeholder="j.aris@university.edu"
            type="email"
          />
        </Field>
        <Field id="phone-number" label="PHONE NUMBER">
          <input
            id="phone-number"
            name="phone"
            placeholder="+1 (555) 000-0000"
            type="tel"
          />
        </Field>
      </div>

      <div className="cs-form-grid">
        <Field id="initial-password" label="INITIAL PASSWORD">
          <div className="cs-password-input">
            <input
              id="initial-password"
              name="initialPassword"
              placeholder={"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}
              type="text"
            />
            <span>{Icons.eye}</span>
          </div>
        </Field>
        <Field id="national-id" label="NATIONAL ID / PASSPORT">
          <input
            id="national-id"
            name="nationalId"
            placeholder="ID-882-991-000"
            type="text"
          />
        </Field>
      </div>

      <Field id="nationality" label="NATIONALITY">
        <select id="nationality" name="nationality" defaultValue="">
          <option value="" disabled>
            Select Country
          </option>
          <option>Egypt</option>
          <option>United States</option>
          <option>United Kingdom</option>
        </select>
      </Field>
    </article>
  );
}

function AcademicRecordsCard() {
  return (
    <article className="cs-card cs-academic-card">
      <SectionHeading>Academic Records</SectionHeading>

      <Field id="student-id" label="STUDENT ID (AUTO-GENERATED)">
        <div className="cs-student-id-row">
          <input id="student-id" name="studentId" value="STU-2024-0892" readOnly />
          <button type="button" aria-label="Refresh student ID">
            {Icons.refresh}
          </button>
        </div>
      </Field>

      <Field id="faculty" label="FACULTY">
        <select id="faculty" name="faculty" defaultValue="">
          <option value="" disabled>
            Select Faculty
          </option>
          <option>Faculty of Computer Science</option>
          <option>Faculty of Engineering</option>
          <option>Faculty of Business</option>
        </select>
      </Field>

      <Field id="department" label="DEPARTMENT">
        <select id="department" name="department" defaultValue="">
          <option value="" disabled>
            Select Department
          </option>
          <option>Software Engineering</option>
          <option>Information Systems</option>
          <option>Data Science</option>
        </select>
      </Field>

      <div className="cs-field">
        <span className="cs-field-label">ACADEMIC LEVEL</span>
        <div className="cs-level-grid">
          {levels.map((level) => (
            <button className="cs-level-card" key={level} type="button">
              <strong>{level}</strong>
              <span>SOPHOMORE</span>
            </button>
          ))}
        </div>
      </div>

      <button className="cs-create-button" type="submit">
        {Icons.create}
        <span>CREATE STUDENT</span>
      </button>
      <button className="cs-cancel-button" type="button">
        CANCEL &amp; DISCARD CHANGES
      </button>
    </article>
  );
}

function PrivacyNotice() {
  return (
    <aside className="cs-privacy-notice">
      <span className="cs-privacy-notice__icon">{Icons.info}</span>
      <div>
        <h3>Data Privacy Notice</h3>
        <p>
          Student personal data is encrypted and handled according to the Institutional
          Privacy Policy. Only authorized personnel can access these records.
        </p>
      </div>
    </aside>
  );
}

export default function CreateStudent() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const generatedId = `STU-${Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0")}`;

    const newStudent = {
      name: String(formData.get("fullName") || "Jonathan Aris"),
      id: generatedId,
      faculty: String(formData.get("faculty") || "Faculty of Computer Science"),
    };

    navigate("/student-created", { state: newStudent });
  };

  return (
    <div className="create-student-page">
      <Sidebar />
      <main className="cs-main">
        <Topbar />
        <div className="cs-content">
          <PageHeader />
          <form
            className="cs-page-grid"
            aria-label="Create student form"
            onSubmit={handleSubmit}
          >
            <div className="cs-left-column">
              <PersonalInfoCard />
              <PrivacyNotice />
            </div>
            <AcademicRecordsCard />
          </form>
        </div>
      </main>
    </div>
  );
}
