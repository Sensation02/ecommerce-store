import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// clsx is used to merge classes together (like classnames)
// to instal it run: npm i clsx tailwind-merge (or yarn add clsx tailwind-merge)

// next function is used to merge tailwind classes with clsx (classnames) classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
