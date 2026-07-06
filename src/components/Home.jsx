import Header from "./Header";
import { FaArrowUp } from "react-icons/fa";
import "./Header.css";
const Home = () => {
  return (
    <div className="hero-container">
      <Header />

      <div className="hero-content">
        <h1>
          A Frontend developer <br /> that creates free <br /> quality content
        </h1>

        <p>
          I build simple landing page with clean, efficient
          code.<br/> Passionate about creating seamless user experiences and
          interactive interfaces.
        </p>

        <button>
          Explore Page{" "}
          <FaArrowUp
            style={{
              transform: "rotate(40deg)",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
