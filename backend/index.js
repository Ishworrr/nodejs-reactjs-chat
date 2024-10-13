const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "a47cdcb9-9ee9-4163-9400-e9ed7eb60a01" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error(e);
    return res.status(e.response.status).json(e.response.data);
  }
});

//app.listen(3001);
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
