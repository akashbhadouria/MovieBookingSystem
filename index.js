const getData = (event) => {
  event.preventDefault();
  const form = document.getElementById("form");

  let amount = +JSON.parse(localStorage.getItem("amount")) || 0;
  amount += Number(form.num.value);

  localStorage.setItem("amount", JSON.stringify(amount));

  //   selecting the div where we need to show the value of current balance
  const wallet = document.getElementById("wallet");
  wallet.innerHTML = null;
  wallet.innerText = JSON.parse(localStorage.getItem("amount")) || 0;
};
