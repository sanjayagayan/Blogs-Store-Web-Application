import { useState } from "react";
import Toast from './Toast';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/login");
      }, 1000);
      
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const removePopup = () => {
    navigate("/add-category");
    setIsPopupOpen(!isPopupOpen);
  };

  const addblogRemove = () => {
    navigate("/add-blog");
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      
      <header className="bg-white text-black border-b-[1px] border-black/10 z-10">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-20">
           <div className="flex items-center justify-center">
              <Toast message="Log out Successfully!" className="bg-yellow-600 text-white p-3 flex justify-between items-center rounded shadow-lg" show={showToast} onClose={() => setShowToast(false)} />
          </div>
            
        
          <div className="flex justify-between items-center py-3 sm:py-6">
          
            <div className=" flex-shrink-0 items-center">
              <Link to="/">
                <div className="flex items-center">
                  <p className=" flex text-[35px] font-black hover:text-blue-600">
                    BLOGO
                  </p>
                  <div className="pt-[10px]">
                    <p className="text-purple-500 text-8xl border-4 border-purple-500 rounded-full"></p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <div className="flex space-x-4"></div>
              <div className="relative">
                {token && username ? (
                  <>
                    <img
                      src="https://i.pravatar.cc/200"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full cursor-pointer"
                      onClick={togglePopup}
                    />
                    {isPopupOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10">
                        <div className="text-center my-4">
                          <img
                            className="h-20 w-20 rounded-full border-4 border-purple  mx-auto"
                            src="https://i.pravatar.cc/200"
                            alt="Avatar"
                          />

                          <div className="pt-2">
                            <h3 className="font-bold text-xl text-black mb-1">
                              {username}
                            </h3>
                            <div className="inline-flex text-black  items-center">
                              <p className="text-sm lowercase">
                                {username}@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pb-2 border-t-[1px] border-black/20">
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={addblogRemove}
                          >
                            Add Blog
                          </button>

                          <button
                            onClick={removePopup}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            Add to Category
                          </button>

                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={handleLogout}
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex space-x-3">
                      <Link to="/login">
                        <button className="text-purple-500 bg-bg-transparent hover:text-white hover:bg-purple-500 border-[1px] border-purple-500 hover:border-[1px] hover:border-purple-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 ">
                          Sign in
                        </button>
                      </Link>
                      <Link to="/register">
                        <button className=" text-white bg-purple-500 border-[1px] border-purple-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 ">
                          Create an account
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none"
              >
                {menuOpen ? (
                  <IoClose className="h-10 w-10" aria-label="Close" />
                ) : (
                  <IoMenu className="h-10 w-10" aria-label="Menu" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <header className="text-white">
        {menuOpen && (
          <div className="md:hidden bg-black origin-top">
            <div className="px-0 pt-0 sm:pt-2 pb-4 space-y-2 sm:px-3 text-center">
              <Link to="#">
                <p className="block py-4 text-2xl font-medium text-white  hover:text-blue-700 border-b-[1px] border-white/20">
                  about
                </p>
              </Link>
              <Link to="#">
                <p className="block py-4 text-2xl font-medium  text-white  hover:text-blue-700 border-b-[1px] border-white/20">
                  portfolio
                </p>
              </Link>
              <Link to="#">
                <p className="block py-4 text-2xl font-medium text-white  hover:text-blue-700 border-b-[1px] border-white/20">
                  blog
                </p>
              </Link>
              <Link to="#">
                <p className="block py-4 text-2xl font-medium text-white  hover:text-blue-700 border-b-[1px] border-white/20">
                  Contact
                </p>
              </Link>
            </div>
            <div className="px-5 py-4 flex justify-around"></div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
