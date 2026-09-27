const HeroSection = () => {
  return (
    <div>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4">
              Shaping your <br />
              future with the <br />
              best recruitment
            </h1>
            <p>Growth and success go hand in hand. <br />We will help you with it.
                Focus to get your dream job.
            </p>
            <div className="input-group input-group-sm" style={{width:"50%"}}>
                <input type="text" className="form-control" placeholder="Enter your email"></input>
                <button className="btn btn-primary">Get Notification</button> 
            </div>
            
            
                <div className="d-flex my-3">
                <h6 className="me-3">
                    <span>
                        <i className="bi bi-check-circle-fill me-2"></i>
                    </span>
                    Update Everyday
                </h6>
          
            <div>
                <h6>
                    <span>
                        <i className="bi bi-check-circle-fill me-2"></i>
                    </span>
                    Easy application from the email
                </h6>
            </div>
            </div>
          </div>
          <div className="col-md-6">
          <div>
            <img 
            src="images/HeroSection.jpg" alt="Job application" 
            style={{width: "100%", height: "350px", objectFit: "cover"}}
            className="rounded-4"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
