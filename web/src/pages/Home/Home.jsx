import React from "react";

import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";

const Home = () => {
  return (
    // Home Container
    <div className="flex flex-col sm:gap-16 mt-8">
      {/* Home Part 1 */}
      <Home1 />

      {/* Home Part 2 */}
      <Home2 />

      {/* Home Part 3 */}
      <Home3 />

      {/* Home Part 4 */}
      <Home4 />

      {/* Home Part 5 */}
      <Home5 />
    </div>
  );
};

export default Home;
