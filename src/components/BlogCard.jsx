import React from "react";
import EditModal from "./EditModal";

const BlogCard = (props) => {
  let { id, category, title, description } = props.blog;
  return (
    <div className="border p-5 border-gray-200 rounded-2xl shadow-2xl m-2  relative ">
      <h4 className="text-blue-800 font-semibold mb-4">{category}</h4>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p className="text-gray-600 mb-15">{description}</p>

      <div className="absolute bottom-5 flex">
        <div className="border px-5 py-1 rounded cursor-pointer font-bold">
          <EditModal />
        </div>

        <button className="border px-5 py-1 ms-2 rounded cursor-pointer font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
