"use client";
import { motion } from "framer-motion";
import { createContext, useState, useContext, useEffect } from "react";

// Create Toast Context
const ToastContext = createContext();

// Toast Provider Component
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Function to show toast
  const showToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Remove toast after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

// Hook to use toast
export const useToast = () => useContext(ToastContext);

// Toast Container Component
const ToastContainer = ({ toasts }) => {
  return (
    <div
   
    className="fixed top-5 left-1/2 transform -translate-x-1/2 space-y-3 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
};

// Individual Toast Component
// Individual Toast Component
const Toast = ({ message, type }) => {
  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
      className={`flex items-center space-x-3 text-white text-xs lg:text-base px-4 py-2 rounded-md shadow-md ${bgColor}`}
    >
      {type === "success" ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 flex-shrink-0"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clipRule="evenodd" 
          />
        </svg>
      ) : type === "error" ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 flex-shrink-0"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
            clipRule="evenodd" 
          />
        </svg>
      ) : null}
      
      <span>{message}</span>
    </motion.div>
  );
};
