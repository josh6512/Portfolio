const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., HTML, CSS, and client-side JavaScript)
app.use(express.static(__dirname));

// Handle form submission
app.post("/", async(req, res) => {
 const { name, email, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "Gmail", // e.g., "Gmail"
        auth: {
            user: "yhoshoa144@gmail.com",
            pass: "nzvfncwtwkfbosku"
        },
        tls: {
        rejectUnauthorized: false, // Ignore SSL certificate errors
    },
    });

    // Email data
    const mailOptions = {
        from: email,
        to: "yhoshoa144@gmail.com",
        subject: `new mail fropm protfolio `,
        text: `Name: ${name}\n Email: ${email}\n Message: ${message} `,
    };

    // Send email
    await  transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error:", error);
            res.status(500).json({ success: false });
        } else {
            console.log("Email sent:", info.response);
            res.json({ success: true });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});