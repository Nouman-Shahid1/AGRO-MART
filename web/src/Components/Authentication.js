import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { setToken } from "../reducers/Auth/authSlice";

const Authentication = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { token, role } = useSelector((state) => state.auth);

  const roleBasedRoutes = {
    admin: ["/admin"],
    seller: ["/seller-profile"],
    buyer: ["/buyer"],
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);

      const savedToken = localStorage.getItem("access_token");
      const savedRole = localStorage.getItem("user_role");

      if (savedToken) {
        dispatch(setToken(savedToken));
      }

      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isMounted || isLoading) return;

    const isProtectedRoute = Object.values(roleBasedRoutes).flat().includes(pathname);

    if (isProtectedRoute) {
      if (token && role) {
        const normalizedRole = role.toLowerCase();
        const allowedRoutes = roleBasedRoutes[normalizedRole] || [];

        if (!allowedRoutes.includes(pathname)) {
          router.push(allowedRoutes[0]);
        }
      } else if (!token) {
        router.push(`/login?redirect=${pathname}`);
      }
    }
  }, [token, role, pathname, isMounted, isLoading, router]);

  if (!isMounted || isLoading) {
    return (
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1296882154/vector/green-abstract-layers-background.jpg?s=612x612&w=0&k=20&c=GdVbshVWQXddCpjLdjMTpHvDK2s1C4p7BfhGtpqObEY=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-lg">
          <div className="relative flex items-center justify-center h-32 w-32 mb-6">
            <div className="absolute h-full w-full rounded-full border-8 border-green-400 border-t-transparent animate-spin-slow"></div>
            <svg
              className="h-16 w-16 text-green-300 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c-4.418 0-8-3.582-8-8 0-2.837 1.97-6.075 4-8.586C9.642 2.034 10.79 1 12 1s2.358 1.034 4 3.414C18.03 6.925 20 10.163 20 13c0 4.418-3.582-8-8-8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-green-200">
            Authenticating AgroMart...
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Connecting you to greener pastures!
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Authentication;
