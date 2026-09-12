type IconProps = {
  className?: string
}

// Hand-drawn-style line illustrations of vegetables/fruit, brand accent only.
export function Pumpkin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M32 14v-5M27 11c1-3 8-3 9 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M32 16c11 0 18 9 18 20 0 12-9 18-18 18s-18-6-18-18c0-11 7-20 18-20Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M24 18c-2 8-2 26 0 34M32 16v38M40 18c2 8 2 26 0 34" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function Mushroom({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 30c0-11 10-18 22-18s22 7 22 18c-6 3-38 3-44 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="21" cy="24" r="1.4" fill="currentColor" />
      <circle cx="32" cy="20" r="1.6" fill="currentColor" />
      <circle cx="43" cy="25" r="1.2" fill="currentColor" />
      <path d="M26 31v16c0 4 3 6 6 6s6-2 6-6V31" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function Tomato({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M32 16c-3-4-8-5-11-3M32 16c3-4 8-5 11-3M32 16v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="32" cy="38" r="20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 30c4 3 9 4 14 4s10-1 14-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function Pea({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 32c0-8 6-16 20-16 12 0 20 6 20 16 0 9-8 16-20 16-13 0-20-7-20-16Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="21" cy="29" r="6" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="32" cy="33" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="43" cy="29" r="6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function Beet({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M28 14c2 3 2 7 0 9M36 14c-2 3-2 7 0 9M32 12v11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M32 22c9 0 14 9 14 18 0 10-6 18-14 18s-14-8-14-18c0-9 5-18 14-18Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M24 30c4 6 4 20 0 26M40 30c-4 6-4 20 0 26M32 22v36" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function Carrot({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M20 12l3 8M28 10l1 8M36 12l-3 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M18 22c0-3 3-4 10-4s10 1 10 4c0 14-5 30-10 30s-10-16-10-30Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M20 27c5 1 11 1 16 0M21 34c4 1 10 1 14 0M23 41c3 1 6 1 9 0" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export const VEGGIES = [Pumpkin, Mushroom, Tomato, Pea, Beet, Carrot]
