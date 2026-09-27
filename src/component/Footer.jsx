const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white mt-3 p-2">
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-2">
            <h5>
              Aji<span className="text-primary">Rix</span>
            </h5>
            <p>
              You need a job, we have them. <br />You need employees, we have the
              best pool.
            </p>
          </div>

          <div className="col-md-3 my-2">
            <h5>PRODUCTS</h5>
            <p>Browse Jobs</p>
            <p>Post a Job</p>
            <p>Pricing Plans</p>
          </div>

          <div className="col-md-3 my-2">
            <h5>RESOURCES</h5>
            <p>Career Blog</p>
            <p>Resume Tips</p>
            <p>Interview Guide</p>
          </div>

          <div className="col-md-3 my-2">
            <h5>LINKAGES</h5>
            <p>About Us</p>
            <p>Contact Support</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;