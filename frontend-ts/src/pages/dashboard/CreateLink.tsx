import { Button } from "@/components/ui/button";

const CreateLink = () => {
  return (
    <body className="font-display bg-background dark:bg-background-dark text-content-light dark:text-content-dark">
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-content-dark">
                Create New Payment Link
              </h1>
              <p className="mt-2 text-base text-text/70 dark:text-content-dark/70">
                Fill in the details below to generate your payment link
                instantly.
              </p>
            </div>
            <div className="bg-card dark:bg-subtle-dark rounded-xl shadow-lg p-6 md:p-8">
              <form className="space-y-6" id="payment-form">
                <div>
                  <label
                    className="block text-sm font-medium text-content-light dark:text-content-dark mb-1"
                    htmlFor="amount"
                  >
                    Amount (₦)
                  </label>

                  <input
                    className="w-full pl-8 pr-12 bg-subtle-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg h-12 focus:ring-primary focus:border-primary text-content-light dark:text-content-dark placeholder:text-content-light/50 dark:placeholder:text-content-dark/50"
                    id="amount"
                    name="amount"
                    placeholder="0.00"
                    type="number"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-content-light dark:text-content-dark mb-1"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="w-full bg-subtle-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg p-3 focus:ring-primary focus:border-primary text-content-light dark:text-content-dark placeholder:text-content-light/50 dark:placeholder:text-content-dark/50"
                    id="description"
                    name="description"
                    placeholder="e.g., Payment for design services"
                  ></textarea>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-content-light dark:text-content-dark mb-1"
                    htmlFor="name"
                  >
                    Customer Name (Optional)
                  </label>
                  <input
                    className="w-full bg-subtle-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg h-12 px-3 focus:ring-primary focus:border-primary text-content-light dark:text-content-dark placeholder:text-content-light/50 dark:placeholder:text-content-dark/50"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                  <p className="mt-2 text-xs text-content-light/70 dark:text-content-dark/70">
                    A receipt will be sent to this email.
                  </p>
                </div>
                <Button
                  className="w-full bg-primary text-background font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-subtle-dark transition-all duration-300 transform"
                  type="submit"
                >
                  Generate Link
                </Button>
              </form>
            </div>
            <div
              className="mt-8 bg-subtle-light dark:bg-subtle-dark rounded-xl shadow-lg p-6 md:p-8 hidden"
              id="confirmation-section"
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <span className="material-symbols-outlined text-green-600">
                    check_circle
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-content-light dark:text-content-dark">
                  Your payment link has been created!
                </h3>
              </div>
              <div className="mt-6 p-3 bg-background-light dark:bg-background-dark rounded-lg flex items-center justify-between space-x-2">
                <p
                  className="text-sm text-content-light dark:text-content-dark truncate"
                  id="generated-link"
                >
                  https://quickpay.com/pay/1234567890
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 text-primary transition-colors"
                    id="copy-button"
                  >
                    <span className="material-symbols-outlined text-base">
                      content_copy
                    </span>
                  </button>
                  <button
                    className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 text-primary transition-colors"
                    id="share-button"
                  >
                    <span className="material-symbols-outlined text-base">
                      share
                    </span>
                  </button>
                </div>
              </div>
              <p
                className="text-center text-sm text-green-500 mt-2 h-4"
                id="copy-feedback"
              ></p>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};
export default CreateLink;
