import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./studentProfile.css";

const details = [
  ["University", "Egyptian Russian University"],
  ["Student Name", "Ahmed Ayman Mohamed"],
  ["ID", "225140"],
  ["GPA", "3.2"],
  ["Level", "level four"],
  ["Academic status", "To be graduated"],
  ["Enrollment status", "Enrolled"],
  ["Total hours passed", "90 hour"],
  ["Grad year", "2026"],
];

export default function StudentProfile() {
  const navigate = useNavigate();

  return (
    <main className="student-profile-page">
      <button type="button" className="student-profile-back" onClick={() => navigate(-1)} aria-label="Go back">
        <ArrowLeft size={28} />
      </button>

      <section className="student-profile-card">
        <header className="student-profile-header">
          <span className="student-profile-avatar">AA</span>
          <h1>Ahmed Ayman Mohamed</h1>
          <p>Student</p>
        </header>

        <section className="student-profile-info" aria-label="Student profile details">
          {details.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
