import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../student/profile/studentProfile.css";

export default function FacultyProfile() {
  const navigate = useNavigate();

  return (
    <main className="student-profile-page">
      <button type="button" className="student-profile-back" onClick={() => navigate(-1)} aria-label="Go back">
        <ArrowLeft size={28} />
      </button>
      <section className="student-profile-card">
        <header className="student-profile-header">
          <span className="student-profile-avatar">AA</span>
          <h1>Dr. Amira Ahmed</h1>
          <p>faculty member</p>
        </header>
        <section className="student-profile-info" aria-label="Faculty profile details">
          <div><span>Faculty</span><strong>Engineering & Technology</strong></div>
          <div><span>Email</span><strong>amira.ahmed@university.edu</strong></div>
          <div><span>Department</span><strong>Computer Science & IT</strong></div>
          <div><span>Phone</span><strong>Computer Science & IT</strong></div>
          <div><span>Specialization</span><strong>Data Science & AI</strong></div>
          <div><span>Location</span><strong>Data Science & AI</strong></div>
        </section>
      </section>
    </main>
  );
}
