import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-center p-2 border-b border-gray-300">
      <Link href="/">
        <button className="flex items-center justify-center w-32 px-3 py-2 mx-2 text-sm font-extrabold text-white bg-gray-400 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-gray-400">
          Home
        </button>
      </Link>
      <Link href="/static">
        <button className="flex items-center justify-center w-32 px-3 py-2 mx-2 text-sm font-extrabold text-white bg-gray-400 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-gray-400">
          Static
        </button>
      </Link>
      <Link href="/query">
        <button className="flex items-center justify-center w-32 px-3 py-2 mx-2 text-sm font-extrabold text-white bg-gray-400 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-gray-400">
          Query
        </button>
      </Link>
    </div>
  );
}
