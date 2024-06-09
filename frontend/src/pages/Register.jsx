import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from '../components/Toast';
import axios from "axios";

function Register() {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        input
      );

      Chat(res);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/login");
      },1000)
      
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const Chat = (res) => {
    return res.data.message;
  }

  return (
    <>
      <div className="flex items-center justify-center bg-heroimage2 bg-cover">
        <div className="backdrop-blur-lg bg-black/30 w-full h-auto py-16">
           <div className="flex justify-center items-center">
           <Toast message="User Registration Successfull!" className="bg-green-500 text-white p-3 flex justify-between items-center rounded shadow-lg" show={showToast} onClose={() => setShowToast(false)} />
           </div>
          <div className="relative mx-auto w-full  max-w-sm bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Sign up
                </h1>
                <p className="mt-2 text-gray-500">
                  Sign up below to access your account
                </p>
              </div>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="relative mt-6">
                    <input
                      type="username"
                      name="username"
                      id="username"
                      value={input.username}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Name"
                      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="username"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Email Address"
                      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Password"
                      className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Password
                    </label>
                  </div>
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full font-medium rounded-md bg-purple-500 px-3 py-3 text-white focus:bg-purple-600 focus:outline-none"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <p className="text-center text-sm text-gray-500">
                      Already have an account?
                    </p>
                    <Link to="/login">
                      {" "}
                      <p className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none cursor-pointer hover:text-purple-500">
                        Sign in
                      </p>{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
