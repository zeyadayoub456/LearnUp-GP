import { CheckCircle, ChevronDown, Info, UserRound, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../../components/admin/AdminSidebar.jsx";
import AdminTopbar from "../../../../components/admin/AdminTopbar.jsx";
import "./assignInstructor.css";

const rows = [
  ["Dr. Sarah Jenkins", "s.jenkins@eduadmin.com", "Computer Science", "1/3", 33, ["CS101"]],
  ["Prof. Michael Chen", "m.chen@eduadmin.com", "Computer Science", "2/3", 66, ["CS202", "CS404"]],
  ["Dr. Elena Rodriguez", "e.rodriguez@eduadmin.com", "Computer Science", "3/3", 100, ["CS105", "CS210", "CS302"]],
  ["Prof. David Wilson", "d.wilson@eduadmin.com", "Computer Science", "1/3", 33, ["CS201"]],
  ["Prof. Sarah Mitchell", "s.mitchell@eduadmin.com", "Computer Science", "1/3", 33, ["CS101"]],
  ["Dr. Arjun Kapoor", "a.kapoor@eduadmin.com", "Computer Science", "3/3", 100, ["CS105", "CS210", "CS302"]],
  ["Prof. Elena Rodriguez", "e.rodriguez@eduadmin.com", "Computer Science", "2/3", 66, ["CS202", "CS404"]],
  ["James Wilson", "j.wilson@eduadmin.com", "Computer Science", "0/3", 0, []],
];

export function AssignInstructorModal() {
  const navigate = useNavigate();

  return (
    <div className="assign-modal-overlay">
      <section className="assign-modal">
        <button type="button" className="assign-modal__close" onClick={() => navigate("/admin/assign-instructor")} aria-label="Close"><X size={18} /></button>
        <h1>Assign Instructor to Course</h1>
        <article className="assign-modal-profile">
          <span className="assign-modal-avatar" />
          <div>
            <h2>Dr. Sara Jenkins</h2>
            <p>Computer Science</p>
            <div className="assign-modal-load">
              <span>COURSES LOAD</span><strong>1/3</strong>
              <i><b /></i>
            </div>
          </div>
        </article>
        <label className="assign-modal-select">
          <span>Select course to assign</span>
          <div>Advanced neural network <ChevronDown size={18} /></div>
        </label>
        <div className="assign-modal-current">
          <h3>Current Courses</h3>
          <span><Info size={12} /> CS101</span>
        </div>
        <footer>
          <button type="button" onClick={() => navigate("/admin/assign-instructor")}>Cancel</button>
          <button type="button" onClick={() => navigate("/assignment-success")}>Confirm Assignment</button>
        </footer>
      </section>
    </div>
  );
}

export default function AssignInstructor() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-app-shell assign-instructor-page-v2">
      <AdminSidebar />
      <div className="admin-page-area">
        <AdminTopbar />
        <main className="assign-instructor-main">
          <p className="assign-breadcrumb"><span>Instructors</span> &gt; <strong>Assign Instructor</strong></p>
          <h1>Select Instructor for CS303</h1>
          <p>Available computer science faculty for the Advanced Algorithms course.</p>

          <section className="assign-table-card">
            <table>
              <thead>
                <tr>
                  <th>Instructor Name</th>
                  <th>Department</th>
                  <th>Courses Load</th>
                  <th>Assigned Courses</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([name, email, dept, load, progress, courses], index) => {
                  const full = progress === 100;
                  return (
                    <tr key={`${name}-${index}`} className={full ? "is-muted" : ""}>
                      <td>
                        <span className="admin-person-avatar">{name.split(" ").slice(-2).map((p) => p[0]).join("")}</span>
                        <div><strong>{name}</strong><small>{email}</small></div>
                      </td>
                      <td>{dept}</td>
                      <td>
                        <div className="assign-load-cell">
                          <i><b className={full ? "is-full" : ""} style={{ width: `${progress}%` }} /></i>
                          <strong>{load}</strong>
                          {full && <span>FULL CAPACITY</span>}
                        </div>
                      </td>
                      <td>
                        <div className="assign-course-pills">
                          {courses.map((course) => <span key={course}>{course}</span>)}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          <div className="assign-bottom-actions">
            <button type="button">Cancel</button>
            <button type="button" onClick={() => setOpen(true)}>Assign Instructor <CheckCircle size={14} /></button>
          </div>
        </main>
      </div>
      {open && <AssignInstructorModal />}
    </div>
  );
}
