import Featured from "../../components/featured/Feature";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
};

export default Home;
