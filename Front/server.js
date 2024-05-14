// Import necessary modules
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const readline = require("readline");

// Load environment variables from .env file
dotenv.config();

// Initialize GoogleGenerativeAI with API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Create a readline interface for user input/output
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define an asynchronous function to handle the main logic
async function run() {
  // Prompt the user to enter a code snippet
  userInterface.question("Enter Code to be Converted ", async (prompt) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate content based on the user's input
    const result = await model.generateContent(prompt);

    // Extract the response from the generation result
    const response = await result.response;

    // Extract the text content from the response
    const text = response.text();

    // Log the generated code snippet to the console
    console.log(text);

    // Close the readline interface when done
    userInterface.close();
  });
}

// Run the main function
run();
