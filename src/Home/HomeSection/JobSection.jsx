import { useState } from "react";

import JobCard from "../../component/JobCards";

const JobSection = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Frontend Developer",
      companyName: "TechNova Solutions",
      companyLocation: "Nairobi, Kenya",
      description: "full-time",
      jobDescription:
        "Build responsive user interfaces using React and Tailwind CSS, collaborate with designers, and optimize web performance.",
    },
    {
      id: 2,
      jobTitle: "Backend Engineer",
      companyName: "DataForge Inc.",
      companyLocation: "Remote (Global)",
      description: "remote",
      jobDescription:
        "Design and maintain RESTful APIs with Node.js and PostgreSQL, ensuring scalability and security of backend services.",
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      companyName: "PixelCraft Studio",
      companyLocation: "Lagos, Nigeria",
      description: "full-time",
      jobDescription:
        "Create wireframes, prototypes, and high-fidelity mockups while conducting user research to improve product usability.",
    },
    {
      id: 4,
      jobTitle: "Mobile App Developer",
      companyName: "AppVantage",
      companyLocation: "Cape Town, South Africa",
      description: "contract",
      jobDescription:
        "Develop cross-platform mobile apps with React Native, integrate third-party APIs, and publish to App Store and Play Store.",
    },
    {
      id: 5,
      jobTitle: "DevOps Engineer",
      companyName: "CloudPeak Systems",
      companyLocation: "Remote (EU)",
      description: "remote",
      jobDescription:
        "Manage CI/CD pipelines, automate deployments with Docker and Kubernetes, and monitor cloud infrastructure on AWS.",
    },
    {
      id: 6,
      jobTitle: "Data Analyst",
      companyName: "InsightHub",
      companyLocation: "Accra, Ghana",
      description: "part-time",
      jobDescription:
        "Analyze business data using SQL and Python, build dashboards in Power BI, and deliver actionable insights to stakeholders.",
    },
    {
      id: 7,
      jobTitle: "Content Writer",
      companyName: "BrightWords Media",
      companyLocation: "Remote (Global)",
      description: "remote",
      jobDescription:
        "Write engaging blog posts, SEO articles, and marketing copy while maintaining a consistent brand voice across channels.",
    },
    {
      id: 8,
      jobTitle: "QA Tester",
      companyName: "QualityFirst Labs",
      companyLocation: "Kampala, Uganda",
      description: "contract",
      jobDescription:
        "Perform manual and automated testing, log bugs in Jira, and ensure software meets quality standards before release.",
    },
    {
      id: 9,
      jobTitle: "Product Manager",
      companyName: "InnovaTech",
      companyLocation: "Kigali, Rwanda",
      description: "full-time",
      jobDescription:
        "Define product roadmaps, gather requirements from stakeholders, and lead cross-functional teams to deliver features on time.",
    },
    {
      id: 10,
      jobTitle: "Cybersecurity Specialist",
      companyName: "SecureNet Africa",
      companyLocation: "Remote (Global)",
      description: "part-time",
      jobDescription:
        "Conduct vulnerability assessments, monitor network threats, and implement security policies to protect company data.",
    },
  ]);
  return (
    <div>
      <div className="container my-2">
        <h4 className="text-center">
          Latest{" "}
          <span className="border-bottom border-3 border-primary p-2">Job</span>{" "}
          Vacancies
        </h4>
        <p className="my-3 text-center text-muted">
          Search and find your dream job easily.Just browse a job and apply if
          you need to. They are waiting for your skills.
        </p>
        {/*nest the job cards*/}
        <JobCard allJobs = {jobs}/>
      </div>
    </div>
  );
};

export default JobSection;
