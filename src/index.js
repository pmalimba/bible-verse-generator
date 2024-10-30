function generateVerse(event) {
  event.preventDefault();

  new Typewriter("#verse", {
    strings: "Be still, and know that I'm God",
    autoStart: true,
    Cursor: "",
    delay: 1,
  });
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);
