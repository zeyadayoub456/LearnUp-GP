import { Check, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./studentCreated.css";

export default function StudentCreated() {
  const navigate = useNavigate();

  return (
    <main className="student-created-page">
      <section className="student-created-card">
        <div className="student-created-check"><Check size={40} strokeWidth={3} /></div>
        <h1>Student Profile Created Successfully</h1>
        <p>The new student record has been securely archived and synchronized across all campus departments.</p>

        <div className="student-created-info">
          <div><span>FULL NAME</span><strong>Ahmed Ayman</strong></div>
          <div><span>STUDENT ID</span><strong>#STU-225140</strong></div>
          <div><span>FACULTY</span><strong>Artificial Intelligence</strong></div>
        </div>

        <div className="student-created-actions">
          <button type="button" onClick={() => navigate("/student/profile")}>VIEW PROFILE</button>
          <button type="button" onClick={() => navigate("/admin/create-student")}>CREATE ANOTHER STUDENT</button>
        </div>
        <button type="button" className="student-created-return" onClick={() => navigate("/admin/create-student")}>
          <ChevronLeft size={16} /> RETURN TO STUDENTS TABLE
        </button>
      </section>
    </main>
  );
}
