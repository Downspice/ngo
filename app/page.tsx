"use client";
import { useTheme } from "next-themes";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("light");
  return (
    <> 
      <div className="bg-scroll  bg-cover bg-[url('/africanStudents.jpg')] ">
        <HeroSection />
      </div>
    </>
  );
}
