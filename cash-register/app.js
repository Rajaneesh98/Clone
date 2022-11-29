let billAmount = document.querySelector(".bill");

let cashGiven = document.querySelector(".cash");

const button = document.querySelector("#btn");

let error = document.querySelector(".errormsg");

const notes = document.querySelectorAll(".notes");

console.log(notes);

let Currencynotes = [2000, 500, 100, 20, 10, 5, 1];

function clickHandler() {
  bill = Number(billAmount.value);
  cash = Number(cashGiven.value);

  if (bill <= 0 || cash <= 0) {
    error.innerText = "Enter Proper Values";
  } else if (cash < bill) {
    error.innerText = "Call the security";
  } else {
    let changeReturn = cash - bill;
    for (let i = 0; i < Currencynotes.length; i++) {
      let returnCount = Math.trunc(changeReturn / Currencynotes[i]);
      changeReturn = changeReturn % Currencynotes[i];
      console.log(
        `currency ${Currencynotes[i]} changeReturn ${changeReturn} returnCount ${returnCount}`
      );
      notes[i].innerText = returnCount;
    }
  }
}

button.addEventListener("click", clickHandler);
