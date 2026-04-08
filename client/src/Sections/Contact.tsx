import { useState } from "react"

function ContactSection() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("https://skye-music.co.uk.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      })

      if (res.ok) {
        setSuccess(true)
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
      } else {
        alert("Something went wrong")
      }
    } catch (err) {
      alert("Server error")
    }

    setLoading(false)
  }

  return (
    <section id="Contact" className="w-full py-16 flex justify-center">
      <div
        className="
          w-full max-w-[100rem]
          px-[clamp(1rem,4vw,3rem)] 
          grid gap-8
        "
      >
        {/* Header */}
        <div className="text-center md:text-left grid gap-2">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white tracking-tight">
            Contact
          </h2>
          <p className="text-white/60 text-md ">
            Get in touch if you have any questions
          </p>
        </div>

        {/* Success message */}
        {success && (
          <div className="text-green-400 text-sm">
            Message sent successfully!
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name row */}
          <div className="grid md:grid-cols-2 gap-4">
            
            <div className="grid gap-1">
              <label className="text-md text-white/80">First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
                className="w-full px-4 py-5 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-md text-white/80">Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Smith (Optional)"
                required
                className="w-full px-4 py-5 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

          </div>

          {/* Email */}
          <div className="grid gap-1">
            <label className="text-md text-white/80">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="JohnSmith@email.com"
              className="w-full px-4 py-4 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="grid gap-1">
            <label className="text-md text-white/80">Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 transition resize-none"
            />
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
            
            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full md:w-fit
                px-6 py-3
                rounded-md
                bg-blue-500
                text-white
                font-medium
                transition-all duration-300
                hover:bg-blue-600
                hover:scale-[1.02]
                active:scale-[0.98]
                shadow-lg
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Email copy */}
            <div className="flex items-center justify-end">
              <div className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 font-mono text-xs md:text-sm select-all">
                your@email.com
              </div>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection