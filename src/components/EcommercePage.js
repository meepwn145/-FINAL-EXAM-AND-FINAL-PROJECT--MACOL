import React, { useEffect } from 'react'; 

const EcommerceLearningResources = () => {
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ maxWidth: '800px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center' }}>Education and Teaching</h2><br/>
     
            <p>Introduction of Teaching and Learning</p>
            <p>Teaching is the purposive process. Different activities of teaching are conducted only for the attainment of a specific purpose by someone.&nbsp; Teaching means to teach someone while aiming. Teaching has been considered a tri-polar process. For teaching, we need a student, a teacher and a course. For this reason, teaching has been considered as a tripolar process. In the article, introduction of teaching and learning<strong> </strong>will be understood.</p>
            <p>The process of teaching and learning interact in a way that learners work for their goals and they learn new knowledge, behaviours, and skills that enhance their learning experiences.</p>
            <p>For the century, the learning process has been seeing various perspectives such as</p>
            <ul>
<li>cognitive (learning as a mental operation)</li>



<li>constructivist (knowledge as a constructed element resulting from the learning process)</li>
<strong>Teaching rules everyone must know</strong>
<br></br>
<strong>Known to unknown</strong>
<span class="ez-toc-section-end"></span>
<p>Before teaching, the teacher should ask and know how much knowledge the students have towards that lesson. By knowing, the teacher gets to know the level of the class.&nbsp; When you know about their knowledge, you have to teach it to children who do not know it.</p>
<h3><span class="ez-toc-section" id="Easy_to_complex"></span>Easy to complex<span class="ez-toc-section-end"></span></h3>
<p>First the teacher should present simple compositions and then a little higher level than that and at the end should present difficult compositions. Because if the teacher presents difficult compositions in the beginning, then the confidence of the children is shaken.</p>
<h3><span class="ez-toc-section" id="Specific_to_general"></span>Specific to general<span class="ez-toc-section-end"></span></h3>

<p>The teacher should present the specific form of the text first.&nbsp; After that its normal form should be presented because children have a habit of paying more attention to the particular form.</p>
<strong>Concrete to abstract from tangible to abstract / gross</strong>
<span class="ez-toc-section-end"></span>
<p>The child first focuses on the object placed in front of him.&nbsp; After that, you can also focus on removing them. The child cannot think logically on things that he has not seen before, so children should show things first and then talk to remove them and focus on them.</p>

</ul>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceLearningResources;
