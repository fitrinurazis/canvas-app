import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageLogin from "../assets/images/login.png";
import pagar from "../assets/images/pagar.png";

const Login = () => {
  const text = `If you're a teacher, student, or parent using a free (non-school-associated) Canvas account, log in here.`;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("registeredEmail");
    const storedPassword = localStorage.getItem("registeredPassword");

    if (
      formData.email === storedEmail &&
      formData.password === storedPassword
    ) {
      localStorage.setItem("token", "dummy-token");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex fixed w-full items-center justify-center min-h-screen bg-gradient-to-br from-[#5DE0E6] to-[#004AAD]">
      <div className="hidden w-1/2 md:block">
        <h2 className="w-1/2 mb-20 text-lg font-bold text-white ">{text}</h2>
        <img src={imageLogin} alt="Register" className="mx-auto h-[450px]" />
        <img src={pagar} alt="Pagar" className="absolute top-0 h-40 left-1/3" />
        <img
          src={pagar}
          alt="Pagar"
          className="absolute h-40 -bottom-16 left-1/3"
        />
      </div>
      <div className="w-full max-w-md p-8 space-y-6 bg-black/25 rounded-lg shadow-md h-[764px] md:h-[600px]">
        <div className="mb-10">
          <Link to="/">
            <FaArrowLeft className="p-1 mb-2 bg-white rounded-full w-7 h-7" />
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Already have an account?
          </h2>
          <span className="text-white">Login now</span>
          {error && (
            <div className="absolute px-2 py-1 font-bold text-red-500 rounded-md bg-slate-100 ">
              {error}
            </div>
          )}
        </div>
        <form
          className="flex flex-col justify-between h-[350px]"
          onSubmit={handleSubmit}
        >
          <div className="space-y-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="block w-full px-3 mt-1 text-white placeholder-gray-300 bg-transparent border-b-2 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="block w-full px-3 mt-1 text-white placeholder-gray-300 bg-transparent border-b-2 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white" />
                  ) : (
                    <FaEye className="text-white" />
                  )}
                </button>
              </div>
              <div className="mt-1 text-right">
                <Link
                  to="/reset-password"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-r from-[#8C52FF] to-[#5CE1E6] border border-transparent rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#7B3FFF] hover:to-[#4BCFD4]  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-sm text-center text-white">
            Create a New Account{" "}
            <Link to="/register">
              <span className="font-bold text-blue-400">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
