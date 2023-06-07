import React, { useEffect } from 'react'; 

const TailoringPage = () => {
  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const popperScript = document.createElement('script');
    popperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js';
    popperScript.async = true;
    document.body.appendChild(popperScript);

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(popperScript);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  return (
    <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Jobs
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/CookingCourse">
                  Freelancing 
                  </a>
                  <a className="dropdown-item" href="/TailoringPage">
                  Customer Service and Call Centers
                  </a>
                  <a className="dropdown-item" href="/EcommercePage">
                  Education and Teaching
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-primary" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary" href="/Signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', textAlign: 'center' }}>
            <h1>Customer Service and Call Centers</h1>
            <h3>Lesson 1: Introduction to Customer Service and Call Centers</h3>
            <h3 class="section-title"><i class="icon" data-icon="1"></i>What is a call center?</h3>  
            <p>A call center is a centralized department that handles <a href="https://www.techtarget.com/searchcustomerexperience/feature/What-are-the-different-types-of-contact-centers">inbound and outbound calls from current and potential customers</a>. Call centers are located either within an organization or outsourced to another company that specializes in handling calls.</p>         
            <br></br>
            <h3 class="section-title"><i class="icon" data-icon="1"></i>What is the difference between a call center and a contact center?</h3>
            <p>Call centers focus on one communication channel: the telephone.<a href="https://www.techtarget.com/searchcustomerexperience/definition/contact-center">Contact centers</a> provide support from <a href="https://www.techtarget.com/searchcustomerexperience/feature/10-sample-customer-service-email-templates">additional channels, such as email</a>, chat, websites and applications. A contact center may include one or more call centers.</p>
            <p>Contact centers provide&nbsp;<a href="https://www.techtarget.com/searchcustomerexperience/definition/omnichannel">omnichannel</a>&nbsp;support, assisting customers on whichever channel or device they use. Whether an organization chooses a call center or contact center depends on its products and services, the channels on which it provides customer support and the <a href="https://www.techtarget.com/searchcustomerexperience/feature/8-tips-to-build-and-manage-a-customer-service-team">structures of the organization's support teams</a>.</p>
            <h3 class="section-title"><i class="icon" data-icon="1"></i>Types of call centers&nbsp;</h3>
            <p>Beyond inbound, outbound and blended, further classifications of call centers include the following:</p>
            <ul class="default-list"> 
  <li><strong>In-house call center.</strong>&nbsp;The organization owns and runs its call center and hires its agents.</li> 
  <li><strong>Outsourced call center.</strong>&nbsp;The organization hires a third party to handle calls on its behalf, generally to&nbsp;remove the burdens of hiring and training call center agents and investing in and updating call center technology, which can <a href="https://www.techtarget.com/searchcustomerexperience/tip/Evaluate-call-center-outsourcing-costs-and-benefits">reduce operating costs</a>.</li> 
  <li><strong>Offshore call center.</strong>&nbsp;The organization outsources its operations to a company in another country, often to save money on wages and provide services around the clock. Drawbacks to an offshore call center include reduced customer satisfaction due to language issues and a lack of knowledge about the organization, product or service due to distance.</li> 
  <li><a href="https://www.techtarget.com/searchunifiedcommunications/definition/virtual-call-center"><strong>Virtual call center</strong></a><span><strong>.</strong></span>&nbsp;The organization employs geographically dispersed agents who answer calls using cloud call center technology. Call center agents work either in smaller groups in different offices or in their own homes.</li> 
 </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoringPage;
