const express = require("express");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const path = require("path");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 443;

// Path to your SSL certificates
const keyPath = "/etc/ssl/private/key.pem"; // Replace with the actual path to your key file
const certPath = "/etc/ssl/certs/cert.pem"; // Replace with the actual path to your cert file

// SSL options
const sslOptions = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
};

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST"], // Allow only these methods
    credentials: true, // Allow credentials if needed
  })
);

// Load the service account credentials
const serviceAccountPath = path.join(
  __dirname,
  "bionic-truck-433912-r2-e6480aba9550.json"
);
const keyFile = require(serviceAccountPath);

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: keyFile.client_email,
    private_key: keyFile.private_key,
  },
});

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

// Start the HTTPS server
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
