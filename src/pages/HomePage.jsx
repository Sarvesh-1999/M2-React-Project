import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AxiosInstance } from "../routes/axiosInstance";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  async function getAllBlogs() {
    let res = await AxiosInstance.get("/blogs");
    console.log(res.data);
    setAllBlogs(res.data); // storing all blogs to state
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      <section>
        {allBlogs.length === 0 ? (
          <h2>No Blogs available...</h2>
        ) : (
          <article className="grid grid-cols-1 md:grid-cols-4">
            {allBlogs.map((blog,idx) => {
              return <BlogCard key={idx} blog={blog} />
            })}
          </article>
        )}
      </section>
      
    </div>
  );
};

export default HomePage;
