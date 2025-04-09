import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaBlog } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = [
  {
    name: "E-commerce Web Application (MERN Stack)",
    description: [
      "Role based Authentication and Authorization",
      " Products management",
      " Customer Shopping Cart",
      "Payment",
    ],
    icon: <FaShoppingCart className="text-4xl text-primary" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: " Health care mobile Application (Flutter)",
    description: [
      " Role based Authentication and Authorization using Firebase",
      "  Doctor Appointment Schedule",
      "  Patient Appointment booking",
    ],

    icon: <MdOutlinePhoneAndroid className="text-4xl text-primary" />,
    bgColor: "bg-blue-100/10",
  },
  {
    name: "Learning Management System  (MERN Stack) ",
    description: [
      "Students, Lecturers - Secure Authentication",
      " Lecturers Can Upload Pdf ",
      " Students Can View & Download",
    ],
    icon: <HiMiniComputerDesktop className="text-4xl text-primary" />,
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
    icon: <FaUmbrellaBeach className="text-4xl text-primary" />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "  Blog site (Next.js)",
    description: [" Create Posts", "  Contact Form"],
    icon: <FaBlog className="text-4xl text-primary" />,
  },
];
const ProjectsBox = () => {
  return (
    <section id="Projects" className="my-10 container cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {Projects.map(({ name, description, image, icon }) => (
          <motion.div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay hover:scale-105 duration-300 dark:bg-gray-800 bg-gray-500`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="p-3 md:p-16  space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold text-amber-500">{name}</h1>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsBox;
