import DataItem from './content-type';

const Portfolio: React.FC<{ Content: DataItem }> = ({ Content }) => {
  const renderPortfolioItem = (
    index: number,
    year: number,
    title: string,
    link: string,
    role: string,
    tech: string,
    description: string,
    images: string[]
  ) => {
    return (
      <div
        key={index}
        className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <a
          className="fancybox"
          data-fancybox="gallery-repricer-ai"
          href={images[0]}
          data-caption={title}
        >
          <img
            src={images[0]}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </a>
        {images.slice(1).map((image: string, index: number) => (
          <a
            key={title + "_" + index}
            className="fancybox"
            data-fancybox="gallery-repricer-ai"
            href={image}
          ></a>
        ))}

        <div className="p-4">
          <h3 className="font-bold text-lg">{title} <span className='text-xs font-normal'>({year})</span></h3>
          <p className="text-gray-400">
            <a className='text-xs' href={link} target="_blank">
              {link}
            </a>
          </p>
          <h4 className="text-purple-500">{role}</h4>
          <p className='pb-2 pt-1'>{tech.split(',').map(i => (<span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 mr-2'>{i.trim()}</span>))}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-16 bg-bg-portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-section-header">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Content.projects.map((project, index) =>
            renderPortfolioItem(
              index,
              project.year,
              project.title,
              project.link,
              project.role,
              project.tech,
              project.description,
              project.images
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
