const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// test route (keep this)
app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

// 🧪 TEST EMAIL ROUTE (VERY IMPORTANT)
app.get("/test-email", async (req, res) => {
  console.log("🔥 TEST ROUTE HIT");

  try {
    const response = await resend.emails.send({
      from: "Portfolio <hello@skye-music.co.uk>",
      to: "lucasroberts13216@icloud.com",
      subject: "Test email",
      html: "<p>This is a test email</p>",
    });

    console.log("📧 Resend response:", response);

    res.send("Email sent!");
  } catch (err) {
    console.error("❌ Test email error:", err);
    res.send("Error sending email");
  }
});

// ✅ CONTACT ROUTE
app.post("/contact", async (req, res) => {
  console.log("🔥 CONTACT HIT:", req.body); // 👈 DEBUG

  const { firstName, lastName, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "lucasroberts13216@icloud.com",
      subject: `New message from ${firstName}`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    console.log("📧 Resend response:", response); // 👈 DEBUG

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Contact error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});