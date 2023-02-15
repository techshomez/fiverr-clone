import Featured from "../../components/featured/Feature";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards } from "../../data";
import CategoryCard from "../../components/catCard/catCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => {
          return <CategoryCard item={card} key={card.id} />;
        })}
      </Slide>
    </div>
  );
};

export default Home;
