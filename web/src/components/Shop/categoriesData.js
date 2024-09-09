const petProductsCategories = [
  { category: "food" },
  { category: "toys" },
  { category: "beds" },
  { category: "food" },
  { category: "accessories" },
  { category: "accessories" },
  { category: "skincare" },
  { category: "cages" },
  { category: "toys" },
  { category: "grooming" },
  { category: "heating" },
  { category: "food" },
  { category: "toys" },
  { category: "beds" },
  { category: "food" },
  { category: "accessories" },
  { category: "accessories" },
  { category: "skincare" },
  { category: "cages" },
  { category: "toys" },
  { category: "grooming" },
  { category: "heating" },
  { category: "food" },
  { category: "toys" },
  { category: "beds" },
  { category: "food" },
  { category: "accessories" },
  { category: "accessories" },
  { category: "skincare" },
  { category: "cages" },
  { category: "toys" },
  { category: "grooming" },
  { category: "heating" },
];

const uniqueCategories = [...new Set(petProductsCategories.map(category => category.category))];

// Transform into array of objects
const transformedCategories = uniqueCategories.map(category => ({ category }));

export default transformedCategories
