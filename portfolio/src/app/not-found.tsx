"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-[#222831] min-h-screen space-x-3 flex items-center justify-center">
        <div className="flex flex-col border-r-1 p-3 items-center space-x-4">
          <h1 className="text-6xl font-bold text-white mb-4">404-ERROR</h1>
          <div>
            <Link
              href="/"
              className="bg-[#DFD0B8] text-black px-4 py-2 rounded hover:bg-[#948979] transition-colors inline-block"
            >
              Go home
              <FaHome className="inline-block ml-2" />
            </Link>
          </div>
        </div>
        <div className="p-3 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">PAGE NOT FOUND</h2>
          <p className="text-white">{error?.message ?? "An error occurred while loading this page."}</p>
        </div>
    </div>
  );
}
