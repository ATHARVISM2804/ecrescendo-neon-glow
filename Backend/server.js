import express from "express";
import { google } from "googleapis";
import fs from "fs";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

app.get("/responses", async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1DIx1u0Pd93-82fTvaDiDngO8lOCqZR84_AQXRwB131M";
    const range = "Form Responses 1!A:Z"; // adjust if needed

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
