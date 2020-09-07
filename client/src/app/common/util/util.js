// Assign a color based on the category of a word
export const categoryToColor = {
  adjectives: "#91DCE2",
  interjections: "#5ED2DA",
  nouns: "#5BC4E2",
  prepositions: "#6EABE7",
  pronouns: "#7B95E6",
  verbs: "#8091CD",
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
