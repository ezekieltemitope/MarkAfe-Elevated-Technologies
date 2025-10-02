import React from "react";
import {
  FaCloud,
  FaServer,
  FaEnvelope,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-left">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-gray-800">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      <div className="mb-12">
        <span className="px-4 py-1 border border-gray-600 rounded-full text-sm">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">What We Do</h2>
      </div>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          icon={<FaCloud className="text-blue-400 text-2xl" />}
          title="Cloud Hosting Solutions"
          description="Secure, reliable, and flexible public & private cloud hosting designed to power your business."
        />
        <ServiceCard
          icon={<FaServer className="text-red-400 text-2xl" />}
          title="Infrastructure Deployment & Revamp"
          description="From ground-up deployments to restructuring old systems, we build and upgrade IT foundations that perform."
        />
        <ServiceCard
          icon={<FaEnvelope className="text-purple-400 text-2xl" />}
          title="Collaboration & Email Management"
          description="Streamlined deployment and management of enterprise email and collaboration platforms for smoother workflows."
        />
        <ServiceCard
          icon={<FaCogs className="text-green-400 text-2xl" />}
          title="IT Transformation & Cost Optimization"
          description="Modernize your IT infrastructure while reducing operational costs with strategies that deliver real impact."
        />
        <ServiceCard
          icon={<FaProjectDiagram className="text-blue-300 text-2xl" />}
          title="Infrastructure Planning & Roadmaps"
          description="Plan smarter, scale faster. We lay down the foundation for sustainable IT growth and expansion."
        />
      </div>
    </section>
  );
};

export default Services;
