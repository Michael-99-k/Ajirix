import { CiLocationOn } from "react-icons/ci";
const JobCard = ({allJobs}) => {
  return (
    <div>
      <div className="row mt-2">
        {allJobs.map((jobs) => (
          <div className="col-md-4">
            <div className="card h-100 border-0.5 shadow-sm p-4 rounded-4">
              <div className="d-flex justify-content-between">
                <h5 className="fw-bold mb-1">{jobs.jobTitle}</h5>
                <span className="fw-bold text-danger">{jobs.description}</span>
              </div>
              <p className="text-muted mb-2">
                <CiLocationOn /> {jobs.companyLocation}
              </p>
              <h6 className="text-primary fw-semibold mb-3">
                {jobs.companyName}
              </h6>
              <p>{jobs.jobDescription.slice(0 / 100)}....</p>
              <div className="d-flex border-top justify-content-between align-items-center mt-2 pt-3">
                <small>View Opportunity</small>
                <button className="btn btn-primary btn-sm rounded-pill px-3">
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
