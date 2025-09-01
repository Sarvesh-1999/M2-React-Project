import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";

const UserDashboard = () => {
  const [user, setUser] = useState({});

  let { id } = useParams();
  console.log(id);

  async function getAuthUser() {
    let { data } = await AxiosInstance(`/users/${id}`);
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    getAuthUser();
  }, [id]);

  return (
    <div>
      <section className="flex">
        <aside className="p-5 w-[20%] bg-white shadow-xl h-[calc(100vh-80px)]">
            <div className="text-2xl font-semibold bg-gray-50 p-3 rounded-xl">
                Create blog
            </div>
        </aside>
        <article className="p-5 h-[calc(100vh-80px)]">
          <h1 className="text-center font-extrabold text-4xl">
            User Dashboard
          </h1>
        </article>
      </section>
    </div>
  );
};

export default UserDashboard;
