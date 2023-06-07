import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const popperScript = document.createElement("script");
    popperScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js";
    popperScript.async = true;
    document.body.appendChild(popperScript);

    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      // Cleanup the dynamically added script elements
      document.body.removeChild(jqueryScript);
      document.body.removeChild(popperScript);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: username } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div>
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
                  Courses
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/CookingCourse">
                    Cooking Course
                  </a>
                  <a className="dropdown-item" href="/TailoringPage">
                    Tailoring Course
                  </a>
                  <a className="dropdown-item" href="/EcommercePage">
                    Ecommerce Course
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

      <div>
        <div className="login">
          <section className="vh-100 bg-image" style={{ backgroundImage: 'background.jpg' }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Login</h2>

                        <form onSubmit={submit}>

                          <div className="form-outline mb-4">
                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                            <label className="form-label" htmlFor="form3Example3cg">Username</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                          </div>

                          <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">Login</button>
                          </div>

                          <p className="text-center text-muted mt-5 mb-0">Create account? <a href="/Signup" className="fw-bold text-body"><u>Sign Up</u></a></p>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
