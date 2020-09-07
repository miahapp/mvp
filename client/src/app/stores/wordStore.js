import { decorate, observable, action, runInAction, computed } from "mobx";
import agent from "../api/agent";
import { toast } from "react-toastify";
import { matchCategoryToIdx } from "../../app/common/util/util.js";

export default class WordStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  loading = false;
  wordRegistry = new Map();
  word = null;
  wordCountRegistry = [];
  categories = [];

  loadCategories = async () => {
    try {
      const categoriesFromBackEnd = await agent.WordBank.categories();
      this.categories = categoriesFromBackEnd.data;
      runInAction("loading categories", () => {});
    } catch (error) {
      toast.error("Cannot retrieve/match categories");
    }
  };

  loadWords = async () => {
    this.loading = true;
    try {
      this.loadCategories();
      const wordBank = await agent.WordBank.list();
      runInAction("loading words", () => {
        wordBank.data.forEach((word) => {
          word = matchCategoryToIdx(word, this.categories);
          this.wordRegistry.set(word.word_idx, word);
        });
        this.loading = false;
      });
    } catch (error) {
      runInAction("load words error", () => {
        this.loading = false;
      });
    }
  };

  get wordsByCategories() {
    const words = this.groupWordsByCategory(
      Array.from(this.wordRegistry.values())
    );
    // console.log(words);
    // let newWords = [words[1], words[4], words[5], words[3], words[0], words[2]]
    return words;
  }

  groupWordsByCategory(words) {
    // sorts all words and reduces them into categories
    const wordsSorted = words.sort((a, b) => {
      return a.category.localeCompare(b.category);
    });

    return Object.entries(
      wordsSorted.reduce((words, word) => {
        const category = word.category;
        words[category] = words[category] ? [...words[category], word] : [word];
        return words;
      }, {})
    );
  }

  loadWord = async (id) => {
    let word = this.getWord(id);
    if (word) {
      this.word = word;
      return word;
    } else {
      this.loading = true;
      let word = await agent.WordBank.details(id);
      try {
        runInAction("getting word", () => {
          this.word = word;
          this.wordRegistry.set(word.id, word);
          this.loading = false;
        });
      } catch (error) {
        runInAction("get word error", () => {
          this.loading = false;
        });
        console.log(error);
      }
    }
  };

  getWord = (id) => {
    return this.wordRegistry.get(id);
  };

  clearWord = () => {
    this.word = null;
  };

  loadWordCount = async () => {
    try {
      if (this.rootStore.userStore.user) {
        try {
          const wordCount = await agent.wordCount.list();
          runInAction("loading words", () => {
            wordCount.forEach((word) => {
              this.wordCountRegistry.set(word, wordCount);
            });
          });
        } catch (error) {
          runInAction("load word count error", () => {});
          console.log(error);
        }
      }
    } catch (error) {
      toast.error("Please log in or register to find out your word stats");
    }
  };
}
decorate(WordStore, {
  wordRegistry: observable,
  word: observable,
  loading: observable,
  loadWords: action,
  loadWord: action,
  clearWord: action,
  loadWordCount: action,
  wordCountRegistry: observable,
  wordsByCategories: computed,
  loadCategories: action,
  categories: observable,
});
