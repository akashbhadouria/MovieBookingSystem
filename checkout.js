const append = () => {
  const box = document.getElementById("showMovie");
  box.innerHTML = null;

  const { Title: movieName, Poster } =
    JSON.parse(localStorage.getItem("movie")) || {};

  // Title
  const title = document.createElement("h1");
  title.innerText = movieName;

  // Image
  const poster = document.createElement("img");
  poster.src = Poster;

  box.append(title, poster);
};

// Amount in the wallet currently
let money = JSON.parse(localStorage.getItem("amount")) || 0;

const amount = () => {
  const wallet = document.getElementById("wallet");
  wallet.innerHTML = null;
  wallet.innerText = money;
};

const check = (event) => {
  event.preventDefault();
  let seatsToBook = document.getElementById("seats").value;

  if (seatsToBook * 100 > money || +seatsToBook === 0) {
    alert("Insufficient Balance!");
  } else {
    alert("Booking successful!");
    let amount = money - seatsToBook * 100;
    localStorage.setItem("amount", JSON.stringify(amount));
    window.location.reload();
  }
};

amount();
append();
