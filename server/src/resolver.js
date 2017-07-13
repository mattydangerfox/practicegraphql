const panels = [
  {id: 1, title: "Breo Adoption Trend"},
  {id: 2, title: "Tylenol Adoption Trend"},
];

export const resolvers = {
  Query: {
    panels: () => panels
  }
};
