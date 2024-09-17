"use client"; 

import { useEffect, useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomePage(true);
    }
    else{
      setIsHomePage(false);
    }
  }, []);

  return (
    <div
      className={`${isHomePage ? " bg-fixed bg-no-repeat bg-contain  bg-[url('/africanStudents.jpg')]" : ""} `}
    >
      {children}
    </div>
  );
}
