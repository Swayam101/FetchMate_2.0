import React from "react";
import ReviewSlider from "../../components/Home/ReviewSlider";
import { IoPaw } from "react-icons/io5";

const Home5 = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9F1C]/10 rounded-full mb-6">
            <IoPaw className="text-[#FF9F1C]" />
            <span className="text-[#FF9F1C] font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Pet Parents Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our community has to say about their experiences with FetchMate.
          </p>
        </div>

        <ReviewSlider />
      </div>
    </div>
  );
};

export default Home5;
