import img1 from "../image/img1.webp";
import img3 from "../image/img3.webp";
import img4 from "../image/img4.webp";
import img6 from "../image/img6.webp";
import img7 from "../image/img7.webp";
import img8 from "../image/img8.webp";
import img9 from "../image/img9.webp";
import img10 from "../image/img10.webp";
import img13 from "../image/img13.webp";
import img14 from "../image/img14.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import './home.css';


const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center homeimg text-white">

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <h1> <strong className="brand-name font-weight-bold">Building great</strong></h1>
                                    <h2 className="my-3">Digital solutions</h2>
                                    <h3>Software Development Outsourcing</h3>
                                    <h5>We are a Latin American company, based in non-traditional tech hubs,<br /> with an ever growing talent pool that is dedicated to building world class software development outsourcing services.</h5>
                                    <div className="mt-3">
                                        <a href="" className="btn btn-success">Get Started</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                                    <img src={img1} className="img-fluid" alt="img1" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="header2" className="d-flex align-items-center mt-5  text-dark">

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <img src={img1} className="img-fluid" alt="img1" />
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                    <h4 className="mt-3">SOFTWARE OUTSOURCING SERVICES</h4>
                                    <h5 className="mt-5">We are passionate developers of great technology products. Our holistic expertise in software solutions allows us to intervene in all stages of our client's projects, don't matter their size.</h5>
                                    <div className="mt-3">
                                        <a href="" className="btn  btn-outline-primary">Get Started</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="header2" className="d-flex align-items-center  mt-5  text-dark">

                <div className="container-fluid bg-light">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row abs">

                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                    <h1 className="mt-3 Develop">Software Development</h1>
                                    <h5 className="mt-5 Over">With over 10+ years of experience in software product <br /> development, we provide scalable solutions to companies <br /> ranging from startups to Fortune 500. Combining top diverse <br /> talent and a long track record of success, we're ready to help our <br /> clients bring their ideas to life.</h5>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="Getbtn">SEE SERVICES <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div>
                                    <FaQuoteLeft size={30} style={{ color: "lightslategray" }} />
                                    <p className="mt-5 Every"> Everyone at Patagonian has been an excellent communicator with no surprises in billing <br /> or delivery.</p>
                                    <p className="CTO">Arrel Gray, CTO, Grapevine</p>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12  header-img">

                                    <div className="img11"></div>
                                    <div className="img8">
                                    <img src={img8} className="img-fluid" alt="img8" />

                                    </div>
                                    <div className="img3">
                                    <img src={img3} className="img-fluid img3" alt="img3" />

                                    </div>
                                    <div className="img4">
                                    <img src={img4} className="img-fluid img4" alt="img4" />
                                    </div>
                                  

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-10 mx-auto mt-5">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5  header-img">
                                    <div className="img12"></div>
                                    <div className="img9">
                                    <img src={img9} alt="img9" className="img-fluid" />
                                    </div>
                                    <div className="img6">
                                    <img src={img6} className="img-fluid" alt="img6" />
                                    </div>
                                    <div className="img10">
                                    <img src={img10} className="img-fluid" alt="img10" />
                                    </div>
                                  


                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-end text-end  flex-column">


                                    <h1 className="mt-3 Develop">Software Product <br /> Discovery</h1>
                                    <h5 className="mt-5 Over">We help our clients weed out unnecessary scope by <br /> understanding users' problems and opportunities before we set <br /> out to solve them. A good Product Discovery ensures a project <br /> is on the right track, reducing risks and uncertainty, and builds a <br /> solid foundation to grow any product.</h5>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="Getbtn">SEE SERVICES  <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>

                                    </div>
                                    <FaQuoteLeft size={30} style={{ marginLeft: "130px", color: "lightslategray" }} />
                                    <p className="mt-5 Every">Patagonian is very good at what they do.</p>
                                    <p className="CTO">Sean Crawford, Owner, Rhebus</p>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-10 mx-auto mt-5">
                            <div className="row abs">

                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                    <h1 className="mt-3 Develop">Talent Augmentation</h1>
                                    <h5 className="mt-5 Over">We have a top-class talent pool ready to jump on any new <br /> challenge. We scale our client's delivery capacity with the right <br /> skills, reducing the time to market for any new product or <br /> functionality.</h5>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="Getbtn">SEE SERVICES <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div>
                                    <FaQuoteLeft size={30} style={{ color: "lightslategray" }} />
                                    <p className="mt-5 Every">The fact that they’ve been with us from the start and were patient, supportive, <br /> committed, and flexible is excellent.</p>
                                    <p className="CTO">Steven Krubiner, CEO, Conversifi</p>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">

                                    <div className="img11"></div>
                                    <div className="img8">
                                    <img src={img8} className="img-fluid" alt="img8" />

                                    </div>
                                    <div className="img3">
                                    <img src={img3} className="img-fluid img3" alt="img3" />

                                    </div>
                                    <div className="img4">
                                    <img src={img4} className="img-fluid img4" alt="img4" />
                                    </div>
                                  
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-10 mx-auto mt-5">
                            <a class="cmp-btn" href="/our-services">View all services <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                        </div>
                    </div>


                    <div className="row mt-5 backgimg text-white  rounded">

                        <div className="col-10 mx-auto mt-5">
                            <h2 className=" text-center here">Here are our services in action</h2>
                            <h1 className="mt-2 text-center">Take a look at some of what we do.</h1>
                            <a className="cmp-btn2 mt-5" href="/our-services">View all our work <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                            <div className="row bg-white bg mt-5">

                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                    <h1 className="petro">Petromark</h1>
                                    <h5 className="mt-2 Plat">Patagonian created a platform <br /> that led Petromark to its <br /> digital transformation process</h5>
                                    <p className="we">We developed an entire platform that enabled <br /> Petromark to track and report their non destructive <br /> testing projects in their clients oilfields.</p>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div>

                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">

                                    <div className="img13">

                                        <img src={img13} className="img-fluid " alt="img13" />
                                    </div>
                                    <div className="img14">
                                        <img src={img14} className="img-fluid" alt="img14" />

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="row mt-5 text-white  rounded">

                        <div className="col-10 mx-auto mt-5">
                            <div className="row bg-white bg mt-5">
                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <h2 className="petro">Interamerican Development Bank</h2>
                                    <h5 className="mt-2 Plat">Fast Reaction and Agility for <br /> Covid-19 relief</h5>
                                    <p className="we">We built, in record time, an interactive map for local <br /> communities to find scarce resources and assistance <br /> for COVID-19 relief.</p>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">
                                    <div className="img13">

                                        <img src={img13} className="img-fluid " alt="img13" />
                                    </div>
                                    <div className="img14">
                                        <img src={img14} className="img-fluid" alt="img14" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Home;
