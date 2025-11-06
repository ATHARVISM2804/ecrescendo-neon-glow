import express from "express";
import { google } from "googleapis";
import cors from "cors";

const app = express();
const port = 4000;

// Parse incoming JSON
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:8080", "https://ecrescendo-neon-glow.vercel.app"]
}));


app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// ✅ Function to get Google Sheets auth
async function getAuth() {
  return new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

// ✅ Get form responses
app.get("/responses", async (req, res) => {
  try {
    const auth = await getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1DIx1u0Pd93-82fTvaDiDngO8lOCqZR84_AQXRwB131M";
    const range = "Form Responses 1!A:Z";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    res.json(response.data.values);
  } catch (error) {
    console.error("Error fetching form responses:", error);
    res.status(500).send("Error fetching form responses");
  }
});

// ✅ Handle query submissions
app.post("/query", async (req, res) => {
  try {
    const { name, number, email, query } = req.body;

    if (!name || !number || !email || !query) {
      return res.status(400).send("All fields are required");
    }

    const auth = await getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1DIx1u0Pd93-82fTvaDiDngO8lOCqZR84_AQXRwB131M";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Queries!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, number, email, query]],
      },
    });

    res.status(200).send("Query submitted successfully!");
  } catch (error) {
    console.error("Error submitting query:", error);
    res.status(500).send("Error submitting query");
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});