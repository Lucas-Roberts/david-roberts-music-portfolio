const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

// 👇 allow frontend to talk to backend
app.use(cors({ origin: ["http://localhost:5173"] }));

// 👇 allows JSON from frontend
app.use(express.json());

// 👇 create resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

// test route (keep this)
app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

// ✅ NEW ROUTE (this is the important part)
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "lucasroberts13216@icloud.com", // 👈 CHANGE THIS
      subject: `New message from ${firstName}`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// start server
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});