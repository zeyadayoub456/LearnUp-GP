import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AssignInstructorPage, {
  AssignmentSuccessPage,
} from "./pages/admin/dashboard/assignInstructor/AssignInstructor.jsx";
import CreateInstructor from "./pages/admin/dashboard/createInstructor/CreateInstructor.jsx";
import InstructorProfile from "./pages/admin/dashboard/createInstructor/InstructorProfile.jsx";
import InstructorSuccessPage from "./pages/admin/dashboard/createInstructor/InstructorSuccessPage.jsx";
import CreateStudent from "./pages/admin/dashboard/createStudent/CreateStudent.jsx";
import StudentCreated from "./pages/admin/dashboard/createStudent/StudentCreated.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assign-instructor" element={<AssignInstructorPage />} />
        <Route path="/assignment-success" element={<AssignmentSuccessPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-instructor" element={<CreateInstructor />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/instructor-created" element={<InstructorSuccessPage />} />
        <Route path="/instructor-profile" element={<InstructorProfile />} />
        <Route path="/student-created" element={<StudentCreated />} />
        <Route path="/admin/dashboard" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/admin/create-instructor"
          element={<Navigate to="/create-instructor" replace />}
        />
        <Route
          path="/admin/assign-instructor"
          element={<Navigate to="/assign-instructor" replace />}
        />
        <Route
          path="/admin/create-student"
          element={<Navigate to="/create-student" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
