import express from "express"
import fetch from "node-fetch"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

const port = 5000

app.get("/api/swiggy", async (req, res) => {
  try {
    const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4478225&lng=78.44648579999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json",
        "Accept-Language": "en-IN,en;q=0.9",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    });

    console.log("Swiggy response status:", response.status);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Swiggy API failed" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
    res.status(500).json({ error: "Server error", message: error.message });
  }
});


app.listen(port, () => {
    console.log("Server running successfully.")
})

