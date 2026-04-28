export const STORAGE_KEYS = {
  accounts: 'learnup.accounts',
  session: 'learnup.session',
  selectedRole: 'learnup.selectedRole',
  passwordReset: 'learnup.passwordReset',
}

const hasWindow = typeof window !== 'undefined'

export function readStorage(key, fallback) {
  if (!hasWindow) {
    return fallback
  }

  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function writeStorage(key, value) {
  if (!hasWindow) {
    return
  }

  window.localStorage.setItem(key, JSON.stringify(value))
}

export function removeStorage(key) {
  if (!hasWindow) {
    return
  }

  window.localStorage.removeItem(key)
}
