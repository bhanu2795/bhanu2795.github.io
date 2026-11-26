const screens = [
  "Select Riverfront Station as the pickup point for this sample trip.",
  "Review the sample route from Riverfront Station to Market Square.",
  "Watch a simulated driver approach the pickup point.",
];
const buttons = [...document.querySelectorAll(".steps button")];
const map = document.querySelector(".map-panel");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    map.classList.toggle("confirmed", index > 0);
    map.classList.toggle("tracking", index === 2);
    document.querySelector("#screen").textContent = button.textContent;
    document.querySelector("#detail").textContent = screens[index];
  });
});
