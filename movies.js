let id;
const apiKey = "bb127790";

const searchMovies = async (movie) => {
  try {
    let url = `https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`;

    //  fetching data
    let res = await fetch(url);

    let data = await res.json();

    return data.Search;
  } catch (err) {
    console.log(err);
  }
};

const appendMovies = (movies) => {
  document.getElementById("movies").innerHTML = null;

  movies.map((el) => {
    let { Poster, Title } = el;
    r̥;

    let box = document.createElement("div");
    box.setAttribute("class", "box");

    //   Image
    let image = document.createElement("img");
    image.src = Poster;

    // Title
    let title = document.createElement("h3");
    title.innerText = Title;

    // Button
    let button = document.createElement("button");
    button.innerText = "Book Now";

    box.append(image, title, button);
    document.getElementById("movies").append(box);

    button.addEventListener("click", () => {
      window.location.href = "./checkout.html";

      localStorage.setItem("movie", JSON.stringify(el));
    });
  });
};

const main = async () => {
  let movie = document.getElementById("search").value;

  //   Search movies
  let movies = await searchMovies(movie);

  // Append
  appendMovies(movies);
};

const debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  const wallet = document.getElementById("wallet");
  wallet.innerText = null;
  wallet.innerText = +amount;

  id = setTimeout(() => {
    func();
  }, delay);
};
