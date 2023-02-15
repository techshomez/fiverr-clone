import Slider from "infinite-react-carousel";
import CategoryCard from "../catCard/catCard";
import "./Slide.scss";
import { cards } from "../../data";

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider>
          {cards.map((card) => {
              return (
                  <CategoryCard item={card} key={card.id} />
              );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
