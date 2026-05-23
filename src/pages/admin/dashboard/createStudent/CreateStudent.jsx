import { Eye, Info, Search, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../../components/admin/AdminSidebar.jsx";
import AdminTopbar from "../../../../components/admin/AdminTopbar.jsx";
import "./createStudent.css";

const students = [
  ["Ahmed Ayman", "ahmed@uni.edu", "#STU-225140", "Level 1", "Computer Science"],
  ["Jordan Henderson", "j.henderson@uni.edu", "#STU-225120", "Level 4", "Computer Science"],
  ["Elena Rodriguez", "e.rodriguez@uni.edu", "#STU-225122", "Level 2", "Computer Science"],
  ["Marcus Aurelius", "m.aurelius@uni.edu", "#STU-225144", "Level 4", "Computer Science"],
  ["Sarah Jenkins", "s.jenkins@uni.edu", "#STU-225130", "Level 1", "Computer Science"],
  ["Omar Khalid", "o.khalid@uni.edu", "#STU-225123", "Level 4", "Computer Science"],
  ["Layla Mansour", "l.mansour@uni.edu", "#STU-225013", "Level 1", "Computer Science"],
  ["Zaid Ahmed", "z.ahmed@uni.edu", "#STU-225234", "Level 2", "Computer Science"],
];

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
            <label><span>LEVEL</span><select defaultValue="All Levels"><option>All Levels</option></select></label>
            <label><span>DEPARTMENT</span><select defaultValue="All Departments"><option>All Departments</option></select></label>
          </section>

          <section className="student-table-card">
            <table>
              <thead>
                <tr>
                  <th>STUDENT NAME</th>
                  <th>STUDENT ID</th>
                  <th>LEVEL</th>
                  <th>DEPARTMENT</th>
                </tr>
              </thead>
              <tbody>
                {students.map(([name, email, id, level, department], index) => (
                  <tr key={id}>
                    <td>
                      <span className={`student-table-avatar avatar-${index}`}>{name.split(" ").map((p) => p[0]).join("").slice(0, 2)}</span>
                      <div><strong>{name}</strong><small>{email}</small></div>
                    </td>
                    <td>{id}</td>
                    <td><span className="student-level-pill">{level}</span></td>
                    <td>{department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <footer>
              <span>Showing 1 to 8 of 248 students</span>
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
