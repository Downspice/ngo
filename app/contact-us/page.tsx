"use client"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";

export default function Home() {
  const { setTheme } = useTheme()
  setTheme("light");
  const link =usePathname();
  return (
    <>
      <div>{link}page</div>
    </>
  );
}