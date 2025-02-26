import { FaGoogle } from "react-icons/fa";
import login from "../assets/lo.webp";
import { Link } from "react-router-dom";
import Transition from "../components/Transition";
import { useState } from "react";
import Reveal from "../animation/Reveal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-[90vh] flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute inset-0 bg-black/20 bg-opacity-30 z-20"></div>

        {/* <div className="absolute z-30 top-[20%] left-[10%] flex flex-col">
        
            <h1 className="text-4xl text-footer-text font-extrabold my-4">
                Turn Your Ideas into reality
            </h1>
            <p className=" text-xl text-main-bg font-normal">
                Start for free and get attractive offers from the comunity
            </p>
        </div> */}
        <img
          src={login}
          className="  backdrop-opacity-50 w-full h-full object-cover"
          alt="img"
        />
      </div>

      <div className=" w-1/2 h-full bg-[#f5f5f5]  flex flex-col p-20 justify-between items-center">
        <Reveal>
          {" "}
          <h1 className="text-xl text-text-primary font-semibold">
            Interactive Brand
          </h1>
        </Reveal>

        <div className=" w-full flex flex-col max-w-[555px]">
          <div className="flex flex-col w-full mb-18">
            <Reveal>
              <h3 className=" text-2xl font-semibold mb-4">Login</h3>
            </Reveal>
            <Reveal>
              <p className="text-sm mb-2">
                Welcome Back! Please enter your details
              </p>
            </Reveal>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full my-2 bg-transparent py-4 px-2 text-text-primary border-b border-text-primary outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full my-2 bg-transparent py-4 px-2 text-text-primary border-b border-text-primary outline-none focus:outline-none"
            />
          </div>

          <div className="flex w-full flex-col my-4">
            <button
              onClick={handleLogin}
              type="submit"
              className="w-full cursor-pointer bg-text-primary text-main-bg rounded-md p-4 flex items-center justify-center"
            >
              <Reveal> Log in</Reveal>
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2 ">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-main-bg">or</p>
          </div>

          <div className=" w-full text-text-primary my-2 cursor-pointer font-semibold bg-main-bg border-2 border-black rounded-md p-4 text-center flex items-center justify-center gap-4">
            <Reveal>
              {" "}
              <FaGoogle />
            </Reveal>
            <Reveal>
              <span>Sign In With Google</span>
            </Reveal>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <Reveal>
            {" "}
            <p className=" text-sm font-normal text-text-primary">
              Don't have a account?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                <Link to="/register">Sign up for free</Link>
              </span>{" "}
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(Login);
