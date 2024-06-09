import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`relative bg-purple-950 text-white py-6 bottom-0`}>
      <div className="container flex flex-col justify-center gap-y-4 sm:gap-y-5 pt-4 sm:pt-0 items-center max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        <div className="flex order-2 sm:order-1 pr-2 mb-4 sm:mb-0">
          <span className="flex items-center text-white">
            © 2024{" "}
            <Link to="https://sanjayagayan.me/" target="_blank">
              <p className="text-[18px] pl-2 text-white hover:text-blue-600 cursor-pointer font-bold">
                sanjayagayan.me
              </p>
            </Link>
          </span>
        </div>
        <button
          onClick={scrollToTop}
          className=" top-[-40px] bg-purple-500 hover:bg-blue-600 text-white rounded-full  p-3 text-2xl font-black cursor-pointer"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
