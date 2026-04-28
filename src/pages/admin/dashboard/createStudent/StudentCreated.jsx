import { useLocation, useNavigate } from "react-router-dom";
import "./studentCreated.css";

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m20 6-11 11-5-5" />
  </svg>
);

const fields = [
  { label: "Full Name", key: "name" },
  { label: "Student ID", key: "id" },
  { label: "Faculty", key: "faculty" },
];

export default function StudentCreated() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const student = {
    name: "Jonathan Aris",
    id: "STU-2024-0892",
    faculty: "Faculty of Computer Science",
    ...(state || {}),
  };

  return (
    <main className="student-created-page">
      <section className="student-created-card" aria-labelledby="student-created-title">
        <div className="student-created-icon">
          <CheckIcon />
        </div>

        <h1 id="student-created-title">Student Profile Created Successfully</h1>
        <p className="student-created-subtitle">
          The new student record has been securely archived and synchronized across all
          campus departments.
        </p>

        <div className="student-created-info" aria-label="Created student details">
          {fields.map((field) => (
            <article className="student-created-info-card" key={field.key}>
              <span>{field.label}</span>
              <strong>{student[field.key]}</strong>
            </article>
          ))}
        </div>

        <div className="student-created-actions">
          <button
            className="student-created-button student-created-button--primary"
            onClick={() => console.log("View profile", student)}
            type="button"
          >
            VIEW PROFILE
          </button>
          <button
            className="student-created-button student-created-button--secondary"
            onClick={() => navigate("/create-student")}
            type="button"
          >
            CREATE ANOTHER STUDENT
          </button>
        </div>

        <button
          className="student-created-return"
          onClick={() => navigate("/dashboard")}
          type="button"
        >
          {"\u2190 RETURN TO DASHBOARD"}
        </button>
      </section>
    </main>
  );
}
