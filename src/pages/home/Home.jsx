import CategoryCard from "../../components/catCard/catCard";
import Featured from "../../components/featured/Feature";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <CategoryCard />
    </div>
  );
};

export default Home;
