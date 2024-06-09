import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SingleBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getSingleBlog = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/get/blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBlog(res.data);
    };
    getSingleBlog();
  }, [id]);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-20 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: 500,
            backgroundImage: `url(http://localhost:5000/${blog.thumbnail})`,
          }}
          title={blog.title}
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 href="#" className="text-gray-900 font-bold text-3xl mb-3">
                {blog.title}
              </h1>

              <p className="text-base leading-8 my-5">{blog.description}</p>

              <button
                className=" bg-purple px-5 py-2 rounded-md bg-purple-500 hover:bg-blue-500 text-white"
                onClick={() => navigate("/")}
              >
                Back to Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
