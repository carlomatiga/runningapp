const filterButtons = document.querySelectorAll(".segmented-control button");
const runItems = document.querySelectorAll(".run-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    const filter = button.textContent.trim().toLowerCase();
    runItems.forEach((item) => {
      const description = item.textContent.toLowerCase();
      const shouldShow =
        filter === "all" ||
        (filter === "easy" && description.includes("conversational")) ||
        (filter === "fast" && description.includes("tempo"));

      item.hidden = !shouldShow;
    });
  });
});

document.querySelectorAll(".run-item button, .hero-actions button:first-child").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Joined";
    button.setAttribute("aria-pressed", "true");
  });
});
