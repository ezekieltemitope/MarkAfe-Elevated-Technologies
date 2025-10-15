import React from 'react';

export default function Contact() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Get in touch with us</h2>
        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}
