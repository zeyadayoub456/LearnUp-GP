import { Check, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./instructorSuccess.css";

export default function InstructorSuccessPage() {
  const navigate = useNavigate();

  return (
    <main className="instructor-success-page">
      <section className="instructor-success-shell">
        <div className="instructor-success-icon"><Check size={40} strokeWidth={3} /></div>
        <h1>Instructor Registered<br />Successfully</h1>
        <p>The new instructor profile has been established and access credentials have been sent via email.</p>

        <article className="instructor-success-card">
          <div className="instructor-success-details">
            <div><span>FULL NAME</span><strong>Dr. Julian Casablancas</strong></div>
            <div><span>INSTRUCTOR ID</span><strong>INST-2024-089</strong></div>
            <div><span>DEPARTMENT</span><strong>Computer Science & IT</strong></div>
          </div>
          <div className="instructor-success-avatar" />
        </article>

        <div className="instructor-success-actions">
          <button type="button">VIEW PROFILE</button>
          <button type="button" onClick={() => navigate("/admin/create-instructor")}>REGISTER ANOTHER INSTRUCTOR</button>
        </div>
        <button type="button" className="instructor-success-return" onClick={() => navigate("/admin/create-instructor")}>
          <ChevronLeft size={16} /> RETURN TO INSTRUCTOR TABLE
        </button>
      </section>
    </main>
  );
}
