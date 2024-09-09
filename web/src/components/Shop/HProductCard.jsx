import React from "react";


const HProductCard = ({cardHeight}) => {
  return (
    <div style={{height:cardHeight}} className="horizontal-card border-0 grid grid-cols-3 hover:border border-yellow-500">
      <div className="prod-image pr-4 col-span-1">
        <img
          className="h-full w-full"  
          src="https://5.imimg.com/data5/ANDROID/Default/2021/9/GP/QO/RD/24313868/product-jpeg.jpg"
          alt="Some Bag Image"
        />
      </div>
      <div className="product-details text-sm w-full col-span-2 flex flex-col justify-between">
        <h3 className="product-title font-medium w-full">Lorem ipsum dolor sit Ipsum Ipsum</h3>
        <span className="star-component"># # # # # #</span>
        <span className="some-detail text-xs">SHHH</span>
        <span className="product-price text-yellow-400">$ 18.00</span>
      </div>
    </div>
  );
};

export default HProductCard;
