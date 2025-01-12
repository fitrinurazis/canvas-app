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
    <div className=" flex fixed w-full items-center justify-center min-h-screen bg-gradient-to-br from-[#5DE0E6] to-[#004AAD]">
      <div>
        <img
          src={elip1}
          alt="Elip1"
          className="absolute w-36 lg:w-44 -right-20 -top-10"
        />
        <img
          src={elip2}
          alt="Elip2"
          className="absolute w-36 -bottom-10 -left-20 lg:w-44"
        />
        <img
          src={pagar}
          alt="Pagar"
          className="absolute right-10 top-10 w-36 lg:right-80 lg:top-20 lg:w-44"
        />
        <img
          src={pagar2}
          alt="Pagar"
          className="absolute bottom-0 left-20 w-28 lg:w-40 lg:-bottom-5 lg:left-1/3"
        />
        <img
          src={spline}
          alt="Spline"
          className="absolute w-80 -bottom-44 -right-44 lg:w-1/2 lg:-bottom-[430px] lg:-right-96"
        />
        <img
          src={human}
          alt="Human"
          className="absolute bottom-0 right-0 w-36 lg:w-1/4"
        />
        <img
          src={star}
          alt="Star"
          className="absolute w-8 lg:w-10 top-32 right-40  lg:right-[35%] lg:top-32"
        />
        <img
          src={star}
          alt="Star"
          className="absolute right-0 w-5 bottom-28 lg:w-10 lg:right-10 lg:top-1/2"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-2xl font-bold text-center text-white lg:text-6xl">
          Canvas LMS, The World's #1 <br /> Teaching and Learning <br />
          Software
        </h1>
        <Link to="login">
          <button className="w-32 px-4 py-2 font-medium text-center text-white bg-indigo-700 border border-transparent rounded-lg shadow-md lg:text-lg lg:w-48 hover:bg-indigo-800 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </Link>
        <Link to="register">
          <button className="w-32 px-4 py-2 font-medium text-center text-indigo-500 border border-transparent rounded-lg shadow-md lg:text-lg lg:w-48 bg-slate-50 hover:bg-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
