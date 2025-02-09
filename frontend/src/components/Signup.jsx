import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center">
        <div className="w-[500px] mx-auto">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Sing up</h3>
            <div className="m-6 dark:text-gray-100 ">
              <label className="dark:text-gray-50 block text-sm/6 font-semibold text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="dark:text-white mt-2 dark:bg-gray-700 text-slate-900 outline-pink-300
                        rounded-md w-full px-3 h-10 shadow-xs text-sm ring-1 ring-slate-200"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <label className="dark:text-gray-50  mt-3 block text-sm/6 font-semibold text-gray-900">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="dark:text-white mt-2 dark:bg-gray-700 text-slate-900 outline-pink-300
                        rounded-md w-full px-3 h-10 shadow-xs text-sm ring-1 ring-slate-200"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <label className="dark:text-gray-50 mt-3 block text-sm/6 font-semibold text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="dark:text-white mt-2 dark:bg-gray-700 text-slate-900 outline-pink-3 00
                        rounded-md w-full px-3 h-10 shadow-xs text-sm ring-1 ring-slate-200"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between items-center m-6 mt-8">
              <button className="bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-600 transition-all duration-200">
                Sign up
              </button>
              <div>
                <a
                  className="text-sm text-slate-600 cursor-pointer dark:text-gray-300 hover:text-slate-800 dark:hover:text-slate-200 duration-200"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Have Account?
                </a>
                <Login />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
