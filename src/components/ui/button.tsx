import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
                                           variant = "outline",
                                           size = "md",
                                           className = "",
                                           children,
                                           ...props
                                       }) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border border-gray-600 text-gray-600 hover:bg-green-500",
    };

    const sizeClasses = {
        sm: "text-sm px-3 py-1",
        md: "text-md px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
