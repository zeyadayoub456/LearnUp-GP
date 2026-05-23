import LoginPage from '../pages/auth/LoginPage'
import AdminLogin from '../pages/auth/AdminLogin.jsx'
import Dashboard from "../pages/admin/dashboard/Dashboard.jsx";
import CreateStudent from "../pages/admin/dashboard/createStudent/CreateStudent.jsx";
import CreateInstructor from "../pages/admin/dashboard/createInstructor/CreateInstructor.jsx";
import StudentCreated from "../pages/admin/dashboard/createStudent/StudentCreated.jsx";
import StudentsEnrolled from "../pages/admin/studentsEnrolled/StudentsEnrolled.jsx";
import InstructorCreated from "../pages/admin/dashboard/createInstructor/InstructorSuccessPage.jsx";
import AssignInstructor, { AssignInstructorModal } from "../pages/admin/dashboard/assignInstructor/AssignInstructor.jsx";
import AssignmentSuccess from "../pages/admin/dashboard/assignInstructor/AssignmentSuccess.jsx";
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword'
import RegisterPage from '../pages/auth/RegisterPage'
import StudentDashboard from "../pages/student/dashboard/StudentDashboard.jsx";
import CourseBoard from "../pages/student/courseBoard/CourseBoard.jsx";
import AcademicMap from "../pages/student/academicMap/AcademicMap.jsx";
import SemesterResult from "../pages/student/semesterResult/SemesterResult.jsx";
import AcademicAdvisorBot from "../pages/student/academicAdvisorBot/AcademicAdvisorBot.jsx";
import WhoAreYou from '../pages/auth/WhoAreYou'
import NotFoundPage from '../pages/shared/NotFoundPage'

function AppRouter() {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/create-student" element={<CreateStudent />} />
      <Route path="/admin/create-instructor" element={<CreateInstructor />} />
      <Route path="/admin/create-instructor-profile" element={<CreateInstructor initialModalOpen />} />
      <Route path="/student-created" element={<StudentCreated />} />
      <Route path="/instructor-created" element={<InstructorCreated />} />
      <Route path="/admin/assign-instructor" element={<AssignInstructor />} />
      <Route path="/assign-instructor-modal" element={<AssignInstructorModal />} />
      <Route path="/assignment-success" element={<AssignmentSuccess />} />
      <Route path="/admin/students-enrolled" element={<StudentsEnrolled />} />
      <Route path="/" element={<WhoAreYou />} />
      <Route path="/who-are-you" element={<WhoAreYou />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/create-account" element={<RegisterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/academic-advisor-bot" element={<AcademicAdvisorBot />} />
      <Route path="/student/academic-map" element={<AcademicMap />} />
      <Route path="/student/course-board" element={<CourseBoard />} />
      <Route path="/student/semester-result" element={<SemesterResult />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter
