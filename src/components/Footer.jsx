import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-slate-700 text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Travel Agency</h1>
          <p className=" text-sm">
            With Travel Agency you will experience nice travels and the best
            tourist destinations.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destinations
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-yellow-200 transition-all cursor-pointer"
              href="/"
            >
              Paris, France
            </a>
            <a
              className=" hover:text-yellow-200 transition-all cursor-pointer"
              href="/"
            >
              Cairo, Egypt
            </a>
            <a
              className=" hover:text-yellow-200 transition-all cursor-pointer"
              href="/"
            >
              Rome, Italy
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-yellow-200 transition-all cursor-pointer"
              href="/"
            >
              Contact Us
            </a>
            <a
              className=" hover:text-yellow-200 transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
            <a
              className=" hover:text-yellow-200 transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-yellow-200 transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-yellow-200 transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-yellow-200 transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <div className=" text-center py-4">
          @copyright developed by
          <a
            className=" text-yellow-200 cursor-pointer"
            href="https://github.com/arthurbicego"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Arthur Bicego Quintaneira
          </a>{" "}
          | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
