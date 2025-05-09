import "react";
import { certifications } from "../../constants"; // adjust the path as needed

const CertificationSection = () => {
  return (
    <section id="certification" className="py-20 px-8 bg-[#0e0d1f] text-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">CERTIFICATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My achieved certifications, demonstrating my expertise and commitment to continuous learning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between border-2 border-white" // Updated border color to white
          >
            <div>
              <div className="mb-4">
                {/* Logo Image */}
                <img
                  src={cert.logo} // The path to your logo image
                  alt={cert.issuer}
                  className="w-16 h-16 object-contain mx-auto" // Centered with mx-auto
                />
              </div>
              {/* Title and Combined Details */}
              <p className="text-md text-purple-400 text-center mb-2"> {/* Updated issuer/year color to purple */}
                {cert.issuer} 
              </p>
              <h3 className="text-xl font-semibold text-white text-center mb-2"> {/* Updated title color to white */}
                {cert.title}
              </h3>
              <p className="text-md text-purple-400 text-center mb-2"> {/* Updated issuer/year color to purple */}
                 ({cert.year})
              </p>
            </div>
            {cert.link && (
              <div className="mt-4 text-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-gray-100 text-purple-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center" // Updated button styles
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;