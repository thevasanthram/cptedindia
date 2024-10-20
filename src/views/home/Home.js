import React from "react";
import Slider from "react-slick";
import "./Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CPTEDIndia from "./../../images/slide_pictures/cptedindia.jpg";
import expatriateEngagement from "./../../images/slide_pictures/expat_engagement.jpeg";
import customizedTraining from "./../../images/slide_pictures/customized_training.jpeg";
import riskManagement from "./../../images/slide_pictures/risk_management.jpeg";
import travelSecurityAndTransportSecurity from "./../../images/slide_pictures/travel_and_transport_security.jpeg";
import CPTEDIndiaAdvisory from "./../../images/slide_pictures/cptedindia_advisory.jpeg";
import cptedindia_geopolitical_advisory from "./../../images/slide_pictures/cptedindia_geopolitical_advisory.jpg";

import Award1 from "./../../images/awards/award-img-1.jpg";
import Award2 from "./../../images/awards/award-img-2.jpeg";
import Award3 from "./../../images/awards/award-img-3.jpg";
import Award4 from "./../../images/awards/award-img-4.jpeg";
import Award5 from "./../../images/awards/award-img-5.jpg";
// import RakshaLogo from "./../../images/logos/raksha_logo.jpg";
// import IFESCLogo from "./../../images/logos/IFSEC_logo.jpg";
// import SecurityAndFireExpoLogo from "./../../images/logos/security_and_fire_expo.jpg";
// import JianaConstructionLogo from "./../../images/logos/jiana_construction_logo.jpg";
// import ISSPLogo from "./../../images/logos/ISSP lOGO.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    appendDots: (dots) => (
      <div className="home-custom-dots-container" id="custom-slick-dot">
        <ul className="home-custom-dots">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`home-custom-dot ${
                index === 0
                  ? "home-dot-symbol-1"
                  : index === 1
                  ? "home-dot-symbol-2"
                  : "home-dot-symbol"
              }`}
            >
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div id="home_page">
      <div className="home-container">
        <div className="home-award-container">
          <h2 className="home-award-title">Awards</h2>
          <div className="home-award-wrapper">
            <img
              src={Award1}
              alt="Award 1"
              className="home-award-image home-award-image-1"
            />
            <img
              src={Award2}
              alt="Award 2"
              className="home-award-image home-award-image-2"
            />
            <img
              src={Award3}
              alt="Award 3"
              className="home-award-image home-award-image-3"
            />
            <img
              src={Award4}
              alt="Award 4"
              className="home-award-image home-award-image-4"
            />
            <img
              src={Award5}
              alt="Award 5"
              className="home-award-image home-award-image-5"
            />
          </div>
        </div>
        <div className="home-carousel">
          <Slider {...settings}>
            <div className="home-carousel-slide home-slide1 home-slide-enter">
              <img
                src={CPTEDIndia}
                alt="CPTED INDIA"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  CPTEDINDIA aims that fear of crime reduces with implementation
                  of crime prevention strategies. CPTEDINDIA also ensures to
                  improves quality of life, reduces insurance cost, enhances
                  property values, decreases crime rates, enhances business
                  values and increases a sense of community pride. We
                  collaborate with Business leaders/Owners, Planners,
                  Architects, Corporations, Municipal leaders, Urban Planners,
                  Community residence and educational institutions in safety
                  planning, Zone development and redevelopment projects.
                  {/* <a class="read-more">Read More</a> */}
                </h2>
              </div>
            </div>
            <div className="home-carousel-slide home-slide2">
              <img
                src={expatriateEngagement}
                alt="Expatriate Engagement"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  CPTEDINDIA coordinates with Corporates and Individuals to
                  provide a safer environment for the Expat community.
                  <Link class="read-more" to="menu/expatriate-engagements">
                    Read More
                  </Link>
                </h2>
              </div>
            </div>
            <div className="home-carousel-slide home-slide3">
              <img
                src={customizedTraining}
                alt="Customized Training"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  CPTEDINDIA offers a customized approach to learning and
                  development that's tailored to the needs and preferences of
                  each individual or a group.
                  <Link class="read-more" to="menu/training_cpted">
                    Read More
                  </Link>
                </h2>
              </div>
            </div>
            <div className="home-carousel-slide home-slide4">
              <img
                src={riskManagement}
                alt="Risk Management"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  Identify the risks associated with your firm before its too
                  late. CPTEDINDIA experts offer a unique approach in
                  identifying, mitigating and Managing risks.
                  <Link class="read-more" to="menu/risk-management">
                    Read More
                  </Link>
                </h2>
              </div>
            </div>
            <div className="home-carousel-slide home-slide5">
              <img
                src={travelSecurityAndTransportSecurity}
                alt="Travel Security and Transport Security"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  “Not all roads lead to Rome” some are broken, Traffic
                  congested and pass by Crime Prone area. CPTEDINDIA coordinates
                  and commits for a planned Travel safety and Travel Security
                  along with Transport Safety and Security.
                  <Link class="read-more" to="menu/driver-and-road-safety">
                    Read More
                  </Link>
                </h2>
              </div>
            </div>
            <div className="home-carousel-slide home-slide6">
              <img
                src={CPTEDIndiaAdvisory}
                alt="Cpted india advisory"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  Get to know your region or your work environment and get
                  regular updates from CPTEDINDIA on the Potential Risk but not
                  limited to Weather, Political Unrest, Geopolitics, Network
                  Outbreaks, Hotspot Mapping and Risk arising out of local
                  situations.
                  {/* <a class="read-more">Read More</a> */}
                </h2>
              </div>
            </div>
            <div className="home-carousel-slide home-slide7">
              <img
                src={cptedindia_geopolitical_advisory}
                alt="Cpted india advisory"
                className="home-carousel-image"
              />
              <div className="home-slide-caption">
                <h2>
                  CPTEDINDIA provides bespoke geopolitical advisory services and
                  CXO briefings to enable business leaders with the tools they
                  need to take decision in this uncertain world.
                  {/* <a class="read-more">Read More</a> */}
                </h2>
              </div>
            </div>
          </Slider>
        </div>
        {/* <div className="home-award-container">
          <h2 className="home-award-title home-knowledge-partners-title">
            Knowledge Partners
          </h2>
          <div className="home-knowledge-partners-wrapper">
            <img
              src={RakshaLogo}
              alt="Raksha Logo"
              className="home-knowledge-partners-image home-knowledge-partners-image-1"
            />
            <img
              src={IFESCLogo}
              alt="IFESC Logo"
              className="home-knowledge-partners-image home-knowledge-partners-image-2"
            />
            <img
              src={SecurityAndFireExpoLogo}
              alt="Security And Fire Expo Logo"
              className="home-knowledge-partners-image home-knowledge-partners-image-3"
            />
            <img
              src={JianaConstructionLogo}
              alt="Jiana Constructions Logo"
              className="home-knowledge-partners-image home-knowledge-partners-image-4"
            />
            <img
              src={ISSPLogo}
              alt="ISSP Logo"
              className="home-knowledge-partners-image home-knowledge-partners-image-5"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
