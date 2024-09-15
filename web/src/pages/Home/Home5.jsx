import React from "react";

import ReviewSlider from "../../components/Home/ReviewSlider";

const Home5 = () => {
  return (
    <div className="flex flex-col gap-8 my-4 sm:px-10 px-2">
      <div className="flex justify-around text-3xl font-bold text-cyan-500">
        What Others Are Saying...
      </div>
      <ReviewSlider />
    </div>
  );
};

export default Home5;
