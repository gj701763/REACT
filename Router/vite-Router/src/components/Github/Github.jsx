import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LuUsers2 } from "react-icons/lu";
import { GoRepo, GoProjectSymlink } from "react-icons/go";
import { MdOutlineViewInAr } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import Star from "./Star";
import Readme from "./Readme";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="w-full h-screen text-black bg-white">
      <div className="flex items-center w-full px-5 border-b-2 h-14 gap-x-4">
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:border group hover:border-gray-300">
          <MdOutlineViewInAr />
          Overview{" "}
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:border group hover:border-gray-300">
          <GoRepo />
          Repositories{" "}
          <p className="flex items-center justify-center px-1.5 rounded-full bg-slate-200">
            {data.public_repos}
          </p>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:border group hover:border-gray-300">
          <GoProjectSymlink />
          Project{" "}
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:border group hover:border-gray-300">
          <IoIosStarOutline />
          Star{" "}
          <p className="flex items-center justify-center px-2 rounded-full bg-slate-200">
            <Star />
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col p-5 w-[25%] leading-5">
          <div className="relative">
            <img
              className="z-0 rounded-full"
              src={data.avatar_url}
              alt="Git picture"
              width={270}
            />
            <div className="absolute z-10 flex items-center justify-center w-10 h-10 text-xs transition duration-300 ease-in-out delay-150 bg-white border border-yellow-900 rounded-full cursor-pointer right-16 bottom-7 hover:-translate-y-1 hover:scale-110 ">
              🎯
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 p-5">
            <h3 className="text-xl font-semibold ">{data.name}</h3>
            <p className="pb-5 text-md">{data.login}</p>
            <p className="text-lg text-start">{data.bio}</p>
            <button className="w-full p-2 text-black bg-gray-100 border border-gray-200 rounded-lg">
              Follow me !
            </button>
            <div className="flex items-center px-2">
              <LuUsers2 />
              <span className="px-1">{data.followers} followers.</span>
              <span className="px-1"> {data.following} following</span>
            </div>
          </div>
        </div>
        <div>
          <Readme />
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/gj701763");
  return response.json();
};
