import { Eye, Info, MoreVertical, Search, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../../components/admin/AdminSidebar.jsx";
import AdminTopbar from "../../../../components/admin/AdminTopbar.jsx";
import "./createInstructor.css";

const instructors = [
  ["Dr. Sarah Jenkins", "s.jenkins@eduadmin.com", "#INST-4421", "COMPUTER SCIENCE", "1/3", 33],
  ["Prof. Michael Chen", "m.chen@eduadmin.com", "#INST-8829", "COMPUTER SCIENCE", "2/3", 66],
  ["Dr. Elena Rodriguez", "e.rod@eduadmin.com", "#INST-1104", "COMPUTER SCIENCE", "3/3", 100],
  ["Prof. David Wilson", "d.wilson@eduadmin.com", "#INST-9923", "COMPUTER SCIENCE", "1/3", 33],
  ["Prof. Sarah Mitchell", "s.mitchell@eduadmin.com", "#INST-2022", "COMPUTER SCIENCE", "1/3", 33],
  ["Dr. Arjun Kapoor", "a.kapoor@eduadmin.com", "#INST-1105", "COMPUTER SCIENCE", "3/3", 100],
  ["Prof. Elena Rodriguez", "e.rodriguez@eduadmin.com", "#INST-8829", "COMPUTER SCIENCE", "2/3", 66],
];

function InstructorModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="instructor-modal-overlay">
      <form className="instructor-create-modal" onSubmit={(event) => { event.preventDefault(); navigate("/instructor-created"); }}>
        <button type="button" className="instructor-create-modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h2>Create New instructor</h2>
        <p>Enroll a new member to the academic portal</p>

        <section>
          <h3><span>♟</span> PERSONAL INFORMATION</h3>
          <div className="instructor-modal-grid">
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
          <div className="instructor-modal-grid">
            <label>Student ID<input defaultValue="#STU-225140" /></label>
            <label>Department<select defaultValue="Artificial intelligence"><option>Artificial intelligence</option></select></label>
          </div>
          <div className="instructor-modal-note"><Info size={16} />An invitation email with setup instructions will be automatically sent to the student upon creation.</div>
        </section>

        <footer>
          <button type="button" onClick={onClose}>CANCEL</button>
          <button type="submit">CREATE INSTRUCTOR</button>
        </footer>
      </form>
    </div>
  );
}

export default function CreateInstructor({ initialModalOpen = false }) {
  const [open, setOpen] = useState(initialModalOpen);

  return (
    <div className="admin-app-shell create-instructor-page-v2">
      <AdminSidebar />
      <div className="admin-page-area">
        <AdminTopbar />
        <main className="create-instructor-main">
          <section className="instructor-page-header">
            <h1>Instructor Management</h1>
            <p>Oversee academic staff, course loads, and departmental assignments.</p>
          </section>

          <section className="instructor-table-card">
            <label className="instructor-search"><Search size={16} /><input type="search" placeholder="Search by name or ID" /></label>
            <table>
              <thead>
                <tr>
                  <th>INSTRUCTOR NAME</th>
                  <th>INSTRUCTOR ID</th>
                  <th>DEPARTMENT</th>
                  <th>COURSES LOAD</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {instructors.map(([name, email, id, dept, load, progress], index) => {
                  const full = progress === 100;
                  return (
                    <tr key={`${id}-${index}`}>
                      <td>
                        <span className="admin-person-avatar">{name.split(" ").slice(-2).map((p) => p[0]).join("")}</span>
                        <div><strong>{name}</strong><small>{email}</small></div>
                      </td>
                      <td>{id}</td>
                      <td><span className="instructor-dept-pill">{dept}</span></td>
                      <td>
                        <div className="instructor-load">
                          <span>{load}</span>
                          {full && <b>FULL</b>}
                          <i><em className={full ? "is-full" : ""} style={{ width: `${progress}%` }} /></i>
                        </div>
                      </td>
                      <td><button type="button" aria-label={`Actions for ${name}`}><MoreVertical size={18} /></button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <footer>
              <div><button type="button">‹</button><span>Page 1 of<br />12</span><button type="button">›</button></div>
              <button type="button" onClick={() => setOpen(true)}><UserPlus size={16} /> Create New Instructor</button>
            </footer>
          </section>
        </main>
      </div>
      {open && <InstructorModal onClose={() => setOpen(false)} />}
    </div>
  );
}
