// ****************************************************************
let text = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Updated: ${text}`;
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
};
document.getElementById("lastModified").textContent = `Last modified: ${lastModified.toLocaleDateString("en-US", options)}`;

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
