import { ClassValue, clsx } from 'clsx'
import ms from 'ms'
import { twMerge } from 'tailwind-merge'

export function timeAgo(timestamp: Date, timeOnly?: boolean): string {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
