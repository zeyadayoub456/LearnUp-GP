import { Eye, Info, Search, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../../components/admin/AdminSidebar.jsx";
import AdminTopbar from "../../../../components/admin/AdminTopbar.jsx";
import "./createStudent.css";

const students = [
  { name: "Ahmed Ayman", email: "ahmed@uni.edu", id: "#STU-225140", level: "Level 1", department: "Computer Science" },
  { name: "Jordan Henderson", email: "j.henderson@uni.edu", id: "#STU-225120", level: "Level 4", department: "Artificial Intelligence" },
  { name: "Elena Rodriguez", email: "e.rodriguez@uni.edu", id: "#STU-225122", level: "Level 2", department: "Information Systems" },
  { name: "Marcus Aurelius", email: "m.aurelius@uni.edu", id: "#STU-225144", level: "Level 4", department: "Cyber Security" },
  { name: "Sarah Jenkins", email: "s.jenkins@uni.edu", id: "#STU-225130", level: "Level 1", department: "Computer Science" },
  { name: "Omar Khalid", email: "o.khalid@uni.edu", id: "#STU-225123", level: "Level 4", department: "Artificial Intelligence" },
  { name: "Layla Mansour", email: "l.mansour@uni.edu", id: "#STU-225013", level: "Level 3", department: "Information Systems" },
  { name: "Zaid Ahmed", email: "z.ahmed@uni.edu", id: "#STU-225234", level: "Level 2", department: "Cyber Security" },
];

const levels = ["All Levels", "Level 1", "Level 2", "Level 3", "Level 4"];
const departments = ["All Departments", "Computer Science", "Artificial Intelligence", "Information Systems", "Cyber Security"];

function StudentModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="admin-modal-overlay">
      <form className="student-create-modal" onSubmit={(event) => { event.preventDefault(); navigate("/student-created"); }}>
        <button type="button" className="student-create-modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h2>Create New Student</h2>
        <p>Enroll a new member to the academic portal</p>

        <section>
          <h3><span>♟</span> PERSONAL INFORMATION</h3>
          <div className="student-modal-grid">
            <label className="span-2">Full Name<input defaultValue="e.g.Ahmed Ayman" /></label>
            <label>Email Address<input defaultValue="Ahmed@university.edu" /></label>
            <label>Phone Number<input defaultValue="+1 (555) 000-0000" /></label>
            <label>Gender<select defaultValue="Male"><option>Male</option></select></label>
            <label>National ID<input defaultValue="505903044134" /></label>
            <label className="span-2">Initial Password<div><input defaultValue="Ahmed2000034" type="password" /><Eye size={15} /></div></label>
          </div>
        </section>

        <section>
          <h3 className="is-academic"><span>☞</span> ACADEMIC INFO</h3>
          <div className="student-modal-grid">
            <label>Student ID<input defaultValue="#STU-225140" /></label>
            <label>Department<select defaultValue="Artificial intelligence"><option>Artificial intelligence</option></select></label>
          </div>
          <div className="student-modal-note">
            <Info size={16} />
            <span>An invitation email with setup instructions will be automatically sent to the student upon creation.</span>
          </div>
        </section>

        <footer>
          <button type="button" onClick={onClose}>CANCEL</button>
          <button type="submit">CREATE STUDENT</button>
        </footer>
      </form>
    </div>
  );
}

export default function CreateStudent() {
  const [open, setOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const navigate = useNavigate();

  const filteredStudents = students.filter((student) => {
    const levelMatches = selectedLevel === "All Levels" || student.level === selectedLevel;
    const departmentMatches = selectedDepartment === "All Departments" || student.department === selectedDepartment;
    return levelMatches && departmentMatches;
  });

  const openStudentProfile = () => {
    navigate("/student/profile");
  };

  return (
    <div className="admin-app-shell create-student-page-v2">
      <AdminSidebar />
      <div className="admin-page-area">
        <AdminTopbar />
        <main className="create-student-main">
          <p className="admin-breadcrumb">LMS <span>&gt;</span> Students <span>&gt;</span> <strong>New Registration</strong></p>
          <h1>Create New Student</h1>

          <section className="student-filters">
            <div>
              <span>FIND STUDENTS</span>
              <label><Search size={16} /><input type="search" placeholder="Search by student name or ID" /></label>
            </div>
            <label className="student-filter-select">
              <span>LEVEL</span>
              <select value={selectedLevel} onChange={(event) => setSelectedLevel(event.target.value)}>
                {levels.map((level) => <option key={level}>{level}</option>)}
              </select>
            </label>
            <label className="student-filter-select">
              <span>DEPARTMENT</span>
              <select value={selectedDepartment} onChange={(event) => setSelectedDepartment(event.target.value)}>
                {departments.map((department) => <option key={department}>{department}</option>)}
              </select>
            </label>
          </section>

          <section className="student-table-card">
            <table>
              <thead>
                <tr>
                  <th>STUDENT NAME</th>
                  <th>STUDENT ID</th>
                  <th>LEVEL</th>
                  <th>DEPARTMENT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.id} onClick={openStudentProfile} className="student-table-row">
                    <td>
                      <span className={`student-table-avatar avatar-${index}`}>{student.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}</span>
                      <div><strong>{student.name}</strong><small>{student.email}</small></div>
                    </td>
                    <td>{student.id}</td>
                    <td><span className="student-level-pill">{student.level}</span></td>
                    <td>{student.department}</td>
                    <td>
                      <button
                        type="button"
                        className="student-view-profile"
                        onClick={(event) => {
                          event.stopPropagation();
                          openStudentProfile();
                        }}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <footer>
              <span>Showing {filteredStudents.length} of {students.length} students</span>
              <div>
                <button type="button">‹</button><button type="button">2</button><button type="button" className="active">1</button><button type="button">3</button><button type="button">›</button>
              </div>
            </footer>
          </section>

          <button type="button" className="create-student-cta" onClick={() => setOpen(true)}>
            <UserPlus size={18} /> CREATE NEW STUDENT
          </button>
        </main>
      </div>
      {open && <StudentModal onClose={() => setOpen(false)} />}
    </div>
  );
}
