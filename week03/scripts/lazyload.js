// ****************************************************************
let text = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Updated: ${text}`;

// ********************* copyright year ****************************************
new Date().getFullYear;
let date = new Date();
console.log(date.getFullYear());
const copyrightFooter = `
 <p>
  Copyright © ${new Date().getFullYear()} | Chioma Nwosu | Lagos, Nigeria
 </p>
`;
document.getElementById("copyright").innerHTML = copyrightFooter;

// ********************************************************************