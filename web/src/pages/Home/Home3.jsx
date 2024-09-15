import React from "react";

import Feature1 from "../../assets/how-we-work-1.avif";
import Feature2 from "../../assets/how-we-work-2.webp";
import Feature3 from "../../assets/how-we-work-3.webp";
import HowWeWorkCard from "../../components/HowWeWorkCard";

const Home3 = () => {
  return (
    <div className="px-8 flex flex-col sm:gap-8 gap-4 items-center sm:block sm:mt-0 mt-16">
      <div className="text-center text-2xl sm:my-12 my-4 font-bold text-[#ff9f1c]">
        How We Work
      </div>
      <div className="flex flex-col gap-12 sm:gap-0 sm:flex-row sm:justify-evenly sm:items-center ">
        <HowWeWorkCard
          image={Feature1}
          heading={" We on board & verify the Pet Sitters"}
          description={
            "This verification is performed using AI on the basis of documentation provided by the pet sitter"
          }
          serialNo={"1"}
        />
        <HowWeWorkCard
          serialNo={"2"}
          image={Feature2}
          heading={"Building a Trusted Network of Pet Enthusiasts"}
          description={
            "In our community, authenticity reigns. Join us, where trust and shared passion for pets create lasting connections."
          }
        />

        <HowWeWorkCard
          image={Feature3}
          heading={"Curated Pet Products, Quality Assured"}
          description={
            "Explore joy in simplicity. Our carefully curated pet products guarantee quality for an elevated pet experience."
          }
          serialNo={"3"}
        />
      </div>
    </div>
  );
};

export default Home3;
