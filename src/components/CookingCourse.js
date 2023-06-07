import React, { useEffect } from 'react'; 

const CookingCoursePage = () => {
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
      

      <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h1 style={{ textAlign: 'center' }}>Freelancing</h1>
          <h3>Lesson 1: Introduction to Freelancing</h3>
          <p>In this lesson, you will learn the basic tips on freelancing for a successful career.</p>
          <h2 id="Freelancing-Tips"><span class="ez-toc-section" id="Freelancing_Tips"></span>Freelancing Tips<span class="ez-toc-section-end"></span></h2>
          <ol><li>Understand your niche</li><li>Become a generalist or a specialist</li><li>Build a website</li><li>Pick tools within your budget</li></ol>
          <h3 id="Understand-Your-Niche">1. Understand Your Niche</h3>
          <p>Although this freelancing tip may seem obvious, it isn’t. Before taking other steps, new freelancers must understand the space they’re about to enter. Therefore, they must conduct comprehensive research to understand their niche and how they fit into it.</p>
          <p>Your research should involve extensive Google searches related to the role you would like to fulfill. Also, look at any significant platforms relevant to your industry to see how they work and what you need to succeed on them.</p>
          <h3 id="Become-a-Generalist-or-a-Specialist">2. Become a Generalist or a Specialist</h3>
          <p>As a freelancer, you can be a generalist in your industry, or you can venture into specific topics and services.</p>
          <p>A freelance writer, for example, can choose to write for any niche they find clients in, or they could build authority in one niche, let’s say health and wellness.</p>
          <p>Generalists are qualified for more gigs. That increases their chances of being hired, but the level of competition is rising, according to <a href="https://www.upwork.com/documents/freelance-forward-2020" target="_blank" rel="noreferrer noopener">Upwork</a>’s 2020 report.</p>
          <h3 id="Build-a-Website">3. Build a Website</h3>
          <p>All freelancers need to have a website to showcase their work. There is nothing better than an online portfolio to help new clients understand your capabilities.&nbsp;</p>
          <p>“If you are creating a website yourself and can’t afford to hire a designer, then consider looking into website templates so that you’re still putting something out there that’s beautifully done,” advises <a href="https://www.bluehost.com/blog/customer-spotlight-rowan-made/">Breanna Rose</a>, founder of Rowan Made.</p>
          <h3 id="Pick-Tools-Within-Your-Budget">4. Pick Tools Within Your Budget</h3>
          <p>Freelancers heavily rely on software to get work done, especially with remote working becoming the norm.</p>
          <p>Upwork estimates that <a href="https://www.upwork.com/i/future-workforce/fw/2020/" target="_blank" rel="noreferrer noopener">22% of the American workforce</a> will be working remotely by 2025.&nbsp;</p>
          <p>As a freelancer, you’re paying for all your tools by yourself. That means you have to handpick your tools to match your budget.&nbsp;</p>
          <p>WordPress, for example, is a <a href="https://www.bluehost.com/wordpress">great web host</a> that’s inexpensive. You can use it for the first few months to a year before commissioning a custom website based on your freelance career.</p>
          
        </div>
      </div>
    </div>
  );
};

export default CookingCoursePage;
