import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dialogRef = useRef(null);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data) {
        toast.success('Login Successfull!');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          window.location.reload();
        }, 1000);
      }
    }).catch((err) => { 
      if(err.response) {
        console.log(err);
        toast.error('Error: '+ err.response.data.message);
      }
    })
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box dark:bg-slate-800 dark:text-gray-100">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button" // Add type="button" to prevent form submission
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal} // Add onClick handler to close the modal
            >
              ❌
            </button>
            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className="m-6">
              <label className="block text-sm/6 font-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 dark:text-gray-100 dark:bg-gray-700 outline-pink-300 block rounded-md w-full px-3 h-10 shadow-xs text-sm ring-1 ring-slate-200"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}

              <label className="mt-5 block text-sm/6 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 dark:text-gray-100 dark:bg-gray-700 outline-pink-300 block rounded-md w-full px-3 h-10 shadow-xs text-sm ring-1 ring-slate-200"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-between items-center m-6 mt-12">
              <button className="bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-600 transition-all duration-200">
                Login
              </button>
              <Link
                to={"/signup"}
                className="text-sm text-slate-600 cursor-pointer dark:text-gray-300 hover:text-slate-800 dark:hover:text-slate-200 duration-200"
              >
                Don't have an account?
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;