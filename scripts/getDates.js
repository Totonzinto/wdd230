
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
};
document.getElementById("lastModified").textContent = `Last modified: ${lastModified.toLocaleDateString("en-US", options)}`;
