


function Contact() {
  return (
    <section id='Contact' className='h-[calc(100dvh-4rem)] w-full bg-gray-800 p-20'>

      <div className=' flex-col h-full w-full bg-gray-800 p-20 border-4 rounded-3xl'>

        <div className='w-full h-1/5 bg-gray-500'>

          Contact Me

        </div>

<form className="max-w-xl mx-auto">
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">
        First name
      </label>
      <input
        type="text"
        id="first_name"
        placeholder="John"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div>
      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-700">
        Last name
      </label>
      <input
        type="text"
        id="last_name"
        placeholder="Smith"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

  </div>

  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
      Email address
    </label>
    <input
      type="email"
      id="email"
      placeholder="john.smith@email.com"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      rows={5}
      placeholder="Write your message here..."
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
    />
  </div>

  <button
    type="submit"
    className="px-6 py-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-700 transition active:border-white active:transition-none"
    
  >
    Submit
  </button>
</form>






      </div>

       
      
    </section>
  )
}

export default Contact
