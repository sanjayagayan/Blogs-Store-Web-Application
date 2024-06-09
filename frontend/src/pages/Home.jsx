import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/get/allblogs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlogs(res.data);
    };
    getAllBlogs();
  }, []);

  return (
    <>
      <main className=" relative w-full  bg-stone-100 h-auto">
        {/*Hero section  */}
        <div className="relative  bg-heroimage2 bg-cover ">
          <div className="backdrop-blur-lg bg-black/30 px-6 pt-10 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-14 sm:py-24 lg:py-28">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <p className="leading-loose text-4xl font-bold  text-white sm:text-6xl">
                  Journey Through a World of Endless Ideas
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Stay ahead of the curve with the latest tech trends,
                  innovations, and insights. From deep dives into emerging
                  technologies to practical tips for tech enthusiasts.
                </p>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
        {/* Blogs section */}
        <div className="max-w-screen-xl mx-auto sm:p-10 md:p-16">
          <div className="flex w-full justify-between items-center pb-16">
            <span className="flex border-t border-[#757575]/30 w-[40%] md:w-[80%] h-0"></span>
            <span className="flex font-sans text-[13px] md:text-[32px] font-[800] text-black tracking-wider text-center justify-center px-4 w-full">
              LATEST BLOGS
            </span>
            <span className="flex border-t border-[#757575]/30 w-[40%] md:w-[80%] h-0"></span>
          </div>
          {blogs && blogs.length > 0 ? (
            blogs.map((item) => {
              return (
                <div
                  key={item._id}
                  className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 pb-8"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="relative">
                      {/* Thumbnail */}
                      <img
                        className="w-full bg-cover"
                        src={`http://localhost:5000/${item.thumbnail}`}
                        alt="Thumbnail"
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      {/* Category */}
                      <div className="absolute bottom-0 left-0 bg-purple-500 px-4 py-2 text-white text-sm hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out cursor-pointer">
                        :: {item.category.title}
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <h1 className="font-semibold text-lg inline-block hover:text-purple-600 transition duration-500 ease-in-out">
                        {item.title}
                      </h1>
                      <p className="text-gray-500 text-sm py-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-6 pb-6 flex flex-row justify-between items-center">
                      <Link to={`/blog/${item._id}`}>
                        <h1 className="text-sm text-purple-600 underline cursor-pointer">
                          Read More
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
