// Assign a color based on the category of a word
export const categoryToColor = {
  interjections: "#91DCE2",
  pronouns: "#5ED2DA",
  verbs: "#5BC4E2",
  prepositions: "#6EABE7",
  adjectives: "#7B95E6",
  nouns: "#8091CD",
};

// export const combinedDateAndTime = (date) => {
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const dateString = `${year}-${month}-${day}`;
//   return new Date(dateString + " " + "00:00:00");
// };

export const matchCategoryToIdx = (word, categories) => {
  word.category = categories[word.category_idx - 1].category_name;
  return word;
};
