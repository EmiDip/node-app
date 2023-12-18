require("dotenv").config();

const name = process.env.MY_NAME || "Bob";
const city = process.env.MY_CITY || "Aix";
const language = process.env.MY_LANGUAGE || "Javascript";

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
