import auth from "@/auth";
import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns";
import { twMerge } from "tailwind-merge"
import config from "./config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);


export async function checkSession() {
  const session = await auth();
  return !!session;
}



export const formatTimeWithAMPM = (timeString: string) => {
  let [hours, minutes] = timeString.split(":").map(Number);
  let period = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
};


export const formatMonthDate = (dateString: string | number | Date) => {
  return format(new Date(dateString), "dd/MM/yyyy");
};
export const getExactRemainingTime = (dateString: string, timeString: string, appointmentStatus: string) => {
  const appointmentDateTime = new Date(`${dateString}T${timeString}`);
  const now = new Date();

  if (appointmentDateTime < now) {
    if (appointmentStatus === "complete") {
      return "Appointment Completed";

    } else {
      return "Appointment time has passed please reshcdule";
    }
  }

  let diffMs = appointmentDateTime.getTime() - now.getTime();
  let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `Starts in ${days} days, ${hours} hours, and ${minutes} minutes remaining`;
};

export const getMonthName = (monthNumber: number) => {
  return new Date(2000, monthNumber - 1).toLocaleString("en-US", { month: "long" });
};

export const formatDuration = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes} min`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes === 0
      ? `${hours} hr${hours > 1 ? 's' : ''}`
      : `${hours} hr${hours > 1 ? 's' : ''} ${remainingMinutes} min`;
  }
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 14)];
  }
  return color;
};


export const imageFormater = (url: string) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "api.estheva-clinic.com";
  console.log("BASE IMAGE URL:", baseImageUrl);

  if (!baseImageUrl) return url;

  return `${baseImageUrl}${url}`;
};