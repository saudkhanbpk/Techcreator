import img1 from "../../image/img1.webp";
import img3 from "../../image/img3.webp";
import img4 from "../../image/img4.webp";
import img6 from "../../image/img6.webp";
import img7 from "../../image/img7.webp";
import img8 from "../../image/img8.webp";
import img9 from "../../image/img9.webp";
import img10 from "../../image/img10.webp";
import img13 from "../../image/img13.webp";
import img14 from "../../image/img14.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import './home.css';



import Marquee from 'react-fast-marquee';
import image1 from "../../image/Conv.webp";
import image2 from "../../image/connect.webp";
import image3 from "../../image/reheus.webp";
import image4 from "../../image/quote.webp";
import imgs2 from '../../image/Patronwork logo.png';
import imgs3 from '../../image/logo-white.png';
import imgs4 from '../../image/image00292.png';
import imgs5 from '../../image/BelgiumImmo.png';
import imgs7 from '../../image/twitter.png';



import Career from "../Careers/Career";
import Footers from "../Footers/Footer";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';





// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { GrTwitter } from "react-icons/gr";




const boxInfo = [
    { img: image1, para: "The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.", link: "Steven Krubiner", span: "Founder & CEO" },
    { img: image2, para: "We have had a good collaboration and we can talk openly about topics that are working well and also the ones that aren't.", link: " July Jimenez", span: "CTO" },
    { img: image3, para: "We have had a good collaboration and we can talk openly about topics that are working well and also the ones that aren't.", link: " Sean Crawford", span: "Founder & CEO" }
]




const Home = () => {
    const navigate = useNavigate();




    return (
        <>
            <section id="header" className="d-flex align-items-center homeimg text-white">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <Fade left duration={2000}>
                                    <div className="min-head col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column ">
                                        <h1 className=""> Building great <br /> digital solutions</h1>

                                        <h4 className="pt-3">Software Development Outsourcing</h4>
                                        <p className="pt-2 lead">We are a Latin American company, based in non-traditional tech hubs, with an ever growing talent pool that is dedicated to building world class software development outsourcing services.</p>
                                        <div className="mt-3 head-btn col-sm-12">

                                            <button className="btn-con" onClick={() => navigate("/contact")}>Contact us <MdKeyboardArrowRight /></button>

                                        </div>
                                    </div>
                                </Fade>
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
                            <Fade left duration={2000}>
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <img src={img1} className="img-fluid" alt="img1" />
                                </div>
                                </Fade>
                                <Fade bottom delay={2000} duration={3000}>
                                    <div className="col-lg-5 col-md-12 col-sm-12  d-flex justify-content-center flex-column">
                                        <h4 className="">SOFTWARE OUTSOURCING SERVICES</h4>
                                        <p className="pt-3 lead">We are passionate developers of great technology products. Our holistic expertise in software solutions allows us to intervene in all stages of our client's projects, don't matter their size.</p>
                                    </div>
                                </Fade>

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
                                <Fade bottom delay={500} duration={3000}>
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column  fade__bottom">


                                        <h1 className="mt-3 Develop">Software Development</h1>
                                        <p className="mt-2 Over ">With over 10+ years of experience in software product development, we provide scalable solutions to companies ranging from startups to Fortune 500. Combining top diverse  talent and a long track record of success, we're ready to help our clients bring their ideas to life.</p>
                                        <div className="mt-3 mb-5">
                                            <a href="" className="Getbtn">SEE SERVICES <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                        </div>
                                        <FaQuoteLeft size={30} style={{ color: "lightslategray" }} />
                                        <p className="mt-5 Every"> Everyone at Patagonian has been an excellent communicator with no surprises in billing or delivery.</p>
                                        <p className="CTO">Arrel Gray, CTO, Grapevine</p>
                                    </div>
                                </Fade>
                                <div className="col-lg-5 col-md-12 col-sm-12  header-img mb-5">
                                <Fade right duration={2000}>

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


                                </Fade>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-10 mx-auto mt-5">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12   header-img">
                            <Fade left duration={2000}>
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



                                </Fade>
                                </div>
                                <Fade bottom delay={500} duration={3000}>
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-end text-end  flex-column">


                                        <h1 className="mt-5 Develop">Software Product <br /> Discovery</h1>
                                        <p className="mt-5 Over">We help our clients weed out unnecessary scope by  understanding users' problems and opportunities before we set out to solve them. A good Product Discovery ensures a project is on the right track, reducing risks and uncertainty, and builds  solid foundation to grow any product.</p>
                                        <div className="mt-3 mb-5">
                                            <a href="" className="Getbtn">SEE SERVICES  <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>

                                        </div>
                                        <FaQuoteLeft size={30} style={{ marginLeft: "130px", color: "lightslategray" }} />
                                        <p className="mt-5 Every">Patagonian is very good at what they do.</p>
                                        <p className="CTO">Sean Crawford, Owner, Rhebus</p>
                                    </div>
                                </Fade>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-10 mx-auto mt-5">
                            <div className="row abs">
                                <Fade bottom delay={500} duration={3000}>
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                        <h1 className="mt-3 Develop">Talent<br /> Augmentation</h1>
                                        <p className="mt-5 Over">We have a top-class talent pool ready to jump on any new  challenge. We scale our client's delivery capacity with the right skills, reducing the time to market for any new product or functionality.</p>
                                        <div className="mt-3 mb-5">
                                            <a href="" className="Getbtn">SEE SERVICES <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                        </div>
                                        <FaQuoteLeft size={30} style={{ color: "lightslategray" }} />
                                        <p className="mt-5 Every">The fact that they’ve been with us from the start and were patient, supportive,  committed, and flexible is excellent.</p>
                                        <p className="CTO">Steven Krubiner, CEO, Conversifi</p>
                                    </div>
                                </Fade>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">
                                <Fade right duration={2000}>

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

</Fade>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-10 mx-auto mt-5">
                            <a class="cmp-btn" onClick={() => navigate("/services")}>Views all services <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                        </div>
                    </div>


                    <div className="row mt-5 backgimg text-white  rounded">
                        <Fade bottom  duration={2000}>
                            <div className="col-10 mx-auto mt-5">
                                <h2 className=" text-center here">Here are our services in action</h2>
                                <h1 className="mt-2 text-center">Take a look at some of what we do.</h1>
                                <a className="cmp-btn2 mt-5" onClick={() => navigate("/services")}>View all our work <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                                <div className="row bg-white bg mt-5">

                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                        <h1 className="petro">Petromark</h1>
                                        <h6 className="mt-2 Plat">Patagonian created a platform  that led Petromark to its  digital transformation process</h6>
                                        <p className="we lead">We developed an entire platform that enabled  Petromark to track and report their non destructive  testing projects in their clients oilfields.</p>

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
                        </Fade>
                    </div>


                    <div className="row text-white  rounded">
<Fade bottom delay={500} duration={2000}>
                        <div className="col-10 mx-auto mt-5">
                            <div className="row bg-white bg mt-5">
                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <h2 className="petro">Interamerican Development Bank</h2>
                                    <h6 className="mt-2 Plat">Fast Reaction and Agility for <br /> Covid-19 relief</h6>
                                    <p className="we lead">We built, in record time, an interactive map for local communities to find scarce resources and assistance for COVID-19 relief.</p>
                                    <div className="mb-5">
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
                        </Fade>
                    </div>
                </div>
            </section>




<Fade bottom duration={2000}>
            <div className="col-md-12 clint-div text-center pt-5 my-5">
                <h5>CLIENT TESTIMONIALS</h5>
                <h3>What they say about us</h3>
            </div>
            </Fade>
            
            <section className="card-img">
                <div className="container py-5">
                    <div className="row">
                        {
                            boxInfo.map((item) => {
                                return (
                                    <Fade bottom duration={2000}>
                                    <div className="col-md-4 col-sm-12 py-5">
                                        <div className="box p-4 bg-white text-dark">
                                            <img src={item.img} className=" img-div" />
                                            <p className="">{item.para}</p>
                                            <h5> <img src={image4} className="img-quote" /><img src={image4} className="img-quote" />  {item.link}</h5>
                                            <span>{item.span}</span>
                                        </div>
                                    </div>
                                    </Fade>
                                )
                            })
                        }

                        {/* start count jsx */}
                        <div className="row">
                        <Fade bottom duration={2000}>
                            <div className=" d-md-flex col-10 mx-auto">
                                <div className="col-md-4 col-sm-12 count">
                                    <h1>+<span>100</span><span className="my-span">CLIENTS</span> </h1>
                                </div>

                                <div className="col-md-4 col-sm-12 count">
                                    <h1>+<span>15</span><span className="my-span">COUNTRIES</span> </h1>
                                </div>

                                <div className="col-md-4 col-sm-12 count">
                                    <h1>+<span>300</span><span className="my-span">PRODUCTS</span> </h1>
                                </div>
                            </div>
                            </Fade>
                        </div>
                        <div className="row">
                        <Fade bottom duration={2000}>
                            <Marquee gradient={false} speed={40} className="pt-5 marque">

                                <div className="col img-wrapper">
                                    <img src={imgs2} />
                                </div>
                                <div className="col img-wrapper">
                                    <img src={imgs3} />
                                </div>
                                <div className="col img-wrapper">
                                    <img src={imgs4} />
                                </div>
                                <div className="col img-wrapper">
                                    <img src={imgs5} />
                                </div>

                                <div className="col img-wrapper">
                                    <img src={imgs7} />
                                </div>

                            </Marquee>
                            </Fade>
                        </div>
                    </div>
                    {/* count jsx end */}
                </div>
            </section>





            <div className="container-fluid mains">
                <div className="row">
                <Fade bottom duration={2000}>
                    <div className="col-10 mx-auto ">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  proj-header ">
                                <h3>Ready to tell us about <span className="bold">your project?</span></h3>
                            </div>

                            <div className="pro-main col-lg-6 col-md-12 col-sm-12  d-md-flex  justify-content-end">
                                <button className="proj-btn" onClick={() => navigate("/contact")}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>




            <Career />
            <Footers />

        </>
    );

}
export default Home;
