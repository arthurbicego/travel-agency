/* eslint-disable react/no-unescaped-entities */
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-slate-700 gap-10">
      <div className=" w-full lg:w-2/4 space-y-5">
        <h1 className=" font-semibold text-4xl text-white leading-tight">
          At Travel Agency, we are ready to provide you with the best trip of
          your life!
        </h1>
        <p className=" text-[#bdbdbd] pb-5">
          Your dream vacation awaits, and we're here to make it a reality.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Now" backgroundColor="bg-yellow-200" />
        </Link>
      </div>
      <div className=" w-full lg:w-2/4">
        <img className=" rounded-2xl" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
