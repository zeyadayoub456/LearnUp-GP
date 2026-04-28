import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./createInstructor.css";

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
  lock: (
    <Icon size={15}>
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Icon>
  ),
  create: (
    <Icon size={18}>
      <path d="M18 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </Icon>
  ),
};

const navItems = [
  { label: "Dashboard", icon: Icons.dashboard, to: "/dashboard" },
  { label: "create student", icon: Icons.student, to: "/create-student" },
  { label: "create instructor", icon: Icons.instructor, to: "/create-instructor" },
  { label: "assign instructor", icon: Icons.assign, to: "/assign-instructor" },
];

const initialFormData = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  department: "",
  specialization: "",
  academicTitle: "",
  officeLocation: "",
};

function Sidebar() {
  return (
    <aside className="ci-sidebar">
      <Link className="ci-logo" to="/dashboard" aria-label="LearnUp dashboard">
        <span className="ci-logo__mark">{Icons.logo}</span>
        <span>LearnUp</span>
      </Link>

      <nav className="ci-nav" aria-label="Admin navigation">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `ci-nav__item${isActive ? " ci-nav__item--active" : ""}`
            }
            key={item.label}
            to={item.to}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="ci-sidebar__footer">
        <button className="ci-advisor-button" type="button">
          {Icons.bot}
          <span>Academic Advisor Bot</span>
        </button>
        <button className="ci-logout-button" type="button">
          {Icons.logout}
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="ci-topbar">
      <label className="ci-search">
        {Icons.search}
        <input
          aria-label="Search"
          placeholder="Search resources, students or courses..."
          type="search"
        />
      </label>

      <div className="ci-topbar__profile">
        <button className="ci-notification" type="button" aria-label="Notifications">
          {Icons.bell}
        </button>
        <div className="ci-admin-copy">
          <strong>Executive Admin</strong>
          <span>SUPERUSER</span>
        </div>
        <button className="ci-avatar" type="button" aria-label="Open admin profile">
          EA
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <section className="ci-page-header" aria-labelledby="create-instructor-title">
      <h1 id="create-instructor-title">Create New Instructor Account</h1>
      <p>Onboard a specialized educator to the Executive academic board.</p>
    </section>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="ci-section-heading">
      <span />
      <h2>{children}</h2>
    </div>
  );
}

function Field({ id, label, children }) {
  return (
    <div className="ci-field">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

function PersonalInfoCard({ formData, onFieldChange }) {
  return (
    <article className="ci-card ci-card--white">
      <SectionHeading>Personal Information</SectionHeading>
      <div className="ci-form-grid">
        <Field id="instructor-name" label="FULL NAME">
          <input
            id="instructor-name"
            name="fullName"
            onChange={onFieldChange}
            placeholder="Dr. Amelia Hart"
            type="text"
            value={formData.fullName}
          />
        </Field>
        <Field id="instructor-email" label="EMAIL ADDRESS">
          <input
            id="instructor-email"
            name="email"
            onChange={onFieldChange}
            placeholder="a.hart@university.edu"
            type="email"
            value={formData.email}
          />
        </Field>
        <Field id="instructor-password" label="SECURITY PASSWORD">
          <input
            id="instructor-password"
            name="password"
            onChange={onFieldChange}
            placeholder={"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}
            type="text"
            value={formData.password}
          />
        </Field>
        <Field id="instructor-phone" label="PHONE NUMBER">
          <input
            id="instructor-phone"
            name="phone"
            onChange={onFieldChange}
            placeholder="+1 (555) 421-9032"
            type="tel"
            value={formData.phone}
          />
        </Field>
      </div>
    </article>
  );
}

function AcademicInfoCard({ formData, onFieldChange }) {
  return (
    <article className="ci-card ci-card--white">
      <SectionHeading>Academic Information</SectionHeading>
      <div className="ci-form-grid">
        <Field id="instructor-department" label="DEPARTMENT">
          <select
            id="instructor-department"
            name="department"
            onChange={onFieldChange}
            value={formData.department}
          >
            <option value="" disabled>
              Select Department
            </option>
            <option>Computer Science</option>
            <option>Information Systems</option>
            <option>Software Engineering</option>
          </select>
        </Field>
        <Field id="instructor-specialization" label="SPECIALIZATION">
          <input
            id="instructor-specialization"
            name="specialization"
            onChange={onFieldChange}
            placeholder="Machine Learning"
            type="text"
            value={formData.specialization}
          />
        </Field>
      </div>
    </article>
  );
}

function WorkInfoCard({ formData, onFieldChange }) {
  return (
    <article className="ci-card ci-work-card">
      <SectionHeading>Work Info</SectionHeading>
      <Field id="instructor-id" label="INSTRUCTOR ID">
        <div className="ci-id-input">
          <input id="instructor-id" name="instructorId" value="INST-2024-089" readOnly />
          <span>{Icons.lock}</span>
        </div>
        <p className="ci-helper-text">SYSTEM GENERATED UNIQUE IDENTIFIER</p>
      </Field>

      <Field id="academic-title" label="ACADEMIC TITLE">
        <select
          id="academic-title"
          name="academicTitle"
          onChange={onFieldChange}
          value={formData.academicTitle}
        >
          <option value="" disabled>
            Select Title
          </option>
          <option>Professor</option>
          <option>Associate Professor</option>
          <option>Assistant Professor</option>
          <option>Lecturer</option>
        </select>
      </Field>

      <Field id="office-location" label="OFFICE LOCATION (OPTIONAL)">
        <input
          id="office-location"
          name="officeLocation"
          onChange={onFieldChange}
          placeholder="Building B, Room 204"
          type="text"
          value={formData.officeLocation}
        />
      </Field>
    </article>
  );
}

function StatusCard() {
  return (
    <aside className="ci-status-card">
      <span>STATUS</span>
      <strong>New Faculty Entry</strong>
      <p>
        <span className="ci-status-dot" />
        Awaiting primary verification
      </p>
    </aside>
  );
}

function ActionPanel({ onCancel }) {
  return (
    <section className="ci-action-panel">
      <p>
        By clicking create, you confirm this instructor is authorized to access course
        credentials.
      </p>
      <button className="ci-create-button" type="submit">
        {Icons.create}
        <span>CREATE INSTRUCTOR</span>
      </button>
      <button className="ci-cancel-button" onClick={onCancel} type="button">
        CANCEL &amp; DISCARD CHANGES
      </button>
    </section>
  );
}

export default function CreateInstructorPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const instructorData = {
      fullName: formData.fullName || "Dr. Julian Casablancas",
      instructorId: "INST-2024-089",
      department: formData.department || "Computer Science & IT",
      avatar: "",
    };

    navigate("/instructor-created", { state: instructorData });
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="create-instructor-page">
      <Sidebar />
      <main className="ci-main">
        <Topbar />
        <div className="ci-content">
          <PageHeader />
          <form className="ci-submit-form" onSubmit={handleSubmit}>
            <section className="ci-form-layout" aria-label="Create instructor account form">
              <div className="ci-left-column">
                <PersonalInfoCard formData={formData} onFieldChange={handleFieldChange} />
                <AcademicInfoCard formData={formData} onFieldChange={handleFieldChange} />
              </div>
              <div className="ci-right-column">
                <WorkInfoCard formData={formData} onFieldChange={handleFieldChange} />
                <StatusCard />
              </div>
            </section>
            <ActionPanel onCancel={handleCancel} />
          </form>
        </div>
      </main>
    </div>
  );
}
