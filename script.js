// Objetivo: criar uma pagina web que conta a frequencia de diferentes letras e palavras em um bloco de texto
// criar espaço e botao para inserir texto e dispara a contagem
// criar divs para apresentar resultados
// atribuir um evento ao botao
// receber numa variavel o que foi digitado
// passar essa variavel numa função para contar quantas palavras tem
// passar essa variavel numa função para contar quantas letras tem
// ir armazenando uma contagem de palavras e letras em um array
// retornar esses valores nas divs criadas no inicio

// criar espaço e botao para inserir texto e dispara a contagem
const button = document.getElementById("countButton");
const letters = document.getElementById("lettersDiv");
const wordsDiv = document.getElementById("wordsDiv");

// atribuir um evento ao botao
button.addEventListener("click", function () {
  letters.innerHTML = "";
  wordsDiv.innerHTML = "";
  // receber numa variavel o que foi digitado
  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  // Isto muda todas as letras para minúsculas
  typedText = typedText.replace(/[^a-z'\s]+/g, "");

  const letterCounts = {};
  const wordsCounts = {};
  // passar essa variavel numa função para contar quantas letras tem
  for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }

  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent;
    letters.appendChild(span);
  }

  words = typedText.split(/\s/);
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (wordsCounts[currentWord] === undefined) {
      wordsCounts[currentWord] = 1;
    } else {
      wordsCounts[currentWord]++;
    }
  }

  for (let word in wordsCounts) {
    const span = document.createElement("span");
    const wordsContent = `"${word}": ${wordsCounts[word]},`;
    span.innerText = wordsContent;
    wordsDiv.appendChild(span);
  }
});
