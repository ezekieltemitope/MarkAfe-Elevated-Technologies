function Team() {
  const team = [
    { name: "Mark Afe", role: "Server Administrator & Cloud Specialist" },
    { name: "Pleasant", role: "Graphics Designer" },
    { name: "Temitope", role: "Frontend Developer" },
    { name: "Judah", role: "UI/UX Designer" },
    { name: "Tayo", role: "Backend & API Developer" },
    { name: "Johnson John", role: "IT Specialist" },
  ]

  return (
    <div className="bg-dark text-white py-5 text-center">
      <h1 className="fw-bold mb-5 fade-in">Our Team</h1>
      <div className="container">
        <div className="row g-4">
          {team.map((member, i) => (
            <div key={i} className="col-md-4 fade-in">
              <div className="card bg-secondary text-white border-0 rounded-4 p-4 h-100">
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-light">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
