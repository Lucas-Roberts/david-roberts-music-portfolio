function Contact() {
  return (
    <section id="Contact" className="w-full px-6 py-24 flex justify-center">

      <div className="w-full max-w-6xl">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-14 text-white">
          Contact
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="flex flex-col gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="JohnSmith@email.com"
                className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
              />
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col">

            <label className="block text-sm text-gray-300 mb-2">
              Message
            </label>

            <textarea
              placeholder="Write your message..."
              rows={6}
              className="w-full h-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition resize-none"
            />

          </div>

        </form>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button className="px-8 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium">
            Send Message
          </button>
        </div>

      </div>

    </section>
  )
}

export default Contact
