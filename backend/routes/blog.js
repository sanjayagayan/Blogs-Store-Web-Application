import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";
import multer from "multer";
import checkIsUserAuthenticated from "../middlewares/authMiddleWare.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/uploads/`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploads = multer({ storage: storage });

const router = express.Router();

router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);
router.get("/user/:id",checkIsUserAuthenticated, AuthController.getSingleUser);

// Protected Routes

router.get(
  "/get/allblogs",
  checkIsUserAuthenticated,
  BlogController.getAllBlogs
);
router.post(
  "/add/blog",
  uploads.single("thumbnail"),
  checkIsUserAuthenticated,
  BlogController.addNewBlog
);
router.get(
  "/get/blog/:id",
  checkIsUserAuthenticated,
  BlogController.getSingleBlog
);

router.get(
  "/get/categories",
  checkIsUserAuthenticated,
  CategoryController.getAllCategories
);
router.post(
  "/add/category",
  checkIsUserAuthenticated,
  CategoryController.addNewCategory
);

export default router;
