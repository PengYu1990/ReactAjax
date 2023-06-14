import { useState } from "react";
import "./App.css";
import usePosts, { PostQuery } from "./hooks/usePosts";
import React from "react";
import { useUpdateEffect } from "react-use";

function App() {
  const [postQuery, setPostQuery] = useState<PostQuery>({
    size: 15,
  } as PostQuery);
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePosts(postQuery);

  useUpdateEffect(() => {
    // Add to the bottom event listener
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      // Fetch next page
      if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      {data?.pages?.map((page, key) => (
        <React.Fragment key={key}>
          {page?.data?.map((post, key) => (
            <h2 key={post.id}>{post.title}</h2>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
