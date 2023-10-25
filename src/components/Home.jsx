import Button from "../layouts/Button";
import img from "../assets/img/hero.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5">
      <div className=" flex flex-col text-center lg:text-start gap-5">
        <h1 className=" font-semibold text-5xl leading-tight">Welcome!</h1>
        <p>
          With Travel Agency you will experience nice travels and the best
          tourist destinations.
        </p>

        <div className=" lg:pl-24">
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button title="Destinations" backgroundColor="bg-yellow-200" />
          </Link>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 w-full lg:w-4/5">
        <img
          src={img}
          alt="Travel concept with worldwide landmarks. Image by Freepik."
        />
      </div>
      <div className=" flex flex-col text-center"></div>
    </div>
  );
};

export default Home;
