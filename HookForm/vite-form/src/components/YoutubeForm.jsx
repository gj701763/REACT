import React from "react";
import { useForm } from "react-hook-form";

export const YouTubeForm = () => {
  const form = useForm();
  const { register, control } = form;

  return (
    <div className="flex flex-col items-center gap-5 text-white bg-black border border-gray-500 h-96">
      <h1> YouTube Form </h1>
      <form className="flex flex-col items-start justify-center w-full gap-2 px-36">
        <label className="text-lg font-medium" htmlFor="username">
          {" "}
          Username{" "}
        </label>{" "}
        <input
          className="w-full h-8 px-4 rounded outline-none bg-slate-600"
          type="text"
          id="username"
          {...register("username")}
        />
        <label className="text-lg font-medium" htmlFor="email">
          {" "}
          E - mail{" "}
        </label>{" "}
        <input
          className="w-full h-8 px-4 rounded outline-none bg-slate-600"
          type="email"
          id="email"
          {...register("email")}
        />
        <label className="text-lg font-medium" htmlFor="channel">
          {" "}
          Channel{" "}
        </label>{" "}
        <input
          className="w-full h-8 px-4 rounded outline-none bg-slate-600"
          type="text"
          id="channel"
          {...register("channel")}
        />
        <button className="px-2 text-lg font-semibold border border-gray-300 rounded-lg">
          {" "}
          Submit{" "}
        </button>{" "}
      </form>{" "}
      <DevTool control={control} />
    </div>
  );
};
