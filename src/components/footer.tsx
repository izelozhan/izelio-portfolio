import DataItem from "./content-type";

const Footer: React.FC<{ Content: DataItem }> = ({ Content }) => {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="md:mb-0">
            <p className="text-gray-700">{Content.footerLeft}</p>
          </div>
          <div className="flex space-x-4 md:mb-0 items-center">
            <a
              href={Content.linkedInURL}
              target="_blank"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href={Content.githubURL}
              target="_blank"
              className="text-gray-800 hover:text-gray-600"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            
          </div>
          <div>
            <p className="text-gray-700">{Content.footerRight}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
