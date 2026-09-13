const value = document.querySelector("#value");
const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const reset = document.querySelector("#reset");
const lastAction = document.querySelector("#last-action");

let count = 0;

function change() {
  value.textContent = count;
}

function actionUpdate(update) {
  lastAction.textContent = update;
}

decrement.addEventListener("click", function (event) {
  count--;
  change();
  actionUpdate("Decrease");
});

increment.addEventListener("click", function (event) {
  count++;
  change();
  actionUpdate("Increase");
});

reset.addEventListener("click", function (event) {
  count = 0;
  change();
  actionUpdate("Reset");
});

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowDown" || event.key == "d") {
    count--;
    change();
    actionUpdate("Decrease");
  }

  if (event.key == "ArrowUp" || event.key == "i") {
    count++;
    change();
    actionUpdate("Increase");
  }

  if (event.key == "r") {
    count = 0;
    change();
    actionUpdate("Reset");
  }
});