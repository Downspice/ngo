import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex space-x-4">
      <Link href={"https://www.linkedin.com/in/joseph-awer-07868819b/"}>
        <div className="border  rounded-full bg-primary">
          <Linkedin className=" text-background m-2">
            <a href="https://www.linkedin.com/in/joseph-awer-07868819b/"></a>
          </Linkedin>
        </div>
      </Link>

      <Link href={"https://www.instagram.com/1downspice/"}>
        <div className="border  rounded-full bg-primary">
          <Facebook className="  text-background m-2" />
        </div>
      </Link>
      <Link href={"https://www.instagram.com/1downspice/"}>
        <div className="border  rounded-full bg-primary">
          <Twitter className="  text-background m-2" />
        </div>
      </Link>
      <Link href={"https://www.instagram.com/1downspice/"}>
        <div className="border  rounded-full bg-primary">
          <Instagram className="  text-background m-2" />
        </div>
      </Link>
    </div>
  );
}
