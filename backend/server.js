const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("Nouveau message :");
    console.log(name, email, message);

    res.json({
        success: true,
        message: "Message reçu"
    });
});

app.listen(5000, () => {
    console.log("Serveur lancé sur le port 5000");
});