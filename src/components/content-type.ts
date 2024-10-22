interface Location {
  city: string;
  state: string;
}

interface MenuItem {
  name: string;
  link: string;
}

interface Skill {
  name: string;
  class: string;
}

interface Certification {
  name: string;
  provider: string;
  providerLogo: string;
  link: string;
  year: number;
}

interface Project {
  title: string;
  link: string;
  role: string;
  tech: string;
  description: string;
  images: string[];
  year: number;
}

interface Education {
  name: string;
  school: string;
  location: string;
  start: number;
  end: number;
}

interface DataItem {
  sayHello: string;
  aboutHeader: string;
  location: Location;
  aboutSubHeader: string;
  about: string;
  menu: MenuItem[];
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  education: Education[];
  footerLeft: string;
  footerRight: string;
  linkedInURL: string;
  githubURL: string;
  contactMeURL: string;
}

export default DataItem