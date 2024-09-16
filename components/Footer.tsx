"use client"
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <>
      <section className="pt-4 mt-2 border-t">
        <div className="flex justify-center ">
          <Image src={"/logo.png"} height={40} width={40} alt="logo" />
          <h3 className="align-middle">Kids Future</h3>
        </div>
        <div className="flex justify-center ">
          <h2>Empowering the Future Through Education</h2>
          
        </div>
        <div className="flex justify-center ">
        <h4>
            "Join us in shaping the next generation by supporting our programs
            today."
          </h4></div>
          <div className="flex justify-center">
          <Socials/></div>
        <div className="flex justify-center space-x-4 ">
          <Link href="/" legacyBehavior passHref>
            Home
          </Link>

          <Link href="/about-us" legacyBehavior passHref>
            About Us
          </Link>

          <Link href="/our-initiatives" legacyBehavior passHref>
            Our Initiatives
          </Link>

          <Link href="/contact-us" legacyBehavior passHref>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
