"use client"

import { searchPosts } from "@/utils.ts/search";
import { useState } from "react";

export default function Home() {  
  const [data, setData] = useState<PostSearchResult[]>()
  const [count, setCount] = useState(0)

  async function fetchSearch(search: string) {
    
    console.log("search: " + search)

    try {
      // @ts-ignore
      const postResults: PostSearchResult[] = await searchPosts(search);
      setData(postResults)
      setCount(postResults.length)
    } catch (error) {
      console.log('Got some error:', error);
    }

  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Evita el envío automático del formulario
    const searchInput = event.currentTarget.search.value;
    fetchSearch(searchInput);
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="items-center justify-between font-mono text-sm lg:flex">
        <form className='flex' onSubmit={handleSubmit}>
          <input id="search" name="search" placeholder="search text here" className="p-2 border border-gray-300 rounded-md w-52"/>
          <button type="submit" className="flex items-center justify-center w-32 px-3 py-2 mx-2 text-sm font-extrabold text-white bg-gray-500 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-gray-600">Search</button>
        </form>
      </div>

      <div className="">
        {/** fetchSearch("linux") */}
      </div>
      {data &&

        <div className="p-5 mx-auto">
            <span className="flex justify-end w-full pr-2 text-xl font-bold">{count} results</span>
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
                {
                  data.map((post) => {
                    const timestamp = post.post.createdAt / 1e6
                    const date = new Date(timestamp);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0'); // Agregar ceros iniciales si es necesario
                    const day = String(date.getDate()).padStart(2, '0');

                    const formattedDate = `${year}-${month}-${day}`;

                    return (
                      <tr key={post.tid}  className="h-12 px-4 font-medium text-left align-middle border-b text-muted-foreground hover:bg-slate-100">
                        <td className="text-gray-600">{post.user.handle}</td>
                        <td className="text-gray-600">{post.post.text}</td>
                        <td className="text-gray-600 whitespace-nowrap">{formattedDate}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>            
          </div>
        }


      <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p></p>
      </div>
    </main>
  )
}
