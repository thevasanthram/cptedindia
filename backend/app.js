const express = require("express");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const path = require("path");
const fs = require("fs");
const https = require("https");
const cors = require("cors");

const app = express();
const port = 5000;

// Load SSL certificates (make sure these paths point to the correct files)
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/cptedindia.com/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/cptedindia.com/fullchain.pem",
  "utf8"
);
const credentials = { key: privateKey, cert: certificate };

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST"], // Allow only these methods
    credentials: true, // Allow credentials if needed
  })
);

// Load the service account credentials
const keyPath = path.join(
  __dirname,
  "bionic-truck-433912-r2-e6480aba9550.json"
);
const keyFile = require(keyPath);

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: keyFile.client_email,
    private_key: keyFile.private_key,
  },
});

// Define your API route
app.get("/ga4-user-count", async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: "properties/455860054", // Replace with your GA4 property ID
      dateRanges: [{ startDate: "2024-01-01", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
    });

    res.json({ userCount: response.rows[0].metricValues[0].value });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create HTTPS server with the loaded SSL certificates
https.createServer(credentials, app).listen(port, () => {
  console.log(`Secure server running on https://localhost:${port}`);
});
