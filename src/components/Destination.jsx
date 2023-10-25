import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Most Popular Destinations
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img1}
          title="Paris, France"
          para="Paris, the city of romance, boasts the iconic landmarks like Eiffel Tower and Louvre Museum, where you find the historical art treasures."
        />
        <DestinationCard
          img={img2}
          title="Cairo, Egypt"
          para="Cairo is the city where ancient splendor is present. Explore pyramids, museums and culture."
        />
        <DestinationCard
          img={img3}
          title="Rome, Italy"
          para="Rome is an eternal city of timeless beauty. Marvel at ancient ruins, art, and exquisite cuisine."
        />
      </div>
    </div>
  );
};

export default Destination;
