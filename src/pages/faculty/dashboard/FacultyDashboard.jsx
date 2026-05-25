import { AlertTriangle, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FacultySidebar from "../../../components/faculty/FacultySidebar.jsx";
import FacultyTopbar from "../../../components/faculty/FacultyTopbar.jsx";
import "./facultyDashboard.css";

const students = [
  { name: "Sarah Miller", email: "sarah.m@learnup.edu", id: "#UP-9021", level: "LVL 4.00", department: "Computer Science", gpa: "3.85", status: "EXCELLENT", avatar: "sarah" },
  { name: "Alex Smith", email: "alex.s@learnup.edu", id: "#UP-1209", level: "LVL 3.00", department: "Computer Science", gpa: "1.80", status: "AT RISK", avatar: "alex" },
  { name: "James Lee", email: "james.l@learnup.edu", id: "#UP-4432", level: "LVL 2.00", department: "Computer Science", gpa: "3.12", status: "NORMAL", avatar: "james" },
];

function FacultyLayout({ children }) {
  return (
    <div className="faculty-app-shell">
      <FacultySidebar />
      <div className="faculty-page-area">
        <FacultyTopbar />
        {children}
      </div>
    </div>
  );
}

function StudentAvatar({ type }) {
  return <span className={`faculty-student-avatar faculty-student-avatar--${type}`} />;
}

export default function FacultyDashboard() {
  const navigate = useNavigate();

  return (
    <FacultyLayout>
      <main className="faculty-dashboard">
        <header className="faculty-dashboard__intro">
          <h1>Welcome back, Dr. Amira Ahmed (FULL TIME)</h1>
          <p>Here’s an overview of your students’ academic status</p>
        </header>

        <section className="faculty-stat-grid" aria-label="Faculty statistics">
          <article className="faculty-stat-card faculty-stat-card--blue">
            <div>
              <span>TOTAL STUDENTS</span>
              <Users size={18} />
            </div>
            <strong>150</strong>
            <small className="is-positive">+6 this month</small>
          </article>

          <article className="faculty-stat-card faculty-stat-card--red">
            <div>
              <span>AT RISK STUDENTS</span>
              <AlertTriangle size={18} />
            </div>
            <strong>12</strong>
            <div className="faculty-risk-meter"><i /></div>
            <small>8.0%</small>
          </article>

          <article className="faculty-stat-card faculty-stat-card--blue">
            <div>
              <span>AVERAGE GPA</span>
              <Star size={17} fill="#ff9f1c" />
            </div>
            <strong>3.4</strong>
            <small>System Benchmark: 3.2</small>
          </article>
        </section>

        <section className="faculty-snapshot">
          <header>
            <h2>Students Snapshot</h2>
            <a href="/faculty/dashboard">View All Students →</a>
          </header>
          <div className="faculty-snapshot__table-wrap">
            <table>
              <thead>
                <tr>
                  <th>STUDENT NAME</th>
                  <th>ID</th>
                  <th>LEVEL</th>
                  <th>GPA</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} onClick={() => navigate("/student/profile")}>
                    <td>
                      <StudentAvatar type={student.avatar} />
                      <div>
                        <strong>{student.name}</strong>
                        <span>{student.email}</span>
                      </div>
                    </td>
                    <td>{student.id}</td>
                    <td>{student.level}</td>
                    <td><b>{student.gpa}</b></td>
                    <td><span className={`faculty-status faculty-status--${student.status.toLowerCase().replaceAll(" ", "-")}`}>{student.status}</span></td>
                    <td>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          navigate("/student/profile");
                        }}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="faculty-gpa-card">
          <header>
            <div>
              <h2>GPA Distribution</h2>
              <p>Overview of student GPA performance across academic levels</p>
            </div>
            <select defaultValue="all">
              <option value="all">All Levels</option>
            </select>
          </header>
          <div className="faculty-gpa-card__body">
            <div className="faculty-donut" aria-label="GPA Distribution donut chart">
              <div>
                <strong>145</strong>
                <span>Students</span>
                <small>All Levels Selected</small>
              </div>
            </div>
            <ul className="faculty-gpa-legend">
              <li><i className="legend-excellent" />Excellent</li>
              <li><i className="legend-very-good" />Very Good</li>
              <li><i className="legend-good" />Good</li>
              <li><i className="legend-risk" />At Risk</li>
            </ul>
            <div className="faculty-gpa-summary">
              <article>
                <span>EXCELLENT</span>
                <strong>3.5 — 4 GPA</strong>
              </article>
              <article>
                <span>VERY GOOD</span>
                <strong>2.5 - 3.5 GPA</strong>
              </article>
              <article>
                <span>AT RISK STUDENTS</span>
                <strong>less than 2.5GPA</strong>
              </article>
            </div>
          </div>
        </section>
      </main>
    </FacultyLayout>
  );
}
