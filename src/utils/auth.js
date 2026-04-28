import { STORAGE_KEYS, readStorage, removeStorage, writeStorage } from './storage'

const validRoles = ['admin', 'instructor', 'student']

const defaultStudentAccount = {
  id: 'student-demo-001',
  fullName: 'Sara Ahmed',
  email: 'student@learnup.dev',
  password: 'LearnUp123',
  role: 'student',
  verified: true,
  phone: '+20 100 222 3344',
  department: 'Software Engineering',
  level: 'Level 4',
  bio: 'Student focused on frontend engineering, AI fundamentals, and product design research.',
  joinedAt: '2026-04-01T09:00:00.000Z',
}

function createId() {
  return `lu-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function createSession(account) {
  return {
    id: account.id,
    fullName: account.fullName,
    email: account.email,
    role: account.role,
  }
}

export function normalizeRole(role) {
  return validRoles.includes(role) ? role : 'student'
}

export function initializeAuthStorage() {
  const accounts = readStorage(STORAGE_KEYS.accounts, [])

  if (!accounts.length) {
    writeStorage(STORAGE_KEYS.accounts, [defaultStudentAccount])
  }

  const selectedRole = readStorage(STORAGE_KEYS.selectedRole, null)

  if (!selectedRole) {
    writeStorage(STORAGE_KEYS.selectedRole, 'student')
  }
}

export function getAccounts() {
  initializeAuthStorage()
  return readStorage(STORAGE_KEYS.accounts, [])
}

export function getSession() {
  return readStorage(STORAGE_KEYS.session, null)
}

export function getSelectedRole() {
  return normalizeRole(readStorage(STORAGE_KEYS.selectedRole, 'student'))
}

export function setSelectedRole(role) {
  const normalizedRole = normalizeRole(role)
  writeStorage(STORAGE_KEYS.selectedRole, normalizedRole)
  return normalizedRole
}

export function getPasswordResetRequest() {
  return readStorage(STORAGE_KEYS.passwordReset, null)
}

export function clearPasswordResetRequest() {
  removeStorage(STORAGE_KEYS.passwordReset)
}

export function getAccountById(accountId) {
  return getAccounts().find((account) => account.id === accountId) ?? null
}

function getAccountByEmail(email, role) {
  const normalizedRole = normalizeRole(role)
  const normalizedEmail = email.trim().toLowerCase()

  return (
    getAccounts().find(
      (account) =>
        account.email.toLowerCase() === normalizedEmail &&
        account.role === normalizedRole,
    ) ?? null
  )
}

function saveAccounts(accounts) {
  writeStorage(STORAGE_KEYS.accounts, accounts)
}

export function getCurrentAccount() {
  const session = getSession()

  if (!session) {
    return null
  }

  return getAccountById(session.id)
}

export function registerAccount({ fullName, email, password, role }) {
  const normalizedRole = normalizeRole(role)
  const normalizedEmail = email.trim().toLowerCase()
  const trimmedName = fullName.trim()

  if (!trimmedName || !normalizedEmail || !password) {
    throw new Error('Please fill in every required field.')
  }

  const accounts = getAccounts()
  const accountExists = accounts.some(
    (account) =>
      account.email.toLowerCase() === normalizedEmail &&
      account.role === normalizedRole,
  )

  if (accountExists) {
    throw new Error('An account already exists for this email and role.')
  }

  const newAccount = {
    id: createId(),
    fullName: trimmedName,
    email: normalizedEmail,
    password,
    role: normalizedRole,
    verified: false,
    phone: '',
    department: normalizedRole === 'student' ? 'Software Engineering' : '',
    level: normalizedRole === 'student' ? 'Level 4' : '',
    bio: '',
    joinedAt: new Date().toISOString(),
  }

  saveAccounts([...accounts, newAccount])
  setSelectedRole(normalizedRole)

  return newAccount
}

export function verifyAccountEmail({ email, role }) {
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedRole = normalizeRole(role)
  let verifiedAccount = null

  const updatedAccounts = getAccounts().map((account) => {
    if (
      account.email.toLowerCase() === normalizedEmail &&
      account.role === normalizedRole
    ) {
      verifiedAccount = {
        ...account,
        verified: true,
      }
      return verifiedAccount
    }

    return account
  })

  if (!verifiedAccount) {
    throw new Error('We could not find this account to verify.')
  }

  saveAccounts(updatedAccounts)
  return verifiedAccount
}

export function createPasswordResetRequest({ email, role }) {
  const account = getAccountByEmail(email, role)

  if (!account) {
    throw new Error('No matching account was found for this email and role.')
  }

  const request = {
    email: account.email,
    role: account.role,
    verified: false,
    requestedAt: new Date().toISOString(),
  }

  writeStorage(STORAGE_KEYS.passwordReset, request)
  setSelectedRole(account.role)

  return request
}

export function verifyPasswordResetRequest({ email, role }) {
  const request = getPasswordResetRequest()
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedRole = normalizeRole(role)

  if (
    !request ||
    request.email.toLowerCase() !== normalizedEmail ||
    request.role !== normalizedRole
  ) {
    throw new Error('This password reset request is no longer available.')
  }

  const verifiedRequest = {
    ...request,
    verified: true,
    verifiedAt: new Date().toISOString(),
  }

  writeStorage(STORAGE_KEYS.passwordReset, verifiedRequest)
  return verifiedRequest
}

export function resetAccountPassword({ email, role, password }) {
  const request = getPasswordResetRequest()
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedRole = normalizeRole(role)
  let updatedAccount = null

  if (
    !request ||
    request.email.toLowerCase() !== normalizedEmail ||
    request.role !== normalizedRole ||
    !request.verified
  ) {
    throw new Error('Please verify your email before resetting the password.')
  }

  const updatedAccounts = getAccounts().map((account) => {
    if (
      account.email.toLowerCase() === normalizedEmail &&
      account.role === normalizedRole
    ) {
      updatedAccount = {
        ...account,
        password,
        verified: true,
      }
      return updatedAccount
    }

    return account
  })

  if (!updatedAccount) {
    throw new Error('We could not update the password for this account.')
  }

  saveAccounts(updatedAccounts)
  clearPasswordResetRequest()

  return updatedAccount
}

export function loginUser({ email, password, role }) {
  const account = getAccountByEmail(email, role)

  if (!account) {
    throw new Error('No account matched that email for the selected role.')
  }

  if (!account.verified) {
    throw new Error('Please verify your email before logging in.')
  }

  if (account.password !== password) {
    throw new Error('The password you entered is incorrect.')
  }

  const session = createSession(account)
  writeStorage(STORAGE_KEYS.session, session)
  setSelectedRole(account.role)

  return session
}

export function logoutUser() {
  removeStorage(STORAGE_KEYS.session)
}

export function updateUserProfile(updates) {
  const session = getSession()

  if (!session) {
    throw new Error('You must be logged in to update your profile.')
  }

  let updatedAccount = null

  const updatedAccounts = getAccounts().map((account) => {
    if (account.id === session.id) {
      updatedAccount = {
        ...account,
        fullName: updates.fullName?.trim() || account.fullName,
        phone: updates.phone?.trim() ?? account.phone,
        department: updates.department?.trim() ?? account.department,
        level: updates.level?.trim() ?? account.level,
        bio: updates.bio?.trim() ?? account.bio,
      }
      return updatedAccount
    }

    return account
  })

  if (!updatedAccount) {
    throw new Error('We could not find your profile to update it.')
  }

  saveAccounts(updatedAccounts)
  writeStorage(STORAGE_KEYS.session, createSession(updatedAccount))

  return updatedAccount
}
