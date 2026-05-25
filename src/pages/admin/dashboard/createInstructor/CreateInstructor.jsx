import { Eye, Info, MoreVertical, Search, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../../components/admin/AdminSidebar.jsx";
import AdminTopbar from "../../../../components/admin/AdminTopbar.jsx";
import "./createInstructor.css";

const instructors = [
  { name: "Dr. Sarah Jenkins", email: "s.jenkins@eduadmin.com", id: "#FAC-4421", department: "COMPUTER SCIENCE", load: "1/3", progress: 33, status: "AVAILABLE" },
  { name: "Prof. Michael Chen", email: "m.chen@eduadmin.com", id: "#FAC-8829", department: "COMPUTER SCIENCE", load: "2/3", progress: 66, status: "ACTIVE" },
  { name: "Dr. Elena Rodriguez", email: "e.rod@eduadmin.com", id: "#FAC-1104", department: "COMPUTER SCIENCE", load: "3/3", progress: 100, status: "FULL" },
  { name: "Prof. David Wilson", email: "d.wilson@eduadmin.com", id: "#FAC-9923", department: "COMPUTER SCIENCE", load: "1/3", progress: 33, status: "AVAILABLE" },
  { name: "Prof. Sarah Mitchell", email: "s.mitchell@eduadmin.com", id: "#FAC-2022", department: "COMPUTER SCIENCE", load: "1/3", progress: 33, status: "AVAILABLE" },
  { name: "Dr. Arjun Kapoor", email: "a.kapoor@eduadmin.com", id: "#FAC-1105", department: "COMPUTER SCIENCE", load: "3/3", progress: 100, status: "FULL" },
  { name: "Prof. Elena Rodriguez", email: "e.rodriguez@eduadmin.com", id: "#FAC-8830", department: "COMPUTER SCIENCE", load: "2/3", progress: 66, status: "ACTIVE" },
];

function InstructorModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="instructor-modal-overlay">
      <form className="instructor-create-modal" onSubmit={(event) => { event.preventDefault(); navigate("/instructor-created"); }}>
        <button type="button" className="instructor-create-modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h2>Create New Faculty Member</h2>
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
            <label>Faculty Member ID<input defaultValue="#FAC-225140" /></label>
            <label>Department<select defaultValue="Artificial intelligence"><option>Artificial intelligence</option></select></label>
          </div>
          <div className="instructor-modal-note"><Info size={16} />An invitation email with setup instructions will be automatically sent to the faculty member upon creation.</div>
        </section>

        <footer>
          <button type="button" onClick={onClose}>CANCEL</button>
          <button type="submit">CREATE FACULTY MEMBER</button>
        </footer>
      </form>
    </div>
  );
}

function InstructorProfileModal({ instructor, onClose }) {
  if (!instructor) return null;

  return (
    <div className="instructor-modal-overlay">
      <section className="instructor-profile-modal" aria-label={`${instructor.name} profile`}>
        <button type="button" className="instructor-create-modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <span className="admin-person-avatar">{instructor.name.split(" ").slice(-2).map((part) => part[0]).join("")}</span>
        <h2>{instructor.name}</h2>
        <p>{instructor.email}</p>
        <dl>
          <div><dt>Faculty Member ID</dt><dd>{instructor.id}</dd></div>
          <div><dt>Email</dt><dd>{instructor.email}</dd></div>
          <div><dt>Department</dt><dd>{instructor.department}</dd></div>
          <div><dt>Course Load</dt><dd>{instructor.load}</dd></div>
          <div><dt>Status</dt><dd><span className={`faculty-status-pill faculty-status-pill--${instructor.status.toLowerCase()}`}>{instructor.status}</span></dd></div>
        </dl>
      </section>
    </div>
  );
}

export default function CreateInstructor({ initialModalOpen = false }) {
  const [open, setOpen] = useState(initialModalOpen);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <div className="admin-app-shell create-instructor-page-v2">
      <AdminSidebar />
      <div className="admin-page-area">
        <AdminTopbar />
        <main className="create-instructor-main">
          <section className="instructor-page-header">
            <h1>Faculty Member</h1>
            <p>Oversee academic staff, course loads, and departmental assignments.</p>
          </section>

          <section className="instructor-table-card">
            <label className="instructor-search"><Search size={16} /><input type="search" placeholder="Search by name or ID" /></label>
            <table>
              <thead>
                <tr>
                  <th>FACULTY MEMBER NAME</th>
                  <th>FACULTY MEMBER ID</th>
                  <th>DEPARTMENT</th>
                  <th>COURSES LOAD</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {instructors.map((instructor, index) => {
                  const full = instructor.progress === 100;
                  return (
                    <tr
                      key={`${instructor.id}-${index}`}
                      onClick={() => setSelectedInstructor(instructor)}
                      className={`instructor-table-row ${selectedInstructor?.id === instructor.id ? "is-selected" : ""}`}
                    >
                      <td>
                        <span className="admin-person-avatar">{instructor.name.split(" ").slice(-2).map((p) => p[0]).join("")}</span>
                        <div><strong>{instructor.name}</strong><small>{instructor.email}</small></div>
                      </td>
                      <td>{instructor.id}</td>
                      <td><span className="instructor-dept-pill">{instructor.department}</span></td>
                      <td>
                        <div className="instructor-load">
                          <span>{instructor.load}</span>
                          {full && <b>FULL</b>}
                          <i><em className={full ? "is-full" : ""} style={{ width: `${instructor.progress}%` }} /></i>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="instructor-view-profile"
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedInstructor(instructor);
                          }}
                        >
                          View Profile <MoreVertical size={14} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <footer>
              <div><button type="button">‹</button><span>Page 1 of<br />12</span><button type="button">›</button></div>
              <button type="button" onClick={() => setOpen(true)}><UserPlus size={16} /> Create New Faculty Member</button>
            </footer>
          </section>
        </main>
      </div>
      {open && <InstructorModal onClose={() => setOpen(false)} />}
      {selectedInstructor && <InstructorProfileModal instructor={selectedInstructor} onClose={() => setSelectedInstructor(null)} />}
    </div>
  );
}
