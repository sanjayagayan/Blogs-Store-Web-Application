import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from '../components/Toast';

function AddBlog() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [file, setFile] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/get/categories",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCategories(res.data);
    };
    getAllCategories();
  }, []);

  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const formdata = new FormData();
  formdata.append("title", input.title);
  formdata.append("category", input.category);
  formdata.append("description", input.description);
  formdata.append("thumbnail", file);

  const handleBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/add/blog",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      Chat(res);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/");
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
        <div className="backdrop-blur-lg bg-black/30 w-full h-auto py-20">
                <div className="flex justify-center items-center">
                    <Toast message="Add Category Successfully!" className="bg-blue-500 text-white p-3 flex justify-between items-center rounded shadow-lg" show={showToast} onClose={() => setShowToast(false)} />
                </div>
          <div className="relative mx-auto w-full  max-w-sm bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Add a New Blog
                </h1>
                <p className="mt-2 text-gray-500">you can write a blog!</p>
              </div>
              <div className="mt-5">
                <form onSubmit={handleBlog}>
                  <div className="relative mt-6">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={input.title}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Blog Title"
                      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="Title"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Blog Title
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <select
                      type="text"
                      name="category"
                      id="category"
                      value={input.category}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Blog Category"
                      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    >
                      <option disabled>Select category</option>
                      {categories &&
                        categories.map((item) => {
                          return (
                            <option value={item._id} key={item._id}>
                              {item.title}
                            </option>
                          );
                        })}
                    </select>
                    <label
                      htmlFor="category"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Blog Category
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      value={input.description}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Blog Description"
                      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="description"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Blog Description
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <label
                      className=" text-sm text-gray-500 opacity-75"
                      htmlFor="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      type="file"
                      name="thumbnail"
                      id="thumbnail"
                      onChange={(e) => setFile(e.target.files[0])}
                      placeholder="Blog Image"
                      className="block w-full text-[16px] text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 mt-4 focus:outline-none"
                      autoComplete="NA"
                    />
                  </div>
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full font-medium rounded-md bg-purple-500 px-3 py-3 text-white focus:bg-purple-600 focus:outline-none"
                    >
                      Add Blog
                    </button>
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

export default AddBlog;
