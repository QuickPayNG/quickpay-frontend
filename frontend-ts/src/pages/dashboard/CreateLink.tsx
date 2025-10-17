import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { CheckCircle } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const CreateLink = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const { isLoading, generateLink } = useContext(AuthContext);

  const handleGenerate = async (e: any) => {
    e.preventDefault();
    if (!amount) {
      toast.error("Please fill in the amount");
      return;
    }
    const link: any = await generateLink(amount, description, name, email);
    if (link) {
      setLink(link);
      setName("")
      setDescription("")
      setAmount(0)
      setEmail("")
    }
  };
  
  const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        url: link,
      });
      toast('Link shared successfully!');
    } catch (error) {
      console.error('Error sharing:', error);
      toast('Error sharing the link');
    }
  } else {
    toast('Sharing is not supported on this device.');
  }
};


  return (
    <div className="font-display bg-background dark:bg-background-dark text-content-light dark:text-content-dark">
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
              <form className="space-y-6" onSubmit={handleGenerate}>
                <div>
                  <label
                    className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                    htmlFor="amount"
                  >
                    Amount (₦)
                  </label>

                  <input
                    className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    id="amount"
                    name="amount"
                    required
                    type="number"
                    placeholder="Enter an amount"
                    min={100}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    id="description"
                    name="description"
                    placeholder="e.g., Payment for design services"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                    htmlFor="name"
                  >
                    Customer Name (Optional)
                  </label>
                  <input
                    className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium dark:text-gray-700 text-gray-300"
                    htmlFor="email"
                  >
                    Customer Email (Optional)
                  </label>
                  <input
                    className="w-full px-4 py-3 dark:bg-gray-100 bg-black/20 dark:text-gray-800 text-gray-200 border dark:border-gray-300 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    id="email"
                    name="email"
                    placeholder="customer@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="mt-2 text-xs text-text/70 dark:text-content-dark/70">
                    A receipt will be sent to this email.
                  </p>
                </div>
                <Button
                  className="w-full bg-primary text-background font-bold py-3 px-4 cursor-pointer rounded-lg hover:bg-primary/90 transition-all duration-300 transform"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Generate Link"}
                </Button>
              </form>
            </div>
            {link && (
              <div
                className="mt-8 bg-card rounded-xl shadow-lg p-6 md:p-8 "
                id="confirmation-section"
              >
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckCircle className="text-green-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-text dark:text-content-dark">
                    Your payment link has been created!
                  </h3>
                </div>
                <div className="mt-6 p-3 border-1 border-gray-300 bg-background dark:bg-background-dark rounded-lg flex items-center justify-between gap-2">
                  <p className="font-italic text-text dark:text-content-dark truncate">
                    {link}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-6">
                    <Button
                      className="p-2 sm:py-2 sm:px-4 rounded-md hover:bg-primary/70 dark:hover:bg-primary/30 text-background transition-colors"
                      onClick={() => {
                        navigator.clipboard.writeText(link);
                        toast("Link copied to clipboard");
                      }}
                    >
                      copy
                    </Button>
                    <Button
                      variant={"outline"}
                      className="p-2 sm:px-4 sm:py-2 rounded-sm hover:bg-primary dark:hover:bg-primary/30 text-primary transition-colors"
                      onClick={handleShare}
                    >
                      share
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateLink;
