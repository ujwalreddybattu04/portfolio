"use client";
import {
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGit,
  FaLinux,
  FaJenkins,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiFlask,
  SiGooglecloud,
  SiJavascript,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiNumpy,
  SiFirebase,
  SiDjango,
  SiJquery,
} from "react-icons/si";


import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "I'm not just learning tech — I’m building with it. My goal is to create AI systems that think, learn, and help people. I believe technology should be smart, ethical, and impactful — and I want to be part of building that future.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Battu Ujwal Reddy",
    },
    {
      fieldName: "Phone",
      fieldValue: "7731810314"
    },
    {
      fieldName: "Email",
      fieldValue: "ujwalreddybattu@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Hyderabad",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu , Hindi",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:"",
    
    skillList: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiGooglecloud />, name: "Google Cloud" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPytorch />, name: "PyTorch" },
      { icon: <SiOpencv />, name: "OpenCV" },
      { icon: <SiScikitlearn />, name: "Scikit-learn" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <FaJenkins />, name: "Jenkins" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <FaGit />, name: "Git" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiJquery />, name: "jQuery" },
    ],
    
};



// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Solid academic foundation in computer science, enhanced by specialized certifications.",
    items: [
      {
        institution: "Indian Institute Of Information Technology-Vadodara",
        degree: "B-Tech in Computer Science and Engineering",
        duration: "December 2022 - May 2026",
        coursework: [
          "Database Management Systems",
          "Object Oriented Programming",
          "Data Structures",
          "Introduction to Cryptography",
          "Machine Learning",
          "Deep Learning"
        ]
      },
      {
        institution: "Narayana Junior College",
        degree: "Intermediate",
        duration: "July 2020 - May 2022",
        coursework: [
          "Maths",
          "Physics",
          "Chemistry",
          "English",
          "Sanskrit"
        ]
      }
    ]
    
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] xl:h-[582px]"
        >
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{about.title}</h3>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base uppercase text-white/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              {/* Display the skill name directly on smaller screens */}
                              <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                            {/* Tooltip content only visible on xl screens and larger */}
                            <TooltipContent className="hidden xl:block">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

           

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{education.title}</h3>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
  {education.items.map((item, index) => (
    <li
      key={index}
      className="bg-secondary py-6 px-8 rounded-xl flex flex-col gap-3"
    >
      <span className="text-accent text-sm font-medium">{item.duration}</span>
      <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
      <p className="text-white/70 text-sm">{item.institution}</p>

      {/* Relevant Coursework */}
      {item.coursework && (
        <div className="mt-2 text-white/70 text-sm">
          <p className="mb-1 font-medium text-white/80">Relevant Coursework:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            {item.coursework.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ))}
</ul>

                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
