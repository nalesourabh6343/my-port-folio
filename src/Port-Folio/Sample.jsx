import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
// import Typewriter from 'typewriter-effect';

function Sample() {


    // const [typedText, setTypedText] = useState('');
    // useEffect(() => {
    //     // Simulating a delay before updating the typed text
    //     const timeout = setTimeout(() => {
    //         setTypedText('Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer');
    //     }, 2000); // Update the text after a 2-second delay

    //     // Clean up the timeout
    //     return () => clearTimeout(timeout);
    // }, []);


    // const TypewriterComponent = () => {
    //     const typewriterRef = useRef(null);

    //     useEffect(() => {
    //         const typewriter = new Typewriter(typewriterRef.current, {
    //             strings: ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer'],
    //             autoStart: true,
    //             loop: true,
    //         });
    //         return () => {
    //             typewriter.stop();
    //         };
    //     }, []);




    return (
        <div>
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
            {/* Spinner End */}


            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="text-primary fw-bold m-0">ProMan</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#skill" className="nav-item nav-link">Skills</a>
                        <a href="#service" className="nav-item nav-link">Services</a>
                    </div>
                    <a href="index.html" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                        <h1 className="text-primary fw-bold m-0">SN</h1>
                    </a>
                    <div className="navbar-nav me-auto py-0">
                        <a href="#project" className="nav-item nav-link">Projects</a>
                        <a href="#team" className="nav-item nav-link">Team</a>
                        <a href="#testimonial" className="nav-item nav-link">Testimonial</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}


            {/* Header Start */}
            <div className="container-fluid bg-light my-6 mt-0" id="home">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                            <h3 className="text-primary mb-3">I'm</h3>
                            <h1 className="display-3 mb-3 ">Nale Sourabh</h1>
                            {/* <h2 ref={typewriterRef} className="typed-text-output d-inline" />; */}

                            {/* <h2 className="typed-text-output d-inline">{typedText}</h2> */}

                            <h2 className="typed-text-output d-inline" />


                            <h1>
                                <span className='typed-text text_1'>Web Designer, Web Developer</span>
                                <span className='typed-text text_2' >Frontend & Backend Developer</span></h1>


                            {/* <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div> */}
                            <div className="d-flex align-items-center pt-5">
                                <a href className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid m-5" src="Website/img/sn_profile.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container-fluid bg-dark my-6 mt-0" id="home">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                            <h3 className="text-primary mb-3">I'm</h3>
                            <h1 className="display-3 mb-3 text-light bg-dark">Nale Sourabh</h1>

                            <h2 className="typed-text-output d-inline" />


                            <h1>
                                <span className='typed-text text_1 text-light bg-dark'>Web Designer, Web Developer</span>
                                <span className='typed-text text_2 text-light bg-dark' >Frontend & Backend Developer</span></h1>


                            <div className="d-flex align-items-center pt-5">
                                <a href className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid m-5" src="Website/img/sn_profile.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Header End */}



            {/* Video Modal Start */}
            <div className="modal modal-video fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            {/* 16:9 aspect ratio */}
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal End */}



            {/* About Start */}
            <div className="container-xxl py-6" id="about">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-5">
                                <div className="years flex-shrink-0 text-center me-4">
                                    <h1 className="display-1 mb-0">01</h1>
                                    <h5 className="mb-0">Years</h5>
                                </div>
                                <h3 className="lh-base mb-0">of working experience as a full stack developer</h3>
                            </div>
                            <p className="mb-4">As a full-stack developer, your role involves designing and developing both the front-end and back-end components of a software application. You are responsible for creating a seamless user experience by working on the client-side (front-end) and handling the server-side (back-end) logic and infrastructure.</p>
                            <p className="mb-3"><i className="far fa-check-circle text-primary me-3" />Afordable Prices</p>
                            <p className="mb-3"><i className="far fa-check-circle text-primary me-3" />High Quality Product</p>
                            <p className="mb-3"><i className="far fa-check-circle text-primary me-3" />On Time Project Delivery</p>
                            <Link tosName="btn btn-primary py-3 px-5 mt-3" href>Read More</Link>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-3 mb-4">
                                <div className="col-sm-6">
                                    <img className="img-fluid rounded" src="Website/img/about-1.jpg" alt=" " />
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid rounded" src="Website/img/about-2.jpg" alt=" " />
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                                <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                            </div>
                            <p className="mb-0">Here is a list of projects I have successfully completed, demonstrating my skills, creativity, and dedication to delivering high-quality solutions. Each project showcases my ability to understand client requirements, tackle challenges, and produce outstanding results. Explore the following completed projects to gain insights into my work:</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}



            {/* Expertise Start */}
            <div className="container-xxl py-6 pb-5" id="skill">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-5 mb-5">Skills &amp; Experience</h1>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
                            <h3 className="mb-4">My Skills</h3>



                            <div className="row align-items-center">
                                <div className="col-md-6">

                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">HTML, CSS</h6>
                                            <h6 className="font-weight-bold">95%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }} />
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">Bootstrap</h6>
                                            <h6 className="font-weight-bold">85%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">C, C++</h6>
                                            <h6 className="font-weight-bold">95%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }} />
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">Javascript</h6>
                                            <h6 className="font-weight-bold">90%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">PHP</h6>
                                            <h6 className="font-weight-bold">90%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">Laravel</h6>
                                            <h6 className="font-weight-bold">95%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }} />
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">React JS</h6>
                                            <h6 className="font-weight-bold">85%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">My SQL</h6>
                                            <h6 className="font-weight-bold">85%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                                <li className="nav-item w-50">
                                    <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
                                </li>
                                <li className="nav-item w-50">
                                    <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row gy-5 gx-4">
                                        <div className="col-sm-6">
                                            <h5>UI Designer</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Apex Software Inc</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Web Designer</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Apex Software Inc</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Web Development</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Apex Software Inc</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Static, Dynamic Web</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Apex Software Inc</h6>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row gy-5 gx-4">
                                        <div className="col-sm-6">
                                            <h5>UI Design Course</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Cambridge University</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Web Development</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Cambridge University</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Web Design</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Cambridge University</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Static, Dynamic Web</h5>
                                            <hr className="text-primary my-2" />
                                            <p className="text-primary mb-1">2000 - 2045</p>
                                            <h6 className="mb-0">Cambridge University</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Expertise End */}



            {/* Service Start */}
            <div className="container-fluid bg-light my-5 py-6" id="service">
                <div className="container">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">My Services</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <Link tosName="btn btn-primary py-3 px-5" href>Hire Me</Link>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div className="bg-icon flex-shrink-0 mb-3">
                                    <i className="fa fa-laptop-code fa-2x text-dark" />

                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Creative UI Design</h4>
                                    <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div className="bg-icon flex-shrink-0 mb-3">
                                    <i className="fa fa-code-branch fa-2x text-dark" />
                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Web Design</h4>
                                    <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div className="bg-icon flex-shrink-0 mb-3">
                                    <i className="fa fa-crop-alt fa-2x text-dark" />
                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Front-end Work</h4>
                                    <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div className="bg-icon flex-shrink-0 mb-3">
                                    <i className="fa fa-code fa-2x text-dark" />
                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Static Website Design</h4>
                                    <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div className="bg-icon flex-shrink-0 mb-3">
                                    <i className="fa fa-laptop-code fa-2x text-dark" />
                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Dynamic Website Design</h4>
                                    <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                <div className="bg-icon flex-shrink-0 mb-3">
                                    <i className="fa fa-code-branch fa-2x text-dark" />

                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Back-end Work</h4>
                                    <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                    <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}



            {/* Projects Start */}
            <div className="container-xxl py-6 pt-5" id="project">
                <div className="container">
                    <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">My Projects</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                                <li className="mx-3 active" data-filter="*">All Projects</li>
                                <li className="mx-3" data-filter=".first">UI/UX Design</li>
                                <li className="mx-3" data-filter=".second">Graphic Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-4 col-md-6 portfolio-item first">
                            <div className="portfolio-img rounded overflow-hidden">
                                <img className="img-fluid" src="Website/img/project-1.jpg" alt=" " />
                                <div className="portfolio-btn">
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></Link>
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href><i className="fa fa-link" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second">
                            <div className="portfolio-img rounded overflow-hidden">
                                <img className="img-fluid" src="Website/img/project-2.jpg" alt=" " />
                                <div className="portfolio-btn">
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></Link>
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href><i className="fa fa-link" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first">
                            <div className="portfolio-img rounded overflow-hidden">
                                <img className="img-fluid" src="Website/img/project-3.jpg" alt=" " />
                                <div className="portfolio-btn">
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></Link>
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href><i className="fa fa-link" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second">
                            <div className="portfolio-img rounded overflow-hidden">
                                <img className="img-fluid" src="Website/img/project-4.jpg" alt=" " />
                                <div className="portfolio-btn">
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></Link>
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href><i className="fa fa-link" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first">
                            <div className="portfolio-img rounded overflow-hidden">
                                <img className="img-fluid" src="Website/img/project-5.jpg" alt=" " />
                                <div className="portfolio-btn">
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></Link>
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href><i className="fa fa-link" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second">
                            <div className="portfolio-img rounded overflow-hidden">
                                <img className="img-fluid" src="Website/img/project-6.jpg" alt=" " />
                                <div className="portfolio-btn">
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></Link>
                                    <Link tosName="btn btn-lg-square btn-outline-secondary border-2 mx-1" href><i className="fa fa-link" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects End */}



            {/* Team Start */}
            <div className="container-xxl py-6 pb-5" id="team">
                <div className="container">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">Team Members</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <Link tosName="btn btn-primary py-3 px-5" href>Contact Us</Link>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded" src="Website/img/team-1.jpg" alt=" " />
                                <div className="team-text bg-white rounded-end p-4">
                                    <div>
                                        <h5>Full Name</h5>
                                        <span>Designer</span>
                                    </div>
                                    <i className="fa fa-arrow-right fa-2x text-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded" src="Website/img/team-2.jpg" alt=" " />
                                <div className="team-text bg-white rounded-end p-4">
                                    <div>
                                        <h5>Full Name</h5>
                                        <span>Designer</span>
                                    </div>
                                    <i className="fa fa-arrow-right fa-2x text-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded" src="Website/img/team-3.jpg" alt=" " />
                                <div className="team-text bg-white rounded-end p-4">
                                    <div>
                                        <h5>Full Name</h5>
                                        <span>Designer</span>
                                    </div>
                                    <i className="fa fa-arrow-right fa-2x text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}



            {/* Testimonial Start */}
            <div className="container-fluid bg-light py-5 my-5" id="testimonial">
                <div className="container-fluid py-5">
                    <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-left h-100">
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="Website/img/testimonial-1.jpg" alt=" " />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="Website/img/testimonial-2.jpg" alt=" " />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="Website/img/testimonial-3.jpg" alt=" " />
                            </div>
                        </div>


                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="Website/img/testimonial-1.jpg" alt="" />
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left text-primary" />
                                        </div>
                                    </div>
                                    <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="Website/img/testimonial-2.jpg" alt="" />
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left text-primary" />
                                        </div>
                                    </div>
                                    <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="Website/img/testimonial-3.jpg" alt="" />
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left text-primary" />
                                        </div>
                                    </div>
                                    <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-right h-100">
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="Website/img/testimonial-1.jpg" alt=" " />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="Website/img/testimonial-2.jpg" alt=" " />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="Website/img/testimonial-3.jpg" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}




            {/* Contact Start */}
            <div className="container-xxl pb-5" id="contact">
                <div className="container py-5">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">Let's Work Together</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <Link tosName="btn btn-primary py-3 px-5" href>Say Hello</Link>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="mb-2">My office:</p>
                            <h3 className="fw-bold">123 Street, New York, USA</h3>
                            <hr className="w-100" />
                            <p className="mb-2">Call me:</p>
                            <h3 className="fw-bold">+012 345 6789</h3>
                            <hr className="w-100" />
                            <p className="mb-2">Mail me:</p>
                            <h3 className="fw-bold">info@example.com</h3>
                            <hr className="w-100" />
                            <p className="mb-2">Follow me:</p>
                            <div className="d-flex pt-2">
                                <Link tosName="btn btn-square btn-primary me-2" href><i className="fab fa-twitter" /></Link>
                                <Link tosName="btn btn-square btn-primary me-2" href><i className="fab fa-facebook-f" /></Link>
                                <Link tosName="btn btn-square btn-primary me-2" href><i className="fab fa-youtube" /></Link>
                                <Link tosName="btn btn-square btn-primary me-2" href><i className="fab fa-linkedin-in" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}



            {/* Map Start */}
            <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-xxl pt-5 px-0">
                    <div className="bg-dark">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ width: '100%', height: 450, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60714.22661465188!2d74.45279497295402!3d17.995517232003458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687597202882!5m2!1sen!2sin" style={{ width: '100%', height: 450, border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                </div>
            </div>
            {/* Map End */}




            <div>
                {/* Copyright Start */}
                <div className="container-fluid bg-dark text-white py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom text-secondary" href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By <a className="border-bottom text-secondary" href="https://htmlcodex.com">HTML Codex</a>
                                <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            </div>




        </div>
    )
}
// }

export default Sample
