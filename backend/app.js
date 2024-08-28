const express = require("express");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const path = require("path");

const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

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

app.get("/ga4-user-count", async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: "properties/455860054", // Replace with your GA4 property ID
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
    });

    res.json({ userCount: response.rows[0].metricValues[0].value });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
