const button = document.getElementById("complete-session");
const counter = document.getElementById("revision-count");
const resetButton = document.getElementById("reset-progress");

const total = 5;
const storageKey = "study-plan-completed-sessions";

// 1. Recover previously saved progress
const saved = Number(localStorage.getItem(storageKey));

let completed = Number.isFinite(saved)
  ? Math.max(0, Math.min(total, Math.floor(saved)))
  : 0;

// 2. Update the interface
function renderProgress() {
  counter.textContent =
    `${completed} of ${total} study sessions completed.`;

  button.disabled = completed >= total;
}

// 3. Handle button clicks
button.addEventListener("click", () => {
  if (completed < total) {
    completed++;

    // Save progress in the browser
    localStorage.setItem(storageKey, String(completed));

    renderProgress();
  }
});
resetButton.addEventListener("click", () => {
  completed = 0;

  localStorage.removeItem(storageKey);

  renderProgress();
});

// 4. Display recovered progress on page load
renderProgress();