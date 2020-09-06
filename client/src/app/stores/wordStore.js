import { decorate, observable, action, runInAction, computed } from "mobx";
import agent from "../api/agent";
import { toast } from "react-toastify";

export default class WordStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  loading = false;
  wordRegistry = new Map();
  word = null;
  wordCountRegistry = [];

  loadWords = async () => {
    this.loading = true;
    try {
      const wordBank = await agent.WordBank.list();
      console.log("asfljsdfp;ioasd:", wordBank.data);
      runInAction("loading words", () => {
        wordBank.data.forEach((word) => {
          this.wordRegistry.set(word.word_idx, word);
        });
        this.loading = false;
        console.log(this.wordRegistry);
      });
    } catch (error) {
      runInAction("load words error", () => {
        this.loading = false;
      });
    }
  };

  get wordsByCategories() {
    return this.groupWordsByCategory(Array.from(this.wordRegistry.values()));
  }

  groupWordsByCategory(words) {
    // sorts all words and reduces them into categories
    const wordsSorted = words.sort((a, b) => {
      return a.category_idx.localeCompare(b.category_idx);
    });
    return Object.entries(
      wordsSorted.reduce((words, word) => {
        const category = word.category_idx;
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

  // matchCategory = () => {
  //   try {
  //     const categories = await agent.WordBank.categories();
  //     runInAction("loading categories", () => {
  //       this.wordRegistry.values.forEach()
  //       this.loading = false;
  //     });
  //   } catch (error) {
  //     runInAction("load words error", () => {
  //       this.loading = false;
  //     });
  //   }
  // }

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
          runInAction("load word count error", () => { });
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
});
