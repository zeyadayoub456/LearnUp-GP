import FacultySidebar from "../../../components/faculty/FacultySidebar.jsx";
import FacultyTopbar from "../../../components/faculty/FacultyTopbar.jsx";
import "./facultyCourseBoard.css";

const levels = [
  {
    level: "Level 1",
    label: "Foundation Year",
    courses: [
      ["CS-101", "Intro to Computing", 145],
      ["MAT-110", "Calculus I", 121],
      ["ENG-102", "Academic Writing", 110],
      ["PHY-150", "General Physics", 79],
      ["CS-120", "Discrete Structures", 130],
    ],
  },
  {
    level: "Level 2",
    label: "Intermediate Studies",
    courses: [
      ["CS-201", "Data Structures", 120],
      ["CS-220", "Algorithm Design", 84],
      ["NET-205", "Computer Networks", 104],
      ["DB-240", "Database Systems", 115],
      ["OS-210", "Operating Systems", 95],
    ],
  },
  {
    level: "Level 3",
    label: "Advanced Specialization",
    courses: [
      ["MAT-405", "Quantum Physics", 42],
      ["CS-350", "AI Ethics", 64],
      ["SEC-380", "Cybersecurity", 53],
      ["GPH-312", "Comp Graphics", 38],
      ["CS-390", "Machine Learning", 92],
    ],
  },
  {
    level: "Level 4",
    label: "Graduation Projects",
    courses: [
      ["THS-401", "Senior Thesis I", 15],
      ["CS-450", "Capstone Project", 72],
      ["CS-420", "Cloud Architecture", 78],
      ["DS-410", "Big Data Systems", 31],
      ["SE-402", "Soft Engineering II", 45],
    ],
  },
];

function CourseCard({ code, title, students }) {
  return (
    <article className="faculty-course-card">
      <div className={code === "THS-401" ? "is-navy" : ""}>{code}</div>
      <section>
        <h3>{title}</h3>
        <p>{students} Students<br />Enrolled</p>
        <button type="button" onClick={() => console.log(code)}>View Students</button>
      </section>
    </article>
  );
}

export default function FacultyCourseBoard() {
  return (
    <div className="faculty-app-shell">
      <FacultySidebar />
      <div className="faculty-page-area">
        <FacultyTopbar />
        <main className="faculty-course-board">
          <header className="faculty-course-board__intro">
            <h1>Instructor Course Board</h1>
            <p>Manage and monitor academic progress across different curriculum levels.</p>
          </header>

          {levels.map((group) => (
            <section className="faculty-course-level" key={group.level}>
              <header>
                <h2>{group.level}</h2>
                <span>{group.label}</span>
              </header>
              <div className="faculty-course-grid">
                {group.courses.map(([code, title, students]) => (
                  <CourseCard key={code} code={code} title={title} students={students} />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
