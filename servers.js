const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const readline = require("readline");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  // Prompt the user to enter a story prompt
  userInterface.question("Enter Code to be Converted ", async (prompt) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    // Close the readline interface when done
    userInterface.close();
  });
}

run();
