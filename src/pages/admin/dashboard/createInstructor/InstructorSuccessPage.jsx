import { useLocation, useNavigate } from "react-router-dom";
import "./instructorSuccess.css";

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    width="38"
    height="38"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m20 6-11 11-5-5" />
  </svg>
);

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function InstructorSuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const instructor = {
    fullName: "Dr. Julian Casablancas",
    instructorId: "INST-2024-089",
    department: "Computer Science & IT",
    avatar: "",
    ...(state || {}),
  };

  return (
    <main className="instructor-success-page">
      <section className="instructor-success-shell" aria-labelledby="instructor-success-title">
        <div className="instructor-success-icon">
          <CheckIcon />
        </div>

        <h1 id="instructor-success-title">
          <span>Instructor Registered</span>
          <span>Successfully</span>
        </h1>
        <p className="instructor-success-subtitle">
          The new instructor profile has been established and access credentials have
          been sent via email.
        </p>

        <article className="instructor-success-card" aria-label="Registered instructor details">
          <div className="instructor-success-details">
            <div>
              <span>FULL NAME</span>
              <strong>{instructor.fullName}</strong>
            </div>
            <div>
              <span>INSTRUCTOR ID</span>
              <strong>{instructor.instructorId}</strong>
            </div>
            <div>
              <span>DEPARTMENT</span>
              <strong>{instructor.department}</strong>
            </div>
          </div>

          <div className="instructor-success-avatar" aria-label="Instructor avatar">
            {instructor.avatar ? (
              <img alt="" src={instructor.avatar} />
            ) : (
              <span>{getInitials(instructor.fullName)}</span>
            )}
          </div>
        </article>

        <div className="instructor-success-actions">
          <button
            className="instructor-success-button instructor-success-button--primary"
            onClick={() => navigate("/instructor-profile", { state: instructor })}
            type="button"
          >
            VIEW PROFILE
          </button>
          <button
            className="instructor-success-button instructor-success-button--secondary"
            onClick={() => navigate("/create-instructor")}
            type="button"
          >
            REGISTER ANOTHER INSTRUCTOR
          </button>
        </div>

        <button
          className="instructor-success-return"
          onClick={() => navigate("/dashboard")}
          type="button"
        >
          {"\u2190 RETURN TO DASHBOARD"}
        </button>
      </section>
    </main>
  );
}
