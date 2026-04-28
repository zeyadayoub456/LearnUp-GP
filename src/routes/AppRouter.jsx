import LoginPage from '../pages/auth/LoginPage'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword'
import RegisterPage from '../pages/auth/RegisterPage'
import AcademicAdvisorBot from '../pages/student/academicAdvisorBot/AcademicAdvisorBot'
import AcademicMap from '../pages/student/academicMap/AcademicMap'
import CourseBoard from '../pages/student/courseBoard/CourseBoard'
import SemesterResult from '../pages/student/semesterResult/SemesterResult'
import StudentDashboard from '../pages/student/dashboard/StudentDashboard'
import WhoAreYou from '../pages/auth/WhoAreYou'
import NotFoundPage from '../pages/shared/NotFoundPage'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WhoAreYou />} />
      <Route path="/who-are-you" element={<WhoAreYou />} />
      <Route path="/login" element={<LoginPage />} />
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
