import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TFormHandler } from "@validations/registerSchema";
import { Input, PasswordInput } from "@components/form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TFormHandler>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  const submitForm: SubmitHandler<TFormHandler> = (data) => console.log(data);
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center absolute top-0 z-50">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 h-full bg-white flex items-center justify-center">
          <div className="w-full px-12">
          <h2 className="text-center text-xl font-bold tracking-wide text-gray-800">Sign In</h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-700 hover:underline">Register here</Link>
            </p>

            <form className="my-8 text-sm" onSubmit={handleSubmit(submitForm)}>
              <Input 
                  label="Email Address"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message as string}
                  />

              <PasswordInput 
                  label="Password"
                  name="password"
                  register={register}
                  error={errors.password?.message as string}
                />

              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign in</button>
              </div>
            </form>

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-sm">
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign in with Google</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign in with Facebook</span>
              </a>
            </div>

          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        </div>
      </div>
    </div>
  )
}

export default Login;