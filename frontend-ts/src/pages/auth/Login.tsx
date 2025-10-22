import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, isLoading } = useContext(AuthContext);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Fill in all details to continue");
      return;
    }
    const isSuccessful: any = await login(email, password);
    if (isSuccessful) {
      console.log("login successfull");
      navigate("/dashboard");
    } else {
      console.log("error signing in");
    }
  };
  return (
    <div className="bg-background dark:bg-background-dark font-display">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 dark:bg-white bg-card rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold dark:text-black text-white">
              Welcome Back to QuickPay
            </h1>
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
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
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                htmlFor="password"
              >
                Password *
              </label>
              <div className="mt-1 relative">
                <input
                  className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-800"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-primary hover:underline cursor-pointer">
                Forgot Password?
              </div>
            </div>
            <div>
              <Button
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Login in..." : "Login"}
              </Button>
            </div>
          </form>

          {/* <div>
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
              Continue with Google
            </Button>
          </div> */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              Don't have an account?
              <Link
                className="font-medium text-primary hover:underline"
                to={"/signup"}
              >
                Sign up here.
              </Link>
            </p>
            <p className="mt-2">Secure login powered by Firebase Auth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
