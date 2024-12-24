const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { queryStringParameters } = event;
  const apiUrl = "https://api.example.com/data"; // Replace with the third-party API URL
  const apiKey = "your_api_key"; // Replace with your actual API key

  try {
    const response = await fetch(
      `${apiUrl}?${new URLSearchParams(queryStringParameters)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`, // If the API requires a key in headers
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
