import blogModel from "../models/blogModel.js";

class BlogController {
    static getAllBlogs = async (req,res) => {
        try {
            const fetchAllBlogs = await blogModel.find({user : req.user._id}).populate('category');
            return res.status(200).json(fetchAllBlogs);
        } catch (error) {
            return res.status(400).json({ message: error.message});
        }
    };
    static addNewBlog = async (req,res) => {
        const {title,category,description} = req.body;
        try {
            if(title && category && description){
                const addBlog = new blogModel({
                    title: title,
                    description: description,
                    category: category,
                    thumbnail: req.file.filename,
                    user: req.user._id,
                });
                const saveBlog = await addBlog.save();
                if(saveBlog)
                {
                    return res.status(200).json({ message:"Blog added successfully!"});
                }
            }else {
                return res.status(400).json({ message:"All fields are required!"});
            }
        } catch (error) {
            return res.status(400).json({ message: error.message});
        }
    };
    static getSingleBlog = async (req,res) => {
        const { id} = req.params;
        try {
            if(id){
                const fetchBlogsById = await blogModel.findById(id);
                return res.status(200).json(fetchBlogsById);
            }else {
                return res.status(400).json({ message: "Invalid URL"});
            }
        } catch (error) {
            return res.status(400).json({ message: error.message});
        }
    };
}

export default BlogController;