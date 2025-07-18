import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TFormHandler } from "@validations/registerSchema";
import { Input, PasswordInput } from "@components/form";


const Register = () => {
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
            <h2 className="text-center text-4xl font-bold tracking-wide text-gray-800">Register</h2>
            <p className="text-center text-lg text-gray-600 mt-2">
              Already have an account? <Link to="/sign-in" className="text-blue-600 hover:text-blue-700 hover:underline">Sign in here</Link>
            </p>

            <form className="my-8 text-lg" onSubmit={handleSubmit(submitForm)}>
              <Input
                label="First Name"
                name="firstName"
                type="text"
                register={register}
                error={errors.firstName?.message as string}
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                register={register}
                error={errors.lastName?.message as string}
              />
              <Input
                label="Email"
                name="email"
                type="text"
                register={register}
                error={errors.email?.message as string}
              />
              <PasswordInput
                label="Password"
                name="password"
                register={register}
                error={errors.password?.message as string}
              />
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword?.message as string}
              />


              <div className="flex items-center">
                <input type="checkbox" id="remember_me" name="remember_me" className="mr-2 rounded p-2" />
                <label htmlFor="remember_me" className="text-gray-700 text-xl">
                  I accept the <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a>
                </label>
              </div>

              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
              </div>
            </form>

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-lg uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-lg">
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-4 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign up with Google</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-4 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign up with Facebook</span>
              </a>
            </div>

          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        </div>
      </div>
    </div>
  )
}

export default Register;