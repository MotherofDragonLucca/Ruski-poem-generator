function displayPoem(response) {
  console.log("poem generated");
  const poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "2cdb3f5e83a43fbc4a0edc02t2ef5ofc";
  let context =
    "You are a Russian Poem expert and love to write short romantic poems in Russian. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Then add a a <br /> and provide translation to English and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem after translation only and NOT at the beginning. Add <br /> before signing.";
  let prompt = `User instructions: Generate a Russian poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
