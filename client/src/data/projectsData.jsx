import { FaBlog, FaShoppingCart, FaUmbrellaBeach,FaMoneyCheckAlt  } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoDocumentAttach, IoLibrary } from "react-icons/io5";
import { FaTicket } from "react-icons/fa6";

import digital1 from "../assets/digital1.png";
import digital2 from "../assets/digital2.png";
import digital3 from "../assets/digital3.png";
import ticket1 from "../assets/ticket1.png";
import finance1 from "../assets/finance1.png";
import library1 from "../assets/library1.png";
import library2 from "../assets/library2.png";
import library3 from "../assets/library3.png";
import tourism1 from "../assets/tourism1.png";
import tourism2 from "../assets/tourism2.png";
import health1 from "../assets/health1.png";
import health2 from "../assets/health2.png";
import health3 from "../assets/health3.png";


const digitalGallery = [digital1, digital2, digital3];
const ticketGallery = [ticket1];
const financialGallery = [finance1];
const learningGallery = [];
const libraryGallery = [library1, library2, library3];
const tourismGallery = [tourism1, tourism2];
const blogGallery = [];
const ecomGallery = [];
const healthGallery = [health2, health1, health3];

export const Projects = [
  {
    slug: "digital-asset-approval-workflow-system",
    name: "Digital Asset Approval Workflow System",
    type: "Full Stack",
    description: [
      "Role based Authentication and Authorization",
      "Document management",
      " Document approval workflows",
    ],
    icon: <IoDocumentAttach className="text-3xl text-white" />,
    accent: "from-sky-500 to-cyan-500",
    technology: ["React Js", "Springboot", "Spring Security", "MySQL"],
    githubUrl:
      "https://github.com/TharshiTharshihan/Digital-Asset-Approval-Workflow-System",
    images: digitalGallery,
    overview:
      "A secure role-based Digital Asset Approval Workflow System built using Spring Boot, React.js, and MySQL. This system provides a centralized platform for managing digital document submissions, approvals, and workflow activities. Users can upload documents, administrators can monitor and assign documents, and managers can review and update assigned documents.",
    features: [
      "Role based authentication and authorization for Admins, Reviewers, and Uploaders",
      "Centralized document management with versioning",
      "Multi-stage approval workflow with notifications",
      "Audit trail for every approval action",
    ],
  },
  {
    slug: "ticket-booking-system",
    name: "Ticket Booking System",
    type: "Live Demo",
    description: [
      "JWT authentication with Admin,Agent,and User role-based access",
      "Built ticket creation, assignment, tracking, and management",
      "Agent communication and resolution of tickets",
    ],
    icon: <FaTicket className="text-3xl text-white" />,
    accent: "from-rose-500 to-pink-500",
    technology: ["React Js", "Springboot", "Spring Security", "MySQL"],
    githubUrl: "https://ticket-booking-blue-seven.vercel.app/",
    images: ticketGallery,
    overview:"A full-stack Ticket Booking System built using the MERN stack with role-based authentication (Admin, Agent, User). Users can create tickets, agents can manage them, and admins have full system control.",
    features: [
      "JWT based authentication with Admin, Agent, and User roles",
      "Ticket creation, assignment, and status tracking",
      "Agent-to-user communication thread per ticket",
      "Reporting dashboard for resolution metrics",
    ],
  },
  {
    slug: "library-management-system-devops",
    name: "Library Management System Full DevOps Pipeline",
    type: " DevOps",
    description: [
      " Architected a highly available, scalable application",
      "Containerized the application with Docker ",
      "Automated CI/CD pipelines using Jenkins, provisioned AWS EC2 infrastructure",
    ],
    icon: <IoLibrary className="text-3xl text-white" />,
    accent: "from-emerald-500 to-teal-500",
    technology: ["Docker", "Jenkins", "AWS"],
    githubUrl: "https://github.com/TharshiTharshihan/HealthCare",
    images: libraryGallery,
    overview:"A full-stack Library Management System with a complete DevOps pipeline, including containerization with Docker and automated CI/CD using Github Actions.",
    features: [
      "Highly available, scalable architecture design",
      "Dockerized application containers",
      "Automated CI/CD pipeline using Jenkins",
      "AWS EC2 infrastructure provisioning",
    ],
  },
  {
    slug: "financial-document-qna-system",
    name: "Financial Document Q&A System(RAG)",
    type: "AI-services",
    description: [
      "Built a RAG system for natural-language Q&A over financial documents, with grounded, cited answers  ",
      " Combined NLP + semantic search + LLM generation(Groq,OpenAI)to retrieve and answer accurately from large documents.",
      " Applied prompt engineering and validated accuracy on real SEC filing Q&A data",
    ],
    icon: <FaMoneyCheckAlt  className="text-3xl text-white" />,
    accent: "from-sky-500 to-cyan-500",
    technology: [" Python", "Streamlit", "OpenAI API", "TF-IDF","Word2Vec"],
    githubUrl:
      "https://financial-app-system-bcffpkdt88dxp8krfjg7pd.streamlit.app/",
    images: financialGallery,
    overview:
      "A RAG (Retrieval-Augmented Generation) system that lets users upload financial PDFs (10-K reports, earnings calls, SEC filings) and ask natural-language questions — returning grounded answers with page citations.",
    features: [
      "NLP: Text preprocessing, Word2Vec / TF-IDF baselines, Sentence-Transformer embeddings",
      "LLM: Groq (Llama 3.3 70B, free) or OpenAI GPT-4o-mini for grounded generation — with a free local fallback",
      "Prompt Engineering: Systematic 7-rule system prompt, chain-of-thought, few-shot in-context learning",
      "Evaluated on a real public dataset — virattt/financial-qa-10K (Q&A pairs from genuine SEC 10-K filings)",
    ],
  },
  {
    slug: "nexblog-microservices-platform",
    name: "NexBlog–Blog Management Microservices Platform",
    type: "Micro-services",
    description: [
      "Blog Service, Notification Service, and Auth Service microservices  ",
      " Designedreal time notification delivery pipeline ",
      " Applied software engineering best practices including modular architecture and API documentation",
    ],
    icon: <FaBlog className="text-3xl text-white" />,
    accent: "from-orange-500 to-amber-500",
    technology: ["React Js", "Node Js", "Docker", "Apache Kafka"],
    githubUrl:
      "https://github.com/TharshiTharshihan/Digital-Asset-Approval-Workflow-System",
    images: blogGallery,
    overview:"Architected and implemented independent Task Service,Notification Service,and User Service as decoupled microservices communicating via Apache Kafka event streaming– directly aligned with distributed enterprise system design Documented all architectural design decisions including serviceboundaries",
    features: [
      "Blog Service, Notification Service, and Auth Service microservices",
      "Real-time notification delivery pipeline via Kafka",
      "Modular architecture with independent deployability",
      "API documentation for each service",
    ],
  },
  {
    slug: "learning-management-system",
    name: "Learning Management System",
    type: "Web Platform",
    description: [
      "Students, Lecturers - Secure Authentication",
      "Lecturers can upload PDF materials",
      "Students can view and download",
    ],
    icon: <HiMiniComputerDesktop className="text-3xl text-white" />,
    accent: "from-violet-500 to-fuchsia-500",
    technology: ["React Js", "Node Js", "Multer", "MongoDB"],
    githubUrl: "https://github.com/TharshiTharshihan/student_management",
    images: learningGallery,
    overview:"",
    features: [
      "Secure authentication for students and lecturers",
      "PDF material upload for lecturers",
      "Material browsing and download for students",
      "Course-wise content organization",
    ],
  },
  {
    slug: "tourism-booking-management",
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
    technology: ["React Js", "Node Js", "Stripe", "MongoDB"],
    githubUrl:
      "https://github.com/UmeshaTharindiBandara/Software_Project_Mahaweli_Tours_SriLanka",
    images: tourismGallery,
    overview:
      "A full-stack Tourism Booking Management System built using React.js, Node.js, Stripe, and MongoDB. This system allows customers to browse and book tourism packages, while administrators can manage packages, locations, and customer details.",
    features: [
      "Role based authentication and authorization",
      "Admin package and location management",
      "Customer package customization and booking",
      "Integrated payment processing",
    ],
  },
  
  {
    slug: "ecommerce-web-application",
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
    technology: ["React Js", "Node Js", "Stripe", "MongoDB"],
    githubUrl: "https://github.com/TharshiTharshihan/Shoe-Shop",
    images: ecomGallery,
    overview:" A full-stack E-commerce Web Application built using React.js, Node.js, Stripe, and MongoDB. This application allows customers to browse products, add them to a shopping cart, and complete purchases securely.",
    features: [
      "Role based authentication and authorization",
      "Product catalog and inventory management",
      "Customer shopping cart and checkout flow",
      "Stripe powered payment processing",
    ],
  },
  {
    slug: "healthcare-mobile-application",
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
    images: healthGallery,
    overview:" A cross-platform healthcare mobile application built using Flutter and Dart, integrated with Firebase for authentication and real-time database functionality. The app enables patients to book appointments with doctors and receive notifications about their scheduled visits.",
    features: [
      "Firebase based role authentication and authorization",
      "Doctor appointment schedule management",
      "Patient appointment booking flow",
      "Push notifications for upcoming appointments",
    ],
  },
];

export default Projects;
