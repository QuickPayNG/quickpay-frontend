import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isLoading, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (!fullname || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }

    const isSuccess: any = await signup(fullname, email, password);

    if (isSuccess) {
      navigate(`/waitlist/${fullname}`);
      console.log("signup successfull");
    } else {
      console.log("Registration not successful, try again");
    }
  };
  return (
    <div className="bg-background dark:bg-background-dark font-display">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md dark:bg-white bg-[#1C190D] shadow-xl rounded-xl p-8 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold dark:text-gray-900 text-white text-center">
              Create Your QuickPay Account
            </h1>
          </div>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label
                className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                htmlFor="fullname"
              >
                Full Name *
              </label>
              <div className="mt-1">
                <input
                  className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Full Name"
                  id="fullname"
                  type="text"
                  value={fullname}
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                htmlFor="email"
              >
                Email *
              </label>
              <div className="mt-1">
                <input
                  className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Full Name"
                  id="email"
                  type="text"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                htmlFor="Password"
              >
                Password *
              </label>
              <div className="mt-1">
                <input
                  className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Confirm Password"
                  type="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                htmlFor="confirmPassword"
              >
                Confirm Password *
              </label>
              <div className="mt-1">
                <input
                  className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <Button
              className="w-full py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              type="submit"
            >
              {isLoading ? "Signing up.." : "Sign up for free"}
            </Button>
            <Button
              className="w-full inline-flex justify-center py-3 px-4 border dark:border-gray-300 border-white/20 rounded-lg shadow-sm dark:bg-white bg-black/20 text-sm font-medium dark:text-gray-700 text-white dark:hover:bg-gray-50 hover:bg-black/30 cursor-pointer"
              type="button"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  fill="#FFC107"
                ></path>
                <path
                  d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  fill="#FF3D00"
                ></path>
                <path
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  fill="#4CAF50"
                ></path>
                <path
                  d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C43.021 36.697 44 34.059 44 31.25c0-3.72-1.01-7.22-2.738-10.222l-.251-.445z"
                  fill="#1976D2"
                ></path>
              </svg>
              Sign up with Google
            </Button>
          </form>
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link
                className="font-medium text-primary hover:underline"
                to={"/login"}
                onClick={(e) => e.preventDefault()}
              >
                Login here.
              </Link>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Secure login powered by Firebase Auth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
