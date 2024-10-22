import DataItem from "./content-type";

const Certifications: React.FC<{ Content: DataItem }> = ({ Content }) => {
  return (
    <section id="certifications" className="py-16 certificationsBG" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-section-header">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Content.certifications.sort((a, b) => b.year - a.year).map((certification, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex items-center"
            >
              <img
                src={certification.providerLogo}
                className="w-12 h-12 mr-4"
              />
              <a target="_blank" href={certification.link} className="text-gray-700">
                {certification.name} <span className='text-xs'>({certification.year})</span>
                <p className="text-blue-700">{certification.provider}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
