import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { isAxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getResponseErrorMessage = (error: unknown, fallback?: string) =>
  isAxiosError(error) && error.response
    ? error.response.data.message || error.message
    : error instanceof Error
    ? error.message
    : fallback ?? "Terjadi kesalahan, coba lagi nanti";
