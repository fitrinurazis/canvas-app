import elip1 from "../assets/images/elip1.png";
import elip2 from "../assets/images/elip2.png";
import pagar from "../assets/images/pagar.png";
import pagar2 from "../assets/images/pagar2.png";
import spline from "../assets/images/spline.png";
import star from "../assets/images/star.png";
import human from "../assets/images/human.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex fixed w-full items-center justify-center min-h-screen bg-gradient-to-br from-[#5DE0E6] to-[#004AAD]">
      <div>
        <img
          src={elip1}
          alt="Elip1"
          className="absolute w-44 -right-20 -top-10"
        />
        <img
          src={elip2}
          alt="Elip2"
          className="absolute -bottom-10 -left-20 w-44"
        />
        <img
          src={pagar}
          alt="Pagar"
          className="absolute right-80 top-20 h-44"
        />
        <img
          src={pagar2}
          alt="Pagar"
          className="absolute h-40 -bottom-10 left-1/3"
        />
        <img
          src={spline}
          alt="Spline"
          className="absolute w-1/2 -bottom-[430px] -right-96"
        />
        <img
          src={human}
          alt="Human"
          className="absolute bottom-0 right-0 w-1/4"
        />
        <img
          src={star}
          alt="Star"
          className="absolute w-10 right-[35%] top-32"
        />
        <img src={star} alt="Star" className="absolute w-10 right-10 top-1/2" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-6xl font-bold text-center text-white">
          Canvas LMS, The World's #1 <br /> Teaching and Learning <br />
          Software
        </h1>
        <Link to="login">
          <button className="w-48 px-4 py-2 text-center text-lg font-medium text-white bg-[#4329BB] border border-transparent rounded-lg shadow-md  hover:bg-[#3e1ecb]  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </Link>
        <Link to="register">
          <button className="w-48 px-4 py-2 text-center text-lg font-medium text-white bg-[#4329BB] border border-transparent rounded-lg shadow-md  hover:bg-[#3e1ecb]  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
