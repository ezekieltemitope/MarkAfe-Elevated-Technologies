function Contact() {
  return (
    <div className="bg-black text-white py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Get in touch with us</h1>
      <p className="text-white/70 mb-10 text-sm">
        Have questions? Let us know by filling the form.
      </p>

      <form className="max-w-2xl mx-auto space-y-6">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col text-left">
            <label className="text-sm mb-1">Full name:</label>
            <input
              type="text"
              className="bg-[#121212] text-white placeholder:text-white/20 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="ex. Alex James"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="text-sm mb-1">Phone:</label>
            <input
              type="tel"
              className="bg-[#121212] text-white placeholder:text-white/20 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="ex. (+123) 456 789 0123"
              pattern="^\(\+\d{3}\)\s\d{3}\s\d{3}\s\d{4}$"
              title="Please enter a valid phone number in the format: (+123) 456 789 0123"
              required
            />
          </div>

        </div>

        {/* Email */}
        <div className="flex flex-col text-left">
            <label className="text-sm mb-1">Email:</label>
            <input
            type="email"
            className="bg-[#121212] text-white placeholder:text-white/20 border border-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="ex. joness112@gmail.com"
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            title="Please enter a valid Gmail address"
            required
          />
        </div>


        {/* Message */}
        <div className="flex flex-col text-left">
          <label className="text-sm mb-1">Message:</label>
          <textarea
            rows="4"
            className="bg-[#121212] text-white placeholder:text-white/20 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-full w-full font-semibold relative overflow-hidden hover:bg-blue-700 transition duration-300"
        >
          <span className="absolute w-20 h-12 -top-9 left-1/2 transform -translate-x-1/2 bg-white blur-xl rounded-full"></span>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
