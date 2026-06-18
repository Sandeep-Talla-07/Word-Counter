const input_text = document.querySelector("#text");
const statEle = document.querySelector("#stat");

new WordCounter(input_text);

const render = (e) => {
  statEle.innerHTML = `<p>You've written
        <span class="highlight">${e.detail.wordStat.words} words</span>
        and
        <span class="highlight">${e.detail.wordStat.characters} characters</span>.</p>`;
};

input_text.addEventListener("count", render);
