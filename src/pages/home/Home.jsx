import Featured from "../../components/featured/Feature";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards } from "../../data";
import CategoryCard from "../../components/catCard/catCard";
import { FaRegCheckCircle } from "react-icons/fa";

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
    </div>
  );
};

export default Home;
