import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileSlug(fileName: string) {
  return fileName.split('.')[0].split('-').pop()?.toLowerCase();
}

export default function isProduction() {
  return import.meta.env.PROD;
}