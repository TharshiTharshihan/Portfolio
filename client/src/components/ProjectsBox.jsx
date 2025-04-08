import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaBlog } from "react-icons/fa";

import { FaUmbrellaBeach } from "react-icons/fa";

const Projects = [
  {
    name: "E-commerce Web Application (MERN Stack)",
    description: [
      "Role based Authentication and Authorization",
      " Products management",
      " Customer Shopping Cart",
      "Payment",
    ],
    icon: <FaShoppingCart className="text-4xl" fill />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: " Health care mobile Application (Flutter)",
    description: [
      " Role based Authentication and Authorization using Firebase",
      "  Doctor Appointment Schedule",
      "  Patient Appointment booking",
    ],

    icon: <MdOutlinePhoneAndroid className="text-4xl" fill />,
    bgColor: "bg-blue-100/10",
  },
  {
    name: "Learning Management System  (MERN Stack) ",
    description: [
      "Students, Lecturers - Secure Authentication",
      " Lecturers Can Upload Pdf ",
      " Students Can View & Download",
    ],
    icon: <HiMiniComputerDesktop className="text-4xl" fill />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: " Complete Tourism Booking Management Web Application (MERN Stack)",
    description: [
      "Role based Authentication and Authorization",
      " Admin - Package and Location management , Customer Details",
      "Customer - View , Customizaion and Booking Packages",
      "Payment",
    ],
    icon: <FaUmbrellaBeach className="text-4xl" fill />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "  Blog site (Next.js)",
    description: [" Create Posts", "  Contact Form"],
    icon: <FaBlog className="text-4xl" fill />,
    bgColor: "bg-orange-500/70",
  },
];

const ProjectsBox = () => {
  return (
    <section id="Projects" className="my-10 container cursor-pointer ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Projects.map(({ name, description, image, icon }) => (
          <div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay hover:scale-105 duration-300 dark:bg-cyan-900 bg-gray-500 `}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold text-amber-400">{name}</h1>
              <p className="font-serif">
                {Array.isArray(description) ? (
                  <ul>
                    {description.map((item, index) => (
                      <li key={index}> {item}</li>
                    ))}
                  </ul>
                ) : (
                  description
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsBox;
