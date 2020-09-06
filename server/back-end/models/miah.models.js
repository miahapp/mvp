// user
const User = function (user) {
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.dob = user.dob;
  this.email = user.email;
  this.password = user.password;
};

const Word = function (word) {
  this.word_name = word.word_name;
  this.created_at = Date.now(); // add new timestamp ;
  this.updated_at = Date.now(); // add new timestamp ;
  this.use_yn = word.use_yn;
  this.word_icon = word.word_icon;
  this.category_idx = word.category_idx;
};

module.exports = User;
module.exports = Word;
