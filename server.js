const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(cors()); // Enable CORS

app.use(express.json());

app.post('/convert-code', async (req, res) => {
    const codeToConvert = req.body.code;
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(codeToConvert);
    const response = await result.response;
    const convertedCode = response.text();

    res.send(convertedCode);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
