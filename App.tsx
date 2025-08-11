
import { useState, useEffect, useRef } from "react";
import SearchPage from "./imports/SearchPage";
import WebsitePage from "./imports/WebsitePage";
import CustomerSignInPage from "./imports/CustomerSignInPage";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  ChevronRight,
  Search,
  Globe,
  LogIn,
  User,
  Shield,
  MessageCircle,
  UserPlus,
  Building2,
  Mail,
  CheckCircle,
  Upload,
  FileText,
  Truck,
  Filter,
  Star,
  DollarSign,
  BarChart3,
  Eye,
  Layout,
  HelpCircle,
} from "lucide-react";

// Import the account creation images from public/assets
const businessProfileImage = "/assets/usinessProfileImage.jpg";
const emailVerificationImage = "/assets/customer Verification page  step 3.jpg";
const registrationCompletedImage = "/assets/Customer Successful page step 4.jpg";

// Import the CFS service provider images from public/assets
const cfsServiceProviderImage = "/assets/Customer CFS(Service Request) page.png";
const requestPricingImage = "/assets/Customer CFS(Pricing Request) page.png";

// Import the website main page image
const websiteMainPageImage = "/assets/website main page.jpg";

// Import the website page image
const websitePageImage = "/assets/website page.jpg";

// Import the website pricing request page image
const websitePricingRequestPageImage = "/assets/websitepricingrequestpage.jpg";

// Import the service provider card details image
const serviceProviderCardDetailsImage = "/assets/serviceprovidercarddetails.jpg";

// Import the view details page image
const viewDetailsPageImage = "/assets/Viewdeatailspage.jpg";

// Import Google authentication images
const googleAuthStep1Image = "/assets/Customer Sign-in google Autentication Page step 1.jpg";
const googleAuthStep2Image = "/assets/Customer Sign-in google Autentication Page step 2.jpg";
const googleAuthStep3Image = "/assets/Customer Sign-in google Autentication Page step 3.jpg";
const googleAuthStep4Image = "/assets/Customer Sign-in google Autentication Page step 4.jpg";
const customerSuccessfulPageImage = "/assets/Customer Successful page step 4.jpg";

// Import the customer sign-in page image
const customerSignInPageImage = "/assets/Customer Sign-in Page.jpg";

// Import the customer dashboard image
const customerDashboardImage = "/assets/Customer Dashboard page.png";

// Import the customer CFS orders page image
const customerCFSOrdersImage = "/assets/Customer CFS(Service Request) page.png";

// Import the new CFS order page image
const newCFSOrderImage = "/assets/newCFSOrder.jpg";

// Import the CFS pricing requests page image
const cfsPricingRequestsImage = "/assets/Customer CFS(Pricing Request) page.png";

// Import the new service request page image
const newServiceRequestImage = "/assets/";

// Import the Google search page image
const googleSearchPageImage = "/assets/Search Page.jpg";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{id: string, title: string, description: string}>>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside search area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define searchable sections
  const searchableItems = [
    { id: "step1", title: "Search for Our Platform on Google", description: "Find and visit our website easily" },
    { id: "step2", title: "Navigate the Home Page & Choose Services", description: "Explore features and select the services you need" },
    { id: "step3", title: "Sign In to Your Account", description: "Access your personal dashboard" },
    { id: "account-creation", title: "Account Creation Process", description: "Complete guide to creating your business profile" },
    { id: "cfs-services", title: "Explore CFS Service Providers", description: "Browse and select logistics service providers" },
    { id: "step5", title: "Track Your Request", description: "Monitor your pricing and service requests" },
    { id: "step6", title: "View More Details", description: "Get detailed information about service providers" },
    { id: "google-auth", title: "Google Authentication Process", description: "Complete guide for signing in with Google OAuth" },
    { id: "admin-dashboard", title: "CHA Dashboard Guide", description: "Complete user flow for the admin dashboard interface" },
    { id: "cfs-orders", title: "CHA CFS Services guide", description: "Complete guide for managing CFS orders and services" },
    { id: "new-cfs-order", title: "Creating New CFS Order", description: "Step-by-step guide for creating and submitting new CFS orders" },
    { id: "cfs-pricing-requests", title: "CFS Pricing Requests Guide", description: "Complete guide for managing and tracking CFS pricing requests" },
    { id: "new-service-request", title: "How to Create a New Service Request", description: "Submit additional services linked to existing orders efficiently" }
  ];

  const scrollToStep = (stepId: string) => {
    document
      .getElementById(stepId)
      ?.scrollIntoView({ behavior: "smooth" });
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = searchableItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              How to Use Link My Logistics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              A complete step-by-step guide to help you navigate
              and use our logistics platform effectively
            </p>

            {/* Search Bar */}
            <div ref={searchRef} className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search steps by name (e.g., 'sign in', 'google auth', 'profile')..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => scrollToStep(result.id)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-blue-50"
                    >
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </button>
                  ))}
                </div>
              )}

              {/* No Results Message */}
              {showSearchResults && searchResults.length === 0 && searchQuery.trim() !== "" && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 px-4 py-3">
                  <div className="text-gray-500 text-center">No results found for "{searchQuery}"</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1 */}
        <section id="step1" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold">
                    Step 1: Search for Our Platform on Google
                  </CardTitle>
                  <p className="text-blue-100 mt-2">
                    Find and visit our website easily
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 text-white"
                >
                  <Search className="w-4 h-4 mr-1" />
                  Search
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-1 p-6">
                <div>
                  <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <ImageWithFallback
                      src={googleSearchPageImage}
                      alt="Google Search Page - Search for Our Platform"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        1
                      </span>
                      Instructions
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          📝 Open your browser and go to
                          Google.com
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          🔍 In the search bar, type:
                        </p>
                        <code className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-mono">
                          linkmylogistics.com
                        </code>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          ➡ Press Enter to find and visit our
                          website
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-green-800">
                      <strong>✅ Why this helps:</strong> This
                      helps new users find us easily without
                      typing the full URL.
                    </p>
                  </div>
                  <Button
                    onClick={() => scrollToStep("step2")}
                    className="w-full"
                  >
                    Continue to Step 2{" "}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Step 2 */}
        <section id="step2" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-indigo-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold">
                    Step 2: Navigate the Home Page & Choose
                    Services
                  </CardTitle>
                  <p className="text-indigo-100 mt-2">
                    Explore features and select the services you
                    need
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-indigo-500 text-white"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  Navigate
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 p-6">
                <div>
                  <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <ImageWithFallback
                      src={websitePageImage}
                      alt="Website Page - Navigate and Choose Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        2
                      </span>
                      Available Features
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          🔍 <strong>Search by location</strong>{" "}
                          to find CFS (Container Freight
                          Station) providers
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          💰 <strong>Set your budget</strong>{" "}
                          and storage preferences
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          🚛{" "}
                          <strong>
                            Choose logistics services:
                          </strong>{" "}
                          CFS, Transport, 3PL, Warehouse
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          💬 <strong>Ask questions</strong>{" "}
                          through our chatbot assistant
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          📌{" "}
                          <strong>
                            Click "Search CFS Now"
                          </strong>{" "}
                          to view available providers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      👥 Login Options at the Top:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-center">
                        <User className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                        <p className="text-sm font-medium">
                          "Sign In" for CHA
                        </p>
                      </div>
                      <div className="bg-green-50 border border-green-200 p-3 rounded-lg text-center">
                        <User className="w-6 h-6 mx-auto mb-2 text-green-600" />
                        <p className="text-sm font-medium">
                          "Sign In" for CFS users
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => scrollToStep("step3")}
                    className="w-full"
                  >
                    Continue to Step 3{" "}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Step 3 */}
        <section id="step3" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold">
                    Step 3: Log In or Sign Up to Your Account
                  </CardTitle>
                  <p className="text-purple-100 mt-2">
                    Access your dashboard with secure
                    authentication
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-purple-500 text-white"
                >
                  <LogIn className="w-4 h-4 mr-1" />
                  Sign In
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 p-6">
                <div>
                  <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    <ImageWithFallback
                      src={customerSignInPageImage}
                      alt="Customer Sign-in Page - Log In or Sign Up"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        3
                      </span>
                      Sign In Options
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-3">
                          🔐{" "}
                          <strong>
                            Use your login credentials to access
                            your dashboard:
                          </strong>
                        </p>
                        <ul className="space-y-2 ml-4 text-gray-700">
                          <li>📧 Enter Email or Username</li>
                          <li>🔑 Enter your Password</li>
                          <li>➡ Click Login</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <p className="font-medium text-blue-900 mb-2">
                          <Shield className="w-5 h-5 inline mr-2" />
                          <strong>Alternative Login:</strong>
                        </p>
                        <p className="text-blue-800">
                          🔗 Login with Google (OAuth) -
                          Authenticates using Google OAuth for
                          secure access
                        </p>
                      </div>
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <p className="font-medium text-green-900 mb-2">
                          🆕{" "}
                          <strong>
                            Don't have an account?
                          </strong>
                        </p>
                        <p className="text-green-800">
                          Click Sign Up to create a new one -
                          Redirects to account creation page
                          (for new customers)
                        </p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <p className="font-medium text-orange-900">
                          For support, use the email link
                          provided on the login page
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="text-purple-800">
                      <strong>🎉 Success!</strong> Once logged
                      in, you'll have access to your
                      personalized dashboard with all logistics
                      tools and services.
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      scrollToStep("account-creation")
                    }
                    className="w-full"
                  >
                    Learn How to Create Account{" "}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Account Creation Section */}
        <section id="account-creation" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <div className="text-center">
                <CardTitle className="text-4xl font-bold mb-2">
                  How to Create an Account on Link My Logistics
                </CardTitle>
                <p className="text-green-100 text-lg">
                  Complete registration process in 4 simple
                  steps
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">
                    Registration
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sign up with email
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">
                    Business Profile
                  </h4>
                  <p className="text-sm text-gray-600">
                    Fill company details
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">
                    Email Verification
                  </h4>
                  <p className="text-sm text-gray-600">
                    Verify your email
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">Completed</h4>
                  <p className="text-sm text-gray-600">
                    Account ready
                  </p>
                </div>
              </div>

              {/* Step 1: Registration */}
              <div className="mb-12">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center text-blue-800">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        1
                      </span>
                      ✅ Step 1: Registration (Sign-In)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={customerSignInPageImage}
                            alt="Customer Sign-in Page"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Access the Registration Page:
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Visit:{" "}
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                              linkmylogistics.com/customer/register/profile
                            </code>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Action:
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Mail className="w-5 h-5 mr-3 text-blue-600" />
                              <span>
                                Enter your email address and password to sign up
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                              <span>
                                Click "Register" to proceed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2: Fill Business Profile */}
              <div className="mb-12">
                <Card className="border-2 border-indigo-200">
                  <CardHeader className="bg-indigo-50">
                    <CardTitle className="flex items-center text-indigo-800">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        2
                      </span>
                      🏢 Step 2: Fill Business Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={businessProfileImage}
                            alt="Business Profile Form"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Fields to Complete:
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Building2 className="w-5 h-5 mr-3 text-indigo-600" />
                              <span>
                                <strong>
                                  Company/Business Name
                                </strong>{" "}
                                (Required)
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <FileText className="w-5 h-5 mr-3 text-indigo-600" />
                              <span>
                                <strong>Business Type</strong>{" "}
                                (Dropdown) (Required)
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Globe className="w-5 h-5 mr-3 text-indigo-600" />
                              <span>
                                <strong>
                                  Business Address
                                </strong>{" "}
                                (Required)
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <MessageCircle className="w-5 h-5 mr-3 text-gray-500" />
                              <span>
                                <strong>
                                  Business Description
                                </strong>{" "}
                                (Optional)
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Upload className="w-5 h-5 mr-3 text-gray-500" />
                              <span>
                                <strong>
                                  Upload Business Documents
                                </strong>{" "}
                                (Optional) — PDF, JPG, PNG, max
                                10MB
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-indigo-900 mb-2">
                            Action:
                          </h4>
                          <ul className="space-y-1 text-indigo-800">
                            <li>
                              • After filling the required info,
                              click "Continue →"
                            </li>
                            <li>
                              • You can choose "Skip for Now" to
                              proceed without documents
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3: Email Verification */}
              <div className="mb-12">
                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="flex items-center text-purple-800">
                      <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        3
                      </span>
                      📧 Step 3: Email Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={emailVerificationImage}
                            alt="Email Verification Screen"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            What Happens:
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-purple-600" />
                                You will receive an email to
                                verify your address.
                              </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="flex items-center">
                                <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                                Once verified, the screen will
                                display "Email Verified"
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">
                            Action:
                          </h4>
                          <p className="text-purple-800">
                            Click "Continue →" to proceed to the
                            final step
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4: Completed */}
              <div className="mb-8">
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center text-green-800">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        4
                      </span>
                      🎉 Step 4: Completed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={registrationCompletedImage}
                            alt="Registration Completed Screen"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Confirmation Screen:
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                              <p className="text-green-800">
                                <CheckCircle className="w-5 h-5 inline mr-2" />
                                You will see a message
                                confirming your account has been
                                successfully created and
                                verified.
                              </p>
                            </div>
                            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                              <p className="text-green-800">
                                <Shield className="w-5 h-5 inline mr-2" />
                                You are now ready to explore the
                                customer dashboard and begin
                                using the logistics services.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 p-6 rounded-lg text-center">
                          <h4 className="font-bold text-green-900 mb-2">
                            🎊 Welcome Aboard!
                          </h4>
                          <p className="text-green-800">
                            Your Link My Logistics account is
                            now ready to use. Start exploring
                            our comprehensive logistics
                            platform!
                          </p>
                        </div>
                        <Button
                          onClick={() =>
                            scrollToStep("cfs-services")
                          }
                          className="w-full"
                        >
                          Learn How to Explore CFS Services{" "}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* CFS Services Section */}
        <section id="cfs-services" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <div className="text-center">
                <CardTitle className="text-4xl font-bold mb-2">
                  How to Explore CFS Service Provider and
                  Request Pricing for Solutions
                </CardTitle>
                <p className="text-orange-100 text-lg">
                  Complete guide to finding and requesting
                  quotes from service providers
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">
                    Choose Service
                  </h4>
                  <p className="text-sm text-gray-600">
                    Select logistics category
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Filter className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">
                    Apply Filters
                  </h4>
                  <p className="text-sm text-gray-600">
                    Narrow search results
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">
                    Browse Providers
                  </h4>
                  <p className="text-sm text-gray-600">
                    View provider cards
                  </p>
                </div>
              </div>

              {/* Step 1: Choose the Logistics Service */}
              <div className="mb-12">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center text-blue-800">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        1
                      </span>
                      ✅ Step 1: Choose the Logistics Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-3">
                          On the homepage, you will see buttons
                          for various logistics categories:
                        </p>
                        <div className="grid grid-cols-5 gap-3">
                          <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-center font-medium">
                            CFS
                          </div>
                          <div className="bg-green-100 text-green-800 px-3 py-2 rounded text-center font-medium">
                            Transport
                          </div>
                          <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded text-center font-medium">
                            3PL
                          </div>
                          <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded text-center font-medium">
                            Warehouse
                          </div>
                          <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded text-center font-medium">
                            Custom
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <p className="text-blue-800">
                          <strong>👉 Action:</strong> Click the
                          service type you are looking for
                          (e.g., CFS).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2: Use Filters to Narrow Results */}
              <div className="mb-12">
                <Card className="border-2 border-indigo-200">
                  <CardHeader className="bg-indigo-50">
                    <CardTitle className="flex items-center text-indigo-800">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        2
                      </span>
                      🔍 Step 2: Use Filters to Narrow Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-3">
                          Use the Search & Filter Bar on the
                          top-right:
                        </p>
                        <ul className="space-y-2 ml-4 text-gray-700">
                          <li>
                            • Search for specific service
                            providers
                          </li>
                          <li>
                            • Apply filters like location,
                            service type, etc.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3: Browse Service Provider Cards */}
              <div className="mb-12">
                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="flex items-center text-purple-800">
                      <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        3
                      </span>
                      📇 Step 3: Browse Service Provider Cards
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={serviceProviderCardDetailsImage}
                            alt="Service Provider Card Details"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="font-medium text-gray-900 mb-3">
                            Scroll through the listed Service
                            Provider Cards.
                          </p>
                          <p className="font-medium text-gray-900 mb-3">
                            Each card displays:
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Globe className="w-5 h-5 mr-3 text-purple-600" />
                              <span>
                                <strong>📍 Location</strong>
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Truck className="w-5 h-5 mr-3 text-purple-600" />
                              <span>
                                <strong>🏷 Services</strong>{" "}
                                (e.g., Packing, Storage,
                                Customs)
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Star className="w-5 h-5 mr-3 text-purple-600" />
                              <span>
                                <strong>⭐ Ratings</strong>
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <FileText className="w-5 h-5 mr-3 text-purple-600" />
                              <span>
                                <strong>📄 Description</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4: Request a Pricing Quote */}
              <div className="mb-12">
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center text-green-800">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        4
                      </span>
                      📦 Step 4: Request a Pricing Quote
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={websitePricingRequestPageImage}
                            alt="Website Pricing Request Page"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="font-medium text-gray-900 mb-3">
                            Click the "Request Price" button on
                            the provider card.
                          </p>
                          <p className="font-medium text-gray-900 mb-3">
                            A form will appear with the
                            following fields:
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <FileText className="w-5 h-5 mr-3 text-green-600" />
                              <span>
                                <strong>DPD / Non-DPD</strong>
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Building2 className="w-5 h-5 mr-3 text-green-600" />
                              <span>
                                <strong>Container Type</strong>
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <DollarSign className="w-5 h-5 mr-3 text-green-600" />
                              <span>
                                <strong>Preferable Rate</strong>
                              </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <BarChart3 className="w-5 h-5 mr-3 text-green-600" />
                              <span>
                                <strong>
                                  No. of Container Movements per
                                  Month
                                </strong>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-900 mb-2">
                            Actions:
                          </h4>
                          <ul className="space-y-1 text-green-800">
                            <li>
                              📝 Fill in the required details.
                            </li>
                            <li>✅ Click "Request Pricing".</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 5: Track Your Request */}
              <div id="step5" className="mb-12">
                <Card className="border-2 border-orange-200">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="flex items-center text-orange-800">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        5
                      </span>
                      📈 Step 5: Track Your Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">
                          Once submitted, your request
                          automatically appears in your
                          dashboard under:
                        </p>
                        <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded font-mono text-center mt-2">
                          CFS &gt; Pricing Requests table
                        </div>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <p className="text-orange-800">
                          You can view the status and manage
                          responses from there.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 6: View More Details */}
              <div id="step6" className="mb-12">
                <Card className="border-2 border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="flex items-center text-red-800">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        6
                      </span>
                      📊 Step 6: View More Details (Optional)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={viewDetailsPageImage}
                            alt="View Details Page"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-900 mb-3">
                            Click "View Details" on any card to
                            open a dedicated page with:
                          </p>
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-center p-3 bg-white border rounded-lg">
                              <Eye className="w-5 h-5 mr-3 text-red-600" />
                              <span>More photos</span>
                            </div>
                            <div className="flex items-center p-3 bg-white border rounded-lg">
                              <FileText className="w-5 h-5 mr-3 text-red-600" />
                              <span>Service details</span>
                            </div>
                            <div className="flex items-center p-3 bg-white border rounded-lg">
                              <Building2 className="w-5 h-5 mr-3 text-red-600" />
                              <span>Facilities offered</span>
                            </div>
                            <div className="flex items-center p-3 bg-white border rounded-lg">
                              <MessageCircle className="w-5 h-5 mr-3 text-red-600" />
                              <span>Contact options</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Authentication Steps */}
              <div id="google-auth" className="mb-12">
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center text-green-800">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        G
                      </span>
                      🔐 Google Authentication Process
                    </CardTitle>
                    <p className="text-green-700 mt-2">
                      Complete guide for signing in with Google OAuth
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">

                      {/* Step 1: Open Login Page */}
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          🟦 Step 1: Open the Login Page
                        </h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                              <ImageWithFallback
                                src={googleAuthStep1Image}
                                alt="Customer Sign-in Page with Google Login Option"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p className="text-gray-700">
                              <strong>Visit:</strong> https://linkmylogistics.com/customer/login
                            </p>
                            <p className="text-gray-700">You'll see two options:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                              <li>Enter email & password</li>
                              <li><strong>OR</strong> click "Login with Google"</li>
                            </ul>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-blue-800 text-sm">
                                📌 <strong>Tip:</strong> Make sure you're already logged into your Google account on your browser.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: Click Login with Google */}
                      <div className="border-l-4 border-indigo-500 pl-6">
                        <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                          🔁 Step 2: Click "Login with Google"
                        </h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                              <ImageWithFallback
                                src={googleAuthStep2Image}
                                alt="Google Login Button Click"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p className="text-gray-700">
                              Click the white <strong>"Login with Google"</strong> button.
                            </p>
                            <p className="text-gray-700">
                              This will redirect you to the Google account selector page.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Choose Google Account */}
                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                          🔍 Step 3: Choose a Google Account
                        </h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                              <ImageWithFallback
                                src={googleAuthStep3Image}
                                alt="Google Account Selection Page"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p className="text-gray-700">
                              A page titled <strong>"Choose an account"</strong> will appear (Google OAuth screen).
                            </p>
                            <p className="text-gray-700">
                              Select the Gmail account you want to use.
                            </p>
                            <p className="text-gray-700">
                              <strong>OR</strong> click "Use another account" if your desired email is not listed.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Authentication and Redirect */}
                      <div className="border-l-4 border-green-500 pl-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          ✅ Step 4: Authentication and Redirect
                        </h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                              <ImageWithFallback
                                src={googleAuthStep4Image}
                                alt="Authentication Success and Redirect"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p className="text-gray-700">
                              Once authenticated, you'll be redirected back to the website.
                            </p>
                            <p className="text-gray-700">
                              A green pop-up will appear: <strong>"User Authenticated"</strong> ✅
                            </p>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                              <p className="text-yellow-800 text-sm">
                                <strong>Important:</strong> You may need to refresh the page once to complete the login.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 5: Success */}
                      <div className="border-l-4 border-emerald-500 pl-6">
                        <h4 className="text-lg font-semibold text-emerald-800 mb-3">
                          🔓 Step 5: You're In!
                        </h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                              <ImageWithFallback
                                src={customerSuccessfulPageImage}
                                alt="Successful Login - Dashboard Access"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p className="text-gray-700">
                              The system will now show a <strong>Dashboard button</strong> and <strong>Logout option</strong>.
                            </p>
                            <p className="text-gray-700">
                              This means you're successfully logged in.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-green-800 font-medium mb-2">
                                🎉 You can now:
                              </p>
                              <ul className="list-disc list-inside space-y-1 text-green-700 ml-4">
                                <li>Explore services</li>
                                <li>Request pricing</li>
                                <li>Manage your logistics dashboard</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* GOL Admin Dashboard Guide */}
              <div id="admin-dashboard" className="mb-12">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center text-blue-800">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        📊
                      </span>
                      📌 Customer Dashboard - User Flow Guide
                    </CardTitle>
                    <p className="text-blue-700 mt-2">
                      Complete guide for navigating and using the Customer dashboard interface
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">

                      {/* Dashboard Overview Image */}
                      <div className="mb-8">
                        <div className="h-[600px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={customerDashboardImage}
                            alt="Customer Dashboard Interface"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Step 1: Login & Access Dashboard */}
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          🔐 1. Login & Access Dashboard
                        </h4>
                        <div className="space-y-3">
                          <p className="text-gray-700">
                            By default, the <strong>Dashboard page</strong> loads showing an overview of orders and service usage.
                          </p>
                        </div>
                      </div>

                      {/* Step 2: Review Order Summary Cards */}
                      <div className="border-l-4 border-green-500 pl-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          📊 2. Review Order Summary Cards (Top Section)
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="font-medium text-blue-800">📈 Total Orders</p>
                              <p className="text-sm text-blue-700">Shows all orders created in the system</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                              <p className="font-medium text-yellow-800">⏳ Pending Orders</p>
                              <p className="text-sm text-yellow-700">Orders awaiting admin action</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-green-50 p-3 rounded-lg">
                              <p className="font-medium text-green-800">✅ Approved Orders</p>
                              <p className="text-sm text-green-700">Orders accepted by the admin</p>
                            </div>
                            <div className="bg-red-50 p-3 rounded-lg">
                              <p className="font-medium text-red-800">❌ Rejected Orders</p>
                              <p className="text-sm text-red-700">Orders declined by the admin</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Analyze Trends & Insights */}
                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                          📈 3. Analyze Trends & Insights
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-medium text-purple-800 mb-2">📊 Total Order Trends (Graph)</h5>
                            <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm ml-4">
                              <li>Displays monthly order volumes</li>
                              <li>Hover over points to see exact counts</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-medium text-purple-800 mb-2">🍩 Service Usage Distribution (Donut Chart)</h5>
                            <p className="text-purple-700 text-sm mb-2">Shows percentage split of service requests:</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <span className="bg-white px-2 py-1 rounded">• Cheque Acceptance</span>
                              <span className="bg-white px-2 py-1 rounded">• Tariff Request</span>
                              <span className="bg-white px-2 py-1 rounded">• Priority Movements</span>
                              <span className="bg-white px-2 py-1 rounded">• EIR Copy</span>
                              <span className="bg-white px-2 py-1 rounded">• Proforma Invoice</span>
                              <span className="bg-white px-2 py-1 rounded">• Tax Invoice</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Track Approved Orders */}
                      <div className="border-l-4 border-indigo-500 pl-6">
                        <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                          ✅ 4. Track Approved Orders
                        </h4>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <h5 className="font-medium text-indigo-800 mb-2">📊 Approved Orders Graph</h5>
                          <p className="text-indigo-700 text-sm">
                            Displays monthly breakdown of approved orders for performance tracking.
                          </p>
                        </div>
                      </div>

                      {/* Step 5: Navigation Panel */}
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h4 className="text-lg font-semibold text-orange-800 mb-3">
                          🧭 5. Navigation Panel (Left Sidebar)
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <div className="bg-orange-50 p-2 rounded text-sm">
                              <strong>🏠 Home</strong> – Quick return to dashboard
                            </div>
                            <div className="bg-orange-50 p-2 rounded text-sm">
                              <strong>📦 CFS / Warehouse / Transport / 3PL / Custom</strong> – Manage different logistics services
                            </div>
                            <div className="bg-orange-50 p-2 rounded text-sm">
                              <strong>📋 Containers Management</strong> – Track container status
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-orange-50 p-2 rounded text-sm">
                              <strong>🔔 Notifications & Updates</strong> – Send alerts to clients
                            </div>
                            <div className="bg-orange-50 p-2 rounded text-sm">
                              <strong>👤 Profile</strong> – View or update admin profile
                            </div>
                            <div className="bg-orange-50 p-2 rounded text-sm">
                              <strong>🎫 Support / Tickets</strong> – Get help & track service tickets
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 6: Logout */}
                      <div className="border-l-4 border-red-500 pl-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-3">
                          🚪 6. Logout
                        </h4>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-red-700">
                            Click <strong>Logout</strong> at the bottom of the sidebar to securely exit the admin dashboard.
                          </p>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Customer CFS Services Guide */}
              <div id="cfs-orders" className="mb-12">
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center text-green-800">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        📦
                      </span>
                      📌 How To Use – CHA CFS Services
                    </CardTitle>
                    <p className="text-green-700 mt-2">
                      Complete step-by-step guide for managing CFS orders and services
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">

                      {/* CFS Orders Page Image */}
                      <div className="mb-8">
                        <div className="h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={customerCFSOrdersImage}
                            alt="Customer CFS Orders Page Interface"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-gray-600 mt-2 text-sm">
                          Customer reaches this page by selecting: <strong>CFS → Orders</strong> from the left-hand sidebar
                        </p>
                      </div>

                      {/* Step 1: Accessing CFS Orders Page */}
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          🚀 Step 1: Accessing the CFS Orders Page
                        </h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-blue-700 mb-2">
                            <strong>Navigation Path:</strong> From the left-hand sidebar, select:
                          </p>
                          <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                            <p className="font-mono text-blue-800">
                              📦 <strong>CFS</strong> → <strong>Orders</strong>
                            </p>
                          </div>
                          <p className="text-blue-700 mt-3">
                            The <strong>"My Orders"</strong> page will load with all CFS orders created by the customer.
                          </p>
                        </div>
                      </div>

                      {/* Step 2: Understanding Dashboard Stats */}
                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                          📊 Step 2: Understanding the Dashboard Stats (Top Section)
                        </h4>
                        <p className="text-purple-700 mb-4">
                          Quick stats summary for the user's understanding of order statuses:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                              <p className="font-semibold text-green-800">✅ Approved</p>
                              <p className="text-sm text-green-700">Number of CFS orders approved by the service provider</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                              <p className="font-semibold text-yellow-800">⏳ Pending</p>
                              <p className="text-sm text-yellow-700">Orders awaiting approval from service provider</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                              <p className="font-semibold text-blue-800">🔄 In Progress</p>
                              <p className="text-sm text-blue-700">Orders currently being processed</p>
                            </div>
                            <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                              <p className="font-semibold text-red-800">❌ Rejected</p>
                              <p className="text-sm text-red-700">Orders declined by the service provider</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Searching for Orders */}
                      <div className="border-l-4 border-indigo-500 pl-6">
                        <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                          🔍 Step 3: Searching for Orders
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h5 className="font-medium text-indigo-800 mb-2">🔎 Search Bar</h5>
                            <p className="text-indigo-700 text-sm">
                              Use the <strong>Search Bar</strong> to find orders by <strong>Order ID</strong> for quick access.
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h5 className="font-medium text-indigo-800 mb-2">🎛️ Filters</h5>
                            <p className="text-indigo-700 text-sm">
                              Apply filters to narrow results for faster lookup and better organization.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Creating New Order */}
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h4 className="text-lg font-semibold text-orange-800 mb-3">
                          ➕ Step 4: Creating a New Order
                        </h4>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                                New Order
                              </span>
                              <p className="text-orange-700">
                                Click the <strong>"New Order"</strong> button (top-right) to initiate a new CFS booking.
                              </p>
                            </div>
                            <p className="text-orange-700 text-sm">
                              📝 Fill in the required details in the order form to complete your booking.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 5: Viewing and Managing Orders */}
                      <div className="border-l-4 border-teal-500 pl-6">
                        <h4 className="text-lg font-semibold text-teal-800 mb-3">
                          📋 Step 5: Viewing and Managing Orders
                        </h4>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="text-teal-700 mb-4">
                            The table shows all CFS orders created by the customer with complete details:
                          </p>

                          {/* Order Details Grid */}
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>📋 Order ID</strong> - Unique order identifier
                              </div>
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>📅 Date</strong> - Order creation date
                              </div>
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>👤 Created By</strong> - Order creator details
                              </div>
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>🏢 CFS Provider</strong> - Service provider name
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>📄 IGM Number, Item Number, BL Number</strong> - Shipping documents
                              </div>
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>📦 Containers & Consignee Name</strong> - Container details
                              </div>
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>🏛️ CHA Name & Order Description</strong> - Customs details
                              </div>
                              <div className="bg-white p-2 rounded text-sm">
                                <strong>📊 Status</strong> - Accepted, Pending, Rejected
                              </div>
                            </div>
                          </div>

                          {/* Actions Column */}
                          <div className="bg-white p-4 rounded-lg border-l-4 border-teal-400">
                            <h5 className="font-medium text-teal-800 mb-2">⚡ Actions Column</h5>
                            <p className="text-teal-700 text-sm mb-2">Available actions for each order:</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <span className="bg-teal-100 px-2 py-1 rounded">✏️ Edit Order</span>
                              <span className="bg-teal-100 px-2 py-1 rounded">❌ Cancel Order</span>
                              <span className="bg-teal-100 px-2 py-1 rounded">📥 Download Documentation</span>
                              <span className="bg-teal-100 px-2 py-1 rounded">💬 Chat with Client</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 6: Logging Out */}
                      <div className="border-l-4 border-red-500 pl-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-3">
                          🚪 Step 6: Logging Out
                        </h4>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-red-700">
                            Click <strong>Logout</strong> in the bottom-left corner after managing your orders to securely exit the system.
                          </p>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Creating a New CFS Order Guide */}
              <div id="new-cfs-order" className="mb-12">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center text-blue-800">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        ➕
                      </span>
                      📦 Creating a New CFS Order – Complete Guide
                    </CardTitle>
                    <p className="text-blue-700 mt-2">
                      Step-by-step process for creating and submitting new CFS orders
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">

                      {/* New CFS Order Page Image */}
                      <div className="mb-8">
                        <div className="h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={newCFSOrderImage}
                            alt="New CFS Order Creation Form Interface"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-gray-600 mt-2 text-sm">
                          <strong>Feature Location:</strong> Sidebar → <strong>CFS</strong> → <strong>Order</strong> → <strong>New Order+</strong>
                        </p>
                      </div>

                      {/* Step 1: Shipment References */}
                      <div className="border-l-4 border-green-500 pl-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          📋 Step 1: Fill in Shipment References
                        </h4>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg border-l-4 border-green-400">
                                <h5 className="font-semibold text-green-800">📄 Import/Shipping Documents</h5>
                                <ul className="text-sm text-green-700 mt-2 space-y-1">
                                  <li><strong>• IGM Number</strong> - Import General Manifest reference</li>
                                  <li><strong>• B/L Number</strong> - Bill of Lading number</li>
                                  <li><strong>• Item Number</strong> - Specific item reference</li>
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg border-l-4 border-green-400">
                                <h5 className="font-semibold text-green-800">👥 Receiver & Clearing Agent</h5>
                                <ul className="text-sm text-green-700 mt-2 space-y-1">
                                  <li><strong>• Consignee Name</strong> - Cargo receiver details</li>
                                  <li><strong>• CHA Name</strong> - Customs House Agent details</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: Logistics Details */}
                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                          🚛 Step 2: Enter Logistics Details
                        </h4>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                                <h5 className="font-semibold text-purple-800">🏢 CFS Facility</h5>
                                <p className="text-sm text-purple-700 mt-1">
                                  Select the Container Freight Station for cargo handling
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                                <h5 className="font-semibold text-purple-800">🚢 Shipping Line</h5>
                                <p className="text-sm text-purple-700 mt-1">
                                  Choose from available shipping line options
                                </p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                                <h5 className="font-semibold text-purple-800">🚚 DPD/Non-DPD Type</h5>
                                <p className="text-sm text-purple-700 mt-1">
                                  Choose Direct Port Delivery or standard delivery
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                                <h5 className="font-semibold text-purple-800">📦 Cargo Type</h5>
                                <p className="text-sm text-purple-700 mt-1">
                                  Select cargo type from dropdown menu
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Container Information */}
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h4 className="text-lg font-semibold text-orange-800 mb-3">
                          📦 Step 3: Provide Container Information
                        </h4>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded-lg border-l-4 border-orange-400">
                              <h5 className="font-semibold text-orange-800">📏 Container Size & Type</h5>
                              <p className="text-sm text-orange-700 mt-1">
                                Dimensions and type of container (20ft, 40ft, etc.)
                              </p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-orange-400">
                              <h5 className="font-semibold text-orange-800">⏰ ETA</h5>
                              <p className="text-sm text-orange-700 mt-1">
                                Estimated Time of Arrival - Expected cargo arrival date
                              </p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-orange-400">
                              <h5 className="font-semibold text-orange-800">🔢 Container Number</h5>
                              <p className="text-sm text-orange-700 mt-1">
                                Unique ID of the container for tracking
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Delivery Details */}
                      <div className="border-l-4 border-teal-500 pl-6">
                        <h4 className="text-lg font-semibold text-teal-800 mb-3">
                          🚚 Step 4: Set Delivery Details
                        </h4>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded-lg border-l-4 border-teal-400">
                              <h5 className="font-semibold text-teal-800">📅 From Date / To Date</h5>
                              <p className="text-sm text-teal-700 mt-1">
                                Cargo movement dates and delivery window
                              </p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-teal-400">
                              <h5 className="font-semibold text-teal-800">🚛 Delivery Type</h5>
                              <p className="text-sm text-teal-700 mt-1">
                                Mode of delivery - truck, rail, etc.
                              </p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-teal-400">
                              <h5 className="font-semibold text-teal-800">📍 Delivery Method</h5>
                              <p className="text-sm text-teal-700 mt-1">
                                Specific delivery method and logistics
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 5: Order Description & Attachments */}
                      <div className="border-l-4 border-indigo-500 pl-6">
                        <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                          📝 Step 5: Add Order Description & Attachments
                        </h4>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-400">
                                <h5 className="font-semibold text-indigo-800">📄 Order Description</h5>
                                <p className="text-sm text-indigo-700 mt-1">
                                  Add any special notes, instructions, or requirements
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-400">
                                <h5 className="font-semibold text-indigo-800">📦 Containers</h5>
                                <p className="text-sm text-indigo-700 mt-1">
                                  Enter container IDs if handling multiple containers
                                </p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-400">
                                <h5 className="font-semibold text-indigo-800">📎 BL Copy Upload</h5>
                                <p className="text-sm text-indigo-700 mt-1">
                                  Upload Bill of Lading and other shipment documents
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 6: Submit Order */}
                      <div className="border-l-4 border-red-500 pl-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-3">
                          ✅ Step 6: Submit Your Order
                        </h4>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="bg-red-600 text-white px-4 py-2 rounded font-medium">
                                  Submit Request
                                </span>
                                <p className="text-red-700 font-medium">
                                  Click "Submit Request" at the bottom of the form
                                </p>
                              </div>
                              <p className="text-sm text-red-700">
                                📋 <strong>Result:</strong> Order appears in the "CFS Orders" list for tracking and management
                              </p>
                            </div>

                            <div className="bg-green-100 p-3 rounded-lg border border-green-300">
                              <p className="text-green-800 text-sm">
                                <strong>✅ Success!</strong> Your CFS order has been submitted and is now available in your orders list for tracking, editing, and communication with the service provider.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CFS Pricing Requests Guide */}
              <div id="cfs-pricing-requests" className="mb-12">
                <Card className="border-2 border-yellow-200">
                  <CardHeader className="bg-yellow-50">
                    <CardTitle className="flex items-center text-yellow-800">
                      <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        💰
                      </span>
                      💰 CFS Pricing Requests – Guide
                    </CardTitle>
                    <p className="text-yellow-700 mt-2">
                      Complete guide for managing and tracking CFS pricing requests
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">

                      {/* CFS Pricing Requests Page Image */}
                      <div className="mb-8">
                        <div className="h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={cfsPricingRequestsImage}
                            alt="CFS Pricing Requests Management Interface"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-gray-600 mt-2 text-sm">
                          <strong>Feature Location:</strong> Sidebar → <strong>CFS</strong> → <strong>Pricing Requests</strong>
                        </p>
                      </div>

                      {/* Step 1: Access Pricing Requests */}
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">
                          🔍 Step 1: Access Pricing Requests
                        </h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-blue-700 mb-3">
                            From the left menu, click <strong>CFS → Pricing Requests</strong>.
                          </p>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                            <h5 className="font-semibold text-blue-800 mb-2">📊 Status Overview</h5>
                            <p className="text-blue-700 mb-3">At the top, you'll see status counts for all your requests:</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="flex items-center space-x-2">
                                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">✓</span>
                                <span className="text-green-700"><strong>Approved</strong> – Requests confirmed by service provider</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">⏳</span>
                                <span className="text-yellow-700"><strong>Pending</strong> – Awaiting review</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">🔄</span>
                                <span className="text-blue-700"><strong>In Progress</strong> – Under discussion</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">✗</span>
                                <span className="text-red-700"><strong>Rejected</strong> – Not approved</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: Search & Filter */}
                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                          🔎 Step 2: Search & Filter Requests
                        </h4>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                            <p className="text-purple-700">
                              <strong>🗓️ Date Filter:</strong> Use the date filter to find requests from specific time periods
                            </p>
                            <p className="text-purple-700 mt-2">
                              <strong>🔍 Search Bar:</strong> Find specific pricing requests quickly by typing keywords
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: View Request Details */}
                      <div className="border-l-4 border-green-500 pl-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">
                          📋 Step 3: View Request Details
                        </h4>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-700 mb-4">
                            <strong>Each row represents one pricing request you made.</strong>
                          </p>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                            <h5 className="font-semibold text-green-800 mb-3">📊 Column Details:</h5>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">📅</span>
                                  <div>
                                    <strong className="text-green-800">Date</strong>
                                    <p className="text-green-700 text-sm">When the request was made</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">🏢</span>
                                  <div>
                                    <strong className="text-green-800">Service Provider</strong>
                                    <p className="text-green-700 text-sm">CFS terminal name</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">💵</span>
                                  <div>
                                    <strong className="text-green-800">Preferable Rate</strong>
                                    <p className="text-green-700 text-sm">Rate you proposed or received</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">🚚</span>
                                  <div>
                                    <strong className="text-green-800">DPD / Non-DPD</strong>
                                    <p className="text-green-700 text-sm">Type of delivery mode</p>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">📦</span>
                                  <div>
                                    <strong className="text-green-800">Container Type</strong>
                                    <p className="text-green-700 text-sm">e.g., General, Mix, ODC/FR/OT</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">📊</span>
                                  <div>
                                    <strong className="text-green-800">Containers Per Month</strong>
                                    <p className="text-green-700 text-sm">Estimated volume</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">📈</span>
                                  <div>
                                    <strong className="text-green-800">Status</strong>
                                    <p className="text-green-700 text-sm">Accepted / Pending / Rejected</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">💬</span>
                                  <div>
                                    <strong className="text-green-800">Reason</strong>
                                    <p className="text-green-700 text-sm">Notes from provider if applicable</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">⋮</span>
                                  <div>
                                    <strong className="text-green-800">Actions</strong>
                                    <p className="text-green-700 text-sm">More options (⋮ menu)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Check Status Updates */}
                      <div className="border-l-4 border-orange-500 pl-6">
                        <h4 className="text-lg font-semibold text-orange-800 mb-3">
                          📊 Step 4: Check Status Updates
                        </h4>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="space-y-4">
                            <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                              <div className="flex items-center space-x-3">
                                <span className="bg-green-500 text-white px-3 py-1 rounded font-medium">✓ Accepted</span>
                                <p className="text-green-800 font-medium">Your pricing is approved.</p>
                              </div>
                              <p className="text-green-700 text-sm mt-1">
                                🎉 Great! The CFS provider has accepted your pricing request and terms.
                              </p>
                            </div>

                            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                              <div className="flex items-center space-x-3">
                                <span className="bg-yellow-500 text-white px-3 py-1 rounded font-medium">⏳ Pending</span>
                                <p className="text-yellow-800 font-medium">Waiting for CFS provider response.</p>
                              </div>
                              <p className="text-yellow-700 text-sm mt-1">
                                ⏰ Your request is under review. The provider will respond soon.
                              </p>
                            </div>

                            <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
                              <div className="flex items-center space-x-3">
                                <span className="bg-red-500 text-white px-3 py-1 rounded font-medium">✗ Rejected</span>
                                <p className="text-red-800 font-medium">Request denied.</p>
                              </div>
                              <p className="text-red-700 text-sm mt-1">
                                📝 Check the "Reason" column for feedback and consider submitting a new request.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* How to Create a New Service Request */}
              <div id="new-service-request" className="mb-12">
                <Card className="border-2 border-indigo-200">
                  <CardHeader className="bg-indigo-50">
                    <CardTitle className="flex items-center text-indigo-800">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        🛠️
                      </span>
                      How to Create a New Service Request
                    </CardTitle>
                    <p className="text-indigo-700 mt-2">
                      Submit additional services linked to existing orders efficiently
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">

                      {/* Introduction */}
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                        <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                          📋 Introduction
                        </h4>
                        <p className="text-indigo-700 leading-relaxed">
                          Use the <strong>New Request form</strong> to submit additional services linked to an existing order,
                          such as <strong>EIR Copy</strong>, <strong>Proforma Invoice</strong>, or <strong>Priority Movements</strong>.
                          This helps our operations team process your requests efficiently.
                        </p>
                      </div>

                      {/* New Service Request Page Image */}
                      <div className="mb-8">
                        <div className="h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                          <ImageWithFallback
                            src={newServiceRequestImage}
                            alt="New Service Request Form Interface"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-gray-600 mt-2 text-sm">
                          <strong>Navigation Path:</strong> Sidebar → <strong>CFS</strong> → <strong>Service Requests</strong> → <strong>New Request</strong>
                        </p>
                      </div>

                      {/* Step-by-Step Guide */}
                      <div className="space-y-6">

                        {/* Step 1: Navigate to New Request */}
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="text-lg font-semibold text-blue-800 mb-3">
                            🧭 Step 1: Navigate to New Request
                          </h4>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                              <p className="text-blue-700">
                                From the sidebar menu, go to <strong>CFS → Service Requests → New Request</strong>.
                              </p>
                              <div className="mt-3 flex items-center space-x-2 text-sm text-blue-600">
                                <span className="bg-blue-100 px-2 py-1 rounded">📍</span>
                                <span>Sidebar → CFS → Service Requests → New Request</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 2: Fill in Request Details */}
                        <div className="border-l-4 border-green-500 pl-6">
                          <h4 className="text-lg font-semibold text-green-800 mb-3">
                            📝 Step 2: Fill in the Request Details
                          </h4>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="space-y-4">

                              {/* Order ID */}
                              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                                <div className="flex items-start space-x-3">
                                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">Required</span>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-green-800 mb-2">🆔 Order ID</h5>
                                    <p className="text-green-700">
                                      <strong>Enter the ID of the order</strong> you want this request linked to.
                                    </p>
                                    <div className="mt-2 bg-red-50 p-3 rounded border">
                                      <p className="text-red-700 text-sm">
                                        ⚠️ <strong>Mandatory Field:</strong> Input a mandatory Order ID to associate the request with a specific order
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Service Type */}
                              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                                <div className="flex items-start space-x-3">
                                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">Required</span>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-green-800 mb-2">🔧 Service Type</h5>
                                    <p className="text-green-700 mb-3">
                                      <strong>Select the appropriate service</strong> from the dropdown list.
                                    </p>
                                    <div className="mt-2 bg-red-50 p-3 rounded border">
                                      <p className="text-red-700 text-sm">
                                        ⚠️ <strong>Mandatory Field:</strong> Choose a required service type from a dropdown menu to categorize the request
                                      </p>
                                    </div>
                                    <div className="mt-3 bg-green-100 p-3 rounded">
                                      <p className="text-green-800 text-sm font-medium mb-2">📋 Common Service Types:</p>
                                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                                        <div className="flex items-center space-x-2">
                                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                          <span className="text-green-700">EIR Copy</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                          <span className="text-green-700">Proforma Invoice</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                          <span className="text-green-700">Priority Movements</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                          <span className="text-green-700">Other Services</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Remarks */}
                              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                                <div className="flex items-start space-x-3">
                                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Optional</span>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-green-800 mb-2">💬 Remarks</h5>
                                    <p className="text-green-700">
                                      Add any <strong>notes or instructions</strong> for the operations team.
                                    </p>
                                    <div className="mt-2 bg-blue-50 p-3 rounded border">
                                      <p className="text-blue-700 text-sm">
                                        💡 <strong>Helpful Tip:</strong> Include specific details, deadlines, or special requirements
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        {/* Step 3: Submit the Request */}
                        <div className="border-l-4 border-orange-500 pl-6">
                          <h4 className="text-lg font-semibold text-orange-800 mb-3">
                            🚀 Step 3: Submit the Request
                          </h4>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                              <div className="flex items-start space-x-3">
                                <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">✅</span>
                                <div className="flex-1">
                                  <p className="text-orange-700 mb-4">
                                    Click the <strong>"Request"</strong> button to send it for processing.
                                  </p>
                                  <div className="bg-orange-100 p-4 rounded">
                                    <p className="text-orange-800 font-medium mb-2">📊 After Submission:</p>
                                    <p className="text-orange-700 text-sm">
                                      Your request will now appear in the <strong>Service Requests list</strong> with a status of:
                                    </p>
                                    <div className="mt-3 space-y-2">
                                      <div className="flex items-center space-x-3">
                                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">⏳</span>
                                        <span className="text-orange-700 text-sm"><strong>Pending</strong> - Awaiting review</span>
                                      </div>
                                      <div className="flex items-center space-x-3">
                                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">✓</span>
                                        <span className="text-orange-700 text-sm"><strong>Accepted</strong> - Request approved</span>
                                      </div>
                                      <div className="flex items-center space-x-3">
                                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">✗</span>
                                        <span className="text-orange-700 text-sm"><strong>Rejected</strong> - Request denied</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Key Benefits */}
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
                        <h4 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                          <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">✨</span>
                          Key Benefits
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start space-x-3">
                            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🎯</span>
                            <div>
                              <p className="font-medium text-indigo-800">Efficient Processing</p>
                              <p className="text-indigo-700 text-sm">Streamlined workflow for operations team</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">🔗</span>
                            <div>
                              <p className="font-medium text-indigo-800">Order Linkage</p>
                              <p className="text-indigo-700 text-sm">Directly linked to existing orders</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">📋</span>
                            <div>
                              <p className="font-medium text-indigo-800">Status Tracking</p>
                              <p className="text-indigo-700 text-sm">Real-time request status updates</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">📎</span>
                            <div>
                              <p className="font-medium text-indigo-800">Document Support</p>
                              <p className="text-indigo-700 text-sm">Upload supporting files easily</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-2 border-gray-200">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="flex items-center text-gray-800">
                      <Layout className="w-6 h-6 mr-3" />
                      🔁 Access Dashboard Anytime
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="font-medium text-gray-900">
                        Click on the Dashboard button
                        (top-right) to:
                      </p>
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-700">
                            • Manage all service requests
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-700">
                            • View quotes, approvals, and
                            messages
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-700">
                            • Track ongoing logistics operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center text-blue-800">
                      <HelpCircle className="w-6 h-6 mr-3" />
                      💬 Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                        <MessageCircle className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                        <p className="text-blue-800 font-medium">
                          Use the live chat popup in the
                          bottom-right corner for assistance
                          anytime.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Additional Features */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Additional Platform Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">
                    24/7 Chatbot Support
                  </h3>
                  <p className="text-gray-600">
                    Get instant help with our intelligent
                    chatbot assistant available around the
                    clock.
                  </p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Search className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">
                    Smart CFS Search
                  </h3>
                  <p className="text-gray-600">
                    Find the perfect Container Freight Station
                    based on location, budget, and requirements.
                  </p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">
                    Secure Authentication
                  </h3>
                  <p className="text-gray-600">
                    Multiple secure login options including
                    Google OAuth for enhanced security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Follow these simple steps to start using Link My
                Logistics today!
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToStep("step1")}
                className="mr-4"
              >
                Start with Step 1
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                asChild
              >
                <a href="https://linkmylogistics.com" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Link My Logistics. All rights reserved. |
            Need help? Contact our support team.
          </p>
        </div>
      </footer>
    </div>
  );
}
