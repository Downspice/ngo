"use client"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const { setTheme } = useTheme()
  setTheme("light");
  const link =usePathname();
  return (
    <> 
      <HeroSection/>
    </>
  );
}
