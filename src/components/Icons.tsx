type IconProps = {
  name: 'github' | 'linkedin' | 'arrow' | 'mail' | 'menu' | 'close'
  size?: number
}

export function Icon({ name, size = 20 }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a14 14 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 19c-3 .9-3-1.5-4.2-2" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }

  if (name === 'menu') {
    return (
      <svg {...commonProps}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  }

  if (name === 'close') {
    return (
      <svg {...commonProps}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

