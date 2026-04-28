export function getInitials(name = 'LearnUp Student') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function sentenceCase(value = '') {
  if (!value) {
    return ''
  }

  return value[0].toUpperCase() + value.slice(1)
}
