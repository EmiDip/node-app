require("dotenv").config();

const name = process.env.MY_NAME || "Default Name";
const city = process.env.MY_CITY || "Default City";
const language = process.env.MY_LANGUAGE || "Default Language";

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
