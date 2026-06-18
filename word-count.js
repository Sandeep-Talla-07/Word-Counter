// class WordCounter {
//   constructor(input_text) {
//     this.input_text = input_text;
//     this.input_text.addEventListener("input", () => {
//       this.count();
//     });
//   }
//   count() {
//     let wordStat = this.getWordStat(this.input_text.value.trim());
//     this.emitEvent(wordStat);
//   }
//   emitEvent(wordStat) {
//     let countEvent = new CustomEvent("count", {
//       bubbles: true,
//       cancelable: true,
//       detail: { wordStat },
//     });
//     this.input_text.dispatchEvent(countEvent);
//   }
//   getWordStat(str) {
//     let matches = str.match(/\S+/g);
//     return {
//       characters: str.length,
//       words: matches ? matches.length : 0,
//     };
//   }
// }

// const input_text = document.querySelector("#text");
// const statEle = document.querySelector("#stat");

// new WordCounter(input_text);

// const render = (e) => {
//   statEle.innerHTML = `<p>You've written
//         <span class="highlight">${e.detail.wordStat.words} words</span>
//         and
//         <span class="highlight">${e.detail.wordStat.characters} characters</span>.</p>`;
// };

// input_text.addEventListener("count", render);

class WordCounter {
  constructor(inputText) {
    this.inputText = inputText;

    this.inputText.addEventListener("input", () => {
      this.count();
    });
  }

  count() {
    const wordStat = this.getWordStat(this.inputText.value);
    this.emitEvent(wordStat);
  }

  getWordStat(text) {
    const words = text.trim().match(/\S+/g);

    return {
      words: words ? words.length : 0,
      characters: text.length,
    };
  }

  emitEvent(wordStat) {
    const countEvent = new CustomEvent("count", {
      detail: {
        wordStat,
      },
    });

    this.inputText.dispatchEvent(countEvent);
  }
}

const inputText = document.querySelector("#text");
const statEle = document.querySelector("#stat");

new WordCounter(inputText);

inputText.addEventListener("count", (e) => {
  const { words, characters } = e.detail.wordStat;

  statEle.innerHTML = `
    You're written
    <span class="sat-highlight">${words}</span>
    words and
    <span class="sat-highlight">${characters}</span>
    characters
  `;
});
