import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-content-light dark:text-content-dark">
            My Profile
          </h1>

          {/* Profile Header Card */}
          <div className="bg-background-light dark:bg-background-dark border border-gray-700  rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center text-3xl font-bold text-primary">
                SC
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-content-light dark:text-content-dark">
                  {user?.fullname}
                </h2>
                <p className="text-subtle-light dark:text-subtle-dark">
                  {user?.email}
                </p>
                <p className="text-sm text-subtle-light dark:text-subtle-dark mt-1">
                  Member since: Jan 2022
                </p>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-2 px-4 rounded transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-700 ">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                <a
                  className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  href="#"
                >
                  Personal Information
                </a>
                <a
                  className="border-transparent text-subtle-light dark:text-subtle-dark hover:text-content-light dark:hover:text-content-dark hover:border-light dark:hover:border-dark whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  href="#"
                >
                  Security Settings
                </a>
                <a
                  className="border-transparent text-subtle-light dark:text-subtle-dark hover:text-content-light dark:hover:text-content-dark hover:border-light dark:hover:border-dark whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  href="#"
                >
                  Preferences
                </a>
              </nav>
            </div>
          </div>

          <div className="space-y-8">
            {/* Personal Information Form */}
            <div className="bg-background-light dark:bg-background-dark border border-gray-700  rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium leading-6 text-content-light dark:text-content-dark mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-subtle-light dark:text-subtle-dark"
                  >
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    defaultValue="Sophia Carter"
                    className="mt-1 block w-full bg-surface-light dark:bg-surface-dark border-gray-700  rounded shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-subtle-light dark:text-subtle-dark"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue="sophia.carter@email.com"
                    className="mt-1 block w-full bg-surface-light dark:bg-surface-dark border-gray-700  rounded shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-subtle-light dark:text-subtle-dark"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="mt-1 block w-full bg-surface-light dark:bg-surface-dark border-gray-700  rounded shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-background-light dark:bg-background-dark border border-gray-700  rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium leading-6 text-content-light dark:text-content-dark mb-6">
                Security Settings
              </h3>
              <div className="space-y-4">
                <button className="w-full text-left py-3 px-4 bg-surface-light dark:bg-surface-dark hover:bg-primary/10 rounded-lg transition-colors duration-200 flex justify-between items-center">
                  <span>Change Password</span>
                  <svg
                    className="h-5 w-5 text-subtle-light dark:text-subtle-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex items-center justify-between py-3 px-4 bg-surface-light dark:bg-surface-dark rounded-lg">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-content-light dark:text-content-dark">
                      Two-Factor Authentication
                    </span>
                    <span className="text-sm text-subtle-light dark:text-subtle-dark">
                      Keep your account extra secure.
                    </span>
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked="true"
                    className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary"
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 translate-x-5"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-5 border-t border-gray-700  flex justify-between items-center">
            <button className="text-sm font-medium text-subtle-light dark:text-subtle-dark hover:text-content-light dark:hover:text-content-dark transition-colors duration-200">
              Log Out
            </button>
            <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-2 px-6 rounded-lg transition-colors duration-200">
              Save Changes
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-subtle-light dark:text-subtle-dark">
            Your information is securely stored with QuickPay.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
