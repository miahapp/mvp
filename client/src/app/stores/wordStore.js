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
      runInAction("loading words", () => {
        wordBank.forEach((word) => {
          this.wordRegistry.set(word.id, word);
        });
        this.loading = false;
      });
    } catch (error) {
      runInAction("load words error", () => {
        this.loading = false;
      });
      console.log(error);
    }
  };

  get wordsByCategories() {
    return this.groupwordsByCategory(Array.from(this.wordRegistry.values()));
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
});
