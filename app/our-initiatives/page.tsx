"use client";
import ProjectCards from "@/components/ui/projectCards";
import { useTheme } from "next-themes"; 

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("light"); 
  type ProjectCard = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    introduction: string;
    introductionImageSrc: string;
    body: string;
    bodyImageSrc: string;
    conclusion: string;
    conclusionImageSrc: string;
  };
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: "Community Library",
      description:
        "A library for underprivileged children to access books and educational resources.",
      imageSrc: "/logo.png",
      introduction:
        "The Community Library project emerged as a response to the critical lack of access to books and educational materials in underprivileged communities. For many children, a library is the only place where they can find textbooks, storybooks, and reference materials that are otherwise unaffordable. Our vision is to create an environment where children can immerse themselves in reading, learning, and growth. The library is not only a resource hub but a symbol of empowerment, giving children the tools they need to pursue their academic goals.",
      introductionImageSrc: "/logo.png",
      body: "Our library started with a small collection of donated books, serving a handful of children from the surrounding area. Over time, it has expanded to house thousands of titles covering various genres, including fiction, non-fiction, history, science, and technology. The Community Library is staffed by volunteers who conduct reading sessions, organize storytelling events, and host creative writing workshops. Additionally, we offer digital resources, including e-books and educational software, allowing students to learn through interactive media. With the help of local partners, we’ve also managed to provide internet access and computers, giving children the opportunity to research and develop digital skills alongside their reading and writing capabilities.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "As we look to the future, our goal is to replicate the success of this library in other underserved areas. Our vision is to establish a network of libraries across the region, ensuring that no child is deprived of the chance to read, learn, and grow. We are currently fundraising to expand the library’s collection and provide mobile library services to remote communities, reaching children who cannot travel to the library. The impact so far has been profound, and with continued support, we believe we can reach even more children and make a lasting difference in their lives.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 2,
      title: "Mobile Classrooms",
      description:
        "Bringing education to remote communities via mobile classrooms.",
      imageSrc: "/logo.png",
      introduction:
        "Education should be a right, not a privilege, yet many children in rural and remote areas do not have access to proper schooling due to infrastructure challenges. The Mobile Classrooms project was conceived to address this issue. These classrooms on wheels travel to the most isolated communities, bringing education directly to children who would otherwise be left behind. By making education accessible to all, we aim to ensure that every child, no matter their geographic location, can receive a quality education.",
      introductionImageSrc: "/logo.png",
      body: "Our mobile classrooms are specially designed vehicles equipped with everything a traditional classroom would have—desks, chalkboards, teaching materials, and digital devices. The classrooms are staffed by qualified teachers who rotate between villages, ensuring that each community receives consistent, high-quality instruction. The curriculum covers core subjects such as math, science, reading, and writing, but we also offer vocational training in subjects like carpentry, sewing, and agriculture for older students. The mobility of these classrooms allows us to serve multiple communities, reaching hundreds of students each week. The use of digital tablets and mobile internet has also allowed students to access online resources, bridging the gap between them and the rest of the world.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "Since its inception, the Mobile Classrooms project has been a resounding success. We’ve seen significant improvement in literacy rates and overall academic performance among students in these communities. Moving forward, we plan to increase the number of mobile units, enabling us to cover more ground and serve more children. We are also exploring partnerships with local governments and organizations to further expand the project and ensure its sustainability. Our ultimate goal is to make mobile classrooms a common sight in all rural regions, ensuring that no child is left behind.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 3,
      title: "Digital Learning Hub",
      description:
        "A hub for teaching children digital skills and computer literacy.",
      imageSrc: "/logo.png",
      introduction:
        "In today’s digital age, computer literacy is as essential as reading and writing. Yet, for many children in underprivileged communities, access to technology is limited or nonexistent. The Digital Learning Hub aims to bridge this gap by providing a space where children can learn crucial digital skills, from basic computer usage to coding and digital design. This initiative seeks to equip the next generation with the tools they need to succeed in a rapidly evolving, tech-driven world.",
      introductionImageSrc: "/logo.png",
      body: "The Digital Learning Hub offers a wide variety of courses, tailored to different age groups and skill levels. Younger children start with basic computer literacy, learning how to use word processors, browse the internet safely, and understand the basics of email communication. Older students move on to more advanced topics, such as coding, web design, and even robotics. The hub is equipped with modern computers, high-speed internet, and interactive learning tools to make the experience as engaging as possible. In addition to structured classes, the hub also offers open lab hours where children can explore their interests, work on school assignments, or participate in online learning platforms.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The impact of the Digital Learning Hub has been transformative. Students who had never touched a computer are now proficient in basic programming, and some are even developing their own websites and apps. We are proud to see the enthusiasm and creativity that this project has sparked. In the coming months, we plan to introduce more advanced courses in areas like data science and artificial intelligence, further expanding the opportunities available to these children. Our long-term vision is to create a network of Digital Learning Hubs in multiple communities, giving every child the chance to thrive in the digital age.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 4,
      title: "Teacher Training Program",
      description:
        "A program to train local teachers in modern education techniques.",
      imageSrc: "/logo.png",
      introduction:
        "Teachers play a critical role in shaping the future of children, especially in underprivileged communities where resources are limited. However, many teachers in these regions do not have access to the latest educational tools and methods. The Teacher Training Program was launched to address this gap, providing local educators with the training they need to improve their teaching skills and provide a higher quality of education to their students.",
      introductionImageSrc: "/logo.png",
      body: "The Teacher Training Program covers a wide range of topics, including modern pedagogical techniques, classroom management, and the use of digital tools in education. One of the key components of the program is inclusive education, which focuses on teaching methods that cater to students of all learning abilities, ensuring that no child is left behind. The training is delivered through a combination of workshops, seminars, and hands-on teaching practice. We also provide ongoing support to the teachers after they complete the program, offering mentorship and additional resources as they implement what they’ve learned in their classrooms.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The results of the Teacher Training Program have been overwhelmingly positive. Teachers report that they feel more confident in their abilities, and students are more engaged and perform better academically. The ripple effect of this program is evident, as better-trained teachers lead to better-educated students, who in turn have a greater chance of breaking the cycle of poverty. As we expand the program, we hope to reach more educators and, by extension, improve the educational outcomes for thousands of children in underprivileged communities.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 5,
      title: "STEM Workshops",
      description:
        "Workshops aimed at introducing children to Science, Technology, Engineering, and Math.",
      imageSrc: "/logo.png",
      introduction:
        "Our STEM Workshops are designed to inspire curiosity and creativity in children, focusing on Science, Technology, Engineering, and Math. These subjects are essential in today’s world, yet they are often underrepresented in the education systems of underprivileged communities.",
      introductionImageSrc: "/logo.png",
      body: "The workshops introduce children to basic concepts in these fields through hands-on experiments and projects. For example, students might build simple robots, design circuits, or explore chemical reactions. The goal is to make learning fun and interactive while also helping students see the practical applications of these subjects. We also provide mentoring and support for students who show particular interest or aptitude in STEM, helping them pursue further education in these areas.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The STEM Workshops have sparked a passion for learning in many children. By making these subjects accessible and engaging, we are helping to cultivate the next generation of scientists, engineers, and innovators. We plan to expand the workshops and introduce more advanced topics as the program grows.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 6,
      title: "Health and Hygiene Education",
      description:
        "Teaching children about the importance of personal health and hygiene.",
      imageSrc: "/logo.png",
      introduction:
        "Many children in underprivileged communities face health issues due to a lack of education about personal hygiene and access to basic healthcare. Our Health and Hygiene Education project aims to address this gap by teaching children about the importance of personal hygiene, nutrition, and preventative healthcare practices.",
      introductionImageSrc: "/logo.png",
      body: "This program provides workshops on topics like handwashing, dental care, and nutrition, all of which are essential for maintaining good health. We’ve partnered with local healthcare providers to conduct regular check-ups and health camps, where children receive free screenings and vaccinations. The program also emphasizes the importance of mental health, teaching children techniques for stress management and emotional well-being.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Health and Hygiene Education project has led to significant improvements in the overall health of participating children. With continued support, we aim to expand the program to more communities, reaching thousands of children and ensuring that they grow up healthy and informed about their personal well-being.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 7,
      title: "Scholarship Program",
      description:
        "Providing scholarships to deserving children for higher education.",
      imageSrc: "/logo.png",
      introduction:
        "The Scholarship Program was created to give deserving children from underprivileged backgrounds the opportunity to pursue higher education. Many of these children demonstrate remarkable potential but face financial barriers that prevent them from continuing their education after primary or secondary school.",
      introductionImageSrc: "/logo.png",
      body: "Through this program, we offer full and partial scholarships to cover tuition fees, textbooks, and other educational materials. In addition, we provide mentorship and guidance to help students navigate the challenges of higher education. Our scholarship recipients have gone on to excel in fields such as engineering, medicine, and the arts, breaking the cycle of poverty and serving as role models for younger students in their communities.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Scholarship Program has already changed the lives of many children. As we continue to grow, we hope to expand our funding to support more students and help them achieve their dreams of higher education. This initiative is a vital part of our mission to ensure that every child has the chance to succeed, regardless of their background.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 8,
      title: "Arts and Culture Program",
      description:
        "Fostering creativity and cultural appreciation through art and performance.",
      imageSrc: "/logo.png",
      introduction:
        "The Arts and Culture Program aims to introduce children to the world of art, music, and performance. In many underprivileged communities, opportunities to explore creative expression are limited. This program seeks to provide a platform for children to discover their artistic talents and appreciate cultural heritage.",
      introductionImageSrc: "/logo.png",
      body: "The program includes various workshops and classes in visual arts, music, dance, and drama. Children participate in art projects, learn to play musical instruments, and perform in school plays and dance recitals. We also organize cultural events where children can showcase their talents and learn about different cultures through performances and exhibitions. These activities not only enhance their creative skills but also boost their confidence and self-esteem.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Arts and Culture Program has been a tremendous success, with many children discovering a passion for the arts and gaining recognition for their talents. We plan to expand the program to include more diverse art forms and cultural experiences. By nurturing creativity, we are helping children build a more vibrant and enriched future.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 9,
      title: "Sports and Recreation Initiative",
      description:
        "Encouraging physical activity and teamwork through sports and recreation.",
      imageSrc: "/logo.png",
      introduction:
        "Physical activity is crucial for a child’s development, yet many children in underprivileged areas lack access to organized sports and recreational activities. The Sports and Recreation Initiative was developed to provide children with opportunities to engage in physical activities, learn about teamwork, and enjoy the benefits of a healthy lifestyle.",
      introductionImageSrc: "/logo.png",
      body: "The initiative offers a variety of sports programs, including soccer, basketball, volleyball, and track and field. We also organize recreational activities such as hiking, swimming, and outdoor games. Professional coaches and trainers volunteer their time to teach children the fundamentals of each sport, as well as the values of teamwork and fair play. Regular tournaments and competitions provide children with a platform to showcase their skills and compete in a positive environment.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Sports and Recreation Initiative has positively impacted many children, helping them develop a love for sports and an understanding of the importance of physical health. We are committed to expanding this program to reach more communities and introduce new sports and activities. By promoting physical activity and teamwork, we are contributing to the overall well-being and development of children.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 10,
      title: "Environmental Education Project",
      description:
        "Teaching children about environmental conservation and sustainability.",
      imageSrc: "/logo.png",
      introduction:
        "Environmental education is essential for raising awareness about the importance of protecting our planet. The Environmental Education Project aims to teach children about conservation, sustainability, and the impact of human activities on the environment. By instilling these values early on, we hope to foster a generation of environmentally conscious individuals.",
      introductionImageSrc: "/logo.png",
      body: "The project includes interactive lessons on topics such as recycling, waste management, energy conservation, and biodiversity. Children participate in hands-on activities like planting trees, creating recycling crafts, and conducting environmental surveys. We also organize field trips to nature reserves and recycling facilities to provide real-world experience. Partnering with environmental organizations, we offer workshops and guest lectures to enhance the educational experience.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Environmental Education Project has successfully raised awareness about environmental issues and inspired children to take action in their communities. Moving forward, we plan to develop new initiatives focused on climate change and renewable energy. By educating children about environmental stewardship, we are helping to create a sustainable future for everyone.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 11,
      title: "Parent Education and Support",
      description:
        "Providing parents with resources and knowledge to support their children’s education.",
      imageSrc: "/logo.png",
      introduction:
        "Supporting children’s education requires involvement from both educators and parents. The Parent Education and Support program was established to empower parents with the knowledge and tools they need to support their children’s learning at home and engage effectively with the educational system.",
      introductionImageSrc: "/logo.png",
      body: "The program offers workshops and resources on topics such as effective parenting strategies, helping with homework, and understanding the school curriculum. We also provide one-on-one counseling and support for parents facing specific challenges. By fostering a collaborative relationship between parents and educators, we aim to create a supportive learning environment for children. Regular meetings and feedback sessions help parents stay informed and involved in their child’s education.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Parent Education and Support program has strengthened the partnership between parents and schools, leading to improved academic performance and greater parent involvement. We plan to expand the program to include more diverse topics and reach more families. By equipping parents with the right tools and knowledge, we are enhancing the overall educational experience for children.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 12,
      title: "Nutrition and Wellness Program",
      description:
        "Providing nutritious meals and wellness education to children.",
      imageSrc: "/logo.png",
      introduction:
        "Proper nutrition is vital for a child’s growth and development. The Nutrition and Wellness Program was created to address the issue of malnutrition and educate children about healthy eating habits. By ensuring that children receive nutritious meals and learn about wellness, we aim to improve their overall health and well-being.",
      introductionImageSrc: "/logo.png",
      body: "The program includes daily meal services that provide balanced and nutritious food to children in need. We also conduct educational sessions on topics like healthy eating, food safety, and the benefits of various nutrients. Partnering with local nutritionists and health professionals, we offer cooking classes and workshops on meal planning. Additionally, we provide resources for families to support healthy eating habits at home.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Nutrition and Wellness Program has made a significant impact on the health of participating children. We have seen improvements in physical health, concentration, and overall well-being. Our goal is to continue expanding the program and provide additional support to families to ensure that every child has access to nutritious food and wellness education.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 13,
      title: "Community Engagement and Volunteering",
      description:
        "Encouraging community involvement and volunteerism to support local initiatives.",
      imageSrc: "/logo.png",
      introduction:
        "Community involvement is crucial for creating sustainable change and fostering a sense of ownership among local residents. The Community Engagement and Volunteering program was developed to encourage individuals to contribute their time and skills to support local initiatives and improve their communities.",
      introductionImageSrc: "/logo.png",
      body: "The program provides opportunities for community members to get involved in various projects, such as organizing events, leading workshops, and participating in cleanup drives. We also offer training and support for volunteers to help them effectively contribute to our initiatives. By building a network of engaged citizens, we aim to strengthen community ties and empower individuals to make a positive impact.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Community Engagement and Volunteering program has successfully mobilized many individuals and groups to support local causes. We are committed to expanding our volunteer base and offering new opportunities for involvement. By fostering a culture of volunteerism, we are helping to build stronger, more resilient communities.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 14,
      title: "Entrepreneurship and Skill Development",
      description:
        "Providing training and resources for young entrepreneurs and skill development.",
      imageSrc: "/logo.png",
      introduction:
        "Entrepreneurship and skill development are essential for empowering young people and providing them with the tools to create their own opportunities. The Entrepreneurship and Skill Development program aims to equip youth with the skills and resources they need to start their own businesses and develop valuable professional skills.",
      introductionImageSrc: "/logo.png",
      body: "The program includes workshops and training sessions on topics such as business planning, financial management, and marketing. We also offer mentorship and support for young entrepreneurs as they launch their ventures. In addition to entrepreneurship training, we provide skill development programs in areas like computer programming, graphic design, and carpentry. These skills are critical for securing employment and creating a successful career.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Entrepreneurship and Skill Development program has empowered many young people to pursue their dreams and build successful careers. As we continue to expand the program, we aim to provide additional resources and support to help more youth achieve their goals. By fostering entrepreneurship and skill development, we are contributing to economic growth and creating opportunities for future generations.",
      conclusionImageSrc: "/logo.png",
    },
    {
      id: 15,
      title: "Emergency Relief Fund",
      description:
        "Providing immediate assistance to communities affected by natural disasters and emergencies.",
      imageSrc: "/logo.png",
      introduction:
        "Natural disasters and emergencies can have devastating effects on communities, particularly those that are already vulnerable. The Emergency Relief Fund was established to provide immediate assistance to affected communities, offering support in the aftermath of disasters and helping them recover and rebuild.",
      introductionImageSrc: "/logo.png",
      body: "The fund provides financial assistance for emergency needs such as food, water, medical supplies, and temporary shelter. We also collaborate with local organizations to coordinate relief efforts and ensure that aid reaches those who need it most. In addition to immediate relief, we offer support for long-term recovery, including rebuilding infrastructure, providing mental health services, and assisting with the restoration of livelihoods.",
      bodyImageSrc: "/logo.png",
      conclusion:
        "The Emergency Relief Fund has been instrumental in providing support to communities during times of crisis. Our ongoing goal is to strengthen our response capabilities and increase our capacity to assist in emergencies. By providing timely and effective relief, we are helping communities recover and build resilience in the face of adversity.",
      conclusionImageSrc: "/logo.png",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-align">Want to now what we have been up to?</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] p-[0.2rem]  ">
        {projects.map((project, index) => (
          <ProjectCards
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            id={project.id}
          />
        ))}
      </div>
    </>
  );
}
