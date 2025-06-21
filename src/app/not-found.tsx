"use client";
import Link from "next/link";
import { FC } from "react";

interface NotfoundProps {
  className?: string;
}

const NotFoundPage: FC<NotfoundProps> = ({ className }) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 ${className || ""}`}
    >
      <div className="bg-white/90 shadow-2xl rounded-2xl p-10 flex flex-col items-center border border-purple-200 animate-fade-in">
        <svg
          className="w-20 h-20 text-pink-500 mb-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
        </svg>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-3 drop-shadow-lg">
          404 - Page Not Found
        </h1>
        <p className="text-gray-700 mb-8 text-center max-w-md text-lg">
          Oops! The page you’re looking for doesn’t exist or has been moved.<br />
          Let’s get you back on track!
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-pink-500 transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;