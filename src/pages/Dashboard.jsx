import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profilImage.png";
import leaningIcon from "../assets/icons/learningIcon.png";
import learningIcon2 from "../assets/icons/learningIcon2.png";
import pagar from "../assets/images/pagar.png";
import spline from "../assets/images/spline.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white md:fixed">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="hidden md:block ">
          <img
            src={pagar}
            alt="Pagar"
            className="absolute right-0 h-40 top-10"
          />
          <img
            src={pagar}
            alt="Pagar"
            className="absolute h-40 -left-16 top-36"
          />
          <img
            src={spline}
            alt="spline"
            className="absolute w-[620px] -bottom-[400px] -right-80"
          />
          <img
            src={leaningIcon}
            alt="Leaning Icon"
            className="absolute left-0 w-64 bottom-5 "
          />
          <img
            src={learningIcon2}
            alt="Learning Icon 2"
            className="absolute right-0 w-64 bottom-5"
          />
        </div>
        <div className="p-2 space-y-8 text-center lg:w-1/3 md:w-1/2 md:p-0 ">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={profileImage}
              alt="profil"
              className="drop-shadow-lg w-44"
            />
            <h1 className="text-4xl font-bold tracking-widest text-red-500 font-oswald">
              HI, ELA HERAWATI
            </h1>
          </div>
          <p className="text-sm">
            Ini adalah tempat di mana kalian dapat mengakses semua materi,
            tugas, dan informasi penting untuk mendukung proses belajar kalian.
            Pastikan untuk selalu memeriksa pembaruan terbaru, mengerjakan tugas
            tepat waktu, dan mengikuti diskusi yang ada. Mari kita jadikan
            pembelajaran ini menyenangkan dan penuh makna.
          </p>
          <h1 className="text-xl font-bold">
            Selamat belajar dan semoga sukses!
          </h1>
          <div>
            <Link to="dashboard/class">
              <buttom className="px-4 py-2 text-center text-lg font-medium text-white bg-[#4329BB] border border-transparent rounded-lg shadow-md  hover:bg-[#3e1ecb]  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                LIHAT SEMUA KELAS
              </buttom>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
