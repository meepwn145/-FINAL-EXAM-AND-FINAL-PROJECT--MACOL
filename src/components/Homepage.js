import React, { useEffect } from 'react'; 

const Homepage = () => {
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
    <div style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif)', backgroundSize: 'cover', minHeight: '100vh' }}>
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

      {/* First Container */}
      
      <div className="container-fluid bg-1 text-center">
        <h1 className="text-center"> Job Op </h1>
      <br></br>
      <br></br>
      <br></br>
        <h4 className="margin">What is Job Op?</h4>
        <p className="text-left" style={{textAlign:'left'}}> Welcome to Job Op, this is specifically for single parents who often face unique challenges when it comes to balancing work and family responsibilities. Therefore, suitable job opportunities for single parents should ideally offer flexibility, stability, and a supportive work environment. Here are some job opportunities that can be beneficial for single parents:</p>
        <br/>
      </div>

      {/* Third Container (Grid) */}
      <div className="container-fluid bg-3 text-center">
        <h3 className="margin">JOB OFFERED</h3><br />
        <div className="row">
          <div className="col-sm-4">
            <p className="text-left">Freelancing or consulting work provides the flexibility to choose projects and working hours. Single parents can leverage their skills and expertise in areas such as writing, web design, marketing, consulting, or IT services.</p>
            <a href="/CookingCourse"><img src="https://img.freepik.com/free-vector/freelancer-flexible-remote-work-locations-isometric-flowchart-with-shared-office-writing-home-outdoor-with-laptop-vector-illustration_1284-30324.jpg?w=2000" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
            <p><strong>Freelancing</strong></p> {/* Added descriptive text */}
          </div>
          <div className="col-sm-4">
            <p className="text-left">Many customer service roles offer flexible schedules, including part-time or remote options. Call centers often have shifts that align with school hours or provide evening and weekend options.</p>
            <a href="/TailoringPage"><img src="https://media.istockphoto.com/id/1225807880/vector/call-center-operator-a-girl-with-headphones-and-a-microphone-at-the-computer-with-a-smile.jpg?s=612x612&w=0&k=20&c=FhPnCkyFH0KLlASwO_fsbq2Iafx2OdMMw_9_YfIoQ28=" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
            <p><strong>Customer Service and Call Centers</strong></p> {/* Added descriptive text */}
          </div>
          <div className="col-sm-4">
            <p className="text-left"> Single parents with a background in education can explore opportunities as substitute teachers, online tutors, or instructors in adult education programs. These roles often offer flexible schedules and the potential to work during school hours.</p>
            <a href="/EcommercePage"><img src="https://static.vecteezy.com/system/resources/previews/000/303/649/original/teacher-and-students-in-classroon-vector.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" /></a>
            <p><strong>Education and Teaching</strong></p> {/* Added descriptive text */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-4 text-center">
        <p>You can click the pictures above for the Introduction of each jobs.</p> {/* Updated text */}
      </footer>
    </div>
  );
};

export default Homepage;
