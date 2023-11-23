import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/services", name: "Services", id: "services" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "*", name: "Not Found", id: "not-found" },
  ];

  return (
    <nav className="text-black p-6 bg-red-100">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose /> : <MdMenuOpen className=" " />}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static
      ${open ? "top-12" : "-top-60"}
      bg-yellow-100 md:bg-red-100 px-6  rounded-lg`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
