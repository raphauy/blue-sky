import React from "react";
import PostsList from "./PostsList";
import { searchPosts } from "@/utils.ts/search";

export default function QueryPage() {

  async function search(search: string) {
    "use server";
    console.log("search: " + search);
    if (search === "") return [];
    try {
      // @ts-ignore
      const postResults: PostSearchResult[] = await searchPosts(search);
      return postResults;
    } catch (error) {
      console.log("Got some error:", error);
      return [];
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-10">
        <PostsList search={search} />
    </main>

  )
}
