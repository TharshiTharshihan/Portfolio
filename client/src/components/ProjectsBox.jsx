import { motion } from "framer-motion";
import {
  FaBlog,
  FaCheckCircle,
  FaGithub,
  FaShoppingCart,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoDocumentAttach,IoLibrary  } from "react-icons/io5";
import { FaTicket  } from "react-icons/fa6";
import { useState } from "react";

const Projects = [
  {
    name: "Digital Asset Approval Workflow System",
    type: "Full Stack",
    description: [
      "Role based Authentication and Authorization",
      "Document management",
      " Document approval workflows",
    ],
    icon: <IoDocumentAttach className="text-3xl text-white" />,
    accent: "from-sky-500 to-cyan-500",
    technology: ["React Js", "Springboot","Spring Security", "MySQL"],
    githubUrl:
      "https://github.com/TharshiTharshihan/Digital-Asset-Approval-Workflow-System",
  },
  {
    name: "Ticket Booking System",
    type: "Live Demo",
    description: [
      "JWT authentication with Admin,Agent,and User role-based access",
      "Built ticket creation, assignment, tracking, and management",
      "Agent communication and resolution of tickets",
    ],
    icon: <FaTicket className="text-3xl text-white" />,
    accent: "from-rose-500 to-pink-500",
    technology: ["React Js", "Springboot","Spring Security", "MySQL"],
    githubUrl:
      "https://ticket-booking-blue-seven.vercel.app/",
  },
  {
    name: "Library Management System Full DevOps Pipeline",
    type: "Mobile App",
    description: [
      " Architected a highly available, scalable application",
      "Containerized the application with Docker ",
      "Automated CI/CD pipelines using Jenkins, provisioned AWS EC2 infrastructure",
    ],
    icon: <IoLibrary  className="text-3xl text-white" />,
    accent: "from-emerald-500 to-teal-500",
    technology: ["Docker", "Jenkins", "AWS"],
    githubUrl: "https://github.com/TharshiTharshihan/HealthCare",
  },
  {
    name: "Learning Management System ",
    type: "Web Platform",
    description: [
      "Students, Lecturers - Secure Authentication",
      "Lecturers can upload PDF materials",
      "Students can view and download",
    ],
    icon: <HiMiniComputerDesktop className="text-3xl text-white" />,
    accent: "from-violet-500 to-fuchsia-500",
    technology: ["React Js", "Node Js","Multer", "MongoDB"],
    githubUrl: "https://github.com/TharshiTharshihan/student_management",
  },
  {
    name: "Complete Tourism Booking Management",
    type: "Web App",
    description: [
      "Role based Authentication and Authorization",
      "Admin package and location management, customer details",
      "Customer package customization and booking",
      "Payment",
    ],
    icon: <FaUmbrellaBeach className="text-3xl text-white" />,
    accent: "from-orange-500 to-amber-500",
        technology: ["React Js", "Node Js","Stripe", "MongoDB"],

    githubUrl: "https://github.com/UmeshaTharindiBandara/Software_Project_Mahaweli_Tours_SriLanka",
  },
  {
    name: "NexBlog–Blog Management Microservices Platform",
    type: "Micro-services",
    description: [
      "Blog Service, Notification Service, and Auth Service microservices  ",
      " Designedreal time notification delivery pipeline ",
      " Applied software engineering best practices including modular architecture and API documentation",
    ],
    icon: <FaBlog  className="text-3xl text-white" />,
    accent: "from-sky-500 to-cyan-500",
    technology: ["React Js", "Node Js","Docker", "Apache Kafka"],
    githubUrl:
      "https://github.com/TharshiTharshihan/Digital-Asset-Approval-Workflow-System",
  },
  {
    name: "Blog site (Next.js)",
    type: "Content Platform",
    description: ["Create posts", "Contact form"],
    icon: <FaBlog className="text-3xl text-white" />,
    accent: "from-rose-500 to-pink-500",
    technology: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/TharshiTharshihan/next-crudapp",
  },

  {
    name: "E-commerce Web Application",
    type: "Full Stack",
    description: [
      "Role based Authentication and Authorization",
      "Products management",
      "Customer shopping cart",
      "Payment",
    ],
    icon: <FaShoppingCart className="text-3xl text-white" />,
    accent: "from-sky-500 to-cyan-500",
    technology: ["React Js", "Node Js","Stripe", "MongoDB"],
    githubUrl: "https://github.com/TharshiTharshihan/Shoe-Shop",
  },
  {
    name: "Health care mobile Application (Flutter)",
    type: "Mobile App",
    description: [
      "Role based authentication and authorization using Firebase",
      "Doctor appointment schedule",
      "Patient appointment booking",
    ],
    icon: <MdOutlinePhoneAndroid className="text-3xl text-white" />,
    accent: "from-emerald-500 to-teal-500",
    technology: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/TharshiTharshihan/HealthCare",
  },
 
];

const ProjectsBox = () => {
  const ProjectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Projects.length / ProjectsPerPage);

  const indexOfLastProject = currentPage * ProjectsPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;

  const currentProjects = Projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <section id="projects-box" className="container my-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {currentProjects.map(
          ({
            name,
            description,
            icon,
            technology,
            accent,
            type,
            githubUrl,
          }) => (
            <motion.div
              key={name}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)] dark:border-amber-400 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(255,255,255,0.08)] dark:hover:shadow-[0_24px_65px_rgba(255,255,255,0.12)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className={`h-2 bg-gradient-to-r ${accent}`} />

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary dark:bg-white/10 dark:text-white/80">
                      {type}
                    </span>
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg shadow-black/10`}
                      >
                        {icon}
                      </div>
                      <h1 className="max-w-[24rem] text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[1.7rem]">
                        {name}
                      </h1>
                    </div>
                  </div>

                  <div className="hidden rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:bg-white/10 dark:text-white/70 sm:block">
                    Case Study
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-white/5">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/80">
                    Highlights
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-white/80 sm:text-base">
                    {description.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technology?.map((tech, index) => {
                      const colors = [
                        "bg-green-50 text-green-600",
                        "bg-blue-50 text-blue-600",
                        "bg-purple-50 text-purple-600",
                        "bg-orange-50 text-orange-600",
                        "bg-pink-50 text-pink-600",
                        "bg-cyan-50 text-cyan-600",
                      ];

                      return (
                        <span
                          key={tech}
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            colors[index % colors.length]
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  {githubUrl ? (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105"
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-white/80">
                      <FaGithub className="text-lg" />
                      Add repo link 
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ),
        )}
      </div>
      <div className="mt-10 flex justify-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-12 w-12 rounded-full font-semibold transition-all duration-300
      ${
        currentPage === index + 1
          ? "bg-primary text-white shadow-lg scale-110"
          : "bg-white text-slate-700 border border-slate-300 hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white dark:border-white/20"
      }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsBox;
