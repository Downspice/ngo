"use client";
import TeamMember from "@/components/TeamMember";
import TeamMemberCard from "@/components/ui/teamMemberCard";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("light");
  return (
    <>
      <h1 className="text-center">Who are we?</h1>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
          margin: "20px",
          padding: 0,
        }}
      >
        <h2 className="text-center">Building Tomorrow Foundation</h2>
        <h4 className="text-center"> Mission, Values, and History</h4>

        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-1">
              <p>
                At Building Tomorrow Foundation, our mission is to empower
                underprivileged children in Ghana and across Africa by providing
                access to quality education. We believe that education is the
                most powerful tool to break the cycle of poverty and create
                opportunities for a brighter future. Our goal is to ensure that
                every child, regardless of their background, has the resources,
                mentorship, and opportunities needed to thrive. We strive to
                create an equitable world where every child can unlock their
                full potential and contribute positively to society.
              </p>

              <p className="mt-4">Our approach is centered on:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Delivering inclusive and high-quality education, catering to
                  the unique needs of each child.
                </li>
                <li>
                  Creating safe and nurturing learning environments that support
                  emotional, intellectual, and social growth.
                </li>
                <li>
                  Fostering long-term sustainability by building strategic
                  partnerships and creating programs that provide lasting
                  educational benefits to communities.
                </li>
              </ul>
              <p className="mt-4">
                Above all, we are driven by the belief that education is not a
                privilege but a fundamental human right.
              </p>
            </div>
            <div className="md:flex-none md:w-1/3 md:ml-5 mt-5 md:mt-0">
              <Image
                src={"/logo.png"}
                height={200}
                width={200}
                alt="pictorial description of our approach"
                className="float-right md:float-none"
              />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-4">Values</h2>
          <div className="flex flex-col md:flex-row">
            {/* Floating image for small screens */}

            <div className="md:flex-1">
              <p>
                Our work at Building Tomorrow Foundation is guided by core
                values that shape every decision we make:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  <strong>Empathy:</strong> We listen to the needs and dreams of
                  the children we serve, ensuring that our programs and efforts
                  are tailored to make a meaningful impact in their lives.
                </li>
                <div className="md:hidden float-left mr-4 mb-2">
                  <Image
                    src={"/logo.png"}
                    height={100}
                    width={100}
                    alt="pictorial description of our approach"
                  />
                </div>
                <li>
                  <strong>Inclusion:</strong> We are committed to breaking down
                  barriers to education. Every child, regardless of gender,
                  ability, or socioeconomic status, has a right to learn and
                  thrive.
                </li>
                <li>
                  <strong>Excellence in Education:</strong> We are dedicated to
                  providing high-quality educational programs that foster both
                  academic and personal growth, ensuring children are prepared
                  for future success.
                </li>
                <li>
                  <strong>Collaboration:</strong> Our mission requires
                  collective effort. We work closely with schools, local
                  communities, governments, and other organizations to build
                  sustainable, impactful education programs.
                </li>
                <li>
                  <strong>Transparency and Accountability:</strong> We take
                  pride in our transparent approach to operations, ensuring that
                  every action and every dollar spent reflects our dedication to
                  empowering children through education.
                </li>
                <li>
                  <strong>Empowerment:</strong> We equip children not only with
                  education but also with the confidence and skills to take
                  control of their future. We aim to inspire leadership,
                  self-confidence, and a sense of responsibility.
                </li>
              </ul>
            </div>

            {/* Image for larger screens */}
            <div className="md:w-1/3 md:ml-5 hidden md:block">
              <Image
                src={"/logo.png"}
                height={200}
                width={200}
                alt="pictorial description of our approach"
              />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-4">History</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-1">
              <p>
                Building Tomorrow Foundation was established in 2006 by a group
                of passionate educators and community activists who were united
                by the belief that education is the key to overcoming poverty.
                Our founders started small, working within local communities in
                rural and underserved areas of Ghana to provide basic
                educational services to children who lacked access to schools or
                formal education.
              </p>
              <p className="mt-4">
                In the beginning, we set up makeshift learning centers that
                provided children with literacy and numeracy education, as well
                as health and life skills training. These early efforts were
                carried out by a dedicated group of volunteers, who worked
                tirelessly with limited resources. Despite the challenges, we
                quickly gained the trust of local communities, and our programs
                began to expand.
              </p>
              <p className="mt-4">
                By 2012, Building Tomorrow Foundation had grown significantly,
                forming partnerships with local governments and schools. During
                this period, we launched our &quot;Education for Every
                Child&quot; initiative, which became one of our most impactful
                programs. The initiative focused on removing barriers to
                education by providing children with scholarships, school
                supplies, uniforms, and meals.
              </p>
              <p className="mt-4">
                As the foundation grew, so did the scope of our work. By 2017,
                we expanded our efforts to include teacher training, ensuring
                that educators in under-resourced areas were equipped to provide
                high-quality, engaging, and inclusive education. This marked a
                major shift for our organization, as we began to address
                systemic issues within the educational system, promoting
                sustainable change.
              </p>
              <div className="md:w-1/3 md:ml-5 mt-5 md:mt-0">
                <Image
                  src={"/logo.png"}
                  height={200}
                  width={200}
                  alt="pictorial description of our approach"
                  className="float-right md:float-none"
                />
              </div>
              <p className="mt-4">
                In 2020, in response to the global COVID-19 pandemic, Building
                Tomorrow Foundation quickly adapted by launching a new
                &quot;Digital Learning for All&quot; program. This initiative
                provided children in remote and underserved communities with
                access to online learning platforms, digital devices, and
                internet connectivity. By ensuring that children could continue
                their education, even during times of crisis, we reaffirmed our
                commitment to educational equity.
              </p>
              <p className="mt-4">
                Looking forward, we are excited to continue our mission of
                building brighter futures for children in Ghana and across
                Africa. With a focus on sustainability, innovation, and
                collaboration, Building Tomorrow Foundation will continue to
                provide children with the opportunities they need to realize
                their full potential and break free from the cycle of poverty.
              </p>
            </div>
          </div>
        </section>
      </div>

      <TeamMember />
      <div className="container mx-auto my-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard
            name="Jessica Dobrev"
            title="Backend Lead"
            imageUrl="/teamMember.jpg"
          />
        </div>
      </div>
    </>
  );
}
