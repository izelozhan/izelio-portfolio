import Education from "./education";
import DataItem from "./content-type";

const About: React.FC<{ Content: DataItem }> = ({ Content }) => {
  return (
    <section id="about" className="pt-20 pb-20 bg-white">
      <div className="flex items-center justify-center mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-section-header ">About me</h2>
              <div>
                <p className="text-gray-700">{Content.about}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center">
                {Content.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`${skill.class} text-sm font-semibold mr-2 mb-4 px-4 py-2 rounded-full`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Education Content={Content} />
      </div>
    </section>
  );
};
export default About;
