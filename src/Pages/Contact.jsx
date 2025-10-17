function Contact() {
  return (
    <div className="bg-dark text-white py-5 text-center fade-in">
      <h1 className="fw-bold mb-4">Get in touch with us</h1>
      <form className="container w-50 fade-in">
        <div className="row mb-3">
          <div className="col"><input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Full Name" /></div>
          <div className="col"><input type="text" className="form-control bg-dark text-white border-secondary" placeholder="Phone Number" /></div>
        </div>
        <input type="email" className="form-control bg-dark text-white border-secondary mb-3" placeholder="Email Address" />
        <textarea className="form-control bg-dark text-white border-secondary mb-3" rows="4" placeholder="Message"></textarea>
        <button className="btn btn-primary rounded-pill w-100">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
