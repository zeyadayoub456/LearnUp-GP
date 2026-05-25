import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WhoAreYou from "./pages/auth/WhoAreYou.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import AdminLogin from "./pages/auth/AdminLogin.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword.jsx";
import AssignInstructorPage from "./pages/admin/dashboard/assignInstructor/AssignInstructor.jsx";
import AssignmentSuccessPage from "./pages/admin/dashboard/assignInstructor/AssignmentSuccess.jsx";
import CreateInstructor from "./pages/admin/dashboard/createInstructor/CreateInstructor.jsx";
import InstructorProfile from "./pages/admin/dashboard/createInstructor/InstructorProfile.jsx";
import InstructorSuccessPage from "./pages/admin/dashboard/createInstructor/InstructorSuccessPage.jsx";
import CreateStudent from "./pages/admin/dashboard/createStudent/CreateStudent.jsx";
import StudentCreated from "./pages/admin/dashboard/createStudent/StudentCreated.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import StudentDashboard from "./pages/student/dashboard/StudentDashboard.jsx";
import CourseBoard from "./pages/student/courseBoard/CourseBoard.jsx";
import AcademicMap from "./pages/student/academicMap/AcademicMap.jsx";
import SemesterResult from "./pages/student/semesterResult/SemesterResult.jsx";
import AcademicAdvisorBot from "./pages/student/academicAdvisorBot/AcademicAdvisorBot.jsx";
import StudentProfile from "./pages/student/profile/StudentProfile.jsx";
import FacultyProfile from "./pages/faculty/profile/FacultyProfile.jsx";
import AdminProfile from "./pages/admin/profile/AdminProfile.jsx";
import FacultyLogin from "./pages/faculty/login/FacultyLogin.jsx";
import FacultyDashboard from "./pages/faculty/dashboard/FacultyDashboard.jsx";
import FacultyCourseBoard from "./pages/faculty/courseBoard/FacultyCourseBoard.jsx";
import FacultyAcademicAdvisorBot from "./pages/faculty/academicAdvisorBot/FacultyAcademicAdvisorBot.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhoAreYou />} />
        <Route path="/who-are-you" element={<WhoAreYou />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/assign-instructor" element={<AssignInstructorPage />} />
        <Route path="/assignment-success" element={<AssignmentSuccessPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-instructor" element={<CreateInstructor />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/instructor-created" element={<InstructorSuccessPage />} />
        <Route path="/instructor-profile" element={<InstructorProfile />} />
        <Route path="/student-created" element={<StudentCreated />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/create-student" element={<CreateStudent />} />
        <Route path="/admin/create-instructor" element={<CreateInstructor />} />
        <Route path="/admin/assign-instructor" element={<AssignInstructorPage />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/course-board" element={<CourseBoard />} />
        <Route path="/student/academic-map" element={<AcademicMap />} />
        <Route path="/student/semester-result" element={<SemesterResult />} />
        <Route path="/student/academic-advisor-bot" element={<AcademicAdvisorBot />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/faculty/login" element={<FacultyLogin />} />
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/course-board" element={<FacultyCourseBoard />} />
        <Route path="/faculty/academic-advisor-bot" element={<FacultyAcademicAdvisorBot />} />
        <Route path="/faculty/profile" element={<FacultyProfile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
