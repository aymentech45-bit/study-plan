const button = document.getElementById("complete-session");
const counter = document.getElementById("revision-count");

let completed = 0;
const total = 5;

button.addEventListener("click", () => {
  if (completed < total) {
    completed++;

    counter.textContent = `${completed} of ${total} study sessions completed.`;
  }

  if (completed === total) {
    button.disabled = true;
  }
});
