const joke = document.querySelector(".joke");
const jokeBtn = document.querySelector(".getJoke");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accepts: "application/json",
    },
  };

  const data = fetch(https://icanhazdadjoke.com/)
}
