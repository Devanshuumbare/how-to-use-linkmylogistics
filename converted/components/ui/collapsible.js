"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
function Collapsible({ ...props }) {
    return /*#__PURE__*/ _jsx(CollapsiblePrimitive.Root, {
        "data-slot": "collapsible",
        ...props
    });
}
function CollapsibleTrigger({ ...props }) {
    return /*#__PURE__*/ _jsx(CollapsiblePrimitive.CollapsibleTrigger, {
        "data-slot": "collapsible-trigger",
        ...props
    });
}
function CollapsibleContent({ ...props }) {
    return /*#__PURE__*/ _jsx(CollapsiblePrimitive.CollapsibleContent, {
        "data-slot": "collapsible-content",
        ...props
    });
}
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
