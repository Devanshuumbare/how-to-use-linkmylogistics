import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { googleSearchImage } from "../placeholders";
export default function SearchPage() {
    return /*#__PURE__*/ _jsx("div", {
        className: "w-full h-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "w-full h-full relative",
            children: [
                /*#__PURE__*/ _jsx("img", {
                    src: googleSearchImage,
                    alt: "Google Search for linkmylogistics.com",
                    className: "w-full h-full object-contain bg-gray-100"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg",
                    children: "Step 1"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg",
                    children: /*#__PURE__*/ _jsx("p", {
                        className: "text-sm font-medium",
                        children: '🔍 Search for "linkmylogistics.com" on Google to find our platform'
                    })
                })
            ]
        })
    });
}
