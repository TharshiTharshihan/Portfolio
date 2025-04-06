import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Projects = [
  {
    name: "E-commerce Web Application (MERN Stack)",
    description: [
      "Role based Authentication and Authorization",
      " Products management",
      " Customer Shopping Cart",
      "Payment",
    ],
    image: "https://picsum.photos/200/300",
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
    image:
      "https://www.pexels.com/photo/person-holding-silver-iphone-7-887751/",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-blue-100/10",
  },
  {
    name: "Learning Management System  (MERN Stack) ",
    description: [
      "Students, Lecturers - Secure Authentication",
      " Lecturers Can Upload Pdf ",
      " Students Can View & Download",
    ],
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
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
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "  Blog site (Next.js)",
    description: [" Create Posts", "  Contact Form"],
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
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
            className={`rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay hover:scale-105 duration-300 bg-cyan-700`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>
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
