import Featured from "../../components/featured/Feature";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import CategoryCard from "../../components/catCard/catCard";
import { FaRegCheckCircle } from "react-icons/fa";
import ProjectCard from "../../components/projectCard/proCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => {
          return <CategoryCard item={card} key={card.id} />;
        })}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <i>
                <FaRegCheckCircle />
              </i>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <i>
                <FaRegCheckCircle />
              </i>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <i>
                <FaRegCheckCircle />
              </i>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <i>
                <FaRegCheckCircle />
              </i>
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <i>
                <FaRegCheckCircle />
              </i>
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <i>
                <FaRegCheckCircle />
              </i>
              Connect to freelancers with proven business experience
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => {
          return <ProjectCard item={card} key={card.id} />;
        })}
      </Slide>
    </div>
  );
};
export default Home;
