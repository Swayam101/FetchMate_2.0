import React from "react";
import Feature1 from "../../assets/how-we-work-1.avif";
import Feature2 from "../../assets/how-we-work-2.webp";
import Feature3 from "../../assets/how-we-work-3.webp";
import HowWeWorkCard from "../../components/HowWeWorkCard";
import { IoPaw } from "react-icons/io5";

const Home3 = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9F1C]/10 rounded-full mb-6">
            <IoPaw className="text-[#FF9F1C]" />
            <span className="text-[#FF9F1C] font-medium">How We Work</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;ve streamlined our process to ensure the best experience for both pet parents and sitters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HowWeWorkCard
            image={Feature1}
            heading="We onboard & verify the Pet Sitters"
            description="This verification is performed using AI on the basis of documentation provided by the pet sitter"
            serialNo="1"
          />
          <HowWeWorkCard
            serialNo="2"
            image={Feature2}
            heading="Building a Trusted Network of Pet Enthusiasts"
            description="In our community, authenticity reigns. Join us, where trust and shared passion for pets create lasting connections."
          />
          <HowWeWorkCard
            image={Feature3}
            heading="Curated Pet Products, Quality Assured"
            description="Explore joy in simplicity. Our carefully curated pet products guarantee quality for an elevated pet experience."
            serialNo="3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home3;
