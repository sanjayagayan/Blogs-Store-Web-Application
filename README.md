# Blogs Store Web Application 📝
![Blogo](https://github.com/sanjayagayan/Blogs-Store-Web-Application/assets/70587308/0341208d-826a-4cbc-89cd-c92429d0309b)

## Description
This is a simple web application for managing blogs, developed using the MERN stack (MongoDB, Express, React, Node.js). It includes features such as user authentication, blog creation, category management, and file uploads.

## Features
- **User Registration:** Allows users to create an account.
- **User Login:** Allows users to log in to their account.
- **Add a Blog:** Authenticated users can create and post new blogs.
- **Add a Category:** Users can add categories to organize their blogs.
- **User Logout:** Users can log out of their account.

## Tech Stack
### Frontend:
- React
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB

### Authentication:
- JWT (JSON Web Tokens)

### File Uploads:
- Multer

## Installation
### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/sanjayagayan/Blogs-Store-Web-Application.git
    cd Blogs-Store-Web-Application/backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root of the backend directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm start
    ```

## Usage
1. Register a new user.
2. Log in with your credentials.
3. Create a new blog post.
4. Add categories to your blogs.
5. Log out when you're done.

## Project Structure
```plaintext
Blogs-Store-Web-Application/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── tailwind.config.js
│   ├── .env
│   ├── index.js
└── README.md
```
## Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.
1.Create a new branch
```bash
git checkout -b feature-branch
```
2.Commit your changes
```bash
git commit -m 'Add some feature'
```
3.Push to the branch
```bash
git push origin feature-branch
```
4.Create a new Pull Request.

## Contact
If you have any questions or suggestions, please contact me at sanjayagayan.me@gmail.com or [sanjayagayan](https://sanjayagayan.me/)

Happy Blogging! 🚀
