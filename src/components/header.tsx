import DataItem from "./content-type";

const Header: React.FC<{ Content: DataItem }> = ({ Content }) => {
  return (
    <div id="home">
      <section
        id="home-child"
        className="h-screen flex items-center justify-center"
      >
        <div className="flex flex-row w-full justify-center">
          <div className="p-14 justify-center lg:w-1/2 sm:w-full xs:w-full md:w-1/2 homeBG">
            <p className="uppercase font-semibold text-lg text-pinkish">
              {Content.sayHello}
            </p>
            <h1 className="text-4xl pb-5 font-bold text-section-header ">
              {Content.aboutHeader}
            </h1>
            {/* <img
              id="izel"
              className="animate"
              src="https://www.chino.k12.ca.us/cms/lib/CA01902308/Centricity/Domain/8530/Hello.png"
            /> */}
            <h4 className="mt-2 text-2xl pb-5 homeSubHeader">
              {Content.aboutSubHeader}
            </h4>

            <div className="flex justify-between items-center">
              <div className="flex">
                <a className="flex items-center" href={Content.contactMeURL} target="_blank">
                  <i className="fa fa-envelope fa-3x text-icon mr-4"></i>
                  <p className="text-xl homeSubHeader ">Contact me</p>
                </a>
              </div>
              <div className=" flex justify-end">
                <a
                  href={Content.linkedInURL}
                  target="_blank"
                  className="text-blue-500 mr-4 hover:text-blue-700"
                >
                  <i className="fab fa-linkedin fa-3x"></i>
                </a>
                <a
                  href={Content.githubURL}
                  target="_blank"
                  className="text-white-500 hover:text-gray-600"
                >
                  <i className="fab fa-github fa-3x text-icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="w-1/2 pt-16"></div> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
