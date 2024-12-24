const cors = require("cors");
const express = require("express");
const app = express();
const port = 6000; // Define the port where your express app will run
const axios = require("axios");
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Dummy Data for responses
const dummyCompanyData = {
  query: "What is the price range?",
  answer:
    "The price range for the new iPhone 15 starts at $799 and goes up to $1,199 depending on the model and storage capacity.",
  source_documents: [
    {
      customer: "Apple",
      customer_id: 2,
      date: "2024-08-09",
      doc_type: "news",
      relevance: 1.0,
      time: "13:17:37",
      title: "Apple iPhone",
      uri: "8267052076",
      url: "https://www.dnaindia.com/technology/report-apple-iphone-15-gets-massive-discount-flipkart-offers-apple-device-under-rs-3101324",
    },
    {
      customer: "Apple",
      customer_id: 2,
      date: "2024-08-09",
      doc_type: "news",
      relevance: 1.0,
      time: "13:17:37",
      title: "Apple iPhone ",
      uri: "8267052076",
      url: "https://www.dnaindia.com/technology/report-apple-iphone-15-gets-massive-discount-flipkart-offers-apple-device-under-rs-3101324",
    },
    {
      customer: "Apple",
      customer_id: 2,
      date: "2024-08-09",
      doc_type: "news",
      relevance: 1.0,
      time: "13:17:37",
      title: "Apple iPhone ",
      uri: "8267052076",
      url: "https://www.dnaindia.com/technology/report-apple-iphone-15-gets-massive-discount-flipkart-offers-apple-device-under-rs-3101324",
    },
  ],
};

const dummyKnowledgeData = {
  query: "What is the capital of France?",
  answer: "The capital of France is Paris.",
  source_documents: [],
};

const dummyGenericData = {
  query: "Tell me a joke",
  answer: "Why don't scientists trust atoms? Because they make up everything!",
  source_documents: [],
};

const dummyInsightData = {
  query: "What is the performance insight for Q2?",
  answer:
    "The company showed a 15% growth in revenue during Q2 compared to Q1.",
  source_documents: [
    {
      insight_instance_id: 42,
      date: "2024-07-01",
      doc_type: "report",
      relevance: 0.9,
      title: "Q2 Performance Report",
      uri: "report-42",
      url: "https://company-insights.com/reports/q2-performance",
    },
  ],
};

// POST endpoint for /chat/company
app.get("/chat/company", async (req, res) => {
  console.log("Received request for /chat/company:", req.body);
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST endpoint for /chat/knowledge
// app.post("/chat/knowledge", (req, res) => {
//   console.log("Received request for /chat/knowledge:", req.body);
//   dummyKnowledgeData["query"] = req.body.query;
//   res.status(200).json(dummyKnowledgeData);
// });

// // POST endpoint for /chat
// app.post("/chat", (req, res) => {
//   console.log("Received request for /chat:", req.body);
//   dummyGenericData["query"] = req.body.query;
//   res.status(200).json(dummyGenericData);
// });

// // POST endpoint for /chat/insight
// app.post("/chat/insight", (req, res) => {
//   console.log("Received request for /chat/insight:", req.body);
//   dummyInsightData["query"] = req.body.query;
//   res.status(200).json(dummyInsightData);
// });

// app.post("/load/email", (req, res) => {
//   console.log("Received request for /load/email");
//   res.status(200).json("email invoked successfully");
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
