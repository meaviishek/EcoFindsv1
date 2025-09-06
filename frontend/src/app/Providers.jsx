'use client';

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastProvider } from "@/context/toastContext.jsx";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ToastProvider>
        {children}
      </ToastProvider>
    </Provider>
  );
}