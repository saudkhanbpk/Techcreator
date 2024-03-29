import React from "react";
import "./services.css";
import card1 from "../../image/softwear.png";
import card3 from "../../image/master.png";
import card4 from "../../image/interface.png";
import card6 from "../../image/testing.png";
import card9 from "../../image/managment.png";
import card10 from "../../image/development.png";
import card11 from "../../image/archit.png";
import card12 from "../../image/devops.png";
import card13 from "../../image/experience.png";
import Footers from "../Footers/Footer";
import Career from "../Careers/Career";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

const cardInfo = [
  {
    img: card10,
    header: "Web Development",
    para: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card11,
    header: "App Development",
    para: "Our team of experienced developers uses the latest technologies and industry best practices to create high-quality mobile apps that exceed your expectations.",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card4,
    header: "UI/UX Design",
    para: "Our expert designers use the latest UI/UX design principles to develop interfaces that are aesthetically pleasing, easy to use, and engaging.",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card13,
    header: "Graphic Designing",
    para: "Our graphic designers are passionate about creating stunning designs that captivate audiences and elevate brands.",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card3,
    header: "SEO & Content Writing",
    para: "Enhance your online visibility and engage your target audience through our expert SEO and content writing services tailored for TechCreator's unique identity.",
  },
  {
    img: card9,
    header: "Project Management",
    para: "Our experienced project managers work closely with clients to ensure that projects are completed on time, within budget, and to the highest standards.",
    btn: "VIEW SERVICE DETAILS",
  },
 
  {
    img: card6,
    header: "QA Testing",
    para: "Our team of experienced testers uses the latest testing methodologies and tools to provide thorough testing that identifies defects and ensures that your software performs flawlessly.",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card1,
    header: "Software Maintenance",
    para: "Our team of experts offers timely and cost-effective maintenance solutions to keep your software up-to-date and secure.",
    btn: "VIEW SERVICE DETAILS",
  },

  ,
  {
    img: card12,
    header: "DevOps",
    para: "Our team of skilled engineers can help you integrate automation, testing, and deployment processes to ensure faster time-to-market and higher quality products.",
    btn: "VIEW SERVICE DETAILS",
  }
];
const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Techcreator Software Company</title>
        <meta
          name="description"
          content="At TechCreator Software House, we offer custom software development services and solutions to help your business succeed."
        />
        <meta
          name="keywords"
          content="TechCreator, TechCreator web and mobile app development services,  web and mobile app development services, TechCreator Software
          Development, TechCreator Software Product Discovery, TechCreator Talent Augmentation, techcreator software house, apps development, software industry, swabi software house, software development services"
        />
        <link rel="canonical" href="/services" />
      </Helmet>
    

      {/* <section className="d-flex align-items-center servises-main text-white">
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "15%" }}
          >
            <Fade left delay={500} duration={3000}>
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className="services">
                      Our Services
                    </h1>
                    
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <p className="we-about lead">
                      At Techcreator, we offer a wide range of products and
                      services in the fields of software development, data
                      analytics, embedded systems, and artificial intelligence.
                      Our goal is to use technology to create a better future
                      for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section> */}
      <section className="d-flex align-items-center aboutimg text-white">
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "8%", marginBottom: "5%" }}
          >
      
            <Fade left delay={500} duration={1000}>
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className="services">Our Services</h1>
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
                    <p className="we-services lead ">
                      TechCreator offers top-notch web and mobile app
                      development services to help businesses bring their ideas
                      to life. Our experienced team of developers creates custom
                      apps that are tailored to meet our clients' specific
                      needs. We use the latest technologies and industry best
                      practices to ensure that our apps are scalable, secure,
                      and easy to use. Whether you need a simple mobile app or a
                      complex web application, TechCreator has the expertise to
                      deliver high-quality solutions that exceed your
                      expectations. Contact us today to learn more about our web
                      and mobile app development services.
                    </p>
                  </div>
                </div>
              </div>

            </Fade>
          </div>
        </div>
      </section>

      {/* Card Jsx */}
      <section className="main">
        <div className="container">
          <Fade bottom duration={1000}>
            <div className="head">
              <h2 className="display-5 fw-bold lh-1 mb-3 text-primary ">
              Our Service
              </h2>
            </div>
          </Fade>
          <div className="row">
            {cardInfo.map((item) => {
              return (
                <Fade bottom duration={1000}>
                  <div className="col-md-6 col-lg-4 p-3">
                    <div className="card-ser p-4 bg-white text-dark">
                      <img src={item.img} className="pt-3" />
                      <h3 className="pt-4">{item.header}</h3>
                      <span className="pt-4">{item.para}</span>
                      
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
