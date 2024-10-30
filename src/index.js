function displayVerse(response) {
  console.log("verse generated");
  new Typewriter("#verse", {
    strings: response.data.answer,
    autoStart: true,
    Cursor: "",
    delay: 1,
  });
}

function generateVerse(event) {
  event.preventDefault();

  //build API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "51035d71b84ac5cet75eof3fb55a84d0";
  let prompt = `Please bless me with ${instructionsInput.value}today`;
  let context = `User instructions are: You are an anointed man/woman of God who loves sharing the word of God. Please generate a 4-line bible versevin basic HTML. Make sure to follow the user's instructions below:`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=51035d71b84ac5cet75eof3fb55a84d0`;
  //make the call to the PI using axios

  let verseElement = document.querySelector("#verse");
  verseElement.classList.remove("hidden");
  verseElement.innerHTML = `<div class="generating">Generating your request for ${instructionsInput.value}</div>`;

  console.log("Generating verse");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayVerse);
  //display the generated poem
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);
