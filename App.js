import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ChevronRight, Search, Globe, LogIn, User, Shield, MessageCircle, UserPlus, Building2, Mail, CheckCircle, Upload, FileText, Truck, Filter, Star, DollarSign, BarChart3, Eye } from "lucide-react";
// Import the account creation images from public/assets
const businessProfileImage = "/assets/usinessProfileImage.jpg";
const emailVerificationImage = "/assets/customer Verification page  step 3.jpg";
const registrationCompletedImage = "/assets/Customer Successful page step 4.jpg";
// Import the CFS service provider images from public/assets
// Import the website main page image
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
const newServiceRequestImage = "/assets/newServiceRequest.jpg";
// Import the Google search page image 
const googleSearchPageImage = "/assets/Search Page.jpg";
// CFS Services (CHA Access) grid screenshot
// Import the track & trace image
const trackTraceImage = "public/assets/Customer CFS (Track & Trace) page.jpg";
const eirCopyPageImage = "/assets/Customer CFS (EIR COPY Service New request form) page.jpg";
const eirCopyNewRequestImage = "/assets/Customer CFS (EIR COPY Service) page.jpg";
//Import the proforma invoice image
const Proformainvoiceimage = "/assets/Customer CFS (Proforma Invoice ) page.jpg";
//Import the priority movement image
const prioritymovementImage = "public/assets/Customer CFS ( Priority Movement ) page.jpg";
//Import the weightment slip image
const weightmentslipImage = "public/assets/Customer CFS ( Weighment Slip ) page.jpg";
export default function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const searchRef = useRef(null);
    // Handle clicks outside search area
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Define searchable sections
    const searchableItems = [
        {
            id: "step1",
            title: "Search for Our Platform on Google",
            description: "Find and visit our website easily"
        },
        {
            id: "step2",
            title: "Navigate the Home Page & Choose Services",
            description: "Explore features and select the services you need"
        },
        {
            id: "step3",
            title: "Sign In to Your Account",
            description: "Access your personal dashboard"
        },
        {
            id: "account-creation",
            title: "Account Creation Process",
            description: "Complete guide to creating your business profile"
        },
        {
            id: "cfs-services",
            title: "Explore CFS Service Providers",
            description: "Browse and select logistics service providers"
        },
        {
            id: "step5",
            title: "Track Your Request",
            description: "Monitor your pricing and service requests"
        },
        {
            id: "step6",
            title: "View More Details",
            description: "Get detailed information about service providers"
        },
        {
            id: "google-auth",
            title: "Google Authentication Process",
            description: "Complete guide for signing in with Google OAuth"
        },
        {
            id: "admin-dashboard",
            title: "CHA Dashboard Guide",
            description: "Complete user flow for the admin dashboard interface"
        },
        {
            id: "cfs-orders",
            title: "CHA CFS Services guide",
            description: "Complete guide for managing CFS orders and services"
        },
        {
            id: "new-cfs-order",
            title: "Creating New CFS Order",
            description: "Step-by-step guide for creating and submitting new CFS orders"
        },
        {
            id: "cfs-pricing-requests",
            title: "CFS Pricing Requests Guide",
            description: "Complete guide for managing and tracking CFS pricing requests"
        },
        {
            id: "new-service-request",
            title: "How to Create a New Service Request",
            description: "Submit additional services linked to existing orders efficiently"
        },
        {
            id: "track-trace",
            title: "Track & Trace CFS Services",
            description: "Real-time container status and milestones tracking"
        },
        {
            id: "eir-copy",
            title: "How to Request an EIR Copy – CFS Services",
            description: "Request a digital copy of the Equipment Interchange Receipt (EIR)"
        },
        {
            id: "proforma-invoice",
            title: "Proforma Invoice - CFS Service",
            description: "Request and manage proforma invoices quickly with status tracking"
        },
        {
            id: "priority-movement",
            title: "Priority Movement – CFS Services",
            description: "Submit urgent cargo movement requests and track their status efficiently"
        },
        {
            id: "weighment-slip",
            title: "Weighment Slip Requests – CFS Services",
            description: "Request official weighment slips and track progress"
        }
    ];
    const scrollToStep = (stepId)=>{
        document.getElementById(stepId)?.scrollIntoView({
            behavior: "smooth"
        });
        setShowSearchResults(false);
        setSearchQuery("");
    };
    const handleSearch = (query)=>{
        setSearchQuery(query);
        if (query.trim() === "") {
            setSearchResults([]);
            setShowSearchResults(false);
            return;
        }
        const filtered = searchableItems.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));
        setSearchResults(filtered);
        setShowSearchResults(true);
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50",
        children: [
            /*#__PURE__*/ _jsx("header", {
                className: "bg-white shadow-sm border-b",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-4xl font-bold text-gray-900 mb-2",
                                children: "How to Use Link My Logistics"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-xl text-gray-600 max-w-3xl mx-auto mb-6",
                                children: "A complete step-by-step guide to help you navigate and use our logistics platform effectively"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                ref: searchRef,
                                className: "max-w-md mx-auto relative",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ _jsx(Search, {
                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                                            }),
                                            /*#__PURE__*/ _jsx(Input, {
                                                type: "text",
                                                placeholder: "Search steps by name (e.g., 'sign in', 'google auth', 'profile')...",
                                                value: searchQuery,
                                                onChange: (e)=>handleSearch(e.target.value),
                                                className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            })
                                        ]
                                    }),
                                    showSearchResults && searchResults.length > 0 && /*#__PURE__*/ _jsx("div", {
                                        className: "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto",
                                        children: searchResults.map((result)=>/*#__PURE__*/ _jsxs("button", {
                                                onClick: ()=>scrollToStep(result.id),
                                                className: "w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-blue-50",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "font-medium text-gray-900",
                                                        children: result.title
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: result.description
                                                    })
                                                ]
                                            }, result.id))
                                    }),
                                    showSearchResults && searchResults.length === 0 && searchQuery.trim() !== "" && /*#__PURE__*/ _jsx("div", {
                                        className: "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 px-4 py-3",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "text-gray-500 text-center",
                                            children: [
                                                'No results found for "',
                                                searchQuery,
                                                '"'
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ _jsx("section", {
                        id: "step1",
                        className: "mb-16",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsx(CardHeader, {
                                    className: "bg-blue-600 text-white",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardTitle, {
                                                        className: "text-3xl font-bold",
                                                        children: "Step 1: Search for Our Platform on Google"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-blue-100 mt-2",
                                                        children: "Find and visit our website easily"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Badge, {
                                                variant: "secondary",
                                                className: "bg-blue-500 text-white",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Search, {
                                                        className: "w-4 h-4 mr-1"
                                                    }),
                                                    "Search"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(CardContent, {
                                    className: "p-0",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "grid lg:grid-cols-2 gap-1 p-6",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                    children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                        src: googleSearchPageImage,
                                                        alt: "Google Search Page - Search for Our Platform",
                                                        className: "w-full h-full object-cover"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("h3", {
                                                                className: "text-xl font-semibold mb-4 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "1"
                                                                    }),
                                                                    "Instructions"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsx("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: "📝 Open your browser and go to Google.com"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-gray-900 mb-2",
                                                                                children: "🔍 In the search bar, type:"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("code", {
                                                                                className: "bg-blue-100 text-blue-800 px-3 py-1 rounded font-mono",
                                                                                children: "linkmylogistics.com"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsx("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: "➡ Press Enter to find and visit our website"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "bg-green-50 border border-green-200 p-4 rounded-lg",
                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-green-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "✅ Why this helps:"
                                                                }),
                                                                " This helps new users find us easily without typing the full URL."
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs(Button, {
                                                        onClick: ()=>scrollToStep("step2"),
                                                        className: "w-full",
                                                        children: [
                                                            "Continue to Step 2",
                                                            " ",
                                                            /*#__PURE__*/ _jsx(ChevronRight, {
                                                                className: "w-4 h-4 ml-2"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        id: "step2",
                        className: "mb-16",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsx(CardHeader, {
                                    className: "bg-indigo-600 text-white",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardTitle, {
                                                        className: "text-3xl font-bold",
                                                        children: "Step 2: Navigate the Home Page & Choose Services"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-indigo-100 mt-2",
                                                        children: "Explore features and select the services you need"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Badge, {
                                                variant: "secondary",
                                                className: "bg-indigo-500 text-white",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Globe, {
                                                        className: "w-4 h-4 mr-1"
                                                    }),
                                                    "Navigate"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(CardContent, {
                                    className: "p-0",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "grid lg:grid-cols-2 gap-8 p-6",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                    children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                        src: websitePageImage,
                                                        alt: "Website Page - Navigate and Choose Services",
                                                        className: "w-full h-full object-cover"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("h3", {
                                                                className: "text-xl font-semibold mb-4 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "2"
                                                                    }),
                                                                    "Available Features"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: [
                                                                                "🔍 ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Search by location"
                                                                                }),
                                                                                " ",
                                                                                "to find CFS (Container Freight Station) providers"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: [
                                                                                "💰 ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Set your budget"
                                                                                }),
                                                                                " ",
                                                                                "and storage preferences"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: [
                                                                                "🚛",
                                                                                " ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Choose logistics services:"
                                                                                }),
                                                                                " ",
                                                                                "CFS, Transport, 3PL, Warehouse"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: [
                                                                                "💬 ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Ask questions"
                                                                                }),
                                                                                " ",
                                                                                "through our chatbot assistant"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: [
                                                                                "📌",
                                                                                " ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: 'Click "Search CFS Now"'
                                                                                }),
                                                                                " ",
                                                                                "to view available providers"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h4", {
                                                                className: "font-semibold text-gray-900 mb-3",
                                                                children: "👥 Login Options at the Top:"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "grid grid-cols-2 gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-blue-50 border border-blue-200 p-3 rounded-lg text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(User, {
                                                                                className: "w-6 h-6 mx-auto mb-2 text-blue-600"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-sm font-medium",
                                                                                children: '"Sign In" for CHA'
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-green-50 border border-green-200 p-3 rounded-lg text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(User, {
                                                                                className: "w-6 h-6 mx-auto mb-2 text-green-600"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-sm font-medium",
                                                                                children: '"Sign In" for CFS users'
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs(Button, {
                                                        onClick: ()=>scrollToStep("step3"),
                                                        className: "w-full",
                                                        children: [
                                                            "Continue to Step 3",
                                                            " ",
                                                            /*#__PURE__*/ _jsx(ChevronRight, {
                                                                className: "w-4 h-4 ml-2"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        id: "step3",
                        className: "mb-16",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsx(CardHeader, {
                                    className: "bg-purple-600 text-white",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardTitle, {
                                                        className: "text-3xl font-bold",
                                                        children: "Step 3: Log In or Sign Up to Your Account"
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-purple-100 mt-2",
                                                        children: "Access your dashboard with secure authentication"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Badge, {
                                                variant: "secondary",
                                                className: "bg-purple-500 text-white",
                                                children: [
                                                    /*#__PURE__*/ _jsx(LogIn, {
                                                        className: "w-4 h-4 mr-1"
                                                    }),
                                                    "Sign In"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(CardContent, {
                                    className: "p-0",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "grid lg:grid-cols-2 gap-8 p-6",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                    children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                        src: customerSignInPageImage,
                                                        alt: "Customer Sign-in Page - Log In or Sign Up",
                                                        className: "w-full h-full object-cover"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("h3", {
                                                                className: "text-xl font-semibold mb-4 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "3"
                                                                    }),
                                                                    "Sign In Options"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                className: "font-medium text-gray-900 mb-3",
                                                                                children: [
                                                                                    "🔐",
                                                                                    " ",
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Use your login credentials to access your dashboard:"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("ul", {
                                                                                className: "space-y-2 ml-4 text-gray-700",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("li", {
                                                                                        children: "📧 Enter Email or Username"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("li", {
                                                                                        children: "🔑 Enter your Password"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("li", {
                                                                                        children: "➡ Click Login"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-blue-50 border border-blue-200 p-4 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                className: "font-medium text-blue-900 mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx(Shield, {
                                                                                        className: "w-5 h-5 inline mr-2"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Alternative Login:"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-blue-800",
                                                                                children: "🔗 Login with Google (OAuth) - Authenticates using Google OAuth for secure access"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-green-50 border border-green-200 p-4 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                className: "font-medium text-green-900 mb-2",
                                                                                children: [
                                                                                    "🆕",
                                                                                    " ",
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Don't have an account?"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-green-800",
                                                                                children: "Click Sign Up to create a new one - Redirects to account creation page (for new customers)"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "bg-orange-50 border border-orange-200 p-4 rounded-lg",
                                                                        children: /*#__PURE__*/ _jsx("p", {
                                                                            className: "font-medium text-orange-900",
                                                                            children: "For support, use the email link provided on the login page"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "bg-purple-50 border border-purple-200 p-4 rounded-lg",
                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-purple-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "🎉 Success!"
                                                                }),
                                                                " Once logged in, you'll have access to your personalized dashboard with all logistics tools and services."
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs(Button, {
                                                        onClick: ()=>scrollToStep("account-creation"),
                                                        className: "w-full",
                                                        children: [
                                                            "Learn How to Create Account",
                                                            " ",
                                                            /*#__PURE__*/ _jsx(ChevronRight, {
                                                                className: "w-4 h-4 ml-2"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        id: "account-creation",
                        className: "mb-16",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsx(CardHeader, {
                                    className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsx(CardTitle, {
                                                className: "text-4xl font-bold mb-2",
                                                children: "How to Create an Account on Link My Logistics"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-green-100 text-lg",
                                                children: "Complete registration process in 4 simple steps"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs(CardContent, {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(UserPlus, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Registration"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Sign up with email"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(Building2, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Business Profile"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Fill company details"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(Mail, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Email Verification"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Verify your email"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(CheckCircle, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Completed"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Account ready"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-blue-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-blue-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-blue-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "1"
                                                                }),
                                                                "✅ Step 1: Registration (Sign-In)"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: customerSignInPageImage,
                                                                            alt: "Customer Sign-in Page",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-gray-900 mb-3",
                                                                                    children: "Access the Registration Page:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                    className: "text-gray-700 mb-3",
                                                                                    children: [
                                                                                        "Visit:",
                                                                                        " ",
                                                                                        /*#__PURE__*/ _jsx("code", {
                                                                                            className: "bg-gray-100 px-2 py-1 rounded text-sm font-mono",
                                                                                            children: "linkmylogistics.com/customer/register/profile"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-gray-900 mb-3",
                                                                                    children: "Action:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(Mail, {
                                                                                                    className: "w-5 h-5 mr-3 text-blue-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    children: "Enter your email address and password to sign up"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(CheckCircle, {
                                                                                                    className: "w-5 h-5 mr-3 text-blue-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    children: 'Click "Register" to proceed'
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-indigo-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-indigo-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-indigo-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "2"
                                                                }),
                                                                "🏢 Step 2: Fill Business Profile"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: businessProfileImage,
                                                                            alt: "Business Profile Form",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-gray-900 mb-3",
                                                                                    children: "Fields to Complete:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(Building2, {
                                                                                                    className: "w-5 h-5 mr-3 text-indigo-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "Company/Business Name"
                                                                                                        }),
                                                                                                        " ",
                                                                                                        "(Required)"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(FileText, {
                                                                                                    className: "w-5 h-5 mr-3 text-indigo-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "Business Type"
                                                                                                        }),
                                                                                                        " ",
                                                                                                        "(Dropdown) (Required)"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(Globe, {
                                                                                                    className: "w-5 h-5 mr-3 text-indigo-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "Business Address"
                                                                                                        }),
                                                                                                        " ",
                                                                                                        "(Required)"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                                    className: "w-5 h-5 mr-3 text-gray-500"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "Business Description"
                                                                                                        }),
                                                                                                        " ",
                                                                                                        "(Optional)"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(Upload, {
                                                                                                    className: "w-5 h-5 mr-3 text-gray-500"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "Upload Business Documents"
                                                                                                        }),
                                                                                                        " ",
                                                                                                        "(Optional) — PDF, JPG, PNG, max 10MB"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-indigo-50 border border-indigo-200 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-indigo-900 mb-2",
                                                                                    children: "Action:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                                    className: "space-y-1 text-indigo-800",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: '• After filling the required info, click "Continue →"'
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: '• You can choose "Skip for Now" to proceed without documents'
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-purple-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-purple-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-purple-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "3"
                                                                }),
                                                                "📧 Step 3: Email Verification"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: emailVerificationImage,
                                                                            alt: "Email Verification Screen",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-gray-900 mb-3",
                                                                                    children: "What Happens:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "bg-gray-50 p-4 rounded-lg",
                                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "flex items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx(Mail, {
                                                                                                        className: "w-5 h-5 mr-3 text-purple-600"
                                                                                                    }),
                                                                                                    "You will receive an email to verify your address."
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "bg-gray-50 p-4 rounded-lg",
                                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "flex items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx(CheckCircle, {
                                                                                                        className: "w-5 h-5 mr-3 text-green-600"
                                                                                                    }),
                                                                                                    'Once verified, the screen will display "Email Verified"'
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-purple-50 border border-purple-200 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-purple-900 mb-2",
                                                                                    children: "Action:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-purple-800",
                                                                                    children: 'Click "Continue →" to proceed to the final step'
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-8",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-green-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-green-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-green-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "4"
                                                                }),
                                                                "🎉 Step 4: Completed"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: registrationCompletedImage,
                                                                            alt: "Registration Completed Screen",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-gray-900 mb-3",
                                                                                    children: "Confirmation Screen:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "bg-green-50 border border-green-200 p-4 rounded-lg",
                                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-green-800",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx(CheckCircle, {
                                                                                                        className: "w-5 h-5 inline mr-2"
                                                                                                    }),
                                                                                                    "You will see a message confirming your account has been successfully created and verified."
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "bg-green-50 border border-green-200 p-4 rounded-lg",
                                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-green-800",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx(Shield, {
                                                                                                        className: "w-5 h-5 inline mr-2"
                                                                                                    }),
                                                                                                    "You are now ready to explore the customer dashboard and begin using the logistics services."
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 p-6 rounded-lg text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-bold text-green-900 mb-2",
                                                                                    children: "🎊 Welcome Aboard!"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-green-800",
                                                                                    children: "Your Link My Logistics account is now ready to use. Start exploring our comprehensive logistics platform!"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs(Button, {
                                                                            onClick: ()=>scrollToStep("cfs-services"),
                                                                            className: "w-full",
                                                                            children: [
                                                                                "Learn How to Explore CFS Services",
                                                                                " ",
                                                                                /*#__PURE__*/ _jsx(ChevronRight, {
                                                                                    className: "w-4 h-4 ml-2"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("section", {
                        id: "cfs-services",
                        className: "mb-16",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "overflow-hidden",
                            children: [
                                /*#__PURE__*/ _jsx(CardHeader, {
                                    className: "bg-gradient-to-r from-orange-600 to-red-600 text-white",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsx(CardTitle, {
                                                className: "text-4xl font-bold mb-2",
                                                children: "How to Explore CFS Service Provider and Request Pricing for Solutions"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-orange-100 text-lg",
                                                children: "Complete guide to finding and requesting quotes from service providers"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs(CardContent, {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(Truck, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Choose Service"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Select logistics category"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-indigo-100 text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(Filter, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Apply Filters"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Narrow search results"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",
                                                            children: /*#__PURE__*/ _jsx(Star, {
                                                                className: "w-6 h-6"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-semibold",
                                                            children: "Browse Providers"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "View provider cards"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-blue-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-blue-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-blue-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "1"
                                                                }),
                                                                "✅ Step 1: Choose the Logistics Service"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "font-medium text-gray-900 mb-3",
                                                                            children: "On the homepage, you will see buttons for various logistics categories:"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid grid-cols-5 gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-blue-100 text-blue-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: "CFS"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-green-100 text-green-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: "Transport"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-purple-100 text-purple-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: "3PL"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-orange-100 text-orange-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: "Warehouse"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-gray-100 text-gray-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: "Custom"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "bg-blue-50 border border-blue-200 p-4 rounded-lg",
                                                                    children: /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-blue-800",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                children: "👉 Action:"
                                                                            }),
                                                                            " Click the service type you are looking for (e.g., CFS)."
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-indigo-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-indigo-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-indigo-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "2"
                                                                }),
                                                                "🔍 Step 2: Use Filters to Narrow Results"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "space-y-4",
                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-gray-50 p-4 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "font-medium text-gray-900 mb-3",
                                                                        children: "Use the Search & Filter Bar on the top-right:"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("ul", {
                                                                        className: "space-y-2 ml-4 text-gray-700",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("li", {
                                                                                children: "• Search for specific service providers"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("li", {
                                                                                children: "• Apply filters like location, service type, etc."
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-purple-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-purple-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-purple-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "3"
                                                                }),
                                                                "📇 Step 3: Browse Service Provider Cards"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: serviceProviderCardDetailsImage,
                                                                            alt: "Service Provider Card Details",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "space-y-6",
                                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-gray-900 mb-3",
                                                                                children: "Scroll through the listed Service Provider Cards."
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-gray-900 mb-3",
                                                                                children: "Each card displays:"
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "space-y-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(Globe, {
                                                                                                className: "w-5 h-5 mr-3 text-purple-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📍 Location"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(Truck, {
                                                                                                className: "w-5 h-5 mr-3 text-purple-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "🏷 Services"
                                                                                                    }),
                                                                                                    " ",
                                                                                                    "(e.g., Packing, Storage, Customs)"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(Star, {
                                                                                                className: "w-5 h-5 mr-3 text-purple-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "⭐ Ratings"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(FileText, {
                                                                                                className: "w-5 h-5 mr-3 text-purple-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📄 Description"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-green-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-green-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-green-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "4"
                                                                }),
                                                                "📦 Step 4: Request a Pricing Quote"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: websitePricingRequestPageImage,
                                                                            alt: "Website Pricing Request Page",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "font-medium text-gray-900 mb-3",
                                                                                    children: 'Click the "Request Price" button on the provider card.'
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "font-medium text-gray-900 mb-3",
                                                                                    children: "A form will appear with the following fields:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(FileText, {
                                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    children: /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "DPD / Non-DPD"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(Building2, {
                                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    children: /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Container Type"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(DollarSign, {
                                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    children: /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Preferable Rate"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-center p-3 bg-gray-50 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx(BarChart3, {
                                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    children: /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "No. of Container Movements per Month"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-green-50 border border-green-200 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "font-semibold text-green-900 mb-2",
                                                                                    children: "Actions:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                                    className: "space-y-1 text-green-800",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: "📝 Fill in the required details."
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: '✅ Click "Request Pricing".'
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "step5",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-orange-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-orange-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-orange-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "5"
                                                                }),
                                                                "📈 Step 5: Track Your Request"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "font-medium text-gray-900 mb-2",
                                                                            children: "Once submitted, your request automatically appears in your dashboard under:"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-orange-100 text-orange-800 px-3 py-2 rounded font-mono text-center mt-2",
                                                                            children: "CFS > Pricing Requests table"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "bg-orange-50 border border-orange-200 p-4 rounded-lg",
                                                                    children: /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-orange-800",
                                                                        children: "You can view the status and manage responses from there."
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "step6",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-red-200",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardHeader, {
                                                        className: "bg-red-50",
                                                        children: /*#__PURE__*/ _jsxs(CardTitle, {
                                                            className: "flex items-center text-red-800",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                    children: "6"
                                                                }),
                                                                "📊 Step 6: View More Details (Optional)"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "grid lg:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: viewDetailsPageImage,
                                                                            alt: "View Details Page",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "space-y-6",
                                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-gray-50 p-4 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-gray-900 mb-3",
                                                                                children: 'Click "View Details" on any card to open a dedicated page with:'
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid grid-cols-1 gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-white border rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(Eye, {
                                                                                                className: "w-5 h-5 mr-3 text-red-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: "More photos"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-white border rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(FileText, {
                                                                                                className: "w-5 h-5 mr-3 text-red-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: "Service details"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-white border rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(Building2, {
                                                                                                className: "w-5 h-5 mr-3 text-red-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: "Facilities offered"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center p-3 bg-white border rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                                className: "w-5 h-5 mr-3 text-red-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                children: "Contact options"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "google-auth",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-green-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                                        className: "bg-green-50",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(CardTitle, {
                                                                className: "flex items-center text-green-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "G"
                                                                    }),
                                                                    "🔐 Google Authentication Process"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-green-700 mt-2",
                                                                children: "Complete guide for signing in with Google OAuth"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-blue-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-blue-800 mb-3",
                                                                            children: "🟦 Step 1: Open the Login Page"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid lg:grid-cols-2 gap-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                                        className: "h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                            src: googleAuthStep1Image,
                                                                                            alt: "Customer Sign-in Page with Google Login Option",
                                                                                            className: "w-full h-full object-cover"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "Visit:"
                                                                                                }),
                                                                                                " https://linkmylogistics.com/customer/login"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: "You'll see two options:"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("ul", {
                                                                                            className: "list-disc list-inside space-y-1 text-gray-700 ml-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("li", {
                                                                                                    children: "Enter email & password"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("li", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "OR"
                                                                                                        }),
                                                                                                        ' click "Login with Google"'
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "bg-blue-50 p-3 rounded-lg",
                                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-blue-800 text-sm",
                                                                                                children: [
                                                                                                    "📌 ",
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Tip:"
                                                                                                    }),
                                                                                                    " Make sure you're already logged into your Google account on your browser."
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-indigo-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                                            children: '🔁 Step 2: Click "Login with Google"'
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid lg:grid-cols-2 gap-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                                        className: "h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                            src: googleAuthStep2Image,
                                                                                            alt: "Google Login Button Click",
                                                                                            className: "w-full h-full object-cover"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: [
                                                                                                "Click the white ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: '"Login with Google"'
                                                                                                }),
                                                                                                " button."
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: "This will redirect you to the Google account selector page."
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-purple-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-purple-800 mb-3",
                                                                            children: "🔍 Step 3: Choose a Google Account"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid lg:grid-cols-2 gap-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                                        className: "h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                            src: googleAuthStep3Image,
                                                                                            alt: "Google Account Selection Page",
                                                                                            className: "w-full h-full object-cover"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: [
                                                                                                "A page titled ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: '"Choose an account"'
                                                                                                }),
                                                                                                " will appear (Google OAuth screen)."
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: "Select the Gmail account you want to use."
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "OR"
                                                                                                }),
                                                                                                ' click "Use another account" if your desired email is not listed.'
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-green-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-green-800 mb-3",
                                                                            children: "✅ Step 4: Authentication and Redirect"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid lg:grid-cols-2 gap-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                                        className: "h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                            src: googleAuthStep4Image,
                                                                                            alt: "Authentication Success and Redirect",
                                                                                            className: "w-full h-full object-cover"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: "Once authenticated, you'll be redirected back to the website."
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: [
                                                                                                "A green pop-up will appear: ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: '"User Authenticated"'
                                                                                                }),
                                                                                                " ✅"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "bg-yellow-50 p-3 rounded-lg",
                                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-yellow-800 text-sm",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Important:"
                                                                                                    }),
                                                                                                    " You may need to refresh the page once to complete the login."
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-emerald-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-emerald-800 mb-3",
                                                                            children: "🔓 Step 5: You're In!"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid lg:grid-cols-2 gap-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                                        className: "h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                            src: customerSuccessfulPageImage,
                                                                                            alt: "Successful Login - Dashboard Access",
                                                                                            className: "w-full h-full object-cover"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: [
                                                                                                "The system will now show a ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "Dashboard button"
                                                                                                }),
                                                                                                " and ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "Logout option"
                                                                                                }),
                                                                                                "."
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-gray-700",
                                                                                            children: "This means you're successfully logged in."
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-green-50 p-4 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-green-800 font-medium mb-2",
                                                                                                    children: "🎉 You can now:"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                                                    className: "list-disc list-inside space-y-1 text-green-700 ml-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                                            children: "Explore services"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                                            children: "Request pricing"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                                            children: "Manage your logistics dashboard"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "admin-dashboard",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-blue-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                                        className: "bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(CardTitle, {
                                                                className: "flex items-center text-blue-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "📊"
                                                                    }),
                                                                    "📌 Customer Dashboard - User Flow Guide"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-blue-700 mt-2",
                                                                children: "Complete guide for navigating and using the Customer dashboard interface"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "mb-8",
                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                        className: "h-[600px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                            src: customerDashboardImage,
                                                                            alt: "Customer Dashboard Interface",
                                                                            className: "w-full h-full object-cover"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-blue-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-blue-800 mb-3",
                                                                            children: "🔐 1. Login & Access Dashboard"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "space-y-3",
                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                className: "text-gray-700",
                                                                                children: [
                                                                                    "By default, the ",
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Dashboard page"
                                                                                    }),
                                                                                    " loads showing an overview of orders and service usage."
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-green-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-green-800 mb-3",
                                                                            children: "📊 2. Review Order Summary Cards (Top Section)"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid md:grid-cols-2 gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-blue-50 p-3 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-medium text-blue-800",
                                                                                                    children: "📈 Total Orders"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-blue-700",
                                                                                                    children: "Shows all orders created in the system"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-yellow-50 p-3 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-medium text-yellow-800",
                                                                                                    children: "⏳ Pending Orders"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-yellow-700",
                                                                                                    children: "Orders awaiting admin action"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-green-50 p-3 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-medium text-green-800",
                                                                                                    children: "✅ Approved Orders"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-green-700",
                                                                                                    children: "Orders accepted by the admin"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-red-50 p-3 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-medium text-red-800",
                                                                                                    children: "❌ Rejected Orders"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-red-700",
                                                                                                    children: "Orders declined by the admin"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-purple-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-purple-800 mb-3",
                                                                            children: "📈 3. Analyze Trends & Insights"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "space-y-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-purple-50 p-4 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-medium text-purple-800 mb-2",
                                                                                            children: "📊 Total Order Trends (Graph)"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("ul", {
                                                                                            className: "list-disc list-inside space-y-1 text-purple-700 text-sm ml-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("li", {
                                                                                                    children: "Displays monthly order volumes"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("li", {
                                                                                                    children: "Hover over points to see exact counts"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-purple-50 p-4 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-medium text-purple-800 mb-2",
                                                                                            children: "🍩 Service Usage Distribution (Donut Chart)"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-purple-700 text-sm mb-2",
                                                                                            children: "Shows percentage split of service requests:"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "grid grid-cols-2 gap-2 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-white px-2 py-1 rounded",
                                                                                                    children: "• Cheque Acceptance"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-white px-2 py-1 rounded",
                                                                                                    children: "• Tariff Request"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-white px-2 py-1 rounded",
                                                                                                    children: "• Priority Movements"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-white px-2 py-1 rounded",
                                                                                                    children: "• EIR Copy"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-white px-2 py-1 rounded",
                                                                                                    children: "• Proforma Invoice"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-white px-2 py-1 rounded",
                                                                                                    children: "• Tax Invoice"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-indigo-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                                            children: "✅ 4. Track Approved Orders"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-indigo-50 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                    className: "font-medium text-indigo-800 mb-2",
                                                                                    children: "📊 Approved Orders Graph"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-indigo-700 text-sm",
                                                                                    children: "Displays monthly breakdown of approved orders for performance tracking."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-orange-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-orange-800 mb-3",
                                                                            children: "🧭 5. Navigation Panel (Left Sidebar)"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid md:grid-cols-2 gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-orange-50 p-2 rounded text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "🏠 Home"
                                                                                                }),
                                                                                                " – Quick return to dashboard"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-orange-50 p-2 rounded text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📦 CFS / Warehouse / Transport / 3PL / Custom"
                                                                                                }),
                                                                                                " – Manage different logistics services"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-orange-50 p-2 rounded text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📋 Containers Management"
                                                                                                }),
                                                                                                " – Track container status"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-orange-50 p-2 rounded text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "🔔 Notifications & Updates"
                                                                                                }),
                                                                                                " – Send alerts to clients"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-orange-50 p-2 rounded text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "👤 Profile"
                                                                                                }),
                                                                                                " – View or update admin profile"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-orange-50 p-2 rounded text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "🎫 Support / Tickets"
                                                                                                }),
                                                                                                " – Get help & track service tickets"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-red-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-red-800 mb-3",
                                                                            children: "🚪 6. Logout"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-red-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                className: "text-red-700",
                                                                                children: [
                                                                                    "Click ",
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Logout"
                                                                                    }),
                                                                                    " at the bottom of the sidebar to securely exit the admin dashboard."
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "cfs-orders",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-green-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                                        className: "bg-green-50",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(CardTitle, {
                                                                className: "flex items-center text-green-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "📦"
                                                                    }),
                                                                    "📌 How To Use – CHA CFS Services"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-green-700 mt-2",
                                                                children: "Complete step-by-step guide for managing CFS orders and services"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mb-8",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                            children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                src: customerCFSOrdersImage,
                                                                                alt: "Customer CFS Orders Page Interface",
                                                                                className: "w-full h-full object-cover"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-center text-gray-600 mt-2 text-sm",
                                                                            children: [
                                                                                "Customer reaches this page by selecting: ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "CFS → Orders"
                                                                                }),
                                                                                " from the left-hand sidebar"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-blue-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-blue-800 mb-3",
                                                                            children: "🚀 Step 1: Accessing the CFS Orders Page"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-blue-50 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                    className: "text-blue-700 mb-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                            children: "Navigation Path:"
                                                                                        }),
                                                                                        " From the left-hand sidebar, select:"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-white p-3 rounded border-l-4 border-blue-400",
                                                                                    children: /*#__PURE__*/ _jsxs("p", {
                                                                                        className: "font-mono text-blue-800",
                                                                                        children: [
                                                                                            "📦 ",
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "CFS"
                                                                                            }),
                                                                                            " → ",
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "Orders"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                    className: "text-blue-700 mt-3",
                                                                                    children: [
                                                                                        "The ",
                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                            children: '"My Orders"'
                                                                                        }),
                                                                                        " page will load with all CFS orders created by the customer."
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-purple-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-purple-800 mb-3",
                                                                            children: "📊 Step 2: Understanding the Dashboard Stats (Top Section)"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "text-purple-700 mb-4",
                                                                            children: "Quick stats summary for the user's understanding of order statuses:"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid md:grid-cols-2 gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-green-50 p-3 rounded-lg border-l-4 border-green-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-semibold text-green-800",
                                                                                                    children: "✅ Approved"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-green-700",
                                                                                                    children: "Number of CFS orders approved by the service provider"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-semibold text-yellow-800",
                                                                                                    children: "⏳ Pending"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-yellow-700",
                                                                                                    children: "Orders awaiting approval from service provider"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-semibold text-blue-800",
                                                                                                    children: "🔄 In Progress"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-blue-700",
                                                                                                    children: "Orders currently being processed"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-red-50 p-3 rounded-lg border-l-4 border-red-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "font-semibold text-red-800",
                                                                                                    children: "❌ Rejected"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-red-700",
                                                                                                    children: "Orders declined by the service provider"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-indigo-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                                            children: "🔍 Step 3: Searching for Orders"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "space-y-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-indigo-50 p-4 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-medium text-indigo-800 mb-2",
                                                                                            children: "🔎 Search Bar"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-indigo-700 text-sm",
                                                                                            children: [
                                                                                                "Use the ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "Search Bar"
                                                                                                }),
                                                                                                " to find orders by ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "Order ID"
                                                                                                }),
                                                                                                " for quick access."
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-indigo-50 p-4 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-medium text-indigo-800 mb-2",
                                                                                            children: "🎛️ Filters"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-indigo-700 text-sm",
                                                                                            children: "Apply filters to narrow results for faster lookup and better organization."
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-orange-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-orange-800 mb-3",
                                                                            children: "➕ Step 4: Creating a New Order"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-orange-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "space-y-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-center space-x-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                                className: "bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium",
                                                                                                children: "New Order"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-orange-700",
                                                                                                children: [
                                                                                                    "Click the ",
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: '"New Order"'
                                                                                                    }),
                                                                                                    " button (top-right) to initiate a new CFS booking."
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                        className: "text-orange-700 text-sm",
                                                                                        children: "📝 Fill in the required details in the order form to complete your booking."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-teal-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-teal-800 mb-3",
                                                                            children: "📋 Step 5: Viewing and Managing Orders"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-teal-50 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-teal-700 mb-4",
                                                                                    children: "The table shows all CFS orders created by the customer with complete details:"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "grid md:grid-cols-2 gap-4 mb-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "📋 Order ID"
                                                                                                        }),
                                                                                                        " - Unique order identifier"
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "📅 Date"
                                                                                                        }),
                                                                                                        " - Order creation date"
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "👤 Created By"
                                                                                                        }),
                                                                                                        " - Order creator details"
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "🏢 CFS Provider"
                                                                                                        }),
                                                                                                        " - Service provider name"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "📄 IGM Number, Item Number, BL Number"
                                                                                                        }),
                                                                                                        " - Shipping documents"
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "📦 Containers & Consignee Name"
                                                                                                        }),
                                                                                                        " - Container details"
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "🏛️ CHA Name & Order Description"
                                                                                                        }),
                                                                                                        " - Customs details"
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "bg-white p-2 rounded text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                            children: "📊 Status"
                                                                                                        }),
                                                                                                        " - Accepted, Pending, Rejected"
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-teal-400",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-medium text-teal-800 mb-2",
                                                                                            children: "⚡ Actions Column"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-teal-700 text-sm mb-2",
                                                                                            children: "Available actions for each order:"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "grid grid-cols-2 gap-2 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-teal-100 px-2 py-1 rounded",
                                                                                                    children: "✏️ Edit Order"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-teal-100 px-2 py-1 rounded",
                                                                                                    children: "❌ Cancel Order"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-teal-100 px-2 py-1 rounded",
                                                                                                    children: "📥 Download Documentation"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-teal-100 px-2 py-1 rounded",
                                                                                                    children: "💬 Chat with Client"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-red-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-red-800 mb-3",
                                                                            children: "🚪 Step 6: Logging Out"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-red-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                                className: "text-red-700",
                                                                                children: [
                                                                                    "Click ",
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Logout"
                                                                                    }),
                                                                                    " in the bottom-left corner after managing your orders to securely exit the system."
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "new-cfs-order",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-blue-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                                        className: "bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(CardTitle, {
                                                                className: "flex items-center text-blue-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "➕"
                                                                    }),
                                                                    "📦 Creating a New CFS Order – Complete Guide"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-blue-700 mt-2",
                                                                children: "Step-by-step process for creating and submitting new CFS orders"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mb-8",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                            children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                src: newCFSOrderImage,
                                                                                alt: "New CFS Order Creation Form Interface",
                                                                                className: "w-full h-full object-cover"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-center text-gray-600 mt-2 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Feature Location:"
                                                                                }),
                                                                                " Sidebar → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "CFS"
                                                                                }),
                                                                                " → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Order"
                                                                                }),
                                                                                " → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "New Order+"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-green-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-green-800 mb-3",
                                                                            children: "📋 Step 1: Fill in Shipment References"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-green-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid md:grid-cols-2 gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        className: "space-y-3",
                                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-white p-3 rounded-lg border-l-4 border-green-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                                    className: "font-semibold text-green-800",
                                                                                                    children: "📄 Import/Shipping Documents"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                                                    className: "text-sm text-green-700 mt-2 space-y-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxs("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "• IGM Number"
                                                                                                                }),
                                                                                                                " - Import General Manifest reference"
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "• B/L Number"
                                                                                                                }),
                                                                                                                " - Bill of Lading number"
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "• Item Number"
                                                                                                                }),
                                                                                                                " - Specific item reference"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        className: "space-y-3",
                                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-white p-3 rounded-lg border-l-4 border-green-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                                    className: "font-semibold text-green-800",
                                                                                                    children: "👥 Receiver & Clearing Agent"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                                                    className: "text-sm text-green-700 mt-2 space-y-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxs("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "• Consignee Name"
                                                                                                                }),
                                                                                                                " - Cargo receiver details"
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("li", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "• CHA Name"
                                                                                                                }),
                                                                                                                " - Customs House Agent details"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-purple-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-purple-800 mb-3",
                                                                            children: "🚛 Step 2: Enter Logistics Details"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-purple-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid md:grid-cols-2 gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "space-y-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "bg-white p-3 rounded-lg border-l-4 border-purple-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                                        className: "font-semibold text-purple-800",
                                                                                                        children: "🏢 CFS Facility"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-sm text-purple-700 mt-1",
                                                                                                        children: "Select the Container Freight Station for cargo handling"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "bg-white p-3 rounded-lg border-l-4 border-purple-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                                        className: "font-semibold text-purple-800",
                                                                                                        children: "🚢 Shipping Line"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-sm text-purple-700 mt-1",
                                                                                                        children: "Choose from available shipping line options"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "space-y-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "bg-white p-3 rounded-lg border-l-4 border-purple-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                                        className: "font-semibold text-purple-800",
                                                                                                        children: "🚚 DPD/Non-DPD Type"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-sm text-purple-700 mt-1",
                                                                                                        children: "Choose Direct Port Delivery or standard delivery"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "bg-white p-3 rounded-lg border-l-4 border-purple-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                                        className: "font-semibold text-purple-800",
                                                                                                        children: "📦 Cargo Type"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-sm text-purple-700 mt-1",
                                                                                                        children: "Select cargo type from dropdown menu"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-orange-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-orange-800 mb-3",
                                                                            children: "📦 Step 3: Provide Container Information"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-orange-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid md:grid-cols-3 gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-3 rounded-lg border-l-4 border-orange-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                                className: "font-semibold text-orange-800",
                                                                                                children: "📏 Container Size & Type"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-sm text-orange-700 mt-1",
                                                                                                children: "Dimensions and type of container (20ft, 40ft, etc.)"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-3 rounded-lg border-l-4 border-orange-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                                className: "font-semibold text-orange-800",
                                                                                                children: "⏰ ETA"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-sm text-orange-700 mt-1",
                                                                                                children: "Estimated Time of Arrival - Expected cargo arrival date"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-3 rounded-lg border-l-4 border-orange-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                                className: "font-semibold text-orange-800",
                                                                                                children: "🔢 Container Number"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-sm text-orange-700 mt-1",
                                                                                                children: "Unique ID of the container for tracking"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-teal-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-teal-800 mb-3",
                                                                            children: "🚚 Step 4: Set Delivery Details"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-teal-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid md:grid-cols-3 gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-3 rounded-lg border-l-4 border-teal-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                                className: "font-semibold text-teal-800",
                                                                                                children: "📅 From Date / To Date"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-sm text-teal-700 mt-1",
                                                                                                children: "Cargo movement dates and delivery window"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-3 rounded-lg border-l-4 border-teal-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                                className: "font-semibold text-teal-800",
                                                                                                children: "🚛 Delivery Type"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-sm text-teal-700 mt-1",
                                                                                                children: "Mode of delivery - truck, rail, etc."
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-3 rounded-lg border-l-4 border-teal-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                                className: "font-semibold text-teal-800",
                                                                                                children: "📍 Delivery Method"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-sm text-teal-700 mt-1",
                                                                                                children: "Specific delivery method and logistics"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-indigo-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                                            children: "📝 Step 5: Add Order Description & Attachments"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-indigo-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid md:grid-cols-2 gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "space-y-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "bg-white p-3 rounded-lg border-l-4 border-indigo-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                                        className: "font-semibold text-indigo-800",
                                                                                                        children: "📄 Order Description"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-sm text-indigo-700 mt-1",
                                                                                                        children: "Add any special notes, instructions, or requirements"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "bg-white p-3 rounded-lg border-l-4 border-indigo-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                                        className: "font-semibold text-indigo-800",
                                                                                                        children: "📦 Containers"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-sm text-indigo-700 mt-1",
                                                                                                        children: "Enter container IDs if handling multiple containers"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        className: "space-y-3",
                                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-white p-3 rounded-lg border-l-4 border-indigo-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                                    className: "font-semibold text-indigo-800",
                                                                                                    children: "📎 BL Copy Upload"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                    className: "text-sm text-indigo-700 mt-1",
                                                                                                    children: "Upload Bill of Lading and other shipment documents"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-red-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-red-800 mb-3",
                                                                            children: "✅ Step 6: Submit Your Order"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-red-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "space-y-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-4 rounded-lg border-l-4 border-red-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "flex items-center space-x-3 mb-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "bg-red-600 text-white px-4 py-2 rounded font-medium",
                                                                                                        children: "Submit Request"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-red-700 font-medium",
                                                                                                        children: 'Click "Submit Request" at the bottom of the form'
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-sm text-red-700",
                                                                                                children: [
                                                                                                    "📋 ",
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Result:"
                                                                                                    }),
                                                                                                    ' Order appears in the "CFS Orders" list for tracking and management'
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        className: "bg-green-100 p-3 rounded-lg border border-green-300",
                                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "text-green-800 text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "✅ Success!"
                                                                                                }),
                                                                                                " Your CFS order has been submitted and is now available in your orders list for tracking, editing, and communication with the service provider."
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "cfs-pricing-requests",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-yellow-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                                        className: "bg-yellow-50",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(CardTitle, {
                                                                className: "flex items-center text-yellow-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "💰"
                                                                    }),
                                                                    "💰 CFS Pricing Requests – Guide"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-yellow-700 mt-2",
                                                                children: "Complete guide for managing and tracking CFS pricing requests"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mb-8",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                            children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                src: cfsPricingRequestsImage,
                                                                                alt: "CFS Pricing Requests Management Interface",
                                                                                className: "w-full h-full object-cover"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-center text-gray-600 mt-2 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Feature Location:"
                                                                                }),
                                                                                " Sidebar → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "CFS"
                                                                                }),
                                                                                " → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Pricing Requests"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-blue-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-blue-800 mb-3",
                                                                            children: "🔍 Step 1: Access Pricing Requests"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-blue-50 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                    className: "text-blue-700 mb-3",
                                                                                    children: [
                                                                                        "From the left menu, click ",
                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                            children: "CFS → Pricing Requests"
                                                                                        }),
                                                                                        "."
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-semibold text-blue-800 mb-2",
                                                                                            children: "📊 Status Overview"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-blue-700 mb-3",
                                                                                            children: "At the top, you'll see status counts for all your requests:"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "grid md:grid-cols-2 gap-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-center space-x-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-green-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "✓"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                                            className: "text-green-700",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "Approved"
                                                                                                                }),
                                                                                                                " – Requests confirmed by service provider"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-center space-x-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "⏳"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                                            className: "text-yellow-700",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "Pending"
                                                                                                                }),
                                                                                                                " – Awaiting review"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-center space-x-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "🔄"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                                            className: "text-blue-700",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "In Progress"
                                                                                                                }),
                                                                                                                " – Under discussion"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-center space-x-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-red-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "✗"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                                            className: "text-red-700",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: "Rejected"
                                                                                                                }),
                                                                                                                " – Not approved"
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-purple-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-purple-800 mb-3",
                                                                            children: "🔎 Step 2: Search & Filter Requests"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-purple-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "bg-white p-4 rounded-lg border-l-4 border-purple-400",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                                        className: "text-purple-700",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "🗓️ Date Filter:"
                                                                                            }),
                                                                                            " Use the date filter to find requests from specific time periods"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                                        className: "text-purple-700 mt-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "🔍 Search Bar:"
                                                                                            }),
                                                                                            " Find specific pricing requests quickly by typing keywords"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-green-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-green-800 mb-3",
                                                                            children: "📋 Step 3: View Request Details"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "bg-green-50 p-4 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-green-700 mb-4",
                                                                                    children: /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "Each row represents one pricing request you made."
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-green-400",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                                            className: "font-semibold text-green-800 mb-3",
                                                                                            children: "📊 Column Details:"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "grid md:grid-cols-2 gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "space-y-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "📅"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Date"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "When the request was made"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "🏢"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Service Provider"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "CFS terminal name"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "💵"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Preferable Rate"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "Rate you proposed or received"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "🚚"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "DPD / Non-DPD"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "Type of delivery mode"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "space-y-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "📦"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Container Type"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "e.g., General, Mix, ODC/FR/OT"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "📊"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Containers Per Month"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "Estimated volume"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "📈"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Status"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "Accepted / Pending / Rejected"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "💬"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Reason"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "Notes from provider if applicable"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex items-start space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                    className: "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                    children: "⋮"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            className: "text-green-800",
                                                                                                                            children: "Actions"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-700 text-sm",
                                                                                                                            children: "More options (⋮ menu)"
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "border-l-4 border-orange-500 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-orange-800 mb-3",
                                                                            children: "📊 Step 4: Check Status Updates"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "bg-orange-50 p-4 rounded-lg",
                                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                                className: "space-y-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-green-100 p-4 rounded-lg border-l-4 border-green-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "flex items-center space-x-3",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "bg-green-500 text-white px-3 py-1 rounded font-medium",
                                                                                                        children: "✓ Accepted"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-green-800 font-medium",
                                                                                                        children: "Your pricing is approved."
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-green-700 text-sm mt-1",
                                                                                                children: "🎉 Great! The CFS provider has accepted your pricing request and terms."
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "flex items-center space-x-3",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "bg-yellow-500 text-white px-3 py-1 rounded font-medium",
                                                                                                        children: "⏳ Pending"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-yellow-800 font-medium",
                                                                                                        children: "Waiting for CFS provider response."
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-yellow-700 text-sm mt-1",
                                                                                                children: "⏰ Your request is under review. The provider will respond soon."
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-red-100 p-4 rounded-lg border-l-4 border-red-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "flex items-center space-x-3",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "bg-red-500 text-white px-3 py-1 rounded font-medium",
                                                                                                        children: "✗ Rejected"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                                        className: "text-red-800 font-medium",
                                                                                                        children: "Request denied."
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "text-red-700 text-sm mt-1",
                                                                                                children: '📝 Check the "Reason" column for feedback and consider submitting a new request.'
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            id: "new-service-request",
                                            className: "mb-12",
                                            children: /*#__PURE__*/ _jsxs(Card, {
                                                className: "border-2 border-indigo-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                                        className: "bg-indigo-50",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(CardTitle, {
                                                                className: "flex items-center text-indigo-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                                        children: "🛠️"
                                                                    }),
                                                                    "How to Create a New Service Request"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-indigo-700 mt-2",
                                                                children: "Submit additional services linked to existing orders efficiently"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(CardContent, {
                                                        className: "p-6",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h4", {
                                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                                            children: "📋 Introduction"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-indigo-700 leading-relaxed",
                                                                            children: [
                                                                                "Use the ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "New Request form"
                                                                                }),
                                                                                " to submit additional services linked to an existing order, such as ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "EIR Copy"
                                                                                }),
                                                                                ", ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Proforma Invoice"
                                                                                }),
                                                                                ", or ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Priority Movements"
                                                                                }),
                                                                                ". This helps our operations team process your requests efficiently."
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mb-8",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("div", {
                                                                            className: "h-[600px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                                            children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                                src: newServiceRequestImage,
                                                                                alt: "New Service Request Form Interface",
                                                                                className: "w-full h-full object-cover"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-center text-gray-600 mt-2 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Navigation Path:"
                                                                                }),
                                                                                " Sidebar → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "CFS"
                                                                                }),
                                                                                " → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Service Requests"
                                                                                }),
                                                                                " → ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "New Request"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "border-l-4 border-blue-500 pl-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "text-lg font-semibold text-blue-800 mb-3",
                                                                                    children: "🧭 Step 1: Navigate to New Request"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-blue-50 p-4 rounded-lg",
                                                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                                className: "text-blue-700",
                                                                                                children: [
                                                                                                    "From the sidebar menu, go to ",
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "CFS → Service Requests → New Request"
                                                                                                    }),
                                                                                                    "."
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "mt-3 flex items-center space-x-2 text-sm text-blue-600",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "bg-blue-100 px-2 py-1 rounded",
                                                                                                        children: "📍"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        children: "Sidebar → CFS → Service Requests → New Request"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "border-l-4 border-green-500 pl-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "text-lg font-semibold text-green-800 mb-3",
                                                                                    children: "📝 Step 2: Fill in the Request Details"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-green-50 p-4 rounded-lg",
                                                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "space-y-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                                className: "bg-white p-4 rounded-lg border-l-4 border-red-400",
                                                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-start space-x-3",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-red-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "Required"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                                                    className: "font-semibold text-green-800 mb-2",
                                                                                                                    children: "🆔 Order ID"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                                                    className: "text-green-700",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            children: "Enter the ID of the order"
                                                                                                                        }),
                                                                                                                        " you want this request linked to."
                                                                                                                    ]
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                                                    className: "mt-2 bg-red-50 p-3 rounded border",
                                                                                                                    children: /*#__PURE__*/ _jsxs("p", {
                                                                                                                        className: "text-red-700 text-sm",
                                                                                                                        children: [
                                                                                                                            "⚠️ ",
                                                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                                                children: "Mandatory Field:"
                                                                                                                            }),
                                                                                                                            " Input a mandatory Order ID to associate the request with a specific order"
                                                                                                                        ]
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                                className: "bg-white p-4 rounded-lg border-l-4 border-red-400",
                                                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-start space-x-3",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-red-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "Required"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                                                    className: "font-semibold text-green-800 mb-2",
                                                                                                                    children: "🔧 Service Type"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                                                    className: "text-green-700 mb-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            children: "Select the appropriate service"
                                                                                                                        }),
                                                                                                                        " from the dropdown list."
                                                                                                                    ]
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                                                    className: "mt-2 bg-red-50 p-3 rounded border",
                                                                                                                    children: /*#__PURE__*/ _jsxs("p", {
                                                                                                                        className: "text-red-700 text-sm",
                                                                                                                        children: [
                                                                                                                            "⚠️ ",
                                                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                                                children: "Mandatory Field:"
                                                                                                                            }),
                                                                                                                            " Choose a required service type from a dropdown menu to categorize the request"
                                                                                                                        ]
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    className: "mt-3 bg-green-100 p-3 rounded",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                                                            className: "text-green-800 text-sm font-medium mb-2",
                                                                                                                            children: "📋 Common Service Types:"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                                            className: "grid md:grid-cols-2 gap-2 text-sm",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                                    className: "flex items-center space-x-2",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                                                                                                                        }),
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "text-green-700",
                                                                                                                                            children: "EIR Copy"
                                                                                                                                        })
                                                                                                                                    ]
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                                    className: "flex items-center space-x-2",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                                                                                                                        }),
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "text-green-700",
                                                                                                                                            children: "Proforma Invoice"
                                                                                                                                        })
                                                                                                                                    ]
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                                    className: "flex items-center space-x-2",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                                                                                                                        }),
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "text-green-700",
                                                                                                                                            children: "Priority Movements"
                                                                                                                                        })
                                                                                                                                    ]
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                                    className: "flex items-center space-x-2",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                                                                                                                        }),
                                                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                                                            className: "text-green-700",
                                                                                                                                            children: "Other Services"
                                                                                                                                        })
                                                                                                                                    ]
                                                                                                                                })
                                                                                                                            ]
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                                className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex items-start space-x-3",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                                            className: "bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                            children: "Optional"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "flex-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                                                    className: "font-semibold text-green-800 mb-2",
                                                                                                                    children: "💬 Remarks"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                                                    className: "text-green-700",
                                                                                                                    children: [
                                                                                                                        "Add any ",
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            children: "notes or instructions"
                                                                                                                        }),
                                                                                                                        " for the operations team."
                                                                                                                    ]
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                                                    className: "mt-2 bg-blue-50 p-3 rounded border",
                                                                                                                    children: /*#__PURE__*/ _jsxs("p", {
                                                                                                                        className: "text-blue-700 text-sm",
                                                                                                                        children: [
                                                                                                                            "💡 ",
                                                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                                                children: "Helpful Tip:"
                                                                                                                            }),
                                                                                                                            " Include specific details, deadlines, or special requirements"
                                                                                                                        ]
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "border-l-4 border-orange-500 pl-6",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h4", {
                                                                                    className: "text-lg font-semibold text-orange-800 mb-3",
                                                                                    children: "🚀 Step 3: Submit the Request"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-orange-50 p-4 rounded-lg",
                                                                                    children: /*#__PURE__*/ _jsx("div", {
                                                                                        className: "bg-white p-4 rounded-lg border-l-4 border-orange-400",
                                                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "flex items-start space-x-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium",
                                                                                                    children: "✅"
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                    className: "flex-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                                                            className: "text-orange-700 mb-4",
                                                                                                            children: [
                                                                                                                "Click the ",
                                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                                    children: '"Request"'
                                                                                                                }),
                                                                                                                " button to send it for processing."
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                            className: "bg-orange-100 p-4 rounded",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                                                    className: "text-orange-800 font-medium mb-2",
                                                                                                                    children: "📊 After Submission:"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("p", {
                                                                                                                    className: "text-orange-700 text-sm",
                                                                                                                    children: [
                                                                                                                        "Your request will now appear in the ",
                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                            children: "Service Requests list"
                                                                                                                        }),
                                                                                                                        " with a status of:"
                                                                                                                    ]
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                                                    className: "mt-3 space-y-2",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                                            className: "flex items-center space-x-3",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                                    className: "bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                                    children: "⏳"
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                                                    className: "text-orange-700 text-sm",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                                            children: "Pending"
                                                                                                                                        }),
                                                                                                                                        " - Awaiting review"
                                                                                                                                    ]
                                                                                                                                })
                                                                                                                            ]
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                                            className: "flex items-center space-x-3",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                                    className: "bg-green-500 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                                    children: "✓"
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                                                    className: "text-orange-700 text-sm",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                                            children: "Accepted"
                                                                                                                                        }),
                                                                                                                                        " - Request approved"
                                                                                                                                    ]
                                                                                                                                })
                                                                                                                            ]
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                                                            className: "flex items-center space-x-3",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                                                    className: "bg-red-500 text-white px-2 py-1 rounded text-xs font-medium",
                                                                                                                                    children: "✗"
                                                                                                                                }),
                                                                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                                                                    className: "text-orange-700 text-sm",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                                                                            children: "Rejected"
                                                                                                                                        }),
                                                                                                                                        " - Request denied"
                                                                                                                                    ]
                                                                                                                                })
                                                                                                                            ]
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "eir-copy",
                        className: "mb-12",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "border-2 border-cyan-200",
                            children: [
                                /*#__PURE__*/ _jsxs(CardHeader, {
                                    className: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white",
                                    children: [
                                        /*#__PURE__*/ _jsxs(CardTitle, {
                                            className: "flex items-center text-white",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                    children: "E"
                                                }),
                                                "How to Request an EIR Copy CFS Services"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-blue-100 mt-2",
                                            children: "The EIR Copy feature lets customers request a digital copy of the Equipment Interchange Receipt for their containers, directly from the platform."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(CardContent, {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "h-[700px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                    children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                        src: eirCopyNewRequestImage,
                                                        alt: "EIR Copy Request Page Interface",
                                                        className: "w-auto h- object-cover"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "text-center text-gray-600 mt-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "Feature Location:"
                                                        }),
                                                        " Sidebar → ",
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "CFS"
                                                        }),
                                                        " → ",
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "EIR Copy"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "space-y-8",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-blue-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-blue-800 mb-3",
                                                            children: "Step 1 – Open EIR Copy Page"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "bg-blue-50 p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("p", {
                                                                    className: "text-blue-800",
                                                                    children: [
                                                                        "From the ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "left sidebar menu"
                                                                        }),
                                                                        ", go to: ",
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "font-mono bg-white px-2 py-1 rounded border ml-1",
                                                                            children: "CFS → EIR Copy"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-blue-800 mt-3 font-medium",
                                                                    children: "Top section shows a status summary:"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "inline-flex items-center justify-center rounded-full bg-green-100 text-green-800 px-3 py-1 text-sm font-medium",
                                                                            children: "✅ Approved"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-medium",
                                                                            children: "⏳ Pending"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium",
                                                                            children: "🔄 In Progress"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "inline-flex items-center justify-center rounded-full bg-red-100 text-red-800 px-3 py-1 text-sm font-medium",
                                                                            children: "❌ Rejected"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-indigo-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                            children: "Step 2 – View All Past Requests"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "bg-indigo-50 p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-indigo-800 mb-3",
                                                                    children: "Below the summary is a table listing all past EIR Copy requests with details like:"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "grid md:grid-cols-2 gap-2 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Request ID"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Date & Time"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Created By"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Order ID"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Remarks"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Reason"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Service Type"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Uploaded Files"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Status"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-white px-3 py-2 rounded border",
                                                                            children: "Actions"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-green-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-green-800 mb-3",
                                                            children: "Step 3 – Create a New Request"
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "h-[700px] w-auto bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                            children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                                src: eirCopyPageImage,
                                                                alt: "EIR Copy Request Page Interface",
                                                                className: "w-auto h- object-cover"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "bg-green-50 p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "text-green-800",
                                                                            children: [
                                                                                "Click the ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "New Request"
                                                                                }),
                                                                                " button (top right)."
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsx(Button, {
                                                                            size: "sm",
                                                                            className: "bg-green-600 hover:bg-green-700 text-white",
                                                                            children: "New Request"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mt-4 space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-white rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(FileText, {
                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: "1. Order ID"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-green-700 text-sm",
                                                                                            children: "Container-related Order ID for which you want the EIR copy"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-white rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: "2. Remarks"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-green-700 text-sm",
                                                                                            children: "Optional notes or urgent instructions (e.g., “Need urgently”)"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-white rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Upload, {
                                                                                    className: "w-5 h-5 mr-3 text-green-600"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: "3. Upload Documents"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-green-700 text-sm",
                                                                                            children: "Attach supporting files if required"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "mt-4",
                                                                    children: /*#__PURE__*/ _jsx(Button, {
                                                                        className: "w-full sm:w-auto",
                                                                        children: "Request"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        "≈"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-emerald-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-emerald-800 mb-3",
                                                            children: "Step 4 – Track Your Request"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "bg-emerald-50 p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-emerald-800",
                                                                    children: "Once submitted, the request will appear in the table with its current status. Statuses automatically update as your request progresses."
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-green-100 text-green-800 px-2 py-1 rounded inline-flex items-center justify-center",
                                                                            children: "✓ Accepted"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-yellow-100 text-yellow-800 px-2 py-1 rounded inline-flex items-center justify-center",
                                                                            children: "⏳ Pending"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-blue-100 text-blue-800 px-2 py-1 rounded inline-flex items-center justify-center",
                                                                            children: "🔄 In Progress"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "bg-red-100 text-red-800 px-2 py-1 rounded inline-flex items-center justify-center",
                                                                            children: "✗ Rejected"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "track-trace",
                        className: "mb-12",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "border-2 border-teal-200",
                            children: [
                                /*#__PURE__*/ _jsxs(CardHeader, {
                                    className: "bg-teal-50",
                                    children: [
                                        /*#__PURE__*/ _jsxs(CardTitle, {
                                            className: "flex items-center text-teal-800",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                    children: "T"
                                                }),
                                                "🚚 Track & Trace CFS Services"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-teal-700 mt-2",
                                            children: "This feature allows customers to track the status and progress of their shipping containers in real time."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(CardContent, {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "h-[670px] w-[] bg-gray-100 rounded-lg overflow-hidden shadow-inner",
                                                    children: /*#__PURE__*/ _jsx(ImageWithFallback, {
                                                        src: trackTraceImage,
                                                        alt: "Track & Trace - Container Status Tracking Interface",
                                                        className: "w-full h-full object-cover"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "text-center text-gray-600 mt-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "Feature Location:"
                                                        }),
                                                        " Sidebar → ",
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "CFS"
                                                        }),
                                                        " → ",
                                                        /*#__PURE__*/ _jsx("strong", {
                                                            children: "Track & Trace"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-blue-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-blue-800 mb-3",
                                                            children: "1. Accessing the Feature"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-gray-700",
                                                            children: [
                                                                "From the sidebar menu, go to ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "CFS → Track & Trace"
                                                                }),
                                                                "."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-indigo-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-indigo-800 mb-3",
                                                            children: "2. Entering Container Details"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("ul", {
                                                            className: "list-disc list-inside text-gray-700 ml-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("li", {
                                                                    children: [
                                                                        "Enter the ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "Container Number"
                                                                        }),
                                                                        " (e.g., CON-93590729951) and ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "Order ID"
                                                                        }),
                                                                        "."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("li", {
                                                                    children: [
                                                                        "Click ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "Track Status"
                                                                        }),
                                                                        " to fetch the latest update."
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-purple-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-purple-800 mb-3",
                                                            children: "3. Viewing Order Details"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-gray-700",
                                                            children: [
                                                                "See shipment information like ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "Order ID"
                                                                }),
                                                                ", ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "BL No."
                                                                }),
                                                                ", ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "CFS Facility"
                                                                }),
                                                                ", ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "Consignee Name"
                                                                }),
                                                                ", ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "IGM No."
                                                                }),
                                                                ", ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "Item No."
                                                                }),
                                                                ", ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "Current Movement Status"
                                                                }),
                                                                ", and ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "CHA Name"
                                                                }),
                                                                "."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "border-l-4 border-green-500 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "text-lg font-semibold text-green-800 mb-3",
                                                            children: "4. Shipment Progress"
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-gray-700",
                                                            children: "Track milestones like discharge, release dates, and other key movement updates."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "proforma-invoice",
                        className: "mb-12"
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "border-2 border-emerald-200",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "bg-gradient-to-r from-emerald-600 to-green-600 text-white",
                                children: [
                                    /*#__PURE__*/ _jsxs(CardTitle, {
                                        className: "flex items-center text-white",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                children: "P"
                                            }),
                                            "How to Use Proforma Invoice – CFS Services"
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-emerald-100 mt-2",
                                        children: "The Proforma Invoice feature allows customers and CHA to request and manage proforma invoices quickly, track their status, and view all past requests."
                                    }),
                                    /*#__PURE__*/ _jsx(ImageWithFallback, {
                                        src: Proformainvoiceimage,
                                        alt: "Proforma Invoice Request page",
                                        className: "w-full h-full object-cover"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(CardContent, {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "space-y-8",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "border-l-4 border-emerald-500 pl-6",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "text-lg font-semibold text-emerald-800 mb-3",
                                                    children: "📂 Step 1 – Open Proforma Invoice Page"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "bg-emerald-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            className: "text-emerald-800 mb-2",
                                                            children: [
                                                                "From the ",
                                                                /*#__PURE__*/ _jsx("strong", {
                                                                    children: "left sidebar menu"
                                                                }),
                                                                ", go to:"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-white p-3 rounded border-l-4 border-emerald-400",
                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                className: "font-mono text-emerald-800",
                                                                children: [
                                                                    "📦 ",
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "CFS"
                                                                    }),
                                                                    " → ",
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "Proforma Invoice"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "border-l-4 border-blue-500 pl-6",
                                        children: [
                                            /*#__PURE__*/ _jsx("h4", {
                                                className: "text-lg font-semibold text-blue-800 mb-3",
                                                children: "📊 Step 2 – View Request Summary"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-blue-50 p-4 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        className: "text-blue-800 mb-3",
                                                        children: [
                                                            "At the top, you'll see a ",
                                                            /*#__PURE__*/ _jsx("strong", {
                                                                children: "status summary"
                                                            }),
                                                            " with the count of requests in:"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-green-100 text-green-800 px-3 py-2 rounded text-center font-medium",
                                                                children: "✅ Approved"
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-yellow-100 text-yellow-800 px-3 py-2 rounded text-center font-medium",
                                                                children: "⏳ Pending"
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-blue-100 text-blue-800 px-3 py-2 rounded text-center font-medium",
                                                                children: "🔄 In Progress"
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-red-100 text-red-800 px-3 py-2 rounded text-center font-medium",
                                                                children: "❌ Rejected"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "border-l-4 border-purple-500 pl-6",
                                        children: [
                                            /*#__PURE__*/ _jsx("h4", {
                                                className: "text-lg font-semibold text-purple-800 mb-3",
                                                children: "➕ Step 3 – Create a New Request"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "bg-purple-50 p-4 rounded-lg",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("span", {
                                                                    className: "text-purple-800",
                                                                    children: [
                                                                        "Click the ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "New Request"
                                                                        }),
                                                                        " button."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx(Button, {
                                                                    size: "sm",
                                                                    className: "bg-purple-600 hover:bg-purple-700 text-white",
                                                                    children: "New Request"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "bg-white p-4 rounded-lg border-l-4 border-purple-400",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h5", {
                                                                    className: "font-semibold text-purple-800 mb-3",
                                                                    children: "Fill in the required details:"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-purple-50 rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(FileText, {
                                                                                    className: "w-5 h-5 mr-3 text-purple-600 mt-0.5"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-purple-900",
                                                                                            children: "Order ID"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-purple-700 text-sm",
                                                                                            children: "Enter the Order ID for which you need the proforma invoice"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-purple-50 rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                    className: "w-5 h-5 mr-3 text-purple-600 mt-0.5"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-purple-900",
                                                                                            children: "Remarks"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-purple-700 text-sm",
                                                                                            children: "Add any special notes or instructions"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-purple-50 rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Building2, {
                                                                                    className: "w-5 h-5 mr-3 text-purple-600 mt-0.5"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-purple-900",
                                                                                            children: "Reason"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-purple-700 text-sm",
                                                                                            children: "Specify the reason for requesting the proforma invoice"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-start p-3 bg-purple-50 rounded border",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Upload, {
                                                                                    className: "w-5 h-5 mr-3 text-purple-600 mt-0.5"
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-purple-900",
                                                                                            children: "Upload Supporting Files"
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-purple-700 text-sm",
                                                                                            children: "Attach any supporting documents (optional)"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "bg-white p-3 rounded border-l-4 border-green-400",
                                                            children: /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-green-800",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "✅ Result:"
                                                                    }),
                                                                    " Your request will appear in the list with a ",
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "Pending"
                                                                    }),
                                                                    " status."
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "border-l-4 border-orange-500 pl-6",
                                        children: [
                                            /*#__PURE__*/ _jsx("h4", {
                                                className: "text-lg font-semibold text-orange-800 mb-3",
                                                children: "📋 Step 4 – Manage & Track Requests"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-orange-50 p-4 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("p", {
                                                        className: "text-orange-800 mb-4",
                                                        children: [
                                                            "Below the summary, you'll find a ",
                                                            /*#__PURE__*/ _jsx("strong", {
                                                                children: "detailed table"
                                                            }),
                                                            " showing:"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "grid md:grid-cols-2 gap-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-white p-3 rounded border-l-4 border-orange-400",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-orange-900",
                                                                                children: "📋 Request ID, Date & Time"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-orange-700 text-sm",
                                                                                children: "Unique identifier and submission timestamp"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-white p-3 rounded border-l-4 border-orange-400",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-orange-900",
                                                                                children: "🆔 Order ID"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-orange-700 text-sm",
                                                                                children: "Order linked to the request"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-white p-3 rounded border-l-4 border-orange-400",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-orange-900",
                                                                                children: "💬 Customer Remarks & Reason"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-orange-700 text-sm",
                                                                                children: "Your notes and justification for the request"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-white p-3 rounded border-l-4 border-orange-400",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-orange-900",
                                                                                children: "📎 Uploaded Files"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-orange-700 text-sm",
                                                                                children: "Supporting documents (if any)"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-white p-3 rounded border-l-4 border-orange-400",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-orange-900",
                                                                                children: "📊 Status"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-orange-700 text-sm",
                                                                                children: "Approved, In Progress, Pending, Rejected"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "bg-white p-3 rounded border-l-4 border-orange-400",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "font-medium text-orange-900",
                                                                                children: "🔍 Search Bar"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-orange-700 text-sm",
                                                                                children: "Find specific requests quickly"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-white p-4 rounded-lg border border-orange-200",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-center space-x-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx(Search, {
                                                                        className: "w-5 h-5 text-orange-600"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "font-medium text-orange-900",
                                                                        children: "Quick Search"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-orange-700 text-sm",
                                                                children: [
                                                                    "Use the ",
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "search bar"
                                                                    }),
                                                                    " to find specific requests by Request ID, Order ID, or other details."
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "priority-movement",
                        className: "mb-12",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "border-2 border-red-200",
                            children: [
                                /*#__PURE__*/ _jsxs(CardHeader, {
                                    className: "bg-gradient-to-r from-red-600 to-pink-600 text-white",
                                    children: [
                                        /*#__PURE__*/ _jsxs(CardTitle, {
                                            className: "flex items-center text-white",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                    children: "⚡"
                                                }),
                                                "Priority Movement – CFS Services User Guide"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-red-100 mt-2",
                                            children: "The Priority Movements feature allows CHAs (Customs House Agents) to submit urgent cargo movement requests, track their status, and manage them efficiently through the CFS portal."
                                        }),
                                        /*#__PURE__*/ _jsx(ImageWithFallback, {
                                            src: prioritymovementImage,
                                            alt: "Priority Movement Request Interface",
                                            className: "w-full h-full object-cover"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(CardContent, {
                                    className: "p-6",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-red-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-red-800 mb-3",
                                                        children: "🚀 Accessing the Priority Movements Page"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-red-50 p-4 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-red-800 mb-2",
                                                                children: [
                                                                    "From the ",
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "left-hand sidebar menu"
                                                                    }),
                                                                    ", navigate to:"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-white p-3 rounded border-l-4 border-red-400",
                                                                children: /*#__PURE__*/ _jsxs("p", {
                                                                    className: "font-mono text-red-800",
                                                                    children: [
                                                                        "📦 ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "CFS"
                                                                        }),
                                                                        " → ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "Priority Movements"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-blue-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-blue-800 mb-3",
                                                        children: "📊 Understanding the Dashboard Layout"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "bg-blue-50 p-4 rounded-lg",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                            className: "font-semibold text-blue-800 mb-3",
                                                                            children: "📈 Quick Status Summary (Top Section)"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "text-blue-700 mb-3",
                                                                            children: "Displays the count of requests in each status:"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-green-100 text-green-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: [
                                                                                        "✅ Approved",
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-xs mt-1",
                                                                                            children: "Requests that have been processed and confirmed"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-yellow-100 text-yellow-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: [
                                                                                        "⏳ Pending",
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-xs mt-1",
                                                                                            children: "Requests awaiting review/approval"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-blue-100 text-blue-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: [
                                                                                        "🔄 In Progress",
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-xs mt-1",
                                                                                            children: "Requests currently being actioned"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "bg-red-100 text-red-800 px-3 py-2 rounded text-center font-medium",
                                                                                    children: [
                                                                                        "❌ Rejected",
                                                                                        /*#__PURE__*/ _jsx("p", {
                                                                                            className: "text-xs mt-1",
                                                                                            children: "Requests that have been declined"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-green-400",
                                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                                        className: "font-semibold text-green-800 mb-2",
                                                                                        children: "➕ New Request Button"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("p", {
                                                                                        className: "text-green-700 text-sm",
                                                                                        children: "Located at the top-right of the page. Used to submit a new Priority Movement request."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsx(Button, {
                                                                                size: "sm",
                                                                                className: "bg-green-600 hover:bg-green-700 text-white",
                                                                                children: "New Request"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-purple-400",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("h5", {
                                                                            className: "font-semibold text-purple-800 mb-3",
                                                                            children: "📋 Requests Table (Bottom Section)"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "text-purple-700 mb-3",
                                                                            children: "Shows all past and current requests with details:"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid md:grid-cols-2 gap-3 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📋 Request ID"
                                                                                                }),
                                                                                                " – Unique system-generated ID for tracking"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📅 Date & Time"
                                                                                                }),
                                                                                                " – When the request was submitted"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "👤 Created By"
                                                                                                }),
                                                                                                " – The logged-in user who submitted the request"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "🆔 Order ID"
                                                                                                }),
                                                                                                " – Related order reference number"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "💬 Customer Remarks"
                                                                                                }),
                                                                                                " – Any notes entered by the requester"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📝 Reason"
                                                                                                }),
                                                                                                " – Purpose for requesting priority handling"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "🔧 Service Type"
                                                                                                }),
                                                                                                ' – Always listed as "Priority Movements"'
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📎 Uploaded Files"
                                                                                                }),
                                                                                                " – Number and type of files uploaded"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "📊 Status"
                                                                                                }),
                                                                                                " – Current progress of the request"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "bg-purple-50 p-2 rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "⚡ Actions"
                                                                                                }),
                                                                                                " – Options to view or manage the request"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-green-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-green-800 mb-3",
                                                        children: "➕ How to Create a New Priority Movement Request"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "bg-green-50 p-4 rounded-lg",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "space-y-4",
                                                            children: /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-green-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                        className: "font-semibold text-green-800 mb-3",
                                                                        children: "📝 Step-by-Step Process:"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "flex items-start p-3 bg-green-50 rounded border",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                                        children: "1"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        children: /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: "Click the New Request button"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "flex items-start p-3 bg-green-50 rounded border",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                                        children: "2"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                                className: "font-medium text-green-900",
                                                                                                children: "Fill in the required fields:"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("ul", {
                                                                                                className: "text-green-700 text-sm mt-2 ml-4 space-y-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsxs("li", {
                                                                                                        children: [
                                                                                                            "• ",
                                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                                children: "Order ID"
                                                                                                            }),
                                                                                                            " (mandatory)"
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsxs("li", {
                                                                                                        children: [
                                                                                                            "• ",
                                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                                children: "Customer Remarks"
                                                                                                            }),
                                                                                                            " (optional, for notes)"
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ _jsxs("li", {
                                                                                                        children: [
                                                                                                            "• ",
                                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                                children: "Reason"
                                                                                                            }),
                                                                                                            " (mandatory – why priority is required)"
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "flex items-start p-3 bg-green-50 rounded border",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                                        children: "3"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        children: /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: "Upload supporting files (if needed)"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "flex items-start p-3 bg-green-50 rounded border",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                                        children: "4"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        children: /*#__PURE__*/ _jsx("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: "Submit the request"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "flex items-start p-3 bg-green-50 rounded border",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                                        children: "5"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx("div", {
                                                                                        children: /*#__PURE__*/ _jsxs("p", {
                                                                                            className: "font-medium text-green-900",
                                                                                            children: [
                                                                                                "Once submitted, the request will appear in the list with a ",
                                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                                    children: "Pending"
                                                                                                }),
                                                                                                " status until processed by the CFS team"
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-orange-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-orange-800 mb-3",
                                                        children: "📈 Tracking and Managing Requests"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "bg-orange-50 p-4 rounded-lg",
                                                        children: /*#__PURE__*/ _jsxs("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-orange-400",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center space-x-2 mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Search, {
                                                                                    className: "w-5 h-5 text-orange-600"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                    className: "font-semibold text-orange-800",
                                                                                    children: "Search Functionality"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-orange-700 text-sm",
                                                                            children: [
                                                                                "Use the ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Search Bar"
                                                                                }),
                                                                                " above the table to quickly find specific requests by Request ID, Order ID, or Remarks."
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center space-x-2 mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Eye, {
                                                                                    className: "w-5 h-5 text-blue-600"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                    className: "font-semibold text-blue-800",
                                                                                    children: "Status Monitoring"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-blue-700 text-sm mb-3",
                                                                            children: [
                                                                                "Monitor the ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Status"
                                                                                }),
                                                                                " column to see if your request is:"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "bg-green-100 text-green-800 px-2 py-1 rounded text-center",
                                                                                    children: "✅ Approved"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-center",
                                                                                    children: "⏳ Pending"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-center",
                                                                                    children: "🔄 In Progress"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "bg-red-100 text-red-800 px-2 py-1 rounded text-center",
                                                                                    children: "❌ Rejected"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "bg-white p-4 rounded-lg border-l-4 border-purple-400",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "flex items-center space-x-2 mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                    className: "w-5 h-5 text-purple-600"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                    className: "font-semibold text-purple-800",
                                                                                    children: "Actions Menu"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("p", {
                                                                            className: "text-purple-700 text-sm mb-3",
                                                                            children: [
                                                                                "Click the ",
                                                                                /*#__PURE__*/ _jsx("strong", {
                                                                                    children: "Actions menu"
                                                                                }),
                                                                                " (three dots) to:"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-purple-50 p-2 rounded text-center",
                                                                                    children: "👁️ View request details"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-purple-50 p-2 rounded text-center",
                                                                                    children: "🗑️ Delete Request"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "bg-purple-50 p-2 rounded text-center",
                                                                                    children: "📥 Download Zip"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 p-6 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center space-x-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(CheckCircle, {
                                                                className: "w-8 h-8 text-green-600"
                                                            }),
                                                            /*#__PURE__*/ _jsx("h4", {
                                                                className: "font-bold text-green-900 text-lg",
                                                                children: "🎉 Priority Movement Request Complete!"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-green-800",
                                                        children: "You now know how to submit urgent cargo movement requests, track their progress, and manage them efficiently."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Separator, {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "weighment-slip",
                        className: "mb-12",
                        children: /*#__PURE__*/ _jsxs(Card, {
                            className: "border-2 border-sky-200",
                            children: [
                                /*#__PURE__*/ _jsxs(CardHeader, {
                                    className: "bg-gradient-to-r from-sky-600 to-blue-600 text-white",
                                    children: [
                                        /*#__PURE__*/ _jsxs(CardTitle, {
                                            className: "flex items-center text-white",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold",
                                                    children: "W"
                                                }),
                                                "Weighment Slip Requests – CFS Services User Guide"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            className: "text-blue-100 mt-2",
                                            children: [
                                                "The ",
                                                /*#__PURE__*/ _jsx("strong", {
                                                    children: "Weighment Slip"
                                                }),
                                                " feature allows CHAs (Customs House Agents) to request official weighment slips for cargo and track the progress of these requests to CFS."
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(ImageWithFallback, {
                                            src: weightmentslipImage,
                                            alt: "Priority Movement Request Interface",
                                            className: "w-full h-full object-cover"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(CardContent, {
                                    className: "p-6",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-sky-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-sky-800 mb-3",
                                                        children: "🧭 Accessing the Weighment Slip Page"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-sky-50 p-4 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-sky-800 mb-2",
                                                                children: [
                                                                    "From the ",
                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                        children: "left-hand sidebar menu"
                                                                    }),
                                                                    ", navigate to:"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-white p-3 rounded border-l-4 border-sky-400",
                                                                children: /*#__PURE__*/ _jsxs("p", {
                                                                    className: "font-mono text-sky-800",
                                                                    children: [
                                                                        "📦 ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "CFS"
                                                                        }),
                                                                        " → ",
                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                            children: "Weighment Slip"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-blue-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-blue-800 mb-3",
                                                        children: "📊 Understanding the Dashboard Layout"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-blue-50 p-4 rounded-lg space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                        className: "font-semibold text-blue-800 mb-2",
                                                                        children: "📈 Quick Status Summary (Top Section)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-blue-700 mb-3",
                                                                        children: "Displays a visual count of all requests by status:"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-green-100 text-green-800 px-3 py-2 rounded text-center font-medium",
                                                                                children: "✅ Approved"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-yellow-100 text-yellow-800 px-3 py-2 rounded text-center font-medium",
                                                                                children: "⏳ Pending"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-blue-100 text-blue-800 px-3 py-2 rounded text-center font-medium",
                                                                                children: "🔄 In Progress"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-red-100 text-red-800 px-3 py-2 rounded text-center font-medium",
                                                                                children: "❌ Rejected"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-green-400",
                                                                children: /*#__PURE__*/ _jsxs("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("h5", {
                                                                                    className: "font-semibold text-green-800 mb-1",
                                                                                    children: "➕ New Request Button"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "text-green-700 text-sm",
                                                                                    children: "Found at the top-right. Use it to submit a fresh weighment slip request."
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsx(Button, {
                                                                            size: "sm",
                                                                            className: "bg-green-600 hover:bg-green-700 text-white",
                                                                            children: "New Request"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-indigo-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center space-x-2 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(Search, {
                                                                                className: "w-5 h-5 text-indigo-600"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                className: "font-semibold text-indigo-800",
                                                                                children: "🔎 Search Bar"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-indigo-700 text-sm",
                                                                        children: [
                                                                            "Quickly find a request using ",
                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                children: "Order ID"
                                                                            }),
                                                                            " or other keywords."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-purple-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h5", {
                                                                        className: "font-semibold text-purple-800 mb-2",
                                                                        children: "📋 Requests Table (Bottom Section)"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-purple-700 mb-3",
                                                                        children: "Lists all current and past requests with these details:"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "grid md:grid-cols-2 gap-3 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "🆔 Request ID"
                                                                                            }),
                                                                                            " – Unique identifier for tracking"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "📅 Date & Time"
                                                                                            }),
                                                                                            " – When the request was created"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "👤 Created By"
                                                                                            }),
                                                                                            " – User who submitted the request"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "🧾 Order ID"
                                                                                            }),
                                                                                            " – Related order reference number"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "💬 Customer Remarks"
                                                                                            }),
                                                                                            " – Additional notes from the requester"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "📝 Reason"
                                                                                            }),
                                                                                            " – Reason for requesting the weighment slip"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "🔧 Service Type"
                                                                                            }),
                                                                                            " – “Weighment Slip” for this feature"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "📎 Uploaded Files"
                                                                                            }),
                                                                                            " – Supporting documents attached (if any)"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "📊 Status"
                                                                                            }),
                                                                                            " – Current stage of the request"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "bg-purple-50 p-2 rounded",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                                children: "⚡ Actions"
                                                                                            }),
                                                                                            " – Options to view or manage the request"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-emerald-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-emerald-800 mb-3",
                                                        children: "📝 How to Create a New Weighment Slip Request"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-emerald-50 p-4 rounded-lg space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start p-3 bg-white rounded border",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                        children: "1"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-emerald-800",
                                                                        children: [
                                                                            "Click the ",
                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                children: "New Request"
                                                                            }),
                                                                            " button."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start p-3 bg-white rounded border",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                        children: "2"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-emerald-800 font-medium mb-2",
                                                                                children: "Fill in the required fields:"
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "grid md:grid-cols-2 gap-2 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-start p-2 bg-emerald-50 rounded border",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(FileText, {
                                                                                                className: "w-4 h-4 mr-2 text-emerald-600 mt-0.5"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Order ID"
                                                                                                    }),
                                                                                                    " (mandatory)"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-start p-2 bg-emerald-50 rounded border",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                                className: "w-4 h-4 mr-2 text-emerald-600 mt-0.5"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Customer Remarks"
                                                                                                    }),
                                                                                                    " (optional)"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                                        className: "flex items-start p-2 bg-emerald-50 rounded border",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx(FileText, {
                                                                                                className: "w-4 h-4 mr-2 text-emerald-600 mt-0.5"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                                        children: "Reason"
                                                                                                    }),
                                                                                                    " (mandatory)"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start p-3 bg-white rounded border",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                        children: "3"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("p", {
                                                                                className: "text-emerald-800",
                                                                                children: [
                                                                                    "Attach ",
                                                                                    /*#__PURE__*/ _jsx("strong", {
                                                                                        children: "supporting files"
                                                                                    }),
                                                                                    " if necessary."
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                className: "mt-2 flex items-center text-emerald-700 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx(Upload, {
                                                                                        className: "w-4 h-4 mr-2"
                                                                                    }),
                                                                                    " Optional file upload"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start p-3 bg-white rounded border",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                        children: "4"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "text-emerald-800",
                                                                        children: "Submit the request."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "flex items-start p-3 bg-white rounded border",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold",
                                                                        children: "5"
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-emerald-800",
                                                                        children: [
                                                                            "Your new request will appear in the table with a ",
                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                children: "Pending"
                                                                            }),
                                                                            " status until processed."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "border-l-4 border-orange-500 pl-6",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "text-lg font-semibold text-orange-800 mb-3",
                                                        children: "📈 Tracking and Managing Requests"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "bg-orange-50 p-4 rounded-lg space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-orange-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center space-x-2 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(Search, {
                                                                                className: "w-5 h-5 text-orange-600"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                className: "font-semibold text-orange-800",
                                                                                children: "Search"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-orange-700 text-sm",
                                                                        children: [
                                                                            "Use the ",
                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                children: "Search Bar"
                                                                            }),
                                                                            " to locate specific requests quickly."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-blue-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center space-x-2 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(Eye, {
                                                                                className: "w-5 h-5 text-blue-600"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                className: "font-semibold text-blue-800",
                                                                                children: "Status Monitoring"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("p", {
                                                                        className: "text-blue-700 text-sm",
                                                                        children: [
                                                                            "Check the ",
                                                                            /*#__PURE__*/ _jsx("strong", {
                                                                                children: "Status"
                                                                            }),
                                                                            " column to know if your request is Approved, Pending, In Progress, or Rejected."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bg-white p-4 rounded-lg border-l-4 border-purple-400",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "flex items-center space-x-2 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                className: "w-5 h-5 text-purple-600"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("h5", {
                                                                                className: "font-semibold text-purple-800",
                                                                                children: "Actions Menu"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-purple-50 p-2 rounded text-center",
                                                                                children: "👁️ View Request Details"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-purple-50 p-2 rounded text-center",
                                                                                children: "🗑️ Delete Request"
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "bg-purple-50 p-2 rounded text-center",
                                                                                children: "📥 Download Zip"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 p-6 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center space-x-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(CheckCircle, {
                                                                className: "w-8 h-8 text-green-600"
                                                            }),
                                                            /*#__PURE__*/ _jsx("h4", {
                                                                className: "font-bold text-green-900 text-lg",
                                                                children: "🎉 Weighment Slip Request – Complete!"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-green-800",
                                                        children: "You can now create, track, and manage Weighment Slip requests effortlessly."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "mb-16",
                children: /*#__PURE__*/ _jsxs(Card, {
                    children: [
                        /*#__PURE__*/ _jsx(CardHeader, {
                            children: /*#__PURE__*/ _jsx(CardTitle, {
                                className: "text-2xl",
                                children: "Additional Platform Features"
                            })
                        }),
                        /*#__PURE__*/ _jsx(CardContent, {
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "text-center p-6 bg-blue-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ _jsx(MessageCircle, {
                                                className: "w-12 h-12 mx-auto mb-4 text-blue-600"
                                            }),
                                            /*#__PURE__*/ _jsx("h3", {
                                                className: "font-semibold mb-2",
                                                children: "24/7 Chatbot Support"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-gray-600",
                                                children: "Get instant help with our intelligent chatbot assistant available around the clock."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "text-center p-6 bg-green-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ _jsx(Search, {
                                                className: "w-12 h-12 mx-auto mb-4 text-green-600"
                                            }),
                                            /*#__PURE__*/ _jsx("h3", {
                                                className: "font-semibold mb-2",
                                                children: "Smart CFS Search"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-gray-600",
                                                children: "Find the perfect Container Freight Station based on location, budget, and requirements."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "text-center p-6 bg-purple-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ _jsx(Shield, {
                                                className: "w-12 h-12 mx-auto mb-4 text-purple-600"
                                            }),
                                            /*#__PURE__*/ _jsx("h3", {
                                                className: "font-semibold mb-2",
                                                children: "Secure Authentication"
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-gray-600",
                                                children: "Multiple secure login options including Google OAuth for enhanced security."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("section", {
                className: "text-center",
                children: /*#__PURE__*/ _jsx(Card, {
                    className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                    children: /*#__PURE__*/ _jsxs(CardContent, {
                        className: "p-8",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: "Ready to Get Started?"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-xl mb-6 text-blue-100",
                                children: "Follow these simple steps to start using Link My Logistics today!"
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                size: "lg",
                                variant: "secondary",
                                onClick: ()=>scrollToStep("step1"),
                                className: "mr-4",
                                children: "Start with Step 1"
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                size: "lg",
                                variant: "outline",
                                className: "bg-transparent border-white text-white hover:bg-white hover:text-purple-600",
                                asChild: true,
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "https://linkmylogistics.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Visit Website"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("footer", {
                className: "bg-gray-900 text-white py-8 mt-16",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: /*#__PURE__*/ _jsx("p", {
                        className: "text-gray-400",
                        children: "© 2025 Link My Logistics. All rights reserved. | Need help? Contact our support team."
                    })
                })
            })
        ]
    });
}
