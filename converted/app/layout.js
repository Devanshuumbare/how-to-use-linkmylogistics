import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import "../styles/globals.css";
export const metadata = {
    title: "Software Tutorial Page",
    description: "How to Use Link My Logistics - step-by-step guide"
};
export default function RootLayout({ children }) {
    return /*#__PURE__*/ _jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ _jsx("body", {
            children: children
        })
    });
}
