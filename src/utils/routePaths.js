export const routePaths = {
  roleSelection: '/',
  login: '/auth/login',
  register: '/auth/register',
  forgotPassword: '/auth/forgot-password',
  verifyEmail: '/auth/verify-email',
  resetPassword: '/auth/reset-password',
  roleHome: '/app',
  comingSoon: '/coming-soon',
  studentDashboard: '/student/dashboard',
  studentCourses: '/student/courses',
  studentAnnouncements: '/student/announcements',
  studentAttendance: '/student/attendance',
  studentNotifications: '/student/notifications',
  studentProfile: '/student/profile',
  studentLearnBot: '/student/learnbot',
}

export const studentNavigation = [
  {
    label: 'Dashboard',
    shortLabel: 'Home',
    to: routePaths.studentDashboard,
    matchPrefix: routePaths.studentDashboard,
  },
  {
    label: 'My Courses',
    shortLabel: 'Courses',
    to: routePaths.studentCourses,
    matchPrefix: routePaths.studentCourses,
  },
  {
    label: 'Announcements',
    shortLabel: 'News',
    to: routePaths.studentAnnouncements,
    matchPrefix: routePaths.studentAnnouncements,
  },
  {
    label: 'Attendance',
    shortLabel: 'Attendance',
    to: routePaths.studentAttendance,
    matchPrefix: routePaths.studentAttendance,
  },
  {
    label: 'Notifications',
    shortLabel: 'Alerts',
    to: routePaths.studentNotifications,
    matchPrefix: routePaths.studentNotifications,
  },
  {
    label: 'Profile',
    shortLabel: 'Profile',
    to: routePaths.studentProfile,
    matchPrefix: routePaths.studentProfile,
  },
  {
    label: 'Ask LearnBot',
    shortLabel: 'LearnBot',
    to: routePaths.studentLearnBot,
    matchPrefix: routePaths.studentLearnBot,
  },
]

export function buildAuthRoute(basePath, role, extraParams = {}) {
  const params = new URLSearchParams()

  if (role) {
    params.set('role', role)
  }

  Object.entries(extraParams).forEach(([key, value]) => {
    if (value) {
      params.set(key, value)
    }
  })

  const query = params.toString()
  return query ? `${basePath}?${query}` : basePath
}

export function buildCourseDetailsPath(courseId) {
  return `${routePaths.studentCourses}/${courseId}`
}

export function getRoleHomePath(role) {
  return role === 'student' ? routePaths.studentDashboard : routePaths.comingSoon
}
