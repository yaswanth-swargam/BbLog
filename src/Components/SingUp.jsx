import React, { useState } from "react"
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authSlice"
import { Button, Input } from "./index"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError("")

    try {
      // Create account + auto login (your service already does this)
      const session = await authService.createAccount(data)

      if (session) {
        const currentUser = await authService.getCurrentUser()

        if (currentUser) {
          dispatch(login({ userData: currentUser }))
          navigate("/")
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong")
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <p>Bblog</p>
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold">
          Create an account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Login
          </Link>
        </p>

        {error && (
          <p className="text-red-600 mt-5 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Name"
              placeholder="Enter your name"
              type="text"
              {...register("name", { required: true })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
