"use client";

import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="inline-flex items-center">
        <Link href="https://github.com/EstebanUCR" className="flex items-center space-x-2">
          <div className="flex inline-block text-3xl items-center">
            <FaGithub className="flex hover:animate-bounce-once" />
          </div>
          <h1 className="inline-block text-2xl font-bold">
            Esteban Iglesias V.
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="hover:animate-bounce-once">
            <Link href="/" className="text-lg">
              Home
            </Link>
          </li>
          <li className="hover:animate-bounce-once">
            <Link href="/about" className="text-lg">
              About me
            </Link>
          </li>
          <li className="hover:animate-bounce-once">
            <Link href="/contact" className="text-lg">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}