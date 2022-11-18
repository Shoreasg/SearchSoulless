const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/search/:SoullessChapter/:SoullessID", (req, res) => {
    axios.get(`https://soullesscitadel.com/gallery/chapter-${req.params.SoullessChapter}/${req.params.SoullessID}?_data=routes/gallery/$collection/$itemId`).then(respond=>res.send(respond.data))
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});