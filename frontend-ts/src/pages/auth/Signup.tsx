import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isLoading, signup } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (!fullname || !email || !password || !confirmPassword) {
      console.log("please fill all details");
      return;
    }
    if (password !== confirmPassword) {
      console.log("password does not mathch");
      return;
    }

    const isSuccess: any = signup(fullname, email, password);

    if (isSuccess) {
      console.log("signup successfull");
    } else {
      console.log("Registration not successful, try again");
    }
  };
  return (
    <div className="bg-background dark:bg-background-dark font-display">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#1C190D] shadow-xl rounded-xl p-8 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Create Your QuickPay Account
            </h1>
          </div>
          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Full Name"
              type="text"
              value={fullname}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="w-full py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              type="submit"
            >
              {isLoading ? "Signing up.." : "Sign up for free"}
            </button>
            <button
              className="w-full py-3 bg-white dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-black/30 transition-colors"
              type="button"
            >
              Sign up with Google
            </button>
          </form>
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <a className="font-medium text-primary hover:underline" href="#">
                Login here.
              </a>
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
