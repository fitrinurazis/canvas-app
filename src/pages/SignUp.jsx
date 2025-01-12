import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageLogin from "../assets/images/login.png";
import pagar from "../assets/images/pagar.png";

const SignUp = () => {
  const text = `If you're a teacher, student, or parent using a free (non-school-associated) Canvas account, sign up here.
`;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      // Store both email and password for authentication
      localStorage.setItem("registeredEmail", formData.email);
      localStorage.setItem("registeredPassword", formData.password);
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
        })
      );
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex fixed w-full items-center justify-center min-h-screen bg-gradient-to-br from-[#5DE0E6] to-[#004AAD]">
      <div className="hidden w-1/2 lg:block">
        <h2 className="w-1/2 mb-20 text-lg font-bold text-white ">{text}</h2>
        <img src={imageLogin} alt="Register" className="mx-auto h-[450px]" />
        <img src={pagar} alt="Pagar" className="absolute top-0 h-40 left-1/3" />
        <img
          src={pagar}
          alt="Pagar"
          className="absolute h-40 -bottom-16 left-1/3"
        />
      </div>
      <div className="w-full max-w-md p-8 mx-2 space-y-6 rounded-lg shadow-md bg-black/25 ">
        <div className="mb-10">
          <Link to="/">
            <FaArrowLeft className="p-1 mb-2 bg-white rounded-full w-7 h-7" />
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Create a New Account
          </h2>
          <span className="text-white">Join our learning platform today</span>
          {error && <div className="absolute text-red-500 ">{error}</div>}
        </div>
        <form
          className="flex flex-col justify-between h-[355px]"
          onSubmit={handleSubmit}
        >
          <div className="space-y-3">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                className="block w-full px-3 mt-1 text-white placeholder-gray-300 bg-transparent border-b-2 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
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
                required
                placeholder="Enter your email"
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
                  required
                  placeholder="Create a password"
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
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Confirm your password"
                  className="block w-full px-3 mt-1 text-white placeholder-gray-300 bg-transparent border-b-2 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-white" />
                  ) : (
                    <FaEye className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-r from-[#8C52FF] to-[#5CE1E6] border border-transparent rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#7B3FFF] hover:to-[#4BCFD4]  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p className="text-sm text-center text-white">
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-bold text-blue-400">Login here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
