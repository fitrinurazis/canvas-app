import logo from "../../assets/images/logo.png";
import starIcon from "../../assets/icons/bintang.png";
import dateIcon from "../../assets/icons/date.png";
import messageIcon from "../../assets/icons/message.png";
import profilImage from "../../assets/images/profilImage.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky z-50 flex flex-col items-center justify-center w-full bg-white border-b-2 border-gray-800">
      <div className="w-full h-5 bg-blue-500"></div>
      <div className="flex items-center justify-between w-full px-10 py-4 bg-white ">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-36" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link>
            <img src={starIcon} alt="Star Icon" className="w-10" />
          </Link>
          <Link>
            <img src={dateIcon} alt="Date Icon" className="w-10" />
          </Link>
          <Link>
            <img src={messageIcon} alt="Message Icon" className="w-10" />
          </Link>
          <Link to="/dashboard-profile">
            <img src={profilImage} alt="Profil Image" className="w-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
