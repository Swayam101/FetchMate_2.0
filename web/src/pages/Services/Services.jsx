import React from "react";
import ServicesCard from "../../components/ServicesCard";

import ServiceThumb1 from "../../assets/servicesThumb.png";
import ServiceThumb2 from "../../assets/servicesThumb2.png";
import ServiceThumb3 from "../../assets/servicesThumb3.png";
import ServiceThumb4 from "../../assets/servicesThumb4.png";
import ServiceThumb5 from "../../assets/servicesThumb5.png";
import ServiceThumb6 from "../../assets/servicesThumb6.png";

// import Services2 from "./Services2";

const Services = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-appear");
      else entry.target.classList.remove("animate-appear");
    });
  });

  const appearers = document.querySelectorAll(".anim");
  appearers.forEach((el) => observer.observe(el));

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt neque officiis fugit adipisci quos nulla!";
  return (
    <div className="">
      <div className="mb-20 services-gradient">
        <div className="text-center text-[#FF9F1C] font-bold text-2xl pt-10 pb-12">
          Fetchmate Provided Services
        </div>
        <div className="flex flex-col items-center gap-8 sm:gap-14 w-full">
          <div className="flex sm:flex-row flex-col sm:gap-16 gap-8">
            <ServicesCard
              name={"Pet Day Care"}
              image={ServiceThumb1}
              description={description}
            />
            <ServicesCard
              name={"Dog Walking"}
              image={ServiceThumb2}
              description={description}
            />
            <ServicesCard
              name={"Overnight Stay"}
              image={ServiceThumb3}
              description={description}
            />
          </div>
          <div className="flex gap-8 sm:gap-16 sm:flex-row flex-col">
            <ServicesCard
              name={"Bird Watching"}
              image={ServiceThumb4}
              description={description}
            />
            <ServicesCard
              name={"Pet Training"}
              image={ServiceThumb5}
              description={description}
            />
            <ServicesCard
              name={"Pet Socialisation"}
              image={ServiceThumb6}
              description={description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
