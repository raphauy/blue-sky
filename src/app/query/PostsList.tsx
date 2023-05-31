"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";

interface Props {
  search: (search: string) => Promise<PostSearchResult[]>;
}
export default function PostsList({ search }: Props) {
  const [data, setData] = useState<PostSearchResult[]>([]);
  const [searchString, setsearchString] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    search("")
    .then((res) => {
        setData(res)
        setLoading(false)
    });
  }, [search]);

  async function handleClick() {
    setLoading(true)
    setData(await search(searchString));
    setLoading(false)
  }

  
  return (
    <>
      <div className="flex flex-col font-mono text-sm lg:flex">
        <div className="flex">
          <input
            value={searchString}
            onChange={(e) => setsearchString(e.target.value)}
            placeholder="search text here"
            className="p-2 border border-gray-300 rounded-md w-52"
          />
          <button
            onClick={handleClick}
            className="flex items-center justify-center w-32 px-3 py-2 mx-2 text-sm font-extrabold text-white bg-gray-500 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-gray-600"
          >
            Search
          </button>
        </div>
      </div>
      {loading && <LoadingSpinner />}

      {data.length > 0 && !loading && (
        <div className="p-5 mx-auto">
          <span className="flex justify-end w-full pr-2 text-xl font-bold">
            {data.length} results, search: {searchString}
          </span>
          <div className="p-5 bg-white border rounded-md">
            <table className="w-full">
              <thead>
                <tr className="h-12 font-medium text-left text-gray-700 align-middle bg-gray-100 border-b text-muted-foreground">
                  <th className="">User</th>
                  <th className="">Text</th>
                  <th className="">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post) => {
                  const timestamp = post.post.createdAt / 1e6;
                  const date = new Date(timestamp);
                  const year = date.getFullYear();
                  const month = String(date.getMonth() + 1).padStart(2, "0"); // Agregar ceros iniciales si es necesario
                  const day = String(date.getDate()).padStart(2, "0");

                  const formattedDate = `${year}-${month}-${day}`;

                  return (
                    <tr
                      key={post.tid}
                      className="h-12 px-4 font-medium text-left align-middle border-b text-muted-foreground hover:bg-slate-100"
                    >
                      <td className="text-gray-600">{post.user.handle}</td>
                      <td className="text-gray-600">{post.post.text}</td>
                      <td className="text-gray-600 whitespace-nowrap">
                        {formattedDate}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
