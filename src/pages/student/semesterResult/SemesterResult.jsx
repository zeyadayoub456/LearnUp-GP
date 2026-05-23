import { BookOpenCheck, ChevronRight, Download, Grid2X2, Monitor, Sigma, Trophy } from "lucide-react";
import { useState } from "react";
import StudentSidebar from "../../../components/student/StudentSidebar.jsx";
import StudentTopbar from "../../../components/student/StudentTopbar.jsx";
import "./semesterResult.css";

const tabs = ["All", "Passed", "Failed", "Withdrawn"];

const rows = [
  { icon: Trophy, course: "Machine Learning", code: "CS-401", credits: 3, grade: "A", status: "PASSED" },
  { icon: Sigma, course: "Ethics in AI", code: "CS-305", credits: 3, grade: "A-", status: "PASSED" },
  { icon: Monitor, course: "Operating Systems", code: "CS-302", credits: 3, grade: "B+", status: "PASSED" },
  { icon: BookOpenCheck, course: "Data Structures", code: "CS-201", credits: 3, grade: "A", status: "PASSED" },
];

export default function SemesterResult() {
  const [academicYear, setAcademicYear] = useState("2024-2025");
  const [semester, setSemester] = useState("Fall");
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="student-app-shell semester-result-page">
      <StudentSidebar />
      <div className="student-page-area">
        <StudentTopbar />
        <main className="semester-result-main">
          <section className="semester-result-heading">
            <h1>Semester Results</h1>
            <p>Review your academic performance for each semester.</p>
          </section>

          <section className="semester-result-filters" aria-label="Result filters">
            <label>
              <span>ACADEMIC YEAR</span>
              <select value={academicYear} onChange={(event) => setAcademicYear(event.target.value)}>
                <option value="2024-2025">2024-2025</option>
              </select>
            </label>
            <label>
              <span>SEMESTER</span>
              <select value={semester} onChange={(event) => setSemester(event.target.value)}>
                <option value="Fall">Fall</option>
              </select>
            </label>
            <button type="button">
              <Download size={14} />
              Export PDF
            </button>
          </section>

          <section className="semester-result-stats" aria-label="Semester statistics">
            <article>
              <Grid2X2 size={15} />
              <span>Semester GPA</span>
              <strong>3.85</strong>
              <i />
            </article>
            <article>
              <Trophy size={15} />
              <span>Cumulative GPA</span>
              <strong>3.92</strong>
              <small>Top 5% of Class</small>
            </article>
            <article>
              <BookOpenCheck size={15} />
              <span>Passed Credits</span>
              <strong>12</strong>
              <p>Completion rate: 100%</p>
            </article>
            <article>
              <Grid2X2 size={15} />
              <span>Total Credits</span>
              <strong>12</strong>
              <p>Enrolled: Fall 2024</p>
            </article>
          </section>

          <div className="semester-result-tabs" role="tablist" aria-label="Result status tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={activeTab === tab ? "is-active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <section className="semester-result-table-card" aria-label="Semester course grades">
            <table>
              <thead>
                <tr>
                  <th>COURSE NAME</th>
                  <th>CODE</th>
                  <th>CREDIT HOURS</th>
                  <th>GRADE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <tr key={row.code}>
                      <td>
                        <span><Icon size={14} /></span>
                        <strong>{row.course}</strong>
                      </td>
                      <td>{row.code}</td>
                      <td>{row.credits}</td>
                      <td><strong>{row.grade}</strong></td>
                      <td><span className="semester-result-pass">{row.status}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button type="button" className="semester-result-audit">
              <span>View Detailed<br />Audit</span>
              <ChevronRight size={27} />
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
