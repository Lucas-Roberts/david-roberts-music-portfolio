const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

// ✅ Allow both local + live frontend
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://skye-music.co.uk"
  ],
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Root route (prevents "Cannot GET /")
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ Health check route
app.get("/api", (req, res) => {
  res.json({ status: "Server is running 🚀" });
});

// 🧪 TEST EMAIL ROUTE
app.get("/test-email", async (req, res) => {
  console.log("TEST ROUTE HIT");

  try {
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "lucasroberts13216@icloud.com",
      subject: "Test email",
      html: "<p>This is a test email</p>",
    });

    console.log("📧 Resend response:", response);

    res.send("Email sent!");
  } catch (err) {
    console.error("Test email error:", err);
    res.status(500).send("Error sending email");
  }
});
//hello@skye-music.co.uk
// ✅ CONTACT ROUTE
app.post("/contact", async (req, res) => {
  console.log("🔥 CONTACT HIT:", req.body);

  const { firstName, lastName, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Portfolio <hello@skye-music.co.uk>",
      to: "lucasroberts13216@icloud.com",
      reply_to: email,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}
      `,
    });

    console.log("📧 Resend response:", response);

    res.json({ success: true });
  } catch (err) {
    console.error("  Contact error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ✅ REQUIRED FOR RENDER
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});