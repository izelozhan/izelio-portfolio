import DataItem from "./content-type";

const Education: React.FC<{ Content: DataItem }> = ({ Content }) => {
  return (
    <>
      <h3 className="text-center text-lg font-bold mb-4 text-section-header">Education</h3>
      <div className="education flex flex-col lg:flex-row  w-full justify-center gap-8">
        {Content.education
          .sort((a, b) => b.start - a.start)
          .map((education, index) => (
            <div key={index} className="education-item ml-4 mr-4 text-center lg:text-right">
              <p className="text-gray-600">{education.name}</p>
              <h4 className="text-xl font-bold text-gray-400">
                {education.school}
              </h4>
              <p className="text-gray-400">{education.location}</p>
              <p className="text-xs">
                {education.start} - {education.end}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};
export default Education;
