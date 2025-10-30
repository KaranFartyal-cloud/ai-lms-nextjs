import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const subToImage = {
  science: "/science.png",
  maths: "/maths.png",
  language: "/language.png",
  coding: "/coding.png",
  history: "/history.png",
  economics: "/economics.png",
};

export function getImage(subject: string): string {
  return subToImage[subject as keyof typeof subToImage];
}
