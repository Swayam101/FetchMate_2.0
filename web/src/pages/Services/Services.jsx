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
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt neque officiis fugit adipisci quos nulla!";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Discover our comprehensive range of pet care services designed to keep your furry friends happy and healthy.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServicesCard
            name="Pet Day Care"
            image={ServiceThumb1}
            description={description}
          />
          <ServicesCard
            name="Dog Walking"
            image={ServiceThumb2}
            description={description}
          />
          <ServicesCard
            name="Overnight Stay"
            image={ServiceThumb3}
            description={description}
          />
          <ServicesCard
            name="Bird Watching"
            image={ServiceThumb4}
            description={description}
          />
          <ServicesCard
            name="Pet Training"
            image={ServiceThumb5}
            description={description}
          />
          <ServicesCard
            name="Pet Socialisation"
            image={ServiceThumb6}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
