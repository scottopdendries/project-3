// Dark Mode
function modeToggle() {
  const body = document.querySelector("body");
  const themeButton = document.querySelector("#theme-button");
  const welcome = document.querySelector("#welcome");
  const missionText = document.querySelector("#mission-text");

  if (body.style.backgroundColor === "var(--white)") {
    body.style.backgroundColor = "var(--navy)";
    themeButton.innerHTML = "Light Mode";
    welcome.style.color = "var(--white)";
    missionText.style.color = "var(--white)";
  } else {
    body.style.backgroundColor = "var(--white)";
    themeButton.innerHTML = "Dark Mode";
    welcome.style.color = "var(--black)";
    missionText.style.color = "var(--black)";
  }
};