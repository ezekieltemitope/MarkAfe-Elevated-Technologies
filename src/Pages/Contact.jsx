function Contact() {
  return (
    <div className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-10 text-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Get in touch with us
      </h1>
      <p className="text-white mb-10 text-sm sm:text-base">
        Have questions? Let us know by filling the form.
      </p>

      {/* Form */}
      <form className="max-w-2xl mx-auto space-y-6">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col text-left">
            <label className="text-sm sm:text-base mb-1 text-white">Full name:</label>
            <input
              type="text"
              className="bg-[#121212] text-white placeholder:text-white/20 
                         border border-gray-700 rounded px-4 py-2 
                         focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="ex. Alex James"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="text-sm sm:text-base mb-1 text-white">Phone:</label>
            <input
              type="tel"
              className="bg-[#121212] text-white placeholder:text-white/20 
                         border border-gray-700 rounded px-4 py-2 
                         focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="ex. (+123) 456 789 0123"
              pattern="^\(\+\d{3}\)\s\d{3}\s\d{3}\s\d{4}$"
              title="Please enter a valid phone number in the format: (+123) 456 789 0123"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col text-left">
          <label className="text-sm sm:text-base mb-1 text-white">Email:</label>
          <input
            type="email"
            className="bg-[#121212] text-white placeholder:text-white/20 
                       border border-gray-800 rounded px-4 py-2 
                       focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="ex. joness112@gmail.com"
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            title="Please enter a valid Gmail address"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col text-left">
          <label className="text-sm sm:text-base mb-1 text-white">Message:</label>
          <textarea
            rows="4"
            className="bg-[#121212] text-white placeholder:text-white/20 
                       border border-gray-700 rounded px-4 py-2 
                       focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-full 
                     w-full sm:w-auto font-semibold relative overflow-hidden 
                     hover:bg-blue-700 transition duration-300 mx-auto"
        >
          <span className="absolute w-20 h-12 -top-9 left-1/2 transform -translate-x-1/2 
                           bg-white blur-xl rounded-full"></span>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;