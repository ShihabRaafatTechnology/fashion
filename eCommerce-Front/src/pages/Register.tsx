import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";



const registerSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().min(1, { message: "The email address is required." }).email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters longs" }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
    message: "Password should contain at least 1 special character",
  }),
  confirmPassword: z.string().min(1, { message: "Password confirm is required." })
}).refine((input) => input.password === input.confirmPassword, { message: "Password doesn't match.", path: ["confirmPassword"] });


type TFormHandler = z.infer<typeof registerSchema>

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit } = useForm<TFormHandler>();
  const submitForm: SubmitHandler<TFormHandler> = (data) => console.log(data);

  return (
    <div className="w-full min-h-screen flex items-center justify-center absolute top-0 z-50">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-full bg-white flex items-center justify-center">
          <div className="w-full px-12">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Register</h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account? <Link to="/sign-in" className="text-blue-600 hover:text-blue-700 hover:underline">Sign in here</Link>
            </p>

            <form className="my-8 text-sm" onSubmit={handleSubmit(submitForm)}>
              <div className="flex flex-col my-4">
                <label className="text-gray-700">First Name</label>
                <input type="text" className="mt-2 p-2 border border-gray-300 rounded text-sm text-gray-900" {...register("firstName")} />
              </div>

              <div className="flex flex-col my-4">
                <label className="text-gray-700">Last Name</label>
                <input type="text" className="mt-2 p-2 border border-gray-300 rounded text-sm text-gray-900" {...register("lastName")} />
              </div>

              <div className="flex flex-col my-4">
                <label className="text-gray-700">Email Address</label>
                <input type="text" className="mt-2 p-2 border border-gray-300 rounded text-sm text-gray-900" {...register("email")} />
              </div>

              <div className="flex flex-col my-4">
                <label className="text-gray-700">Password</label>
                <div className="relative flex items-center mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="flex-1 p-2 pr-10 border border-gray-300 rounded text-sm text-gray-900"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col my-4">
                <label className="text-gray-700">Password Confirmation</label>
                <div className="relative flex items-center mt-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="flex-1 p-2 pr-10 border border-gray-300 rounded text-sm text-gray-900"
                    {...register("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="remember_me" name="remember_me" className="mr-2 rounded" />
                <label htmlFor="remember_me" className="text-gray-700">
                  I accept the <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a>
                </label>
              </div>

              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
              </div>
            </form>

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-sm">
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign up with Google</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign up with Facebook</span>
              </a>
            </div>

          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-full bg-cover" style={{ backgroundImage: "url('https://vojislavd.com/ta-template-demo/assets/img/auth-background.jpg')" }}>
          <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
            <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
              </svg>
              <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-100 tracking-wider">Template</h1>
            </div>
            <p className="text-gray-300 mt-4 px-16 text-center">Free admin dashboard template created with Tailwind CSS and Alpine.js</p>
            <a href="#" className="mt-6 bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded text-sm uppercase text-gray-900 transition duration-150" title="Learn More">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;