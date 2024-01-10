import React, { useState } from "react";
import { Link } from "react-router-dom";
import countries from "../Data/countries";
import signUpImg from "../assets/lsignup.gif";
import avartar from "../assets/terence 1.png";
import signUpImgII from "../assets/Signup-svg-2.svg";
import Flags from "react-flags-select";
// import 'react-flags-select/css/react-flags-select.css';


export const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "", // Add phoneNumber field
    photo: selectedFile,
    gender: "",
    country: "", // Change role to country
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // Add your submission logic here
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              {/* Use your signUpImgII or any other image */}
              <img src={signUpImgII} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Sign Up form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor"> account </span>
            </h3>

            <form action="" onSubmit={submitHandler}>
              {/* ... Other form fields ... */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Names"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              {/* Updated country input */}
              <div className="mb-5">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Country:
                  <Flags
                    selected={formData.country}
                    options={countries}
                    onSelect={handleInputChange}
                    className="flag-select"
                  />
                </label>
              </div>

              {/* New phone number input */}
              <div className="mb-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Create a strong Password"
                  name="password"
                  value={formData.password}
                  className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              {/* ... Other form fields ... */}
              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid bg-[#CCF4B3] flex items-center justify-center">
                  <img src={avartar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    value={formData.photo}
                    onChange={handleFileInputChange}
                    id="customFile"
                    accept=".jpg, .png, .jpeg"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#CCF4B3] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Profile
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  SIGN UP!
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link
                  to="/auth/signin"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
